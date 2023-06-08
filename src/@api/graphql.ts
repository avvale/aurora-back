
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum AuditingHttpCommunicationEvent {
    REQUEST_FULFILLED = "REQUEST_FULFILLED",
    REQUEST_REJECTED = "REQUEST_REJECTED",
    RESPONSE_FULFILLED = "RESPONSE_FULFILLED",
    RESPONSE_REJECTED = "RESPONSE_REJECTED"
}

export enum AuditingSideEffectEvent {
    CREATED = "CREATED",
    BULK_CREATED = "BULK_CREATED",
    UPDATED = "UPDATED",
    BULK_UPDATED = "BULK_UPDATED",
    DELETED = "DELETED",
    BULK_DELETED = "BULK_DELETED",
    RESTORED = "RESTORED",
    BULK_RESTORED = "BULK_RESTORED",
    UPSERTED = "UPSERTED"
}

export enum AuditingSideEffectMethod {
    GET = "GET",
    POST = "POST",
    UPDATE = "UPDATE",
    DELETE = "DELETE"
}

export enum CommonCountryMapType {
    ROADMAP = "ROADMAP",
    SATELLITE = "SATELLITE",
    HYBRID = "HYBRID",
    TERRAIN = "TERRAIN"
}

export enum CommonLangDir {
    LTR = "LTR",
    RTL = "RTL"
}

export enum IamAccountType {
    USER = "USER",
    SERVICE = "SERVICE"
}

export enum OAuthClientGrantType {
    AUTHORIZATION_CODE = "AUTHORIZATION_CODE",
    CLIENT_CREDENTIALS = "CLIENT_CREDENTIALS",
    PASSWORD = "PASSWORD",
    REFRESH_TOKEN = "REFRESH_TOKEN"
}

export enum QueueManagerJobRegistryState {
    COMPLETED = "COMPLETED",
    WAITING = "WAITING",
    ACTIVE = "ACTIVE",
    DELAYED = "DELAYED",
    FAILED = "FAILED",
    PAUSED = "PAUSED"
}

export enum QueueManagerJobState {
    COMPLETED = "COMPLETED",
    WAITING = "WAITING",
    ACTIVE = "ACTIVE",
    DELAYED = "DELAYED",
    FAILED = "FAILED",
    PAUSED = "PAUSED"
}

export enum CoreLangDir {
    LTR = "LTR",
    RTL = "RTL"
}

export interface AuditingCreateHttpCommunicationInput {
    id: string;
    tags?: Nullable<JSON>;
    event: AuditingHttpCommunicationEvent;
    status?: Nullable<GraphQLInt>;
    method: GraphQLString;
    url: GraphQLString;
    httpRequest?: Nullable<JSON>;
    httpRequestRejected?: Nullable<JSON>;
    httpResponse?: Nullable<JSON>;
    httpResponseRejected?: Nullable<JSON>;
    isReprocessing: GraphQLBoolean;
    reprocessingHttpCommunicationId?: Nullable<string>;
}

export interface AuditingUpdateHttpCommunicationByIdInput {
    id: string;
    tags?: Nullable<JSON>;
    event?: Nullable<AuditingHttpCommunicationEvent>;
    status?: Nullable<GraphQLInt>;
    method?: Nullable<GraphQLString>;
    url?: Nullable<GraphQLString>;
    httpRequest?: Nullable<JSON>;
    httpRequestRejected?: Nullable<JSON>;
    httpResponse?: Nullable<JSON>;
    httpResponseRejected?: Nullable<JSON>;
    isReprocessing?: Nullable<GraphQLBoolean>;
    reprocessingHttpCommunicationId?: Nullable<string>;
}

export interface AuditingUpdateHttpCommunicationsInput {
    id?: Nullable<string>;
    tags?: Nullable<JSON>;
    event?: Nullable<AuditingHttpCommunicationEvent>;
    status?: Nullable<GraphQLInt>;
    method?: Nullable<GraphQLString>;
    url?: Nullable<GraphQLString>;
    httpRequest?: Nullable<JSON>;
    httpRequestRejected?: Nullable<JSON>;
    httpResponse?: Nullable<JSON>;
    httpResponseRejected?: Nullable<JSON>;
    isReprocessing?: Nullable<GraphQLBoolean>;
    reprocessingHttpCommunicationId?: Nullable<string>;
}

export interface AuditingCreateSideEffectInput {
    id: string;
    tags?: Nullable<JSON>;
    modelPath: GraphQLString;
    modelName: GraphQLString;
    operationId?: Nullable<string>;
    operationSort?: Nullable<GraphQLInt>;
    accountId: string;
    email: GraphQLString;
    event: AuditingSideEffectEvent;
    auditableId?: Nullable<string>;
    oldValue?: Nullable<JSON>;
    newValue?: Nullable<JSON>;
    ip?: Nullable<GraphQLString>;
    method: AuditingSideEffectMethod;
    baseUrl?: Nullable<GraphQLString>;
    params?: Nullable<JSON>;
    query?: Nullable<JSON>;
    body?: Nullable<JSON>;
    userAgent?: Nullable<GraphQLString>;
    isRollback: GraphQLBoolean;
    rollbackSideEffectId?: Nullable<string>;
}

export interface AuditingUpdateSideEffectByIdInput {
    id: string;
    tags?: Nullable<JSON>;
    modelPath?: Nullable<GraphQLString>;
    modelName?: Nullable<GraphQLString>;
    operationId?: Nullable<string>;
    operationSort?: Nullable<GraphQLInt>;
    accountId?: Nullable<string>;
    email?: Nullable<GraphQLString>;
    event?: Nullable<AuditingSideEffectEvent>;
    auditableId?: Nullable<string>;
    oldValue?: Nullable<JSON>;
    newValue?: Nullable<JSON>;
    ip?: Nullable<GraphQLString>;
    method?: Nullable<AuditingSideEffectMethod>;
    baseUrl?: Nullable<GraphQLString>;
    params?: Nullable<JSON>;
    query?: Nullable<JSON>;
    body?: Nullable<JSON>;
    userAgent?: Nullable<GraphQLString>;
    isRollback?: Nullable<GraphQLBoolean>;
    rollbackSideEffectId?: Nullable<string>;
}

export interface AuditingUpdateSideEffectsInput {
    id?: Nullable<string>;
    tags?: Nullable<JSON>;
    modelPath?: Nullable<GraphQLString>;
    modelName?: Nullable<GraphQLString>;
    operationId?: Nullable<string>;
    operationSort?: Nullable<GraphQLInt>;
    accountId?: Nullable<string>;
    email?: Nullable<GraphQLString>;
    event?: Nullable<AuditingSideEffectEvent>;
    auditableId?: Nullable<string>;
    oldValue?: Nullable<JSON>;
    newValue?: Nullable<JSON>;
    ip?: Nullable<GraphQLString>;
    method?: Nullable<AuditingSideEffectMethod>;
    baseUrl?: Nullable<GraphQLString>;
    params?: Nullable<JSON>;
    query?: Nullable<JSON>;
    body?: Nullable<JSON>;
    userAgent?: Nullable<GraphQLString>;
    isRollback?: Nullable<GraphQLBoolean>;
    rollbackSideEffectId?: Nullable<string>;
}

export interface CommonCreateCountryInput {
    id: string;
    iso3166Alpha2: GraphQLString;
    iso3166Alpha3: GraphQLString;
    iso3166Numeric: GraphQLString;
    customCode?: Nullable<GraphQLString>;
    prefix?: Nullable<GraphQLString>;
    image?: Nullable<GraphQLString>;
    sort?: Nullable<GraphQLInt>;
    administrativeAreas?: Nullable<JSON>;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType: CommonCountryMapType;
    availableLangs?: Nullable<JSON>;
    langId: string;
    name: GraphQLString;
    slug: GraphQLString;
    administrativeAreaLevel1?: Nullable<GraphQLString>;
    administrativeAreaLevel2?: Nullable<GraphQLString>;
    administrativeAreaLevel3?: Nullable<GraphQLString>;
}

export interface CommonUpdateCountryByIdInput {
    id: string;
    iso3166Alpha2?: Nullable<GraphQLString>;
    iso3166Alpha3?: Nullable<GraphQLString>;
    iso3166Numeric?: Nullable<GraphQLString>;
    customCode?: Nullable<GraphQLString>;
    prefix?: Nullable<GraphQLString>;
    image?: Nullable<GraphQLString>;
    sort?: Nullable<GraphQLInt>;
    administrativeAreas?: Nullable<JSON>;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType?: Nullable<CommonCountryMapType>;
    availableLangs?: Nullable<JSON>;
    langId?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    slug?: Nullable<GraphQLString>;
    administrativeAreaLevel1?: Nullable<GraphQLString>;
    administrativeAreaLevel2?: Nullable<GraphQLString>;
    administrativeAreaLevel3?: Nullable<GraphQLString>;
}

export interface CommonUpdateCountriesInput {
    id?: Nullable<string>;
    iso3166Alpha2?: Nullable<GraphQLString>;
    iso3166Alpha3?: Nullable<GraphQLString>;
    iso3166Numeric?: Nullable<GraphQLString>;
    customCode?: Nullable<GraphQLString>;
    prefix?: Nullable<GraphQLString>;
    image?: Nullable<GraphQLString>;
    sort?: Nullable<GraphQLInt>;
    administrativeAreas?: Nullable<JSON>;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType?: Nullable<CommonCountryMapType>;
    availableLangs?: Nullable<JSON>;
    langId?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    slug?: Nullable<GraphQLString>;
    administrativeAreaLevel1?: Nullable<GraphQLString>;
    administrativeAreaLevel2?: Nullable<GraphQLString>;
    administrativeAreaLevel3?: Nullable<GraphQLString>;
}

export interface CommonCreateLangInput {
    id: string;
    name: GraphQLString;
    image?: Nullable<GraphQLString>;
    iso6392: GraphQLString;
    iso6393: GraphQLString;
    ietf: GraphQLString;
    customCode?: Nullable<GraphQLString>;
    dir: CommonLangDir;
    sort?: Nullable<GraphQLInt>;
    isActive: GraphQLBoolean;
}

export interface CommonUpdateLangByIdInput {
    id: string;
    name?: Nullable<GraphQLString>;
    image?: Nullable<GraphQLString>;
    iso6392?: Nullable<GraphQLString>;
    iso6393?: Nullable<GraphQLString>;
    ietf?: Nullable<GraphQLString>;
    customCode?: Nullable<GraphQLString>;
    dir?: Nullable<CommonLangDir>;
    sort?: Nullable<GraphQLInt>;
    isActive?: Nullable<GraphQLBoolean>;
}

export interface CommonUpdateLangsInput {
    id?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    image?: Nullable<GraphQLString>;
    iso6392?: Nullable<GraphQLString>;
    iso6393?: Nullable<GraphQLString>;
    ietf?: Nullable<GraphQLString>;
    customCode?: Nullable<GraphQLString>;
    dir?: Nullable<CommonLangDir>;
    sort?: Nullable<GraphQLInt>;
    isActive?: Nullable<GraphQLBoolean>;
}

export interface IamCreateAccountInput {
    id: string;
    type: IamAccountType;
    code?: Nullable<GraphQLString>;
    email: GraphQLString;
    isActive: GraphQLBoolean;
    clientId?: Nullable<string>;
    scopes?: Nullable<JSON>;
    meta?: Nullable<JSON>;
    roleIds?: Nullable<Nullable<string>[]>;
    tenantIds?: Nullable<Nullable<string>[]>;
    user?: Nullable<IamCreateUserInput>;
}

export interface IamUpdateAccountByIdInput {
    id: string;
    type?: Nullable<IamAccountType>;
    code?: Nullable<GraphQLString>;
    email?: Nullable<GraphQLString>;
    isActive?: Nullable<GraphQLBoolean>;
    clientId?: Nullable<string>;
    scopes?: Nullable<JSON>;
    meta?: Nullable<JSON>;
    roleIds?: Nullable<Nullable<string>[]>;
    tenantIds?: Nullable<Nullable<string>[]>;
    user?: Nullable<IamUpdateUserByIdInput>;
}

export interface IamUpdateAccountsInput {
    id?: Nullable<string>;
    type?: Nullable<IamAccountType>;
    code?: Nullable<GraphQLString>;
    email?: Nullable<GraphQLString>;
    isActive?: Nullable<GraphQLBoolean>;
    clientId?: Nullable<string>;
    scopes?: Nullable<JSON>;
    dApplicationCodes?: Nullable<JSON>;
    dPermissions?: Nullable<JSON>;
    meta?: Nullable<JSON>;
    roleIds?: Nullable<Nullable<string>[]>;
    tenantIds?: Nullable<Nullable<string>[]>;
    user?: Nullable<IamUpdateUsersInput>;
}

export interface IamCreateBoundedContextInput {
    id: string;
    name: GraphQLString;
    root: GraphQLString;
    sort?: Nullable<GraphQLInt>;
    isActive: GraphQLBoolean;
}

export interface IamUpdateBoundedContextByIdInput {
    id: string;
    name?: Nullable<GraphQLString>;
    root?: Nullable<GraphQLString>;
    sort?: Nullable<GraphQLInt>;
    isActive?: Nullable<GraphQLBoolean>;
}

export interface IamUpdateBoundedContextsInput {
    id?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    root?: Nullable<GraphQLString>;
    sort?: Nullable<GraphQLInt>;
    isActive?: Nullable<GraphQLBoolean>;
}

export interface IamCreatePermissionRoleInput {
    permissionId: string;
    roleId: string;
}

export interface IamDeletePermissionRoleInput {
    permissionId: string;
    roleId: string;
}

export interface IamCreatePermissionInput {
    id: string;
    name: GraphQLString;
    boundedContextId: string;
    roleIds?: Nullable<Nullable<string>[]>;
}

export interface IamUpdatePermissionByIdInput {
    id: string;
    name?: Nullable<GraphQLString>;
    boundedContextId?: Nullable<string>;
    roleIds?: Nullable<Nullable<string>[]>;
}

export interface IamUpdatePermissionsInput {
    id?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    boundedContextId?: Nullable<string>;
    roleIds?: Nullable<Nullable<string>[]>;
}

export interface IamCreateRoleInput {
    id: string;
    name: GraphQLString;
    isMaster: GraphQLBoolean;
    permissionIds?: Nullable<Nullable<string>[]>;
    accountIds?: Nullable<Nullable<string>[]>;
}

export interface IamUpdateRoleByIdInput {
    id: string;
    name?: Nullable<GraphQLString>;
    isMaster?: Nullable<GraphQLBoolean>;
    permissionIds?: Nullable<Nullable<string>[]>;
    accountIds?: Nullable<Nullable<string>[]>;
}

export interface IamUpdateRolesInput {
    id?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    isMaster?: Nullable<GraphQLBoolean>;
    permissionIds?: Nullable<Nullable<string>[]>;
    accountIds?: Nullable<Nullable<string>[]>;
}

export interface IamCreateTenantInput {
    id: string;
    name: GraphQLString;
    code?: Nullable<GraphQLString>;
    logo?: Nullable<GraphQLString>;
    isActive: GraphQLBoolean;
    accountIds?: Nullable<Nullable<string>[]>;
}

export interface IamUpdateTenantByIdInput {
    id: string;
    name?: Nullable<GraphQLString>;
    code?: Nullable<GraphQLString>;
    logo?: Nullable<GraphQLString>;
    isActive?: Nullable<GraphQLBoolean>;
    accountIds?: Nullable<Nullable<string>[]>;
}

export interface IamUpdateTenantsInput {
    id?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    code?: Nullable<GraphQLString>;
    logo?: Nullable<GraphQLString>;
    isActive?: Nullable<GraphQLBoolean>;
    accountIds?: Nullable<Nullable<string>[]>;
}

export interface IamUpdateUserMetaByIdInput {
    meta?: Nullable<JSON>;
}

export interface IamCreateUserInput {
    id: string;
    name: GraphQLString;
    surname?: Nullable<GraphQLString>;
    avatar?: Nullable<GraphQLString>;
    mobile?: Nullable<GraphQLString>;
    langId?: Nullable<string>;
    username: GraphQLString;
    password: GraphQLString;
    rememberToken?: Nullable<GraphQLString>;
}

export interface IamUpdateUserByIdInput {
    id: string;
    name?: Nullable<GraphQLString>;
    surname?: Nullable<GraphQLString>;
    avatar?: Nullable<GraphQLString>;
    mobile?: Nullable<GraphQLString>;
    langId?: Nullable<string>;
    username?: Nullable<GraphQLString>;
    password?: Nullable<GraphQLString>;
    rememberToken?: Nullable<GraphQLString>;
}

export interface IamUpdateUsersInput {
    id?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    surname?: Nullable<GraphQLString>;
    avatar?: Nullable<GraphQLString>;
    mobile?: Nullable<GraphQLString>;
    langId?: Nullable<string>;
    username?: Nullable<GraphQLString>;
    password?: Nullable<GraphQLString>;
    rememberToken?: Nullable<GraphQLString>;
}

export interface OAuthCreateAccessTokenInput {
    id: string;
    clientId: string;
    accountId?: Nullable<string>;
    token: GraphQLString;
    name?: Nullable<GraphQLString>;
    isRevoked: GraphQLBoolean;
    expiresAt?: Nullable<GraphQLTimestamp>;
    refreshToken?: Nullable<OAuthCreateRefreshTokenInput>;
}

export interface OAuthUpdateAccessTokenByIdInput {
    id: string;
    clientId?: Nullable<string>;
    accountId?: Nullable<string>;
    token?: Nullable<GraphQLString>;
    name?: Nullable<GraphQLString>;
    isRevoked?: Nullable<GraphQLBoolean>;
    expiresAt?: Nullable<GraphQLTimestamp>;
    refreshToken?: Nullable<OAuthUpdateRefreshTokenByIdInput>;
}

export interface OAuthUpdateAccessTokensInput {
    id?: Nullable<string>;
    clientId?: Nullable<string>;
    accountId?: Nullable<string>;
    token?: Nullable<GraphQLString>;
    name?: Nullable<GraphQLString>;
    isRevoked?: Nullable<GraphQLBoolean>;
    expiresAt?: Nullable<GraphQLTimestamp>;
    refreshToken?: Nullable<OAuthUpdateRefreshTokensInput>;
}

export interface OAuthCreateApplicationInput {
    id: string;
    code: GraphQLString;
    name: GraphQLString;
    secret: GraphQLString;
    isMaster: GraphQLBoolean;
    clientIds?: Nullable<Nullable<string>[]>;
}

export interface OAuthUpdateApplicationByIdInput {
    id: string;
    code?: Nullable<GraphQLString>;
    name?: Nullable<GraphQLString>;
    secret?: Nullable<GraphQLString>;
    isMaster?: Nullable<GraphQLBoolean>;
    clientIds?: Nullable<Nullable<string>[]>;
}

export interface OAuthUpdateApplicationsInput {
    id?: Nullable<string>;
    code?: Nullable<GraphQLString>;
    name?: Nullable<GraphQLString>;
    secret?: Nullable<GraphQLString>;
    isMaster?: Nullable<GraphQLBoolean>;
    clientIds?: Nullable<Nullable<string>[]>;
}

export interface OAuthCreateClientInput {
    id: string;
    grantType: OAuthClientGrantType;
    name: GraphQLString;
    secret: GraphQLString;
    authUrl?: Nullable<GraphQLString>;
    redirect?: Nullable<GraphQLString>;
    scopeOptions?: Nullable<JSON>;
    expiredAccessToken?: Nullable<GraphQLInt>;
    expiredRefreshToken?: Nullable<GraphQLInt>;
    isActive: GraphQLBoolean;
    isMaster: GraphQLBoolean;
    applicationIds?: Nullable<Nullable<string>[]>;
}

export interface OAuthUpdateClientByIdInput {
    id: string;
    grantType?: Nullable<OAuthClientGrantType>;
    name?: Nullable<GraphQLString>;
    secret?: Nullable<GraphQLString>;
    authUrl?: Nullable<GraphQLString>;
    redirect?: Nullable<GraphQLString>;
    scopeOptions?: Nullable<JSON>;
    expiredAccessToken?: Nullable<GraphQLInt>;
    expiredRefreshToken?: Nullable<GraphQLInt>;
    isActive?: Nullable<GraphQLBoolean>;
    isMaster?: Nullable<GraphQLBoolean>;
    applicationIds?: Nullable<Nullable<string>[]>;
}

export interface OAuthUpdateClientsInput {
    id?: Nullable<string>;
    grantType?: Nullable<OAuthClientGrantType>;
    name?: Nullable<GraphQLString>;
    secret?: Nullable<GraphQLString>;
    authUrl?: Nullable<GraphQLString>;
    redirect?: Nullable<GraphQLString>;
    scopeOptions?: Nullable<JSON>;
    expiredAccessToken?: Nullable<GraphQLInt>;
    expiredRefreshToken?: Nullable<GraphQLInt>;
    isActive?: Nullable<GraphQLBoolean>;
    isMaster?: Nullable<GraphQLBoolean>;
    applicationIds?: Nullable<Nullable<string>[]>;
}

export interface OAuthCreateCredentialsInput {
    grantType: OAuthClientGrantType;
    username?: Nullable<GraphQLString>;
    password?: Nullable<GraphQLString>;
    email?: Nullable<GraphQLString>;
    clientSecret?: Nullable<GraphQLString>;
    accessTokenId?: Nullable<string>;
    refreshToken?: Nullable<GraphQLString>;
    redirect?: Nullable<GraphQLString>;
}

export interface OAuthCreateRefreshTokenInput {
    id: string;
    accessTokenId: string;
    token: GraphQLString;
    isRevoked: GraphQLBoolean;
    expiresAt?: Nullable<GraphQLTimestamp>;
}

export interface OAuthUpdateRefreshTokenByIdInput {
    id: string;
    accessTokenId?: Nullable<string>;
    token?: Nullable<GraphQLString>;
    isRevoked?: Nullable<GraphQLBoolean>;
    expiresAt?: Nullable<GraphQLTimestamp>;
}

export interface OAuthUpdateRefreshTokensInput {
    id?: Nullable<string>;
    accessTokenId?: Nullable<string>;
    token?: Nullable<GraphQLString>;
    isRevoked?: Nullable<GraphQLBoolean>;
    expiresAt?: Nullable<GraphQLTimestamp>;
}

export interface OAuthCreateScopeInput {
    id: string;
    code: GraphQLString;
    name: GraphQLString;
}

export interface OAuthUpdateScopeByIdInput {
    id: string;
    code?: Nullable<GraphQLString>;
    name?: Nullable<GraphQLString>;
}

export interface OAuthUpdateScopesInput {
    id?: Nullable<string>;
    code?: Nullable<GraphQLString>;
    name?: Nullable<GraphQLString>;
}

export interface QueueManagerCreateJobRegistryInput {
    id: string;
    queueName: GraphQLString;
    state: QueueManagerJobRegistryState;
    jobId: GraphQLString;
    jobName?: Nullable<GraphQLString>;
    tags?: Nullable<JSON>;
}

export interface QueueManagerUpdateJobRegistryByIdInput {
    id: string;
    queueName?: Nullable<GraphQLString>;
    state?: Nullable<QueueManagerJobRegistryState>;
    jobId?: Nullable<GraphQLString>;
    jobName?: Nullable<GraphQLString>;
    tags?: Nullable<JSON>;
}

export interface QueueManagerUpdateJobsRegistryInput {
    id?: Nullable<string>;
    queueName?: Nullable<GraphQLString>;
    state?: Nullable<QueueManagerJobRegistryState>;
    jobId?: Nullable<GraphQLString>;
    jobName?: Nullable<GraphQLString>;
    tags?: Nullable<JSON>;
}

export interface QueueManagerCreateQueueInput {
    id: string;
    prefix: GraphQLString;
    name: GraphQLString;
}

export interface QueueManagerUpdateQueueByIdInput {
    id: string;
    prefix?: Nullable<GraphQLString>;
    name?: Nullable<GraphQLString>;
}

export interface QueueManagerUpdateQueuesInput {
    id?: Nullable<string>;
    prefix?: Nullable<GraphQLString>;
    name?: Nullable<GraphQLString>;
}

export interface QueryStatement {
    where?: Nullable<JSON>;
    attributes?: Nullable<JSON>;
    include?: Nullable<Nullable<GraphQLString>[]>;
    order?: Nullable<JSON>;
    group?: Nullable<JSON>;
    limit?: Nullable<GraphQLInt>;
    offset?: Nullable<GraphQLInt>;
    distinct?: Nullable<GraphQLBoolean>;
    col?: Nullable<GraphQLString>;
}

export interface AuditingHttpCommunication {
    id: string;
    tags?: Nullable<JSON>;
    event: AuditingHttpCommunicationEvent;
    status?: Nullable<GraphQLInt>;
    method: GraphQLString;
    url: GraphQLString;
    httpRequest?: Nullable<JSON>;
    httpRequestRejected?: Nullable<JSON>;
    httpResponse?: Nullable<JSON>;
    httpResponseRejected?: Nullable<JSON>;
    isReprocessing: GraphQLBoolean;
    reprocessingHttpCommunicationId?: Nullable<string>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface IQuery {
    auditingFindHttpCommunication(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AuditingHttpCommunication> | Promise<Nullable<AuditingHttpCommunication>>;
    auditingFindHttpCommunicationById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<AuditingHttpCommunication> | Promise<Nullable<AuditingHttpCommunication>>;
    auditingGetHttpCommunications(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AuditingHttpCommunication>[] | Promise<Nullable<AuditingHttpCommunication>[]>;
    auditingPaginateHttpCommunications(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    auditingFindSideEffect(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AuditingSideEffect> | Promise<Nullable<AuditingSideEffect>>;
    auditingFindSideEffectById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<AuditingSideEffect> | Promise<Nullable<AuditingSideEffect>>;
    auditingGetSideEffects(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AuditingSideEffect>[] | Promise<Nullable<AuditingSideEffect>[]>;
    auditingPaginateSideEffects(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    commonFindCountry(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonCountry> | Promise<Nullable<CommonCountry>>;
    commonFindCountryById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<CommonCountry> | Promise<Nullable<CommonCountry>>;
    commonGetCountries(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonCountry>[] | Promise<Nullable<CommonCountry>[]>;
    commonPaginateCountries(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    commonFindLang(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonLang> | Promise<Nullable<CommonLang>>;
    commonFindLangById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<CommonLang> | Promise<Nullable<CommonLang>>;
    commonGetLangs(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonLang>[] | Promise<Nullable<CommonLang>[]>;
    commonPaginateLangs(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    iamFindAccount(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamAccount> | Promise<Nullable<IamAccount>>;
    iamFindAccountById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>, queryGetClients?: Nullable<QueryStatement>, constraintGetClients?: Nullable<QueryStatement>): Nullable<IamAccount> | Promise<Nullable<IamAccount>>;
    iamGetAccounts(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamAccount>[] | Promise<Nullable<IamAccount>[]>;
    iamPaginateAccounts(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    iamMeAccount(): Nullable<IamAccount> | Promise<Nullable<IamAccount>>;
    iamFindBoundedContext(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamBoundedContext> | Promise<Nullable<IamBoundedContext>>;
    iamFindBoundedContextById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<IamBoundedContext> | Promise<Nullable<IamBoundedContext>>;
    iamGetBoundedContexts(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamBoundedContext>[] | Promise<Nullable<IamBoundedContext>[]>;
    iamPaginateBoundedContexts(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    iamFindPermissionRoleById(permissionId?: Nullable<string>, roleId?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<IamPermissionRole> | Promise<Nullable<IamPermissionRole>>;
    iamGetPermissionsRoles(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamPermissionRole>[] | Promise<Nullable<IamPermissionRole>[]>;
    iamPaginatePermissionsRoles(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    iamFindPermission(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamPermission> | Promise<Nullable<IamPermission>>;
    iamFindPermissionById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<IamPermission> | Promise<Nullable<IamPermission>>;
    iamGetPermissions(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamPermission>[] | Promise<Nullable<IamPermission>[]>;
    iamPaginatePermissions(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    iamFindRole(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamRole> | Promise<Nullable<IamRole>>;
    iamFindRoleById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<IamRole> | Promise<Nullable<IamRole>>;
    iamGetRoles(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamRole>[] | Promise<Nullable<IamRole>[]>;
    iamPaginateRoles(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    iamFindTenant(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamTenant> | Promise<Nullable<IamTenant>>;
    iamFindTenantById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<IamTenant> | Promise<Nullable<IamTenant>>;
    iamGetTenants(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamTenant>[] | Promise<Nullable<IamTenant>[]>;
    iamPaginateTenants(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    iamFindUserMetaById(id: string): Nullable<IamUserMeta> | Promise<Nullable<IamUserMeta>>;
    iamFindUser(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamUser> | Promise<Nullable<IamUser>>;
    iamFindUserById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<IamUser> | Promise<Nullable<IamUser>>;
    iamGetUsers(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamUser>[] | Promise<Nullable<IamUser>[]>;
    iamPaginateUsers(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    oAuthFindAccessToken(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthAccessToken> | Promise<Nullable<OAuthAccessToken>>;
    oAuthFindAccessTokenById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<OAuthAccessToken> | Promise<Nullable<OAuthAccessToken>>;
    oAuthGetAccessTokens(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthAccessToken>[] | Promise<Nullable<OAuthAccessToken>[]>;
    oAuthPaginateAccessTokens(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    oAuthFindApplication(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthApplication> | Promise<Nullable<OAuthApplication>>;
    oAuthFindApplicationById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<OAuthApplication> | Promise<Nullable<OAuthApplication>>;
    oAuthGetApplications(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthApplication>[] | Promise<Nullable<OAuthApplication>[]>;
    oAuthPaginateApplications(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    oAuthFindClient(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthClient> | Promise<Nullable<OAuthClient>>;
    oAuthFindClientById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<OAuthClient> | Promise<Nullable<OAuthClient>>;
    oAuthGetClients(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthClient>[] | Promise<Nullable<OAuthClient>[]>;
    oAuthPaginateClients(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    oAuthFindRefreshToken(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthRefreshToken> | Promise<Nullable<OAuthRefreshToken>>;
    oAuthFindRefreshTokenById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<OAuthRefreshToken> | Promise<Nullable<OAuthRefreshToken>>;
    oAuthGetRefreshTokens(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthRefreshToken>[] | Promise<Nullable<OAuthRefreshToken>[]>;
    oAuthPaginateRefreshTokens(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    oAuthFindScope(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthScope> | Promise<Nullable<OAuthScope>>;
    oAuthFindScopeById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<OAuthScope> | Promise<Nullable<OAuthScope>>;
    oAuthGetScopes(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthScope>[] | Promise<Nullable<OAuthScope>[]>;
    oAuthPaginateScopes(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    queueManagerFindJobRegistry(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<QueueManagerJobRegistry> | Promise<Nullable<QueueManagerJobRegistry>>;
    queueManagerFindJobRegistryById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<QueueManagerJobRegistry> | Promise<Nullable<QueueManagerJobRegistry>>;
    queueManagerGetJobsRegistry(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<QueueManagerJobRegistry>[] | Promise<Nullable<QueueManagerJobRegistry>[]>;
    queueManagerPaginateJobsRegistry(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    queueManagerFindJobById(id: GraphQLString, name: GraphQLString): Nullable<QueueManagerJob> | Promise<Nullable<QueueManagerJob>>;
    queueManagerPaginateJobs(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    queueManagerFindQueue(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<QueueManagerQueue> | Promise<Nullable<QueueManagerQueue>>;
    queueManagerFindQueueById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<QueueManagerQueue> | Promise<Nullable<QueueManagerQueue>>;
    queueManagerGetQueues(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<QueueManagerQueue>[] | Promise<Nullable<QueueManagerQueue>[]>;
    queueManagerPaginateQueues(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    coreGetLangs(): Nullable<CoreLang>[] | Promise<Nullable<CoreLang>[]>;
    coreGetFallbackLang(): Nullable<CoreLang> | Promise<Nullable<CoreLang>>;
    hello(): Nullable<string> | Promise<Nullable<string>>;
}

export interface IMutation {
    auditingCreateHttpCommunication(payload: AuditingCreateHttpCommunicationInput): Nullable<AuditingHttpCommunication> | Promise<Nullable<AuditingHttpCommunication>>;
    auditingCreateHttpCommunications(payload: Nullable<AuditingCreateHttpCommunicationInput>[]): boolean | Promise<boolean>;
    auditingUpdateHttpCommunicationById(payload: AuditingUpdateHttpCommunicationByIdInput, constraint?: Nullable<QueryStatement>): Nullable<AuditingHttpCommunication> | Promise<Nullable<AuditingHttpCommunication>>;
    auditingUpdateHttpCommunications(payload: AuditingUpdateHttpCommunicationsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AuditingHttpCommunication>[] | Promise<Nullable<AuditingHttpCommunication>[]>;
    auditingUpsertHttpCommunication(payload: AuditingUpdateHttpCommunicationByIdInput): Nullable<AuditingHttpCommunication> | Promise<Nullable<AuditingHttpCommunication>>;
    auditingDeleteHttpCommunicationById(id: string, constraint?: Nullable<QueryStatement>): Nullable<AuditingHttpCommunication> | Promise<Nullable<AuditingHttpCommunication>>;
    auditingDeleteHttpCommunications(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AuditingHttpCommunication>[] | Promise<Nullable<AuditingHttpCommunication>[]>;
    auditingCreateSideEffect(payload: AuditingCreateSideEffectInput): Nullable<AuditingSideEffect> | Promise<Nullable<AuditingSideEffect>>;
    auditingCreateSideEffects(payload: Nullable<AuditingCreateSideEffectInput>[]): boolean | Promise<boolean>;
    auditingUpdateSideEffectById(payload: AuditingUpdateSideEffectByIdInput, constraint?: Nullable<QueryStatement>): Nullable<AuditingSideEffect> | Promise<Nullable<AuditingSideEffect>>;
    auditingUpdateSideEffects(payload: AuditingUpdateSideEffectsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AuditingSideEffect>[] | Promise<Nullable<AuditingSideEffect>[]>;
    auditingUpsertSideEffect(payload: AuditingUpdateSideEffectByIdInput): Nullable<AuditingSideEffect> | Promise<Nullable<AuditingSideEffect>>;
    auditingDeleteSideEffectById(id: string, constraint?: Nullable<QueryStatement>): Nullable<AuditingSideEffect> | Promise<Nullable<AuditingSideEffect>>;
    auditingDeleteSideEffects(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AuditingSideEffect>[] | Promise<Nullable<AuditingSideEffect>[]>;
    auditingRollbackSideEffect(payload: AuditingUpdateSideEffectByIdInput, constraint?: Nullable<QueryStatement>): boolean | Promise<boolean>;
    commonCreateCountry(payload: CommonCreateCountryInput): Nullable<CommonCountry> | Promise<Nullable<CommonCountry>>;
    commonCreateCountries(payload: Nullable<CommonCreateCountryInput>[]): boolean | Promise<boolean>;
    commonUpdateCountryById(payload: CommonUpdateCountryByIdInput, constraint?: Nullable<QueryStatement>): Nullable<CommonCountry> | Promise<Nullable<CommonCountry>>;
    commonUpdateCountries(payload: CommonUpdateCountriesInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonCountry>[] | Promise<Nullable<CommonCountry>[]>;
    commonUpsertCountry(payload: CommonUpdateCountryByIdInput): Nullable<CommonCountry> | Promise<Nullable<CommonCountry>>;
    commonDeleteCountryById(id: string, constraint?: Nullable<QueryStatement>): Nullable<CommonCountry> | Promise<Nullable<CommonCountry>>;
    commonDeleteCountries(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonCountry>[] | Promise<Nullable<CommonCountry>[]>;
    commonCreateLang(payload: CommonCreateLangInput): Nullable<CommonLang> | Promise<Nullable<CommonLang>>;
    commonCreateLangs(payload: Nullable<CommonCreateLangInput>[]): boolean | Promise<boolean>;
    commonUpdateLangById(payload: CommonUpdateLangByIdInput, constraint?: Nullable<QueryStatement>): Nullable<CommonLang> | Promise<Nullable<CommonLang>>;
    commonUpdateLangs(payload: CommonUpdateLangsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonLang>[] | Promise<Nullable<CommonLang>[]>;
    commonUpsertLang(payload: CommonUpdateLangByIdInput): Nullable<CommonLang> | Promise<Nullable<CommonLang>>;
    commonDeleteLangById(id: string, constraint?: Nullable<QueryStatement>): Nullable<CommonLang> | Promise<Nullable<CommonLang>>;
    commonDeleteLangs(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonLang>[] | Promise<Nullable<CommonLang>[]>;
    iamCreateAccount(payload: IamCreateAccountInput): Nullable<IamAccount> | Promise<Nullable<IamAccount>>;
    iamUpdateAccountById(payload: IamUpdateAccountByIdInput, constraint?: Nullable<QueryStatement>): Nullable<IamAccount> | Promise<Nullable<IamAccount>>;
    iamUpdateAccounts(payload: IamUpdateAccountsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamAccount>[] | Promise<Nullable<IamAccount>[]>;
    iamUpsertAccount(payload: IamUpdateAccountByIdInput): Nullable<IamAccount> | Promise<Nullable<IamAccount>>;
    iamDeleteAccountById(id: string, constraint?: Nullable<QueryStatement>): Nullable<IamAccount> | Promise<Nullable<IamAccount>>;
    iamDeleteAccounts(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamAccount>[] | Promise<Nullable<IamAccount>[]>;
    iamCreateAccounts(payload: Nullable<IamCreateAccountInput>[]): boolean | Promise<boolean>;
    iamCreateBoundedContext(payload: IamCreateBoundedContextInput): Nullable<IamBoundedContext> | Promise<Nullable<IamBoundedContext>>;
    iamCreateBoundedContexts(payload: Nullable<IamCreateBoundedContextInput>[]): boolean | Promise<boolean>;
    iamUpdateBoundedContextById(payload: IamUpdateBoundedContextByIdInput, constraint?: Nullable<QueryStatement>): Nullable<IamBoundedContext> | Promise<Nullable<IamBoundedContext>>;
    iamUpdateBoundedContexts(payload: IamUpdateBoundedContextsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamBoundedContext>[] | Promise<Nullable<IamBoundedContext>[]>;
    iamUpsertBoundedContext(payload: IamUpdateBoundedContextByIdInput): Nullable<IamBoundedContext> | Promise<Nullable<IamBoundedContext>>;
    iamDeleteBoundedContextById(id: string, constraint?: Nullable<QueryStatement>): Nullable<IamBoundedContext> | Promise<Nullable<IamBoundedContext>>;
    iamDeleteBoundedContexts(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamBoundedContext>[] | Promise<Nullable<IamBoundedContext>[]>;
    iamCreatePermissionRole(payload: IamCreatePermissionRoleInput): Nullable<IamPermissionRole> | Promise<Nullable<IamPermissionRole>>;
    iamCreatePermissionsRoles(payload: Nullable<IamCreatePermissionRoleInput>[]): boolean | Promise<boolean>;
    iamDeletePermissionRoleById(payload: IamDeletePermissionRoleInput, constraint?: Nullable<QueryStatement>): Nullable<IamPermissionRole> | Promise<Nullable<IamPermissionRole>>;
    iamDeletePermissionsRoles(payload: Nullable<IamDeletePermissionRoleInput>[], constraint?: Nullable<QueryStatement>): Nullable<IamPermissionRole>[] | Promise<Nullable<IamPermissionRole>[]>;
    iamCreatePermission(payload: IamCreatePermissionInput): Nullable<IamPermission> | Promise<Nullable<IamPermission>>;
    iamCreatePermissions(payload: Nullable<IamCreatePermissionInput>[]): boolean | Promise<boolean>;
    iamUpdatePermissionById(payload: IamUpdatePermissionByIdInput, constraint?: Nullable<QueryStatement>): Nullable<IamPermission> | Promise<Nullable<IamPermission>>;
    iamUpdatePermissions(payload: IamUpdatePermissionsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamPermission>[] | Promise<Nullable<IamPermission>[]>;
    iamUpsertPermission(payload: IamUpdatePermissionByIdInput): Nullable<IamPermission> | Promise<Nullable<IamPermission>>;
    iamDeletePermissionById(id: string, constraint?: Nullable<QueryStatement>): Nullable<IamPermission> | Promise<Nullable<IamPermission>>;
    iamDeletePermissions(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamPermission>[] | Promise<Nullable<IamPermission>[]>;
    iamCreateRole(payload: IamCreateRoleInput): Nullable<IamRole> | Promise<Nullable<IamRole>>;
    iamCreateRoles(payload: Nullable<IamCreateRoleInput>[]): boolean | Promise<boolean>;
    iamUpdateRoleById(payload: IamUpdateRoleByIdInput, constraint?: Nullable<QueryStatement>): Nullable<IamRole> | Promise<Nullable<IamRole>>;
    iamUpdateRoles(payload: IamUpdateRolesInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamRole>[] | Promise<Nullable<IamRole>[]>;
    iamUpsertRole(payload: IamUpdateRoleByIdInput): Nullable<IamRole> | Promise<Nullable<IamRole>>;
    iamDeleteRoleById(id: string, constraint?: Nullable<QueryStatement>): Nullable<IamRole> | Promise<Nullable<IamRole>>;
    iamDeleteRoles(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamRole>[] | Promise<Nullable<IamRole>[]>;
    iamCreateTenant(payload: IamCreateTenantInput): Nullable<IamTenant> | Promise<Nullable<IamTenant>>;
    iamCreateTenants(payload: Nullable<IamCreateTenantInput>[]): boolean | Promise<boolean>;
    iamUpdateTenantById(payload: IamUpdateTenantByIdInput, constraint?: Nullable<QueryStatement>): Nullable<IamTenant> | Promise<Nullable<IamTenant>>;
    iamUpdateTenants(payload: IamUpdateTenantsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamTenant>[] | Promise<Nullable<IamTenant>[]>;
    iamUpsertTenant(payload: IamUpdateTenantByIdInput): Nullable<IamTenant> | Promise<Nullable<IamTenant>>;
    iamDeleteTenantById(id: string, constraint?: Nullable<QueryStatement>): Nullable<IamTenant> | Promise<Nullable<IamTenant>>;
    iamDeleteTenants(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamTenant>[] | Promise<Nullable<IamTenant>[]>;
    iamUpdateUserMetaById(payload: IamUpdateUserMetaByIdInput): Nullable<IamUserMeta> | Promise<Nullable<IamUserMeta>>;
    iamCreateUser(payload: IamCreateUserInput): Nullable<IamUser> | Promise<Nullable<IamUser>>;
    iamCreateUsers(payload: Nullable<IamCreateUserInput>[]): boolean | Promise<boolean>;
    iamUpdateUserById(payload: IamUpdateUserByIdInput, constraint?: Nullable<QueryStatement>): Nullable<IamUser> | Promise<Nullable<IamUser>>;
    iamUpdateUsers(payload: IamUpdateUsersInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamUser>[] | Promise<Nullable<IamUser>[]>;
    iamUpsertUser(payload: IamUpdateUserByIdInput): Nullable<IamUser> | Promise<Nullable<IamUser>>;
    iamDeleteUserById(id: string, constraint?: Nullable<QueryStatement>): Nullable<IamUser> | Promise<Nullable<IamUser>>;
    iamDeleteUsers(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamUser>[] | Promise<Nullable<IamUser>[]>;
    oAuthDeleteAccessTokenById(id: string, constraint?: Nullable<QueryStatement>): Nullable<OAuthAccessToken> | Promise<Nullable<OAuthAccessToken>>;
    oAuthDeleteAccessTokens(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthAccessToken>[] | Promise<Nullable<OAuthAccessToken>[]>;
    oAuthCreateApplication(payload: OAuthCreateApplicationInput): Nullable<OAuthApplication> | Promise<Nullable<OAuthApplication>>;
    oAuthCreateApplications(payload: Nullable<OAuthCreateApplicationInput>[]): boolean | Promise<boolean>;
    oAuthUpdateApplicationById(payload: OAuthUpdateApplicationByIdInput, constraint?: Nullable<QueryStatement>): Nullable<OAuthApplication> | Promise<Nullable<OAuthApplication>>;
    oAuthUpdateApplications(payload: OAuthUpdateApplicationsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthApplication>[] | Promise<Nullable<OAuthApplication>[]>;
    oAuthUpsertApplication(payload: OAuthUpdateApplicationByIdInput): Nullable<OAuthApplication> | Promise<Nullable<OAuthApplication>>;
    oAuthDeleteApplicationById(id: string, constraint?: Nullable<QueryStatement>): Nullable<OAuthApplication> | Promise<Nullable<OAuthApplication>>;
    oAuthDeleteApplications(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthApplication>[] | Promise<Nullable<OAuthApplication>[]>;
    oAuthCreateClient(payload: OAuthCreateClientInput): Nullable<OAuthClient> | Promise<Nullable<OAuthClient>>;
    oAuthCreateClients(payload: Nullable<OAuthCreateClientInput>[]): boolean | Promise<boolean>;
    oAuthUpdateClientById(payload: OAuthUpdateClientByIdInput, constraint?: Nullable<QueryStatement>): Nullable<OAuthClient> | Promise<Nullable<OAuthClient>>;
    oAuthUpdateClients(payload: OAuthUpdateClientsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthClient>[] | Promise<Nullable<OAuthClient>[]>;
    oAuthUpsertClient(payload: OAuthUpdateClientByIdInput): Nullable<OAuthClient> | Promise<Nullable<OAuthClient>>;
    oAuthDeleteClientById(id: string, constraint?: Nullable<QueryStatement>): Nullable<OAuthClient> | Promise<Nullable<OAuthClient>>;
    oAuthDeleteClients(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthClient>[] | Promise<Nullable<OAuthClient>[]>;
    oAuthCreateCredentials(payload: OAuthCreateCredentialsInput): OAuthCredentials | Promise<OAuthCredentials>;
    oAuthDeleteRefreshTokenById(id: string, constraint?: Nullable<QueryStatement>): Nullable<OAuthRefreshToken> | Promise<Nullable<OAuthRefreshToken>>;
    oAuthDeleteRefreshTokens(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthRefreshToken>[] | Promise<Nullable<OAuthRefreshToken>[]>;
    oAuthCreateScope(payload: OAuthCreateScopeInput): Nullable<OAuthScope> | Promise<Nullable<OAuthScope>>;
    oAuthCreateScopes(payload: Nullable<OAuthCreateScopeInput>[]): boolean | Promise<boolean>;
    oAuthUpdateScopeById(payload: OAuthUpdateScopeByIdInput, constraint?: Nullable<QueryStatement>): Nullable<OAuthScope> | Promise<Nullable<OAuthScope>>;
    oAuthUpdateScopes(payload: OAuthUpdateScopesInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthScope>[] | Promise<Nullable<OAuthScope>[]>;
    oAuthUpsertScope(payload: OAuthUpdateScopeByIdInput): Nullable<OAuthScope> | Promise<Nullable<OAuthScope>>;
    oAuthDeleteScopeById(id: string, constraint?: Nullable<QueryStatement>): Nullable<OAuthScope> | Promise<Nullable<OAuthScope>>;
    oAuthDeleteScopes(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthScope>[] | Promise<Nullable<OAuthScope>[]>;
    queueManagerCreateJobRegistry(payload: QueueManagerCreateJobRegistryInput): Nullable<QueueManagerJobRegistry> | Promise<Nullable<QueueManagerJobRegistry>>;
    queueManagerCreateJobsRegistry(payload: Nullable<QueueManagerCreateJobRegistryInput>[]): boolean | Promise<boolean>;
    queueManagerUpdateJobRegistryById(payload: QueueManagerUpdateJobRegistryByIdInput, constraint?: Nullable<QueryStatement>): Nullable<QueueManagerJobRegistry> | Promise<Nullable<QueueManagerJobRegistry>>;
    queueManagerUpdateJobsRegistry(payload: QueueManagerUpdateJobsRegistryInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<QueueManagerJobRegistry>[] | Promise<Nullable<QueueManagerJobRegistry>[]>;
    queueManagerUpsertJobRegistry(payload: QueueManagerUpdateJobRegistryByIdInput): Nullable<QueueManagerJobRegistry> | Promise<Nullable<QueueManagerJobRegistry>>;
    queueManagerDeleteJobRegistryById(id: string, constraint?: Nullable<QueryStatement>): Nullable<QueueManagerJobRegistry> | Promise<Nullable<QueueManagerJobRegistry>>;
    queueManagerDeleteJobsRegistry(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<QueueManagerJobRegistry>[] | Promise<Nullable<QueueManagerJobRegistry>[]>;
    queueManagerDeleteJobById(id: GraphQLString, name: GraphQLString): Nullable<QueueManagerJob> | Promise<Nullable<QueueManagerJob>>;
    queueManagerCreateQueue(payload: QueueManagerCreateQueueInput): Nullable<QueueManagerQueue> | Promise<Nullable<QueueManagerQueue>>;
    queueManagerCreateQueues(payload: Nullable<QueueManagerCreateQueueInput>[]): boolean | Promise<boolean>;
    queueManagerUpdateQueueById(payload: QueueManagerUpdateQueueByIdInput, constraint?: Nullable<QueryStatement>): Nullable<QueueManagerQueue> | Promise<Nullable<QueueManagerQueue>>;
    queueManagerUpdateQueues(payload: QueueManagerUpdateQueuesInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<QueueManagerQueue>[] | Promise<Nullable<QueueManagerQueue>[]>;
    queueManagerUpsertQueue(payload: QueueManagerUpdateQueueByIdInput): Nullable<QueueManagerQueue> | Promise<Nullable<QueueManagerQueue>>;
    queueManagerDeleteQueueById(id: string, constraint?: Nullable<QueryStatement>): Nullable<QueueManagerQueue> | Promise<Nullable<QueueManagerQueue>>;
    queueManagerDeleteQueues(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<QueueManagerQueue>[] | Promise<Nullable<QueueManagerQueue>[]>;
}

export interface AuditingSideEffect {
    id: string;
    tags?: Nullable<JSON>;
    modelPath: GraphQLString;
    modelName: GraphQLString;
    operationId?: Nullable<string>;
    operationSort?: Nullable<GraphQLInt>;
    accountId: string;
    email: GraphQLString;
    event: AuditingSideEffectEvent;
    auditableId?: Nullable<string>;
    oldValue?: Nullable<JSON>;
    newValue?: Nullable<JSON>;
    ip?: Nullable<GraphQLString>;
    method: AuditingSideEffectMethod;
    baseUrl?: Nullable<GraphQLString>;
    params?: Nullable<JSON>;
    query?: Nullable<JSON>;
    body?: Nullable<JSON>;
    userAgent?: Nullable<GraphQLString>;
    isRollback: GraphQLBoolean;
    rollbackSideEffectId?: Nullable<string>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface CommonCountry {
    id: string;
    iso3166Alpha2: GraphQLString;
    iso3166Alpha3: GraphQLString;
    iso3166Numeric: GraphQLString;
    customCode?: Nullable<GraphQLString>;
    prefix?: Nullable<GraphQLString>;
    image?: Nullable<GraphQLString>;
    sort?: Nullable<GraphQLInt>;
    administrativeAreas?: Nullable<JSON>;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType: CommonCountryMapType;
    availableLangs?: Nullable<JSON>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
    langId: string;
    lang?: Nullable<CommonLang>;
    name: GraphQLString;
    slug: GraphQLString;
    administrativeAreaLevel1?: Nullable<GraphQLString>;
    administrativeAreaLevel2?: Nullable<GraphQLString>;
    administrativeAreaLevel3?: Nullable<GraphQLString>;
}

export interface CommonLang {
    id: string;
    name: GraphQLString;
    image?: Nullable<GraphQLString>;
    iso6392: GraphQLString;
    iso6393: GraphQLString;
    ietf: GraphQLString;
    customCode?: Nullable<GraphQLString>;
    dir: CommonLangDir;
    sort?: Nullable<GraphQLInt>;
    isActive: GraphQLBoolean;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface IamAccount {
    id: string;
    type: IamAccountType;
    code?: Nullable<GraphQLString>;
    email: GraphQLString;
    isActive: GraphQLBoolean;
    clientId: string;
    client?: Nullable<OAuthClient>;
    scopes?: Nullable<JSON>;
    dApplicationCodes: JSON;
    dPermissions: JSON;
    dTenants: JSON;
    meta?: Nullable<JSON>;
    roles?: Nullable<Nullable<IamRole>[]>;
    tenants?: Nullable<Nullable<IamTenant>[]>;
    user?: Nullable<IamUser>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface IamBoundedContext {
    id: string;
    name: GraphQLString;
    root: GraphQLString;
    sort?: Nullable<GraphQLInt>;
    isActive: GraphQLBoolean;
    permissions?: Nullable<Nullable<IamPermission>[]>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface IamPermissionRole {
    permissionId: string;
    permission?: Nullable<IamPermission>;
    roleId: string;
    role?: Nullable<IamRole>;
}

export interface IamPermission {
    id: string;
    name: GraphQLString;
    boundedContextId: string;
    boundedContext?: Nullable<IamBoundedContext>;
    roles?: Nullable<Nullable<IamRole>[]>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface IamRole {
    id: string;
    name: GraphQLString;
    isMaster: GraphQLBoolean;
    permissions?: Nullable<Nullable<IamPermission>[]>;
    accounts?: Nullable<Nullable<IamAccount>[]>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface IamTenant {
    id: string;
    name: GraphQLString;
    code?: Nullable<GraphQLString>;
    logo?: Nullable<GraphQLString>;
    isActive: GraphQLBoolean;
    meta?: Nullable<JSON>;
    accounts?: Nullable<Nullable<IamAccount>[]>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface IamUserMeta {
    id: string;
    meta?: Nullable<JSON>;
}

export interface IamUser {
    id: string;
    accountId: string;
    account?: Nullable<IamAccount>;
    name: GraphQLString;
    surname?: Nullable<GraphQLString>;
    avatar?: Nullable<GraphQLString>;
    mobile?: Nullable<GraphQLString>;
    langId?: Nullable<string>;
    username: GraphQLString;
    password: GraphQLString;
    rememberToken?: Nullable<GraphQLString>;
    meta?: Nullable<JSON>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface OAuthAccessToken {
    id: string;
    clientId: string;
    client?: Nullable<OAuthClient>;
    accountId?: Nullable<string>;
    token: GraphQLString;
    name?: Nullable<GraphQLString>;
    isRevoked: GraphQLBoolean;
    expiresAt?: Nullable<GraphQLTimestamp>;
    refreshToken?: Nullable<OAuthRefreshToken>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface OAuthApplication {
    id: string;
    code: GraphQLString;
    name: GraphQLString;
    secret: GraphQLString;
    isMaster: GraphQLBoolean;
    clients?: Nullable<Nullable<OAuthClient>[]>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface OAuthClient {
    id: string;
    grantType: OAuthClientGrantType;
    name: GraphQLString;
    secret: GraphQLString;
    authUrl?: Nullable<GraphQLString>;
    redirect?: Nullable<GraphQLString>;
    scopeOptions?: Nullable<JSON>;
    expiredAccessToken?: Nullable<GraphQLInt>;
    expiredRefreshToken?: Nullable<GraphQLInt>;
    isActive: GraphQLBoolean;
    isMaster: GraphQLBoolean;
    applications?: Nullable<Nullable<OAuthApplication>[]>;
    accessTokens?: Nullable<Nullable<OAuthAccessToken>[]>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface OAuthCredentials {
    accessToken: GraphQLString;
    refreshToken: GraphQLString;
}

export interface OAuthRefreshToken {
    id: string;
    accessTokenId: string;
    accessToken?: Nullable<OAuthAccessToken>;
    token: GraphQLString;
    isRevoked: GraphQLBoolean;
    expiresAt?: Nullable<GraphQLTimestamp>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface OAuthScope {
    id: string;
    code: GraphQLString;
    name: GraphQLString;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface QueueManagerJobRegistry {
    id: string;
    queueName: GraphQLString;
    state: QueueManagerJobRegistryState;
    jobId: GraphQLString;
    jobName?: Nullable<GraphQLString>;
    tags?: Nullable<JSON>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface QueueManagerJob {
    id: Any;
    name: GraphQLString;
    data: JSON;
    opts: JSON;
    progress: GraphQLInt;
    delay: GraphQLInt;
    timestamp: GraphQLInt;
    attemptsMade: GraphQLInt;
    failedReason?: Nullable<GraphQLString>;
    stacktrace: Nullable<GraphQLString>[];
    returnvalue?: Nullable<Any>;
    finishedOn?: Nullable<GraphQLInt>;
    processedOn: GraphQLInt;
    state: QueueManagerJobState;
}

export interface QueueManagerQueue {
    id: string;
    prefix: GraphQLString;
    name: GraphQLString;
    waitingJobs: GraphQLInt;
    activeJobs: GraphQLInt;
    completedJobs: GraphQLInt;
    failedJobs: GraphQLInt;
    delayedJobs: GraphQLInt;
    pausedJobs: GraphQLInt;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface CoreLang {
    id: GraphQLString;
    name: GraphQLString;
    image?: Nullable<GraphQLString>;
    iso6392: GraphQLString;
    iso6393: GraphQLString;
    ietf: GraphQLString;
    customCode?: Nullable<GraphQLString>;
    dir: CoreLangDir;
    sort?: Nullable<GraphQLInt>;
    isActive: GraphQLBoolean;
    createdAt?: Nullable<GraphQLString>;
    updatedAt?: Nullable<GraphQLString>;
    deletedAt?: Nullable<GraphQLString>;
}

export interface Pagination {
    total: GraphQLInt;
    count: GraphQLInt;
    rows: Nullable<JSON>[];
}

export type JSON = any;
export type Any = any;
export type Upload = any;
export type GraphQLString = any;
export type GraphQLInt = any;
export type GraphQLFloat = any;
export type GraphQLBoolean = any;
export type GraphQLISODateTime = any;
export type GraphQLTimestamp = any;
export type GraphQLUpload = any;
type Nullable<T> = T | null;
