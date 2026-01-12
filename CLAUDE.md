# Aurora BACK Project - Instrucciones para Claude Code

## 🎯 CONTEXTO DEL FRAMEWORK

Aurora es un meta-framework que genera aplicaciones NestJS (back) y Angular (front)
desde definiciones YAML. Implementa:
- Arquitectura Hexagonal (Puertos y Adaptadores)
- CQRS (Command Query Responsibility Segregation)
- Criteria Pattern para consultas complejas
- Sistema de hash para tracking de cambios

## ⛔ REGLAS ABSOLUTAS

### NUNCA modificar directamente:
1. Ficheros YAML de definición (`*.aurora.yaml`) - Son la fuente de verdad
2. Entidades en `domain/` - Se regeneran desde YAML
3. Value Objects generados - Se regeneran desde YAML
4. Controladores REST en `@api/` - Se regeneran desde YAML
5. Resolvers GraphQL en `@api/` - Se regeneran desde YAML
6. Interfaces TypeScript generadas desde YAML

### SÍ puedo modificar:
1. **Handlers CQRS** - SOLO el cuerpo del método `execute()`
2. **Servicios custom** - Crearlos en carpetas designadas
3. **Tests** - Siempre puedo crear/modificar tests
4. **Ficheros de configuración** - .env, docker-compose, etc.

## 📁 BACK STRUCTURE (NestJS)
```
src/
├── @api/[package]/
│   ├── [module]/
│   │   ├── controllers/                      # REST Controllers, entry point of the REST API - GENERATED
│   │   ├── dto/                              # DTOs used by controllers and documentation generated in OpenAPI format through decorators - GENERATED
│   │   ├── graphql/                          # Definition of types, inputs, queries, and mutations for the GraphQL API - GENERATED
│   │   ├── handlers/                         # Service where both the REST API and GraphQL converge, containing the logic to be applied to the case covered by the API - GENERATED
│   │   ├── resolvers/                        # Graphql Resolvers, entry point of the GraphQL API - GENERATED
│   │   ├── seeder/                           # Service to populate the generated table with mock data for e2e testing - GENERATED
│   │   └── index.ts                          # Exporting and grouping controllers, handlers, resolvers, and additional services - GENERATED
│   ├── [module].module.ts                    # Declaration of controllers, handlers, resolvers, and additional services for NestJs Framework - GENERATED
│   └── [module].seeder.ts                    # Service that defines the package name and permissions, if required, when the application starts up - GENERATED
│
├── @app/[package]/
│   ├── [module]/
│   │   ├── application/
│   │   │   ├── count/
│   │   │   ├── create/
│   │   │   ├── delete/
│   │   │   ├── events/
│   │   │   ├── find/
│   │   │   ├── get/
│   │   │   ├── max/
│   │   │   ├── min/
│   │   │   ├── paginate/
│   │   │   ├── raw-sql/
│   │   │   ├── sagas/
│   │   │   ├── sum/
│   │   │   ├── update/
│   │   │   └── upsert/
│   │   ├── domain/
│   │   ├── infrastructure/
│   │
│   ├── [package].seed.ts
│   ├── [package].types.ts
│   ├── index.ts
│   └── public-api.ts
│
├── @core/[package]/[module]/         # Núcleo del dominio
│   ├── application/
│   │   ├── commands/                         # Command Handlers
│   │   │   └── create-[entity].command-handler.ts  # ✅ EDITABLE: método execute()
│   │   ├── queries/                          # Query Handlers
│   │   │   └── find-[entity].query-handler.ts      # ✅ EDITABLE: método execute()
│   │   ├── services/                         # Application Services - ✅ CREAR AQUÍ
│   │   └── events/                           # Domain Events - GENERADO
│   ├── domain/
│   │   ├── [entity].aggregate.ts             # Aggregate Root - GENERADO
│   │   ├── [entity].repository.ts            # Repository Interface - GENERADO
│   │   └── value-objects/                    # Value Objects - GENERADO
│   └── infrastructure/
│       ├── sequelize/                        # ORM Implementation - GENERADO
│       └── mock/                             # Mock Repository - GENERADO
└── @shared/                                  # Shared Kernel - GENERADO
```

## 🔧 COMANDOS AURORA CLI
```bash
# Create clean project
aurora new back my-app

# Generate module from YAML
aurora load back module -n=library/book

# Regenerate with changes (respects hash of modified files)
# -f force overwrite if file exists
# -t generate the tests
aurora load back module -n=library/book -ft

# Add preconfigured packages
aurora add back auditing
aurora add back oauth
aurora add front settings
```

## 📋 YAML REFERENCE (Schema v1.2)

Tipos de propiedades disponibles:
- Básicos: `id`, `varchar`, `text`, `int`, `bigint`, `smallint`, `float`, `decimal`, `boolean`, `date`, `timestamp`
- Especiales: `enum`, `json`, `jsonb`, `password`, `blob`
- Relaciones: `relationship`, `manyToMany`

Ejemplo de relación many-to-one:
```yaml
- name: authorId
  type: id
  relationship:
    type: many-to-one
    aggregateName: LibraryAuthor
    modulePath: library/author
    key: id
    field: author
```

## 🎯 CRITERIOS PARA CLAUDE CODE

### Cuando el usuario pida nueva funcionalidad:

1. **¿Es estructural (nuevo campo, nueva entidad)?**
   → Responder: "Esto requiere modificar el YAML y ejecutar Aurora CLI"
   → Mostrar cómo debería verse el YAML
   → NO generar código manualmente

2. **¿Es lógica de negocio?**
   → Implementar en el handler correspondiente
   → Crear servicios auxiliares en carpeta `services/`

3. **¿Es UI custom?**
   → Crear componentes en carpeta `custom/`
   → Extender, no modificar componentes generados

### Patrón de implementación de lógica custom:
```typescript
// En: @core/library/book/application/commands/create-book.command-handler.ts

@CommandHandler(CreateBookCommand)
export class CreateBookCommandHandler implements ICommandHandler<CreateBookCommand> {
    constructor(
        private readonly repository: BookRepository,
        private readonly isbnValidator: IsbnValidatorService,  // Servicio custom
    ) {}

    async execute(command: CreateBookCommand): Promise<void> {
        // ✅ ZONA EDITABLE - Añadir lógica aquí
        
        // Validación custom
        await this.isbnValidator.validate(command.payload.isbn);
        
        // Lógica de negocio específica
        if (command.payload.publishDate > new Date()) {
            throw new BookPublishDateException();
        }
        
        // El resto es estándar Aurora
        const book = Book.register(command.payload);
        await this.repository.create(book);
    }
}
```

## 🔍 CRITERIA PATTERN (QueryStatement)

Aurora usa QueryStatement para consultas complejas:
```typescript
const queryStatement: QueryStatement = {
    where: {
        // Operadores disponibles
        title: { contains: 'TypeScript' },      // LIKE %value%
        price: { gte: 10, lte: 50 },            // >= 10 AND <= 50
        status: { in: ['PUBLISHED', 'DRAFT'] }, // IN (...)
        authorId: { eq: 'uuid-here' },          // =
        deletedAt: { isNull: true },            // IS NULL
    },
    include: {
        author: true,           // Eager loading de relaciones
        categories: true,
    },
    order: [
        { createdAt: 'desc' },
    ],
    offset: 0,
    limit: 25,
};
```

## ⚠️ ANTES DE CUALQUIER MODIFICACIÓN

1. Verificar si el fichero es generado o custom
2. Si es generado → buscar la zona editable o crear fichero custom
3. Si dudo → preguntar al usuario
4. NUNCA asumir que puedo modificar estructura