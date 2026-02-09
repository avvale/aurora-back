# HUB

## Purpose

Registro centralizado de aplicaciones construidas con Aurora Lite. El HUB proporciona visibilidad, control y acceso SSO a todas las apps lite desplegadas en el ecosistema. Funciona como un "app launcher" donde los usuarios autenticados en Aurora pueden saltar a cualquier app lite registrada sin volver a autenticarse.

**Casos de uso principales:**
- Registro y catalogo de apps lite en el ecosistema
- SSO (Single Sign-On) entre Aurora y apps lite via OAuth 2.0 Authorization Code Flow (RS256 + JWKS)
- Aprovisionamiento automatizado de infraestructura via CLI (DNS + Plesk + DB)
- Dashboard centralizado para acceder a todas las apps

## Aurora Lite Architecture

Aurora Lite es una version simplificada del meta-framework Aurora, pensada para aplicaciones monoliticas de baja/media complejidad donde la prioridad es velocidad de desarrollo y simplicidad. Optimizada para vibe coding con LLMs.

### Que se ELIMINA respecto a Aurora Full

| Componente | Aurora Full | Aurora Lite | Razon |
|---|---|---|---|
| CQRS Bus | CommandBus, QueryBus, Command/Query classes | Eliminado | Mayor fuente de complejidad. Controller/Resolver delegan a Handlers directamente |
| Value Objects | Wrappers tipados para cada campo (CommonCountryId, etc.) | Eliminado | Boilerplate excesivo para apps simples. Se usan tipos primitivos |
| Domain Events | EventBus, EventHandlers, Sagas | Eliminado | Sin CQRS los eventos pierden sentido. Si se necesitan, usar Aurora Full |
| Capas de aplicacion | @api -> Handler -> CommandBus -> CommandHandler -> Service -> Repository | Controller/Resolver -> Handler -> Repository | 3 capas en vez de 6 |

### Que se MANTIENE

| Componente | Por que |
|---|---|
| Generacion desde YAML | Es el diferencial de Aurora. YAML -> app funcional con estructura limpia |
| Repository pattern | Abstraccion minima sobre Sequelize. Permite testear y cambiar ORM |
| DTOs con class-validator | Validacion de input en controllers. Minimo indispensable para seguridad |
| Estructura modular | Cada modulo autocontenido con handlers, controllers, resolvers, repository, model, DTOs |
| Guards / Interceptors | OAuth, tenant, auditing siguen siendo necesarios como decorators |
| Criteria Pattern (opcional) | Para apps que necesiten filtros complejos sin escribir queries raw |

### Estructura de un modulo Aurora Lite

```
src/
  modules/
    {module}/
      {module}.module.ts                    # NestJS module definition
      {module}.model.ts                     # Modelo Sequelize + GraphQL ObjectType
      {module}.repository.ts                # Abstraccion sobre Sequelize
      handlers/
        find-all-{modules}.handler.ts       # 1 handler por operacion (logica de negocio)
        find-{module}-by-id.handler.ts
        create-{module}.handler.ts
        update-{module}-by-id.handler.ts
        delete-{module}-by-id.handler.ts
      controllers/
        find-all-{modules}.controller.ts    # 1 controller por endpoint REST
        find-{module}-by-id.controller.ts
        create-{module}.controller.ts
        update-{module}-by-id.controller.ts
        delete-{module}-by-id.controller.ts
      resolvers/
        find-all-{modules}.resolver.ts      # 1 resolver por operacion GraphQL
        find-{module}-by-id.resolver.ts
        create-{module}.resolver.ts
        update-{module}-by-id.resolver.ts
        delete-{module}-by-id.resolver.ts
      dto/
        create-{module}.dto.ts              # DTO de creacion con validacion
        update-{module}.dto.ts              # DTO de actualizacion
```

**~18 archivos por modulo** — mas que la version monolitica pero cada fichero tiene una sola responsabilidad. Comparable a Aurora Full (~30+) pero sin CQRS bus, Value Objects ni Domain Events.

### Flujo de datos Aurora Lite

```
REST Request ──→ Controller ──┐
                               ├──→ Handler (business logic) ──→ Repository (Sequelize) ──→ PostgreSQL
GraphQL      ──→ Resolver   ──┘
```

**Handler** = punto de convergencia. Controller y Resolver son wrappers finos que delegan al Handler. El Handler usa el Repository para acceder a datos.

### Extensibilidad sin eventos

Aurora Lite NO incluye un sistema de eventos de dominio. La extensibilidad se logra con mecanismos nativos de NestJS:

| Mecanismo | Uso |
|---|---|
| Interceptors | Before/after de cualquier accion del controller |
| Guards | Autenticacion, permisos, validaciones de acceso |
| Pipes | Transformacion y validacion de input |
| Middleware | Procesamiento de request/response |

Si una app necesita pub/sub ligero, puede agregar `@nestjs/event-emitter` manualmente. Si necesita eventos de dominio, sagas, o CQRS, deberia usar Aurora Full.

## SSO Architecture (HUB <-> Aurora Lite Apps)

### Por que Authorization Code Flow

El JWT nunca debe viajar en query params (URLs). Queda expuesto en historial del navegador, logs del servidor y headers Referer. Ademas, el flujo por redirect con token en URL se rompe con apps en dominios diferentes por restricciones de third-party cookies y CORS.

**OAuth 2.0 Authorization Code Flow** resuelve todo esto:
- El token viaja server-to-server (POST), nunca en la URL
- Funciona entre cualquier dominio (subdominios o dominios completamente distintos)
- Es el estandar de la industria (Auth0, Keycloak, Google, etc.)
- Aurora ya tiene el bounded context `o-auth` con la infraestructura necesaria

### Modelo de confianza

```
                    AURORA (IAM + OAuth Server)
                    +-------------------------+
                    | Authorization Server    |
                    | - /oauth/authorize      |
                    | - /oauth/token          |
                    | - /.well-known/jwks.json|
                    +------------+------------+
                                 |
                    Signs JWT with RS256 private key
                    Publishes public key via JWKS
                                 |
            +--------------------+--------------------+
            |                    |                    |
            v                    v                    v
      +-----------+        +-----------+        +-----------+
      |  HUB App  |        | Lite App  |        | Lite App  |
      |  (Aurora) |        |    #1     |        |    #2     |
      +-----------+        +-----------+        +-----------+
      hub.aurora.com       facturacion.com      inventory.otro.com

      Cada app es un OAuth Client registrado
      Todas validan JWT contra el mismo JWKS endpoint
```

### Flujo de autenticacion (Authorization Code Flow)

```
1. Usuario en Aurora HUB hace click en "Abrir Facturacion"

2. HUB redirige al Authorization Server de Aurora:
   GET hub.aurora.com/oauth/authorize
       ?response_type=code
       &client_id=facturacion-app-client-id
       &redirect_uri=https://facturacion.com/auth/callback
       &state=random-csrf-token
       &scope=openid profile

3. Authorization Server detecta sesion activa del usuario
   (cookie httpOnly en hub.aurora.com)
   - Si tiene sesion → genera authorization code
   - Si NO tiene sesion → muestra login, luego genera code

4. Authorization Server redirige a la lite app:
   302 https://facturacion.com/auth/callback
       ?code=abc123xyz
       &state=random-csrf-token

5. Lite App (BACKEND, server-to-server) intercambia code por tokens:
   POST hub.aurora.com/oauth/token
   {
     grant_type: "authorization_code",
     code: "abc123xyz",
     client_id: "facturacion-app-client-id",
     client_secret: "hashed-secret",
     redirect_uri: "https://facturacion.com/auth/callback"
   }

6. Authorization Server responde con tokens:
   {
     access_token: "eyJhbG...",     // JWT firmado con RS256
     refresh_token: "dGhpcyBp...",  // Para renovar sin login
     expires_in: 3600,
     token_type: "Bearer"
   }

7. Lite App almacena tokens:
   - access_token → localStorage del frontend (via response al browser)
   - refresh_token → httpOnly cookie en el dominio de la lite app

8. Usuario autenticado en la lite app sin haber ingresado credenciales
```

### Refresh de token

Cuando el access_token expira en una lite app:

```
Opcion A: Refresh silencioso (server-side, preferido)

1. Frontend de la lite app recibe 401 en una API call
2. Frontend hace POST al backend de la lite app:
   POST facturacion.com/auth/refresh
   (el refresh_token viaja en httpOnly cookie automaticamente)

3. Backend de la lite app hace POST server-to-server:
   POST hub.aurora.com/oauth/token
   {
     grant_type: "refresh_token",
     refresh_token: "dGhpcyBp...",
     client_id: "facturacion-app-client-id",
     client_secret: "hashed-secret"
   }

4. Authorization Server responde con nuevo access_token
5. Backend retorna nuevo access_token al frontend
6. Transparente para el usuario


Opcion B: Re-authorization (fallback si refresh_token expiro)

1. Lite app detecta que el refresh_token tambien expiro
2. Redirige al Authorization Server (paso 2 del flujo principal)
3. Si el usuario tiene sesion activa en el HUB → code automatico
4. Si no → login, luego code
5. Flujo completo se repite
```

### Consideraciones cross-domain

| Aspecto | Mismo dominio (subdominios) | Dominios diferentes | Solucion |
|---|---|---|---|
| Authorization Code Flow | Funciona | Funciona | Estandar, no depende del dominio |
| Token exchange | Server-to-server POST | Server-to-server POST | Sin restriccion CORS (es backend) |
| Refresh token | httpOnly cookie en `.dominio.com` | httpOnly cookie en el dominio de la lite app | Cada app maneja su propio refresh |
| CORS en APIs | No necesario | No necesario | El exchange es server-to-server |
| Third-party cookies | No aplica | No aplica | No se usan cookies cross-domain |
| Seguridad del code | Corta vida (30-60 seg), un solo uso | Igual | PKCE opcional para extra seguridad |

### PKCE (Proof Key for Code Exchange) — Recomendado

Para mayor seguridad, especialmente en SPAs, agregar PKCE al flujo:

```
1. Lite app genera code_verifier (random string) y code_challenge (SHA256)
2. Envia code_challenge en /oauth/authorize
3. Envia code_verifier en /oauth/token
4. Authorization Server valida que code_verifier produce code_challenge
5. Previene interceptacion del authorization code
```

## CLI Provisioning Workflow

```
$ aurora deploy --name facturacion --bc billing

   1. DNS API
      - Crea registro A/CNAME: facturacion.dominio.com
      - Apunta al servidor de hosting

   2. Plesk API
      - Crea suscripcion de hosting
      - Configura dominio y SSL (Let's Encrypt)
      - Retorna subscriptionId

   3. PostgreSQL
      - Crea database: aurora_lite_facturacion
      - Crea usuario con permisos limitados
      - Retorna connection string

   4. IAM API (Aurora)
      - Registra OAuth client para la app
      - Genera clientId
      - Retorna oauthClientId

   5. HUB API (Aurora)
      - Registra app en el HUB
      - Almacena: code, name, url, subdomain, oauthClientId,
        pleskSubscriptionId, databaseName, provisionedAt

   6. .env Generation
      - Genera .env para la lite app con:

        # OAuth — solo ISSUER_URL, la app descubre el resto via OIDC Discovery
        OAUTH_ISSUER_URL=https://hub.aurora.com
        OAUTH_CLIENT_ID=facturacion-app-client-id
        OAUTH_CLIENT_SECRET=generated-secret
        OAUTH_REDIRECT_URI=https://facturacion.com/auth/callback

        # Database
        DATABASE_URL=postgresql://user:pass@host:5432/aurora_lite_facturacion
```

### OpenID Connect Discovery

Las lite apps NO necesitan conocer URLs individuales de endpoints OAuth. Solo necesitan `OAUTH_ISSUER_URL`. Al arrancar, la app hace:

```
GET {OAUTH_ISSUER_URL}/.well-known/openid-configuration

Response:
{
  "issuer": "https://hub.aurora.com",
  "authorization_endpoint": "https://hub.aurora.com/oauth/authorize",
  "token_endpoint": "https://hub.aurora.com/oauth/token",
  "jwks_uri": "https://hub.aurora.com/.well-known/jwks.json",
  "grant_types_supported": ["authorization_code", "refresh_token"],
  "response_types_supported": ["code"],
  "token_endpoint_auth_methods_supported": ["client_secret_post"],
  "scopes_supported": ["openid", "profile", "email"]
}
```

La app cachea esta configuracion al iniciar. Todos los endpoints se descubren automaticamente:
- `authorization_endpoint` → donde redirigir al usuario para login
- `token_endpoint` → donde intercambiar code por tokens Y donde renovar con refresh_token
- `jwks_uri` → donde obtener las claves publicas para validar JWT

**Ventaja**: si se cambia la estructura de URLs del Authorization Server, las lite apps no necesitan actualizar su .env. Solo `OAUTH_ISSUER_URL` es inmutable.

## Modules

| Module | Aggregate | Responsibility |
|---|---|---|
| `app` | HubApp | Registro de aplicaciones Aurora Lite. Almacena metadatos (code, name, url, subdomain), referencias de infraestructura (pleskSubscriptionId, databaseName), OAuth client reference (oauthClientId), y estado de provisioning. |

## Entity Relationships

```
                AURORA IAM
                +----------+
                | OAuth    |
                | Clients  |
                +----+-----+
                     |
              oauthClientId (reference, no FK constraint)
                     |
                     v
              +------+-------+
              |   HUB APP    |
              | (Registry)   |
              +--------------+
              | code (unique)|
              | subdomain    |-----------> DNS (external)
              | pleskSubId   |-----------> Plesk (external)
              | databaseName |-----------> PostgreSQL (external)
              +--------------+
```

## Key Business Rules

### App Registration
- **Unicidad de code**: Cada app tiene un `code` unico, inmutable despues del provisioning
- **Unicidad de subdomain**: No pueden existir dos apps con el mismo subdominio
- **oauthClientId unico**: Relacion 1:1 entre app y OAuth client
- **Soft delete**: `deletedAt` preserva historial. Deprovisionar infra ANTES de soft delete

### Provisioning Lifecycle
- **Registro previo**: Una app puede registrarse en HUB antes de provisionar (provisionedAt = NULL)
- **Provisioning completo**: `provisionedAt` se setea cuando DNS + Plesk + DB estan listos
- **Desactivacion**: `isActive = false` oculta la app del dashboard y bloquea SSO redirects
- **Deprovisioning**: Eliminar infra (DNS, Plesk, DB) es operacion separada del soft delete

### SSO Rules
- **Sin oauthClientId, sin SSO**: Apps sin OAuth client registrado no participan del flujo de autorizacion
- **Apps inactivas**: El Authorization Server rechaza requests con `client_id` de apps con `isActive = false`
- **Token validation**: Las lite apps DEBEN validar JWT via JWKS (RS256), nunca con shared secret (HS256)
- **Redirect URI whitelist**: Cada OAuth client tiene redirect_uris permitidas. El Authorization Server rechaza redirect_uri no registradas
- **Authorization code**: Vida maxima 30-60 segundos, un solo uso, vinculado al client_id
- **Refresh token rotation**: Cada uso del refresh_token emite uno nuevo e invalida el anterior
- **PKCE recomendado**: Para SPAs y apps sin backend confidencial

## Dependencies

### Uses (imports from)
- **iam** (reference only): OAuth client registration para SSO. Sin FK constraint para evitar acoplamiento cross-bounded-context.

### Used by (consumers)
- **Aurora CLI**: Provisioning automatizado (DNS + Plesk + DB + registro)
- **Aurora Frontend**: Dashboard HUB que muestra las apps registradas
- **Aurora Lite Apps**: Handshake endpoint para SSO redirect

## Technical Notes

### Aggregate Roots
- `HubApp` - Unico aggregate, simple CRUD con logica de provisioning

### Indices
| Campo | Tipo | Proposito |
|---|---|---|
| code | unique | Busqueda por codigo, referencia CLI |
| subdomain | unique | Validacion unicidad DNS |
| oauthClientId | unique | Relacion 1:1 con OAuth client |

### Security
- OAuth habilitado (`hasOAuth: true`)
- Auditing habilitado (`hasAuditing: true`)
- Sin multi-tenancy (`hasTenant: false`) — HUB es central

### Excluded Operations
- `count`, `getRaw`, `max`, `min`, `rawSql`, `sum`, `updateAndIncrement`

## Future Considerations

1. **App Health Checks**: Monitoreo de disponibilidad de las apps lite desde el HUB
2. **App Versioning**: Tracking de versiones deployadas, changelog
3. **User-App Access Control**: Modulo `app-access` para controlar que usuarios ven que apps
4. **App Categories/Tags**: Organizacion del catalogo por categorias
5. **Usage Analytics**: Metricas de uso por app (logins, requests)
6. **Multi-environment**: Soporte para staging/production por app
7. **App Templates**: Templates predefinidos de Aurora Lite para scaffolding rapido
