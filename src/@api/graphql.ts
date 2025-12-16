
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

export enum CommonAdministrativeAreaLevel1MapType {
    ROADMAP = "ROADMAP",
    SATELLITE = "SATELLITE",
    HYBRID = "HYBRID",
    TERRAIN = "TERRAIN"
}

export enum CommonAdministrativeAreaLevel2MapType {
    ROADMAP = "ROADMAP",
    SATELLITE = "SATELLITE",
    HYBRID = "HYBRID",
    TERRAIN = "TERRAIN"
}

export enum CommonAdministrativeAreaLevel3MapType {
    ROADMAP = "ROADMAP",
    SATELLITE = "SATELLITE",
    HYBRID = "HYBRID",
    TERRAIN = "TERRAIN"
}

export enum CommonAttachmentFamilyFitType {
    FIT_CROP = "FIT_CROP",
    FIT_WIDTH = "FIT_WIDTH",
    FIT_HEIGHT = "FIT_HEIGHT",
    FIT_WIDTH_FREE_CROP = "FIT_WIDTH_FREE_CROP",
    FIT_HEIGHT_FREE_CROP = "FIT_HEIGHT_FREE_CROP"
}

export enum CommonAttachmentFamilyFormat {
    JPG = "JPG",
    PNG = "PNG",
    GIF = "GIF",
    TIF = "TIF",
    BMP = "BMP"
}

export enum CommonCountryMapType {
    ROADMAP = "ROADMAP",
    SATELLITE = "SATELLITE",
    HYBRID = "HYBRID",
    TERRAIN = "TERRAIN"
}

export enum CommonAdministrativeArea {
    ADMINISTRATIVE_AREA_LEVEL_1 = "ADMINISTRATIVE_AREA_LEVEL_1",
    ADMINISTRATIVE_AREA_LEVEL_2 = "ADMINISTRATIVE_AREA_LEVEL_2",
    ADMINISTRATIVE_AREA_LEVEL_3 = "ADMINISTRATIVE_AREA_LEVEL_3"
}

export enum CommonLangDir {
    LTR = "LTR",
    RTL = "RTL"
}

export enum IamAccountType {
    USER = "USER",
    SERVICE = "SERVICE"
}

export enum MessageMessageStatus {
    DRAFT = "DRAFT",
    PENDING = "PENDING",
    SENT = "SENT"
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

export enum SearchEngineCollectionStatus {
    CONSOLIDATED = "CONSOLIDATED",
    INDEXING = "INDEXING"
}

export enum ToolsKeyValueType {
    ARRAY = "ARRAY",
    BOOLEAN = "BOOLEAN",
    DATE = "DATE",
    NUMBER = "NUMBER",
    OBJECT = "OBJECT",
    SECRET = "SECRET",
    STRING = "STRING",
    TIME = "TIME",
    TIMESTAMP = "TIMESTAMP"
}

export enum ToolsProcedureType {
    FUNCTION = "FUNCTION",
    PROCEDURE = "PROCEDURE",
    TRIGGER = "TRIGGER"
}

export enum WhatsappMessageStatus {
    ACCEPTED = "ACCEPTED",
    SENT = "SENT",
    DELIVERED = "DELIVERED",
    READ = "READ"
}

export enum WhatsappMessageDirection {
    INPUT = "INPUT",
    OUTPUT = "OUTPUT"
}

export enum WhatsappMessageType {
    AUDIO = "AUDIO",
    BUTTON = "BUTTON",
    CONTACTS = "CONTACTS",
    DOCUMENT = "DOCUMENT",
    IMAGE = "IMAGE",
    INTERACTIVE = "INTERACTIVE",
    LOCATION = "LOCATION",
    ORDER = "ORDER",
    REACTION = "REACTION",
    STICKER = "STICKER",
    SYSTEM = "SYSTEM",
    TEMPLATE = "TEMPLATE",
    TEXT = "TEXT",
    UNKNOWN = "UNKNOWN",
    VIDEO = "VIDEO"
}

export enum CoreLangDir {
    LTR = "LTR",
    RTL = "RTL"
}

export enum CoreSearchKeyLang {
    id = "id",
    iso6392 = "iso6392",
    iso6393 = "iso6393",
    ietf = "ietf"
}

export interface AuditingCreateHttpCommunicationInput {
    id: string;
    tags?: Nullable<Nullable<GraphQLString>[]>;
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
    tags?: Nullable<Nullable<GraphQLString>[]>;
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
    tags?: Nullable<Nullable<GraphQLString>[]>;
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
    tags?: Nullable<Nullable<GraphQLString>[]>;
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
    method?: Nullable<AuditingSideEffectMethod>;
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
    tags?: Nullable<Nullable<GraphQLString>[]>;
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
    tags?: Nullable<Nullable<GraphQLString>[]>;
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

export interface CommonCreateAdministrativeAreaLevel1Input {
    id: string;
    countryId: string;
    code: GraphQLString;
    customCode?: Nullable<GraphQLString>;
    name: GraphQLString;
    slug: GraphQLString;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType?: Nullable<CommonAdministrativeAreaLevel1MapType>;
}

export interface CommonUpdateAdministrativeAreaLevel1ByIdInput {
    id: string;
    countryId?: Nullable<string>;
    code?: Nullable<GraphQLString>;
    customCode?: Nullable<GraphQLString>;
    name?: Nullable<GraphQLString>;
    slug?: Nullable<GraphQLString>;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType?: Nullable<CommonAdministrativeAreaLevel1MapType>;
}

export interface CommonUpdateAdministrativeAreasLevel1Input {
    id?: Nullable<string>;
    countryId?: Nullable<string>;
    code?: Nullable<GraphQLString>;
    customCode?: Nullable<GraphQLString>;
    name?: Nullable<GraphQLString>;
    slug?: Nullable<GraphQLString>;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType?: Nullable<CommonAdministrativeAreaLevel1MapType>;
}

export interface CommonCreateAdministrativeAreaLevel2Input {
    id: string;
    countryId: string;
    administrativeAreaLevel1Id: string;
    code: GraphQLString;
    customCode?: Nullable<GraphQLString>;
    name: GraphQLString;
    slug: GraphQLString;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType?: Nullable<CommonAdministrativeAreaLevel2MapType>;
}

export interface CommonUpdateAdministrativeAreaLevel2ByIdInput {
    id: string;
    countryId?: Nullable<string>;
    administrativeAreaLevel1Id?: Nullable<string>;
    code?: Nullable<GraphQLString>;
    customCode?: Nullable<GraphQLString>;
    name?: Nullable<GraphQLString>;
    slug?: Nullable<GraphQLString>;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType?: Nullable<CommonAdministrativeAreaLevel2MapType>;
}

export interface CommonUpdateAdministrativeAreasLevel2Input {
    id?: Nullable<string>;
    countryId?: Nullable<string>;
    administrativeAreaLevel1Id?: Nullable<string>;
    code?: Nullable<GraphQLString>;
    customCode?: Nullable<GraphQLString>;
    name?: Nullable<GraphQLString>;
    slug?: Nullable<GraphQLString>;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType?: Nullable<CommonAdministrativeAreaLevel2MapType>;
}

export interface CommonCreateAdministrativeAreaLevel3Input {
    id: string;
    countryId: string;
    administrativeAreaLevel1Id: string;
    administrativeAreaLevel2Id: string;
    code: GraphQLString;
    customCode?: Nullable<GraphQLString>;
    name: GraphQLString;
    slug: GraphQLString;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType?: Nullable<CommonAdministrativeAreaLevel3MapType>;
}

export interface CommonUpdateAdministrativeAreaLevel3ByIdInput {
    id: string;
    countryId?: Nullable<string>;
    administrativeAreaLevel1Id?: Nullable<string>;
    administrativeAreaLevel2Id?: Nullable<string>;
    code?: Nullable<GraphQLString>;
    customCode?: Nullable<GraphQLString>;
    name?: Nullable<GraphQLString>;
    slug?: Nullable<GraphQLString>;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType?: Nullable<CommonAdministrativeAreaLevel3MapType>;
}

export interface CommonUpdateAdministrativeAreasLevel3Input {
    id?: Nullable<string>;
    countryId?: Nullable<string>;
    administrativeAreaLevel1Id?: Nullable<string>;
    administrativeAreaLevel2Id?: Nullable<string>;
    code?: Nullable<GraphQLString>;
    customCode?: Nullable<GraphQLString>;
    name?: Nullable<GraphQLString>;
    slug?: Nullable<GraphQLString>;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType?: Nullable<CommonAdministrativeAreaLevel3MapType>;
}

export interface CommonCreateAttachmentFamilyInput {
    id: string;
    resourceId: string;
    code: GraphQLString;
    name: GraphQLString;
    width?: Nullable<GraphQLInt>;
    height?: Nullable<GraphQLInt>;
    fitType?: Nullable<CommonAttachmentFamilyFitType>;
    quality?: Nullable<GraphQLInt>;
    sizes?: Nullable<JSON>;
    format?: Nullable<CommonAttachmentFamilyFormat>;
}

export interface CommonUpdateAttachmentFamilyByIdInput {
    id: string;
    resourceId?: Nullable<string>;
    code?: Nullable<GraphQLString>;
    name?: Nullable<GraphQLString>;
    width?: Nullable<GraphQLInt>;
    height?: Nullable<GraphQLInt>;
    fitType?: Nullable<CommonAttachmentFamilyFitType>;
    quality?: Nullable<GraphQLInt>;
    sizes?: Nullable<JSON>;
    format?: Nullable<CommonAttachmentFamilyFormat>;
}

export interface CommonUpdateAttachmentFamiliesInput {
    id?: Nullable<string>;
    resourceId?: Nullable<string>;
    code?: Nullable<GraphQLString>;
    name?: Nullable<GraphQLString>;
    width?: Nullable<GraphQLInt>;
    height?: Nullable<GraphQLInt>;
    fitType?: Nullable<CommonAttachmentFamilyFitType>;
    quality?: Nullable<GraphQLInt>;
    sizes?: Nullable<JSON>;
    format?: Nullable<CommonAttachmentFamilyFormat>;
}

export interface CommonCreateAttachmentLibraryInput {
    id: string;
    originFilename: GraphQLString;
    filename: GraphQLString;
    mimetype: GraphQLString;
    extension: GraphQLString;
    relativePathSegments: JSON;
    width: GraphQLInt;
    height: GraphQLInt;
    size: GraphQLInt;
    url: GraphQLString;
    meta?: Nullable<JSON>;
}

export interface CommonUpdateAttachmentLibraryByIdInput {
    id: string;
    originFilename?: Nullable<GraphQLString>;
    filename?: Nullable<GraphQLString>;
    mimetype?: Nullable<GraphQLString>;
    extension?: Nullable<GraphQLString>;
    relativePathSegments?: Nullable<JSON>;
    width?: Nullable<GraphQLInt>;
    height?: Nullable<GraphQLInt>;
    size?: Nullable<GraphQLInt>;
    url?: Nullable<GraphQLString>;
    meta?: Nullable<JSON>;
}

export interface CommonUpdateAttachmentLibrariesInput {
    id?: Nullable<string>;
    originFilename?: Nullable<GraphQLString>;
    filename?: Nullable<GraphQLString>;
    mimetype?: Nullable<GraphQLString>;
    extension?: Nullable<GraphQLString>;
    relativePathSegments?: Nullable<JSON>;
    width?: Nullable<GraphQLInt>;
    height?: Nullable<GraphQLInt>;
    size?: Nullable<GraphQLInt>;
    url?: Nullable<GraphQLString>;
    meta?: Nullable<JSON>;
}

export interface CommonAttachmentInput {
    id: string;
    familyId?: Nullable<string>;
    attachableId: string;
    langId?: Nullable<string>;
    sort?: Nullable<GraphQLInt>;
    alt?: Nullable<GraphQLString>;
    title?: Nullable<GraphQLString>;
    originFilename: GraphQLString;
    filename: GraphQLString;
    mimetype: GraphQLString;
    extension: GraphQLString;
    relativePathSegments: JSON;
    width?: Nullable<GraphQLInt>;
    height?: Nullable<GraphQLInt>;
    size: GraphQLInt;
    url: GraphQLString;
    isCropable: GraphQLBoolean;
    isCropped: GraphQLBoolean;
    isUploaded: GraphQLBoolean;
    isChanged: GraphQLBoolean;
    library?: Nullable<CommonCreateAttachmentLibraryInput>;
    libraryId?: Nullable<string>;
    libraryFilename?: Nullable<GraphQLString>;
    sizes?: Nullable<JSON>;
    meta?: Nullable<JSON>;
}

export interface CommonCreateAttachmentInput {
    id: string;
    familyId?: Nullable<string>;
    attachableId: string;
    langId?: Nullable<string>;
    sort?: Nullable<GraphQLInt>;
    alt?: Nullable<GraphQLString>;
    title?: Nullable<GraphQLString>;
    originFilename: GraphQLString;
    filename: GraphQLString;
    mimetype: GraphQLString;
    extension: GraphQLString;
    relativePathSegments: JSON;
    width?: Nullable<GraphQLInt>;
    height?: Nullable<GraphQLInt>;
    size: GraphQLInt;
    url: GraphQLString;
    isCropable: GraphQLBoolean;
    isCropped: GraphQLBoolean;
    isUploaded: GraphQLBoolean;
    isChanged: GraphQLBoolean;
    library?: Nullable<CommonCreateAttachmentLibraryInput>;
    libraryId?: Nullable<string>;
    libraryFilename?: Nullable<GraphQLString>;
    sizes?: Nullable<JSON>;
    meta?: Nullable<JSON>;
}

export interface CommonUpdateAttachmentByIdInput {
    id: string;
    familyId?: Nullable<string>;
    attachableId?: Nullable<string>;
    langId?: Nullable<string>;
    sort?: Nullable<GraphQLInt>;
    alt?: Nullable<GraphQLString>;
    title?: Nullable<GraphQLString>;
    originFilename?: Nullable<GraphQLString>;
    filename?: Nullable<GraphQLString>;
    mimetype?: Nullable<GraphQLString>;
    extension?: Nullable<GraphQLString>;
    relativePathSegments?: Nullable<JSON>;
    width?: Nullable<GraphQLInt>;
    height?: Nullable<GraphQLInt>;
    size?: Nullable<GraphQLInt>;
    url?: Nullable<GraphQLString>;
    isCropable?: Nullable<GraphQLBoolean>;
    isCropped: GraphQLBoolean;
    isUploaded: GraphQLBoolean;
    isChanged: GraphQLBoolean;
    library?: Nullable<CommonCreateAttachmentLibraryInput>;
    libraryId?: Nullable<string>;
    libraryFilename?: Nullable<GraphQLString>;
    sizes?: Nullable<JSON>;
    meta?: Nullable<JSON>;
}

export interface CommonUpdateAttachmentsInput {
    id?: Nullable<string>;
    familyId?: Nullable<string>;
    attachableId?: Nullable<string>;
    langId?: Nullable<string>;
    sort?: Nullable<GraphQLInt>;
    alt?: Nullable<GraphQLString>;
    title?: Nullable<GraphQLString>;
    originFilename?: Nullable<GraphQLString>;
    filename?: Nullable<GraphQLString>;
    mimetype?: Nullable<GraphQLString>;
    extension?: Nullable<GraphQLString>;
    relativePathSegments?: Nullable<JSON>;
    width?: Nullable<GraphQLInt>;
    height?: Nullable<GraphQLInt>;
    size?: Nullable<GraphQLInt>;
    url?: Nullable<GraphQLString>;
    isCropable?: Nullable<GraphQLBoolean>;
    libraryId?: Nullable<string>;
    libraryFilename?: Nullable<GraphQLString>;
    sizes?: Nullable<JSON>;
    meta?: Nullable<JSON>;
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
    mapType?: Nullable<CommonCountryMapType>;
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

export interface CommonCropPropertiesInput {
    x: GraphQLInt;
    y: GraphQLInt;
    width: GraphQLInt;
    height: GraphQLInt;
    rotate: GraphQLInt;
    scaleX: GraphQLInt;
    scaleY: GraphQLInt;
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

export interface CommonCreateResourceInput {
    id: string;
    code: GraphQLString;
    name: GraphQLString;
    isActive: GraphQLBoolean;
    hasAttachments: GraphQLBoolean;
}

export interface CommonUpdateResourceByIdInput {
    id: string;
    code?: Nullable<GraphQLString>;
    name?: Nullable<GraphQLString>;
    isActive?: Nullable<GraphQLBoolean>;
    hasAttachments?: Nullable<GraphQLBoolean>;
}

export interface CommonUpdateResourcesInput {
    id?: Nullable<string>;
    code?: Nullable<GraphQLString>;
    name?: Nullable<GraphQLString>;
    isActive?: Nullable<GraphQLBoolean>;
    hasAttachments?: Nullable<GraphQLBoolean>;
}

export interface IamUpdateMeAccountInput {
    id: string;
    email?: Nullable<GraphQLString>;
    username?: Nullable<GraphQLString>;
    user?: Nullable<IamUpdateUserByIdInput>;
}

export interface IamCreateAccountInput {
    id: string;
    type: IamAccountType;
    code?: Nullable<GraphQLString>;
    email?: Nullable<GraphQLString>;
    username: GraphQLString;
    isActive: GraphQLBoolean;
    clientId?: Nullable<string>;
    tags?: Nullable<Nullable<GraphQLString>[]>;
    scopes?: Nullable<Nullable<GraphQLString>[]>;
    meta?: Nullable<JSON>;
    roleIds?: Nullable<Nullable<string>[]>;
    tenantIds?: Nullable<Nullable<string>[]>;
    hasAddChildTenants?: Nullable<GraphQLBoolean>;
    user?: Nullable<IamCreateUserInput>;
}

export interface IamUpdateAccountByIdInput {
    id: string;
    type?: Nullable<IamAccountType>;
    code?: Nullable<GraphQLString>;
    email?: Nullable<GraphQLString>;
    username?: Nullable<GraphQLString>;
    isActive?: Nullable<GraphQLBoolean>;
    clientId?: Nullable<string>;
    tags?: Nullable<Nullable<GraphQLString>[]>;
    scopes?: Nullable<Nullable<GraphQLString>[]>;
    meta?: Nullable<JSON>;
    roleIds?: Nullable<Nullable<string>[]>;
    tenantIds?: Nullable<Nullable<string>[]>;
    hasAddChildTenants?: Nullable<GraphQLBoolean>;
    user?: Nullable<IamUpdateUserByIdInput>;
}

export interface IamUpdateAccountsInput {
    id?: Nullable<string>;
    type?: Nullable<IamAccountType>;
    code?: Nullable<GraphQLString>;
    email?: Nullable<GraphQLString>;
    username?: Nullable<GraphQLString>;
    isActive?: Nullable<GraphQLBoolean>;
    clientId?: Nullable<string>;
    tags?: Nullable<Nullable<GraphQLString>[]>;
    scopes?: Nullable<Nullable<GraphQLString>[]>;
    dApplicationCodes?: Nullable<Nullable<GraphQLString>[]>;
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

export interface IamUpdatePermissionRoleByIdInput {
    permissionId: string;
    roleId: string;
}

export interface IamUpdatePermissionsRolesInput {
    permissionId?: Nullable<string>;
    roleId?: Nullable<string>;
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

export interface IamCreateRoleAccountInput {
    roleId: string;
    accountId: string;
}

export interface IamUpdateRoleAccountByIdInput {
    roleId: string;
    accountId: string;
}

export interface IamUpdateRolesAccountsInput {
    roleId?: Nullable<string>;
    accountId?: Nullable<string>;
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

export interface IamInheritRoleInput {
    parentRoleId: string;
    childRoleId: string;
}

export interface IamCreateTagInput {
    id: string;
    name: GraphQLString;
}

export interface IamUpdateTagByIdInput {
    id: string;
    name?: Nullable<GraphQLString>;
}

export interface IamUpdateTagsInput {
    id?: Nullable<string>;
    name?: Nullable<GraphQLString>;
}

export interface IamCreateTenantAccountInput {
    tenantId: string;
    accountId: string;
}

export interface IamUpdateTenantAccountByIdInput {
    tenantId: string;
    accountId: string;
}

export interface IamUpdateTenantsAccountsInput {
    tenantId?: Nullable<string>;
    accountId?: Nullable<string>;
}

export interface IamCreateTenantInput {
    id: string;
    parentId?: Nullable<string>;
    name: GraphQLString;
    code?: Nullable<GraphQLString>;
    logo?: Nullable<JSON>;
    isActive: GraphQLBoolean;
    meta?: Nullable<JSON>;
    accountIds?: Nullable<Nullable<string>[]>;
}

export interface IamUpdateTenantByIdInput {
    id: string;
    parentId?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    code?: Nullable<GraphQLString>;
    logo?: Nullable<JSON>;
    isActive?: Nullable<GraphQLBoolean>;
    meta?: Nullable<JSON>;
    accountIds?: Nullable<Nullable<string>[]>;
}

export interface IamUpdateTenantsInput {
    id?: Nullable<string>;
    parentId?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    code?: Nullable<GraphQLString>;
    logo?: Nullable<JSON>;
    isActive?: Nullable<GraphQLBoolean>;
    meta?: Nullable<JSON>;
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
    password: GraphQLString;
    isTwoFactorAuthenticationEnabled: GraphQLBoolean;
    twoFactorAuthenticationSecret?: Nullable<GraphQLString>;
    rememberToken?: Nullable<GraphQLString>;
}

export interface IamUpdateUserByIdInput {
    id: string;
    name?: Nullable<GraphQLString>;
    surname?: Nullable<GraphQLString>;
    avatar?: Nullable<GraphQLString>;
    mobile?: Nullable<GraphQLString>;
    langId?: Nullable<string>;
    password?: Nullable<GraphQLString>;
    isTwoFactorAuthenticationEnabled?: Nullable<GraphQLBoolean>;
    twoFactorAuthenticationSecret?: Nullable<GraphQLString>;
    rememberToken?: Nullable<GraphQLString>;
}

export interface IamUpdateUsersInput {
    id?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    surname?: Nullable<GraphQLString>;
    avatar?: Nullable<GraphQLString>;
    mobile?: Nullable<GraphQLString>;
    langId?: Nullable<string>;
    password?: Nullable<GraphQLString>;
    isTwoFactorAuthenticationEnabled?: Nullable<GraphQLBoolean>;
    twoFactorAuthenticationSecret?: Nullable<GraphQLString>;
    rememberToken?: Nullable<GraphQLString>;
}

export interface IamForgotPasswordUserInput {
    email: GraphQLString;
    origin: GraphQLString;
}

export interface IamResetPasswordUserInput {
    token: GraphQLString;
    password: GraphQLString;
}

export interface MessageCreateInboxSettingInput {
    id: string;
    accountId: string;
    lastReadMessageRowId: GraphQLInt;
}

export interface MessageUpdateInboxSettingByIdInput {
    id: string;
    accountId?: Nullable<string>;
    lastReadMessageRowId?: Nullable<GraphQLInt>;
}

export interface MessageUpdateInboxSettingsInput {
    id?: Nullable<string>;
    accountId?: Nullable<string>;
    lastReadMessageRowId?: Nullable<GraphQLInt>;
}

export interface MessageCreateInboxInput {
    id: string;
    tenantIds?: Nullable<Nullable<string>[]>;
    messageId?: Nullable<string>;
    messageRowId: GraphQLInt;
    accountId: string;
    accountCode?: Nullable<GraphQLString>;
    isImportant: GraphQLBoolean;
    sentAt: GraphQLTimestamp;
    subject: GraphQLString;
    body: GraphQLString;
    link?: Nullable<GraphQLString>;
    isInternalLink?: Nullable<GraphQLBoolean>;
    image?: Nullable<JSON>;
    icon?: Nullable<GraphQLString>;
    attachments?: Nullable<JSON>;
    isRead: GraphQLBoolean;
    isReadAtLeastOnce: GraphQLBoolean;
    meta?: Nullable<JSON>;
}

export interface MessageUpdateInboxByIdInput {
    id: string;
    tenantIds?: Nullable<Nullable<string>[]>;
    messageId?: Nullable<string>;
    messageRowId?: Nullable<GraphQLInt>;
    accountId?: Nullable<string>;
    accountCode?: Nullable<GraphQLString>;
    isImportant?: Nullable<GraphQLBoolean>;
    sentAt?: Nullable<GraphQLTimestamp>;
    subject?: Nullable<GraphQLString>;
    body?: Nullable<GraphQLString>;
    link?: Nullable<GraphQLString>;
    isInternalLink?: Nullable<GraphQLBoolean>;
    image?: Nullable<JSON>;
    icon?: Nullable<GraphQLString>;
    attachments?: Nullable<JSON>;
    isRead?: Nullable<GraphQLBoolean>;
    isReadAtLeastOnce?: Nullable<GraphQLBoolean>;
    meta?: Nullable<JSON>;
}

export interface MessageUpdateInboxesInput {
    id?: Nullable<string>;
    tenantIds?: Nullable<Nullable<string>[]>;
    messageId?: Nullable<string>;
    messageRowId?: Nullable<GraphQLInt>;
    accountId?: Nullable<string>;
    accountCode?: Nullable<GraphQLString>;
    isImportant?: Nullable<GraphQLBoolean>;
    sentAt?: Nullable<GraphQLTimestamp>;
    subject?: Nullable<GraphQLString>;
    body?: Nullable<GraphQLString>;
    link?: Nullable<GraphQLString>;
    isInternalLink?: Nullable<GraphQLBoolean>;
    image?: Nullable<JSON>;
    icon?: Nullable<GraphQLString>;
    attachments?: Nullable<JSON>;
    isRead?: Nullable<GraphQLBoolean>;
    isReadAtLeastOnce?: Nullable<GraphQLBoolean>;
    meta?: Nullable<JSON>;
}

export interface MessageCreateMessageInput {
    id: string;
    tenantIds?: Nullable<Nullable<string>[]>;
    accountRecipientIds?: Nullable<Nullable<string>[]>;
    tenantRecipientIds?: Nullable<Nullable<string>[]>;
    scopeRecipients?: Nullable<Nullable<GraphQLString>[]>;
    tagRecipients?: Nullable<Nullable<GraphQLString>[]>;
    sendAt?: Nullable<GraphQLTimestamp>;
    isImportant: GraphQLBoolean;
    subject: GraphQLString;
    body: GraphQLString;
    link?: Nullable<GraphQLString>;
    isInternalLink?: Nullable<GraphQLBoolean>;
    image?: Nullable<JSON>;
    icon?: Nullable<GraphQLString>;
    attachmentsInputFile?: Nullable<Nullable<Upload>[]>;
    meta?: Nullable<JSON>;
}

export interface MessageUpdateMessageByIdInput {
    id: string;
    tenantIds?: Nullable<Nullable<string>[]>;
    accountRecipientIds?: Nullable<Nullable<string>[]>;
    tenantRecipientIds?: Nullable<Nullable<string>[]>;
    scopeRecipients?: Nullable<Nullable<GraphQLString>[]>;
    tagRecipients?: Nullable<Nullable<GraphQLString>[]>;
    sendAt?: Nullable<GraphQLTimestamp>;
    isImportant?: Nullable<GraphQLBoolean>;
    subject?: Nullable<GraphQLString>;
    body?: Nullable<GraphQLString>;
    link?: Nullable<GraphQLString>;
    isInternalLink?: Nullable<GraphQLBoolean>;
    image?: Nullable<JSON>;
    icon?: Nullable<GraphQLString>;
    attachmentsInputFile?: Nullable<Nullable<Upload>[]>;
    meta?: Nullable<JSON>;
}

export interface MessageUpdateMessagesInput {
    id?: Nullable<string>;
    tenantIds?: Nullable<Nullable<string>[]>;
    status?: Nullable<MessageMessageStatus>;
    accountRecipientIds?: Nullable<Nullable<string>[]>;
    tenantRecipientIds?: Nullable<Nullable<string>[]>;
    scopeRecipients?: Nullable<Nullable<GraphQLString>[]>;
    tagRecipients?: Nullable<Nullable<GraphQLString>[]>;
    sendAt?: Nullable<GraphQLTimestamp>;
    isImportant?: Nullable<GraphQLBoolean>;
    subject?: Nullable<GraphQLString>;
    body?: Nullable<GraphQLString>;
    link?: Nullable<GraphQLString>;
    isInternalLink?: Nullable<GraphQLBoolean>;
    image?: Nullable<JSON>;
    icon?: Nullable<GraphQLString>;
    attachments?: Nullable<JSON>;
    totalRecipients?: Nullable<GraphQLInt>;
    reads?: Nullable<GraphQLInt>;
    meta?: Nullable<JSON>;
}

export interface MessageCreateOutboxInput {
    id: string;
    messageId: string;
    accountRecipientIds?: Nullable<Nullable<string>[]>;
    tenantRecipientIds?: Nullable<Nullable<string>[]>;
    scopeRecipients?: Nullable<Nullable<GraphQLString>[]>;
    tagRecipients?: Nullable<Nullable<GraphQLString>[]>;
    meta?: Nullable<JSON>;
}

export interface MessageUpdateOutboxByIdInput {
    id: string;
    messageId?: Nullable<string>;
    accountRecipientIds?: Nullable<Nullable<string>[]>;
    tenantRecipientIds?: Nullable<Nullable<string>[]>;
    scopeRecipients?: Nullable<Nullable<GraphQLString>[]>;
    tagRecipients?: Nullable<Nullable<GraphQLString>[]>;
    meta?: Nullable<JSON>;
}

export interface MessageUpdateOutboxesInput {
    id?: Nullable<string>;
    messageId?: Nullable<string>;
    accountRecipientIds?: Nullable<Nullable<string>[]>;
    tenantRecipientIds?: Nullable<Nullable<string>[]>;
    scopeRecipients?: Nullable<Nullable<GraphQLString>[]>;
    tagRecipients?: Nullable<Nullable<GraphQLString>[]>;
    meta?: Nullable<JSON>;
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

export interface OAuthCreateApplicationClientInput {
    applicationId: string;
    clientId: string;
}

export interface OAuthUpdateApplicationClientByIdInput {
    applicationId: string;
    clientId: string;
}

export interface OAuthUpdateApplicationsClientsInput {
    applicationId?: Nullable<string>;
    clientId?: Nullable<string>;
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
    roleIds?: Nullable<Nullable<string>[]>;
}

export interface OAuthUpdateScopeByIdInput {
    id: string;
    code?: Nullable<GraphQLString>;
    name?: Nullable<GraphQLString>;
    roleIds?: Nullable<Nullable<string>[]>;
}

export interface OAuthUpdateScopesInput {
    id?: Nullable<string>;
    code?: Nullable<GraphQLString>;
    name?: Nullable<GraphQLString>;
    roleIds?: Nullable<Nullable<string>[]>;
}

export interface QueueManagerCreateJobRegistryInput {
    id: string;
    queueName: GraphQLString;
    state: QueueManagerJobRegistryState;
    jobId: GraphQLString;
    jobName?: Nullable<GraphQLString>;
    tags?: Nullable<Nullable<GraphQLString>[]>;
}

export interface QueueManagerUpdateJobRegistryByIdInput {
    id: string;
    queueName?: Nullable<GraphQLString>;
    state?: Nullable<QueueManagerJobRegistryState>;
    jobId?: Nullable<GraphQLString>;
    jobName?: Nullable<GraphQLString>;
    tags?: Nullable<Nullable<GraphQLString>[]>;
}

export interface QueueManagerUpdateJobsRegistryInput {
    id?: Nullable<string>;
    queueName?: Nullable<GraphQLString>;
    state?: Nullable<QueueManagerJobRegistryState>;
    jobId?: Nullable<GraphQLString>;
    jobName?: Nullable<GraphQLString>;
    tags?: Nullable<Nullable<GraphQLString>[]>;
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

export interface SearchEngineCreateCollectionInput {
    id: string;
    name: GraphQLString;
    alias?: Nullable<GraphQLString>;
    documentsNumber?: Nullable<GraphQLInt>;
    defaultSortingField?: Nullable<GraphQLString>;
    numMemoryShards?: Nullable<GraphQLInt>;
    timestampCreatedAt?: Nullable<GraphQLInt>;
    isEnableNestedFields: GraphQLBoolean;
}

export interface SearchEngineUpdateCollectionByIdInput {
    id: string;
    name?: Nullable<GraphQLString>;
    alias?: Nullable<GraphQLString>;
    documentsNumber?: Nullable<GraphQLInt>;
    defaultSortingField?: Nullable<GraphQLString>;
    numMemoryShards?: Nullable<GraphQLInt>;
    timestampCreatedAt?: Nullable<GraphQLInt>;
    isEnableNestedFields?: Nullable<GraphQLBoolean>;
}

export interface SearchEngineUpdateCollectionsInput {
    id?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    alias?: Nullable<GraphQLString>;
    documentsNumber?: Nullable<GraphQLInt>;
    defaultSortingField?: Nullable<GraphQLString>;
    numMemoryShards?: Nullable<GraphQLInt>;
    timestampCreatedAt?: Nullable<GraphQLInt>;
    isEnableNestedFields?: Nullable<GraphQLBoolean>;
}

export interface SearchEngineCreateFieldInput {
    id: string;
    collectionId: string;
    name: GraphQLString;
    type: GraphQLString;
    isNullable: GraphQLBoolean;
}

export interface SearchEngineUpdateFieldByIdInput {
    id: string;
    collectionId?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    type?: Nullable<GraphQLString>;
    isNullable?: Nullable<GraphQLBoolean>;
}

export interface SearchEngineUpdateFieldsInput {
    id?: Nullable<string>;
    collectionId?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    type?: Nullable<GraphQLString>;
    isNullable?: Nullable<GraphQLBoolean>;
}

export interface StorageAccountFileManagerFileInput {
    filename: GraphQLString;
    relativePathSegments: Nullable<GraphQLString>[];
    containerName?: Nullable<GraphQLString>;
}

export interface StorageAccountFileManagerFileUploadedInput {
    id: string;
    file: Upload;
    size?: Nullable<GraphQLInt>;
    relativePathSegments: Nullable<GraphQLString>[];
    containerName?: Nullable<GraphQLString>;
    hasCreateLibrary?: Nullable<GraphQLBoolean>;
    meta?: Nullable<JSON>;
}

export interface SupportCreateCommentInput {
    id: string;
    parentId?: Nullable<string>;
    externalId?: Nullable<GraphQLString>;
    externalParentId?: Nullable<string>;
    issueId?: Nullable<string>;
    accountId?: Nullable<string>;
    accountUsername?: Nullable<GraphQLString>;
    displayName?: Nullable<GraphQLString>;
    description: GraphQLString;
    attachments?: Nullable<JSON>;
    screenRecording?: Nullable<JSON>;
    meta?: Nullable<JSON>;
}

export interface SupportUpdateCommentByIdInput {
    id: string;
    parentId?: Nullable<string>;
    externalId?: Nullable<GraphQLString>;
    externalParentId?: Nullable<string>;
    issueId?: Nullable<string>;
    accountId?: Nullable<string>;
    accountUsername?: Nullable<GraphQLString>;
    displayName?: Nullable<GraphQLString>;
    description?: Nullable<GraphQLString>;
    attachments?: Nullable<JSON>;
    screenRecording?: Nullable<JSON>;
    meta?: Nullable<JSON>;
}

export interface SupportUpdateCommentsInput {
    id?: Nullable<string>;
    parentId?: Nullable<string>;
    externalId?: Nullable<GraphQLString>;
    externalParentId?: Nullable<string>;
    issueId?: Nullable<string>;
    accountId?: Nullable<string>;
    accountUsername?: Nullable<GraphQLString>;
    displayName?: Nullable<GraphQLString>;
    description?: Nullable<GraphQLString>;
    attachments?: Nullable<JSON>;
    screenRecording?: Nullable<JSON>;
    meta?: Nullable<JSON>;
}

export interface SupportCreateIssueInput {
    id: string;
    externalId?: Nullable<GraphQLString>;
    externalStatus?: Nullable<GraphQLString>;
    externalColorStatus?: Nullable<GraphQLString>;
    accountId?: Nullable<string>;
    accountUsername?: Nullable<GraphQLString>;
    displayName?: Nullable<GraphQLString>;
    frontEnvironment?: Nullable<GraphQLString>;
    frontVersion?: Nullable<GraphQLString>;
    backEnvironment?: Nullable<GraphQLString>;
    backVersion?: Nullable<GraphQLString>;
    subject: GraphQLString;
    description: GraphQLString;
    attachments?: Nullable<Nullable<StorageAccountFileManagerFileUploadedInput>[]>;
    screenRecording?: Nullable<StorageAccountFileManagerFileUploadedInput>;
    meta?: Nullable<JSON>;
}

export interface SupportUpdateIssueByIdInput {
    id: string;
    externalId?: Nullable<GraphQLString>;
    externalStatus?: Nullable<GraphQLString>;
    externalColorStatus?: Nullable<GraphQLString>;
    accountId?: Nullable<string>;
    accountUsername?: Nullable<GraphQLString>;
    displayName?: Nullable<GraphQLString>;
    frontEnvironment?: Nullable<GraphQLString>;
    frontVersion?: Nullable<GraphQLString>;
    backEnvironment?: Nullable<GraphQLString>;
    backVersion?: Nullable<GraphQLString>;
    subject?: Nullable<GraphQLString>;
    description?: Nullable<GraphQLString>;
    attachments?: Nullable<Nullable<StorageAccountFileManagerFileUploadedInput>[]>;
    screenRecording?: Nullable<StorageAccountFileManagerFileUploadedInput>;
    meta?: Nullable<JSON>;
}

export interface SupportUpdateIssuesInput {
    id?: Nullable<string>;
    externalId?: Nullable<GraphQLString>;
    externalStatus?: Nullable<GraphQLString>;
    externalColorStatus?: Nullable<GraphQLString>;
    accountId?: Nullable<string>;
    accountUsername?: Nullable<GraphQLString>;
    displayName?: Nullable<GraphQLString>;
    frontEnvironment?: Nullable<GraphQLString>;
    frontVersion?: Nullable<GraphQLString>;
    backEnvironment?: Nullable<GraphQLString>;
    backVersion?: Nullable<GraphQLString>;
    subject?: Nullable<GraphQLString>;
    description?: Nullable<GraphQLString>;
    attachments?: Nullable<Nullable<StorageAccountFileManagerFileUploadedInput>[]>;
    screenRecording?: Nullable<StorageAccountFileManagerFileUploadedInput>;
    meta?: Nullable<JSON>;
}

export interface ToolsCreateKeyValueInput {
    id: string;
    key: GraphQLString;
    type: ToolsKeyValueType;
    value?: Nullable<GraphQLString>;
    isCached: GraphQLBoolean;
    isActive: GraphQLBoolean;
    description?: Nullable<GraphQLString>;
}

export interface ToolsUpdateKeyValueByIdInput {
    id: string;
    key?: Nullable<GraphQLString>;
    type?: Nullable<ToolsKeyValueType>;
    value?: Nullable<GraphQLString>;
    isCached?: Nullable<GraphQLBoolean>;
    isActive?: Nullable<GraphQLBoolean>;
    description?: Nullable<GraphQLString>;
}

export interface ToolsUpdateKeyValuesInput {
    id?: Nullable<string>;
    key?: Nullable<GraphQLString>;
    type?: Nullable<ToolsKeyValueType>;
    value?: Nullable<GraphQLString>;
    isCached?: Nullable<GraphQLBoolean>;
    isActive?: Nullable<GraphQLBoolean>;
    description?: Nullable<GraphQLString>;
}

export interface ToolsCreateMigrationTemplateInput {
    id: string;
    name: GraphQLString;
    version: GraphQLString;
    upScript: GraphQLString;
    downScript: GraphQLString;
    sort: GraphQLInt;
}

export interface ToolsCreateMigrationInput {
    id: string;
    name: GraphQLString;
    version: GraphQLString;
    isActive: GraphQLBoolean;
    upScript?: Nullable<GraphQLString>;
    downScript?: Nullable<GraphQLString>;
    sort?: Nullable<GraphQLInt>;
    executedAt?: Nullable<GraphQLTimestamp>;
}

export interface ToolsUpdateMigrationByIdInput {
    id: string;
    name?: Nullable<GraphQLString>;
    version?: Nullable<GraphQLString>;
    isActive?: Nullable<GraphQLBoolean>;
    upScript?: Nullable<GraphQLString>;
    downScript?: Nullable<GraphQLString>;
    sort?: Nullable<GraphQLInt>;
    executedAt?: Nullable<GraphQLTimestamp>;
}

export interface ToolsUpdateMigrationsInput {
    id?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    version?: Nullable<GraphQLString>;
    isActive?: Nullable<GraphQLBoolean>;
    upScript?: Nullable<GraphQLString>;
    downScript?: Nullable<GraphQLString>;
    sort?: Nullable<GraphQLInt>;
    executedAt?: Nullable<GraphQLTimestamp>;
}

export interface ToolsCreateProcedureTemplateInput {
    id: string;
    name: GraphQLString;
    type: ToolsProcedureType;
    version: GraphQLString;
    upScript: GraphQLString;
    downScript: GraphQLString;
    sort: GraphQLInt;
}

export interface ToolsCreateProcedureInput {
    id: string;
    name: GraphQLString;
    type: ToolsProcedureType;
    version: GraphQLString;
    isActive: GraphQLBoolean;
    upScript?: Nullable<GraphQLString>;
    downScript?: Nullable<GraphQLString>;
    sort?: Nullable<GraphQLInt>;
    executedAt?: Nullable<GraphQLTimestamp>;
    checkedAt?: Nullable<GraphQLTimestamp>;
}

export interface ToolsUpdateProcedureByIdInput {
    id: string;
    name?: Nullable<GraphQLString>;
    type?: Nullable<ToolsProcedureType>;
    version?: Nullable<GraphQLString>;
    isActive?: Nullable<GraphQLBoolean>;
    upScript?: Nullable<GraphQLString>;
    downScript?: Nullable<GraphQLString>;
    sort?: Nullable<GraphQLInt>;
    executedAt?: Nullable<GraphQLTimestamp>;
    checkedAt?: Nullable<GraphQLTimestamp>;
}

export interface ToolsUpdateProceduresInput {
    id?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    type?: Nullable<ToolsProcedureType>;
    version?: Nullable<GraphQLString>;
    isActive?: Nullable<GraphQLBoolean>;
    upScript?: Nullable<GraphQLString>;
    downScript?: Nullable<GraphQLString>;
    sort?: Nullable<GraphQLInt>;
    executedAt?: Nullable<GraphQLTimestamp>;
    checkedAt?: Nullable<GraphQLTimestamp>;
}

export interface ToolsCreateWebhookLogInput {
    id: string;
    url: GraphQLString;
    headerRequest?: Nullable<JSON>;
    bodyRequest?: Nullable<JSON>;
}

export interface ToolsUpdateWebhookLogByIdInput {
    id: string;
    url?: Nullable<GraphQLString>;
    headerRequest?: Nullable<JSON>;
    bodyRequest?: Nullable<JSON>;
}

export interface ToolsUpdateWebhookLogsInput {
    id?: Nullable<string>;
    url?: Nullable<GraphQLString>;
    headerRequest?: Nullable<JSON>;
    bodyRequest?: Nullable<JSON>;
}

export interface ToolsCreateWebhookInput {
    id: string;
    name: GraphQLString;
    service: GraphQLString;
    endpoint: GraphQLString;
    externalId?: Nullable<GraphQLString>;
    events?: Nullable<Nullable<GraphQLString>[]>;
    secret?: Nullable<GraphQLString>;
    meta?: Nullable<JSON>;
}

export interface ToolsUpdateWebhookByIdInput {
    id: string;
    name?: Nullable<GraphQLString>;
    service?: Nullable<GraphQLString>;
    endpoint?: Nullable<GraphQLString>;
    externalId?: Nullable<GraphQLString>;
    events?: Nullable<Nullable<GraphQLString>[]>;
    secret?: Nullable<GraphQLString>;
    meta?: Nullable<JSON>;
}

export interface ToolsUpdateWebhooksInput {
    id?: Nullable<string>;
    name?: Nullable<GraphQLString>;
    service?: Nullable<GraphQLString>;
    endpoint?: Nullable<GraphQLString>;
    externalId?: Nullable<GraphQLString>;
    events?: Nullable<Nullable<GraphQLString>[]>;
    secret?: Nullable<GraphQLString>;
    meta?: Nullable<JSON>;
}

export interface WhatsappCreateConversationInput {
    id: string;
    wabaConversationId: GraphQLString;
    timelineId: string;
    wabaContactId: GraphQLString;
    expiration: GraphQLString;
    category: GraphQLString;
    isBillable: GraphQLBoolean;
    pricingModel: GraphQLString;
}

export interface WhatsappUpdateConversationByIdInput {
    id: string;
    wabaConversationId?: Nullable<GraphQLString>;
    timelineId?: Nullable<string>;
    wabaContactId?: Nullable<GraphQLString>;
    expiration?: Nullable<GraphQLString>;
    category?: Nullable<GraphQLString>;
    isBillable?: Nullable<GraphQLBoolean>;
    pricingModel?: Nullable<GraphQLString>;
}

export interface WhatsappUpdateConversationsInput {
    id?: Nullable<string>;
    wabaConversationId?: Nullable<GraphQLString>;
    timelineId?: Nullable<string>;
    wabaContactId?: Nullable<GraphQLString>;
    expiration?: Nullable<GraphQLString>;
    category?: Nullable<GraphQLString>;
    isBillable?: Nullable<GraphQLBoolean>;
    pricingModel?: Nullable<GraphQLString>;
}

export interface WhatsappCreateMessageInput {
    id: string;
    wabaMessageId: GraphQLString;
    direction: WhatsappMessageDirection;
    accountId?: Nullable<string>;
    wabaContactId: GraphQLString;
    contactName?: Nullable<GraphQLString>;
    type: WhatsappMessageType;
    payload: JSON;
}

export interface WhatsappUpdateMessageByIdInput {
    id: string;
    wabaMessageId?: Nullable<GraphQLString>;
    direction?: Nullable<WhatsappMessageDirection>;
    accountId?: Nullable<string>;
    wabaContactId?: Nullable<GraphQLString>;
    contactName?: Nullable<GraphQLString>;
    type?: Nullable<WhatsappMessageType>;
    payload?: Nullable<JSON>;
}

export interface WhatsappUpdateMessagesInput {
    id?: Nullable<string>;
    wabaMessageId?: Nullable<GraphQLString>;
    timelineId?: Nullable<string>;
    conversationId?: Nullable<string>;
    statuses?: Nullable<Nullable<GraphQLString>[]>;
    direction?: Nullable<WhatsappMessageDirection>;
    accountId?: Nullable<string>;
    wabaContactId?: Nullable<GraphQLString>;
    contactName?: Nullable<GraphQLString>;
    type?: Nullable<WhatsappMessageType>;
    payload?: Nullable<JSON>;
}

export interface WhatsappCreateTimelineInput {
    id: string;
    accounts?: Nullable<Nullable<string>[]>;
    wabaPhoneNumberId: GraphQLString;
    wabaContactId: GraphQLString;
}

export interface WhatsappUpdateTimelineByIdInput {
    id: string;
    accounts?: Nullable<Nullable<string>[]>;
    wabaPhoneNumberId?: Nullable<GraphQLString>;
    wabaContactId?: Nullable<GraphQLString>;
}

export interface WhatsappUpdateTimelinesInput {
    id?: Nullable<string>;
    accounts?: Nullable<Nullable<string>[]>;
    wabaPhoneNumberId?: Nullable<GraphQLString>;
    wabaContactId?: Nullable<GraphQLString>;
}

export interface QueryStatement {
    where?: Nullable<JSON>;
    attributes?: Nullable<JSON>;
    include?: Nullable<JSON>;
    order?: Nullable<JSON>;
    group?: Nullable<JSON>;
    limit?: Nullable<GraphQLInt>;
    offset?: Nullable<GraphQLInt>;
    lock?: Nullable<Any>;
    skipLocked?: Nullable<GraphQLBoolean>;
    raw?: Nullable<GraphQLBoolean>;
    having?: Nullable<Any>;
    subQuery?: Nullable<GraphQLBoolean>;
    indexHints?: Nullable<JSON>;
    distinct?: Nullable<GraphQLBoolean>;
    col?: Nullable<GraphQLString>;
}

export interface AuditingHttpCommunication {
    id: string;
    rowId: GraphQLInt;
    tags?: Nullable<Nullable<GraphQLString>[]>;
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
    commonFindAdministrativeAreaLevel1(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel1> | Promise<Nullable<CommonAdministrativeAreaLevel1>>;
    commonFindAdministrativeAreaLevel1ById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel1> | Promise<Nullable<CommonAdministrativeAreaLevel1>>;
    commonGetAdministrativeAreasLevel1(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel1>[] | Promise<Nullable<CommonAdministrativeAreaLevel1>[]>;
    commonPaginateAdministrativeAreasLevel1(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    commonFindAdministrativeAreaLevel2(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel2> | Promise<Nullable<CommonAdministrativeAreaLevel2>>;
    commonFindAdministrativeAreaLevel2ById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel2> | Promise<Nullable<CommonAdministrativeAreaLevel2>>;
    commonGetAdministrativeAreasLevel2(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel2>[] | Promise<Nullable<CommonAdministrativeAreaLevel2>[]>;
    commonPaginateAdministrativeAreasLevel2(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    commonFindAdministrativeAreaLevel3(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel3> | Promise<Nullable<CommonAdministrativeAreaLevel3>>;
    commonFindAdministrativeAreaLevel3ById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel3> | Promise<Nullable<CommonAdministrativeAreaLevel3>>;
    commonGetAdministrativeAreasLevel3(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel3>[] | Promise<Nullable<CommonAdministrativeAreaLevel3>[]>;
    commonPaginateAdministrativeAreasLevel3(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    commonFindAttachmentFamily(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAttachmentFamily> | Promise<Nullable<CommonAttachmentFamily>>;
    commonFindAttachmentFamilyById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<CommonAttachmentFamily> | Promise<Nullable<CommonAttachmentFamily>>;
    commonGetAttachmentFamilies(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAttachmentFamily>[] | Promise<Nullable<CommonAttachmentFamily>[]>;
    commonPaginateAttachmentFamilies(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    commonFindAttachmentLibrary(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAttachmentLibrary> | Promise<Nullable<CommonAttachmentLibrary>>;
    commonFindAttachmentLibraryById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<CommonAttachmentLibrary> | Promise<Nullable<CommonAttachmentLibrary>>;
    commonGetAttachmentLibraries(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAttachmentLibrary>[] | Promise<Nullable<CommonAttachmentLibrary>[]>;
    commonPaginateAttachmentLibraries(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    commonFindAttachment(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAttachment> | Promise<Nullable<CommonAttachment>>;
    commonFindAttachmentById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<CommonAttachment> | Promise<Nullable<CommonAttachment>>;
    commonGetAttachments(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAttachment>[] | Promise<Nullable<CommonAttachment>[]>;
    commonPaginateAttachments(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    commonFindCountry(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonCountry> | Promise<Nullable<CommonCountry>>;
    commonFindCountryById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<CommonCountry> | Promise<Nullable<CommonCountry>>;
    commonGetCountries(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonCountry>[] | Promise<Nullable<CommonCountry>[]>;
    commonPaginateCountries(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    commonAdministrativeAreasCountry(countryId: GraphQLString, administrativeAreaLevel1Id?: Nullable<GraphQLString>, administrativeAreaLevel2Id?: Nullable<GraphQLString>): Nullable<CommonAdministrativeAreasCountry> | Promise<Nullable<CommonAdministrativeAreasCountry>>;
    commonFindLang(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonLang> | Promise<Nullable<CommonLang>>;
    commonFindLangById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<CommonLang> | Promise<Nullable<CommonLang>>;
    commonGetLangs(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonLang>[] | Promise<Nullable<CommonLang>[]>;
    commonPaginateLangs(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    commonFindResource(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonResource> | Promise<Nullable<CommonResource>>;
    commonFindResourceById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<CommonResource> | Promise<Nullable<CommonResource>>;
    commonGetResources(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonResource>[] | Promise<Nullable<CommonResource>[]>;
    commonPaginateResources(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    iamMeAccount(): Nullable<IamAccount> | Promise<Nullable<IamAccount>>;
    iamFindAccount(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamAccount> | Promise<Nullable<IamAccount>>;
    iamFindAccountById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>, queryGetClients?: Nullable<QueryStatement>, constraintGetClients?: Nullable<QueryStatement>): Nullable<IamAccount> | Promise<Nullable<IamAccount>>;
    iamGetAccounts(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamAccount>[] | Promise<Nullable<IamAccount>[]>;
    iamPaginateAccounts(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    iamCheckPasswordMeAccount(password: GraphQLString): boolean | Promise<boolean>;
    iamCheckUniqueUsernameAccount(username: GraphQLString, avoidUsernames?: Nullable<Nullable<GraphQLString>[]>): boolean | Promise<boolean>;
    iamCheckUniqueEmailAccount(email: GraphQLString, avoidEmails?: Nullable<Nullable<GraphQLString>[]>): boolean | Promise<boolean>;
    iamPaginateWithTenantConstraintAccounts(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    iamFindBoundedContext(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamBoundedContext> | Promise<Nullable<IamBoundedContext>>;
    iamFindBoundedContextById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<IamBoundedContext> | Promise<Nullable<IamBoundedContext>>;
    iamGetBoundedContexts(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamBoundedContext>[] | Promise<Nullable<IamBoundedContext>[]>;
    iamPaginateBoundedContexts(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    iamFindPermissionRole(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamPermissionRole> | Promise<Nullable<IamPermissionRole>>;
    iamFindPermissionRoleById(permissionId?: Nullable<string>, roleId?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<IamPermissionRole> | Promise<Nullable<IamPermissionRole>>;
    iamGetPermissionsRoles(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamPermissionRole>[] | Promise<Nullable<IamPermissionRole>[]>;
    iamPaginatePermissionsRoles(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    iamFindPermission(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamPermission> | Promise<Nullable<IamPermission>>;
    iamFindPermissionById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<IamPermission> | Promise<Nullable<IamPermission>>;
    iamGetPermissions(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamPermission>[] | Promise<Nullable<IamPermission>[]>;
    iamPaginatePermissions(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    iamFindRoleAccount(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamRoleAccount> | Promise<Nullable<IamRoleAccount>>;
    iamFindRoleAccountById(roleId?: Nullable<string>, accountId?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<IamRoleAccount> | Promise<Nullable<IamRoleAccount>>;
    iamGetRolesAccounts(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamRoleAccount>[] | Promise<Nullable<IamRoleAccount>[]>;
    iamPaginateRolesAccounts(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    iamFindRole(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamRole> | Promise<Nullable<IamRole>>;
    iamFindRoleById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<IamRole> | Promise<Nullable<IamRole>>;
    iamGetRoles(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamRole>[] | Promise<Nullable<IamRole>[]>;
    iamPaginateRoles(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    iamFindTag(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamTag> | Promise<Nullable<IamTag>>;
    iamFindTagById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<IamTag> | Promise<Nullable<IamTag>>;
    iamGetTags(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamTag>[] | Promise<Nullable<IamTag>[]>;
    iamPaginateTags(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    iamFindTenantAccount(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamTenantAccount> | Promise<Nullable<IamTenantAccount>>;
    iamFindTenantAccountById(tenantId?: Nullable<string>, accountId?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<IamTenantAccount> | Promise<Nullable<IamTenantAccount>>;
    iamGetTenantsAccounts(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamTenantAccount>[] | Promise<Nullable<IamTenantAccount>[]>;
    iamPaginateTenantsAccounts(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    iamFindTenant(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamTenant> | Promise<Nullable<IamTenant>>;
    iamFindTenantById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<IamTenant> | Promise<Nullable<IamTenant>>;
    iamGetTenants(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamTenant>[] | Promise<Nullable<IamTenant>[]>;
    iamPaginateTenants(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    iamGetWithTenantConstraintTenants(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamTenant>[] | Promise<Nullable<IamTenant>[]>;
    iamPaginateWithTenantConstraintTenants(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    iamFindUserMetaById(id: string): Nullable<IamUserMeta> | Promise<Nullable<IamUserMeta>>;
    iamFindUser(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamUser> | Promise<Nullable<IamUser>>;
    iamFindUserById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<IamUser> | Promise<Nullable<IamUser>>;
    iamGetUsers(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamUser>[] | Promise<Nullable<IamUser>[]>;
    iamPaginateUsers(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    messageFindInboxSetting(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<MessageInboxSetting> | Promise<Nullable<MessageInboxSetting>>;
    messageFindInboxSettingById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<MessageInboxSetting> | Promise<Nullable<MessageInboxSetting>>;
    messageGetInboxSettings(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<MessageInboxSetting>[] | Promise<Nullable<MessageInboxSetting>[]>;
    messagePaginateInboxSettings(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    messageFindInbox(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<MessageInbox> | Promise<Nullable<MessageInbox>>;
    messageFindInboxById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<MessageInbox> | Promise<Nullable<MessageInbox>>;
    messageGetInboxes(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<MessageInbox>[] | Promise<Nullable<MessageInbox>[]>;
    messagePaginateInboxes(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    messagePaginateCustomerMessagesInbox(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    messageFindCustomerMessageInbox(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<MessageInbox> | Promise<Nullable<MessageInbox>>;
    messageCountUnreadCustomerMessageInbox(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): GraphQLInt | Promise<GraphQLInt>;
    messageFindMessage(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<MessageMessage> | Promise<Nullable<MessageMessage>>;
    messageFindMessageById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<MessageMessage> | Promise<Nullable<MessageMessage>>;
    messageGetMessages(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<MessageMessage>[] | Promise<Nullable<MessageMessage>[]>;
    messagePaginateMessages(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    messageCountTotalRecipientsMessage(tenantRecipientIds?: Nullable<Nullable<string>[]>, scopeRecipients?: Nullable<Nullable<GraphQLString>[]>, tagRecipients?: Nullable<Nullable<GraphQLString>[]>, accountRecipientIds?: Nullable<Nullable<string>[]>, constraint?: Nullable<QueryStatement>): GraphQLInt | Promise<GraphQLInt>;
    messageFindOutbox(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<MessageOutbox> | Promise<Nullable<MessageOutbox>>;
    messageFindOutboxById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<MessageOutbox> | Promise<Nullable<MessageOutbox>>;
    messageGetOutboxes(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<MessageOutbox>[] | Promise<Nullable<MessageOutbox>[]>;
    messagePaginateOutboxes(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    oAuthFindAccessToken(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthAccessToken> | Promise<Nullable<OAuthAccessToken>>;
    oAuthFindAccessTokenById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<OAuthAccessToken> | Promise<Nullable<OAuthAccessToken>>;
    oAuthGetAccessTokens(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthAccessToken>[] | Promise<Nullable<OAuthAccessToken>[]>;
    oAuthPaginateAccessTokens(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    oAuthFindApplicationClient(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthApplicationClient> | Promise<Nullable<OAuthApplicationClient>>;
    oAuthFindApplicationClientById(applicationId?: Nullable<string>, clientId?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<OAuthApplicationClient> | Promise<Nullable<OAuthApplicationClient>>;
    oAuthGetApplicationsClients(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthApplicationClient>[] | Promise<Nullable<OAuthApplicationClient>[]>;
    oAuthPaginateApplicationsClients(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
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
    searchEngineFindCollection(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<SearchEngineCollection> | Promise<Nullable<SearchEngineCollection>>;
    searchEngineFindCollectionById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<SearchEngineCollection> | Promise<Nullable<SearchEngineCollection>>;
    searchEngineGetCollections(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<SearchEngineCollection>[] | Promise<Nullable<SearchEngineCollection>[]>;
    searchEnginePaginateCollections(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    searchEngineFindField(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<SearchEngineField> | Promise<Nullable<SearchEngineField>>;
    searchEngineFindFieldById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<SearchEngineField> | Promise<Nullable<SearchEngineField>>;
    searchEngineGetFields(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<SearchEngineField>[] | Promise<Nullable<SearchEngineField>[]>;
    searchEnginePaginateFields(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    storageAccountGetBase64FileFileManager(file: StorageAccountFileManagerFileInput): Nullable<StorageAccountFileManagerBase64> | Promise<Nullable<StorageAccountFileManagerBase64>>;
    storageAccountGetBase64FilesFileManager(files: StorageAccountFileManagerFileInput[]): Nullable<Nullable<StorageAccountFileManagerBase64>[]> | Promise<Nullable<Nullable<StorageAccountFileManagerBase64>[]>>;
    clickupSpaces(teamId?: Nullable<GraphQLString>): Nullable<ClickupSpace>[] | Promise<Nullable<ClickupSpace>[]>;
    clickupFolders(spaceId?: Nullable<GraphQLString>): Nullable<ClickupFolder>[] | Promise<Nullable<ClickupFolder>[]>;
    clickupLists(folderId?: Nullable<GraphQLString>): Nullable<ClickupList>[] | Promise<Nullable<ClickupList>[]>;
    supportFindComment(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<SupportComment> | Promise<Nullable<SupportComment>>;
    supportFindCommentById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<SupportComment> | Promise<Nullable<SupportComment>>;
    supportGetComments(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<SupportComment>[] | Promise<Nullable<SupportComment>[]>;
    supportPaginateComments(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    supportFindIssue(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<SupportIssue> | Promise<Nullable<SupportIssue>>;
    supportFindIssueById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<SupportIssue> | Promise<Nullable<SupportIssue>>;
    supportGetIssues(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<SupportIssue>[] | Promise<Nullable<SupportIssue>[]>;
    supportPaginateIssues(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    toolsFindKeyValue(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<ToolsKeyValue> | Promise<Nullable<ToolsKeyValue>>;
    toolsFindKeyValueById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<ToolsKeyValue> | Promise<Nullable<ToolsKeyValue>>;
    toolsGetKeyValues(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<ToolsKeyValue>[] | Promise<Nullable<ToolsKeyValue>[]>;
    toolsPaginateKeyValues(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    toolsFindMigration(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<ToolsMigration> | Promise<Nullable<ToolsMigration>>;
    toolsFindMigrationById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<ToolsMigration> | Promise<Nullable<ToolsMigration>>;
    toolsGetMigrations(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<ToolsMigration>[] | Promise<Nullable<ToolsMigration>[]>;
    toolsPaginateMigrations(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    toolsFindProcedure(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<ToolsProcedure> | Promise<Nullable<ToolsProcedure>>;
    toolsFindProcedureById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<ToolsProcedure> | Promise<Nullable<ToolsProcedure>>;
    toolsGetProcedures(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<ToolsProcedure>[] | Promise<Nullable<ToolsProcedure>[]>;
    toolsPaginateProcedures(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    toolsFindWebhookLog(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<ToolsWebhookLog> | Promise<Nullable<ToolsWebhookLog>>;
    toolsFindWebhookLogById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<ToolsWebhookLog> | Promise<Nullable<ToolsWebhookLog>>;
    toolsGetWebhookLogs(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<ToolsWebhookLog>[] | Promise<Nullable<ToolsWebhookLog>[]>;
    toolsPaginateWebhookLogs(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    toolsFindWebhook(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<ToolsWebhook> | Promise<Nullable<ToolsWebhook>>;
    toolsFindWebhookById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<ToolsWebhook> | Promise<Nullable<ToolsWebhook>>;
    toolsGetWebhooks(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<ToolsWebhook>[] | Promise<Nullable<ToolsWebhook>[]>;
    toolsPaginateWebhooks(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    whatsappFindConversation(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<WhatsappConversation> | Promise<Nullable<WhatsappConversation>>;
    whatsappFindConversationById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<WhatsappConversation> | Promise<Nullable<WhatsappConversation>>;
    whatsappGetConversations(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<WhatsappConversation>[] | Promise<Nullable<WhatsappConversation>[]>;
    whatsappPaginateConversations(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    whatsappFindMessage(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<WhatsappMessage> | Promise<Nullable<WhatsappMessage>>;
    whatsappFindMessageById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<WhatsappMessage> | Promise<Nullable<WhatsappMessage>>;
    whatsappGetMessages(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<WhatsappMessage>[] | Promise<Nullable<WhatsappMessage>[]>;
    whatsappPaginateMessages(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    whatsappFindTimeline(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<WhatsappTimeline> | Promise<Nullable<WhatsappTimeline>>;
    whatsappFindTimelineById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<WhatsappTimeline> | Promise<Nullable<WhatsappTimeline>>;
    whatsappGetTimelines(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<WhatsappTimeline>[] | Promise<Nullable<WhatsappTimeline>[]>;
    whatsappPaginateTimelines(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    coreGetLangs(): Nullable<CoreLang>[] | Promise<Nullable<CoreLang>[]>;
    coreGetFallbackLang(): Nullable<CoreLang> | Promise<Nullable<CoreLang>>;
    coreGetSearchKeyLang(): Nullable<CoreSearchKeyLang> | Promise<Nullable<CoreSearchKeyLang>>;
    coreGetBase64FromFile(relativePathSegments: GraphQLString[], filename: GraphQLString): Nullable<GraphQLString> | Promise<Nullable<GraphQLString>>;
    hello(): Nullable<string> | Promise<Nullable<string>>;
}

export interface IMutation {
    auditingCreateHttpCommunication(payload: AuditingCreateHttpCommunicationInput): Nullable<AuditingHttpCommunication> | Promise<Nullable<AuditingHttpCommunication>>;
    auditingCreateHttpCommunications(payload: Nullable<AuditingCreateHttpCommunicationInput>[]): boolean | Promise<boolean>;
    auditingUpdateHttpCommunicationById(payload: AuditingUpdateHttpCommunicationByIdInput, constraint?: Nullable<QueryStatement>): Nullable<AuditingHttpCommunication> | Promise<Nullable<AuditingHttpCommunication>>;
    auditingUpdateHttpCommunications(payload: AuditingUpdateHttpCommunicationsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AuditingHttpCommunication>[] | Promise<Nullable<AuditingHttpCommunication>[]>;
    auditingDeleteHttpCommunicationById(id: string, constraint?: Nullable<QueryStatement>): Nullable<AuditingHttpCommunication> | Promise<Nullable<AuditingHttpCommunication>>;
    auditingDeleteHttpCommunications(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AuditingHttpCommunication>[] | Promise<Nullable<AuditingHttpCommunication>[]>;
    auditingCreateSideEffect(payload: AuditingCreateSideEffectInput): Nullable<AuditingSideEffect> | Promise<Nullable<AuditingSideEffect>>;
    auditingCreateSideEffects(payload: Nullable<AuditingCreateSideEffectInput>[]): boolean | Promise<boolean>;
    auditingUpdateSideEffectById(payload: AuditingUpdateSideEffectByIdInput, constraint?: Nullable<QueryStatement>): Nullable<AuditingSideEffect> | Promise<Nullable<AuditingSideEffect>>;
    auditingUpdateSideEffects(payload: AuditingUpdateSideEffectsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AuditingSideEffect>[] | Promise<Nullable<AuditingSideEffect>[]>;
    auditingDeleteSideEffectById(id: string, constraint?: Nullable<QueryStatement>): Nullable<AuditingSideEffect> | Promise<Nullable<AuditingSideEffect>>;
    auditingDeleteSideEffects(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<AuditingSideEffect>[] | Promise<Nullable<AuditingSideEffect>[]>;
    auditingRollbackSideEffect(payload: AuditingUpdateSideEffectByIdInput, constraint?: Nullable<QueryStatement>): boolean | Promise<boolean>;
    commonCreateAdministrativeAreaLevel1(payload: CommonCreateAdministrativeAreaLevel1Input): Nullable<CommonAdministrativeAreaLevel1> | Promise<Nullable<CommonAdministrativeAreaLevel1>>;
    commonCreateAdministrativeAreasLevel1(payload: Nullable<CommonCreateAdministrativeAreaLevel1Input>[]): boolean | Promise<boolean>;
    commonUpdateAdministrativeAreaLevel1ById(payload: CommonUpdateAdministrativeAreaLevel1ByIdInput, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel1> | Promise<Nullable<CommonAdministrativeAreaLevel1>>;
    commonUpdateAdministrativeAreasLevel1(payload: CommonUpdateAdministrativeAreasLevel1Input, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel1>[] | Promise<Nullable<CommonAdministrativeAreaLevel1>[]>;
    commonUpsertAdministrativeAreaLevel1(payload: CommonUpdateAdministrativeAreaLevel1ByIdInput): Nullable<CommonAdministrativeAreaLevel1> | Promise<Nullable<CommonAdministrativeAreaLevel1>>;
    commonDeleteAdministrativeAreaLevel1ById(id: string, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel1> | Promise<Nullable<CommonAdministrativeAreaLevel1>>;
    commonDeleteAdministrativeAreasLevel1(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel1>[] | Promise<Nullable<CommonAdministrativeAreaLevel1>[]>;
    commonCreateAdministrativeAreaLevel2(payload: CommonCreateAdministrativeAreaLevel2Input): Nullable<CommonAdministrativeAreaLevel2> | Promise<Nullable<CommonAdministrativeAreaLevel2>>;
    commonCreateAdministrativeAreasLevel2(payload: Nullable<CommonCreateAdministrativeAreaLevel2Input>[]): boolean | Promise<boolean>;
    commonUpdateAdministrativeAreaLevel2ById(payload: CommonUpdateAdministrativeAreaLevel2ByIdInput, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel2> | Promise<Nullable<CommonAdministrativeAreaLevel2>>;
    commonUpdateAdministrativeAreasLevel2(payload: CommonUpdateAdministrativeAreasLevel2Input, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel2>[] | Promise<Nullable<CommonAdministrativeAreaLevel2>[]>;
    commonUpsertAdministrativeAreaLevel2(payload: CommonUpdateAdministrativeAreaLevel2ByIdInput): Nullable<CommonAdministrativeAreaLevel2> | Promise<Nullable<CommonAdministrativeAreaLevel2>>;
    commonDeleteAdministrativeAreaLevel2ById(id: string, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel2> | Promise<Nullable<CommonAdministrativeAreaLevel2>>;
    commonDeleteAdministrativeAreasLevel2(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel2>[] | Promise<Nullable<CommonAdministrativeAreaLevel2>[]>;
    commonCreateAdministrativeAreaLevel3(payload: CommonCreateAdministrativeAreaLevel3Input): Nullable<CommonAdministrativeAreaLevel3> | Promise<Nullable<CommonAdministrativeAreaLevel3>>;
    commonCreateAdministrativeAreasLevel3(payload: Nullable<CommonCreateAdministrativeAreaLevel3Input>[]): boolean | Promise<boolean>;
    commonUpdateAdministrativeAreaLevel3ById(payload: CommonUpdateAdministrativeAreaLevel3ByIdInput, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel3> | Promise<Nullable<CommonAdministrativeAreaLevel3>>;
    commonUpdateAdministrativeAreasLevel3(payload: CommonUpdateAdministrativeAreasLevel3Input, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel3>[] | Promise<Nullable<CommonAdministrativeAreaLevel3>[]>;
    commonUpsertAdministrativeAreaLevel3(payload: CommonUpdateAdministrativeAreaLevel3ByIdInput): Nullable<CommonAdministrativeAreaLevel3> | Promise<Nullable<CommonAdministrativeAreaLevel3>>;
    commonDeleteAdministrativeAreaLevel3ById(id: string, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel3> | Promise<Nullable<CommonAdministrativeAreaLevel3>>;
    commonDeleteAdministrativeAreasLevel3(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAdministrativeAreaLevel3>[] | Promise<Nullable<CommonAdministrativeAreaLevel3>[]>;
    commonCreateAttachmentFamily(payload: CommonCreateAttachmentFamilyInput): Nullable<CommonAttachmentFamily> | Promise<Nullable<CommonAttachmentFamily>>;
    commonCreateAttachmentFamilies(payload: Nullable<CommonCreateAttachmentFamilyInput>[]): boolean | Promise<boolean>;
    commonUpdateAttachmentFamilyById(payload: CommonUpdateAttachmentFamilyByIdInput, constraint?: Nullable<QueryStatement>): Nullable<CommonAttachmentFamily> | Promise<Nullable<CommonAttachmentFamily>>;
    commonUpdateAttachmentFamilies(payload: CommonUpdateAttachmentFamiliesInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAttachmentFamily>[] | Promise<Nullable<CommonAttachmentFamily>[]>;
    commonUpsertAttachmentFamily(payload: CommonUpdateAttachmentFamilyByIdInput): Nullable<CommonAttachmentFamily> | Promise<Nullable<CommonAttachmentFamily>>;
    commonDeleteAttachmentFamilyById(id: string, constraint?: Nullable<QueryStatement>): Nullable<CommonAttachmentFamily> | Promise<Nullable<CommonAttachmentFamily>>;
    commonDeleteAttachmentFamilies(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAttachmentFamily>[] | Promise<Nullable<CommonAttachmentFamily>[]>;
    commonCreateAttachmentLibrary(payload: CommonCreateAttachmentLibraryInput): Nullable<CommonAttachmentLibrary> | Promise<Nullable<CommonAttachmentLibrary>>;
    commonCreateAttachmentLibraries(payload: Nullable<CommonCreateAttachmentLibraryInput>[]): boolean | Promise<boolean>;
    commonUpdateAttachmentLibraryById(payload: CommonUpdateAttachmentLibraryByIdInput, constraint?: Nullable<QueryStatement>): Nullable<CommonAttachmentLibrary> | Promise<Nullable<CommonAttachmentLibrary>>;
    commonUpdateAttachmentLibraries(payload: CommonUpdateAttachmentLibrariesInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAttachmentLibrary>[] | Promise<Nullable<CommonAttachmentLibrary>[]>;
    commonUpsertAttachmentLibrary(payload: CommonUpdateAttachmentLibraryByIdInput): Nullable<CommonAttachmentLibrary> | Promise<Nullable<CommonAttachmentLibrary>>;
    commonDeleteAttachmentLibraryById(id: string, constraint?: Nullable<QueryStatement>): Nullable<CommonAttachmentLibrary> | Promise<Nullable<CommonAttachmentLibrary>>;
    commonDeleteAttachmentLibraries(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAttachmentLibrary>[] | Promise<Nullable<CommonAttachmentLibrary>[]>;
    commonCreateAttachment(payload: CommonCreateAttachmentInput): Nullable<CommonAttachment> | Promise<Nullable<CommonAttachment>>;
    commonCreateAttachments(payload: Nullable<CommonCreateAttachmentInput>[]): boolean | Promise<boolean>;
    commonUpdateAttachmentById(payload: CommonUpdateAttachmentByIdInput, constraint?: Nullable<QueryStatement>): Nullable<CommonAttachment> | Promise<Nullable<CommonAttachment>>;
    commonUpdateAttachments(payload: CommonUpdateAttachmentsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAttachment>[] | Promise<Nullable<CommonAttachment>[]>;
    commonUpsertAttachment(payload: CommonUpdateAttachmentByIdInput): Nullable<CommonAttachment> | Promise<Nullable<CommonAttachment>>;
    commonDeleteAttachmentById(id: string, constraint?: Nullable<QueryStatement>): Nullable<CommonAttachment> | Promise<Nullable<CommonAttachment>>;
    commonDeleteAttachments(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonAttachment>[] | Promise<Nullable<CommonAttachment>[]>;
    commonDeleteAttachment(payload: CommonAttachmentInput): CommonAttachment | Promise<CommonAttachment>;
    commonCreateCountry(payload: CommonCreateCountryInput): Nullable<CommonCountry> | Promise<Nullable<CommonCountry>>;
    commonCreateCountries(payload: Nullable<CommonCreateCountryInput>[]): boolean | Promise<boolean>;
    commonUpdateCountryById(payload: CommonUpdateCountryByIdInput, constraint?: Nullable<QueryStatement>): Nullable<CommonCountry> | Promise<Nullable<CommonCountry>>;
    commonUpdateCountries(payload: CommonUpdateCountriesInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonCountry>[] | Promise<Nullable<CommonCountry>[]>;
    commonUpsertCountry(payload: CommonUpdateCountryByIdInput): Nullable<CommonCountry> | Promise<Nullable<CommonCountry>>;
    commonDeleteCountryById(id: string, constraint?: Nullable<QueryStatement>): Nullable<CommonCountry> | Promise<Nullable<CommonCountry>>;
    commonDeleteCountries(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonCountry>[] | Promise<Nullable<CommonCountry>[]>;
    commonCreateCrop(attachment: CommonCreateAttachmentInput, crop: CommonCropPropertiesInput): CommonCreatedCrop | Promise<CommonCreatedCrop>;
    commonCreateLang(payload: CommonCreateLangInput): Nullable<CommonLang> | Promise<Nullable<CommonLang>>;
    commonCreateLangs(payload: Nullable<CommonCreateLangInput>[]): boolean | Promise<boolean>;
    commonUpdateLangById(payload: CommonUpdateLangByIdInput, constraint?: Nullable<QueryStatement>): Nullable<CommonLang> | Promise<Nullable<CommonLang>>;
    commonUpdateLangs(payload: CommonUpdateLangsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonLang>[] | Promise<Nullable<CommonLang>[]>;
    commonUpsertLang(payload: CommonUpdateLangByIdInput): Nullable<CommonLang> | Promise<Nullable<CommonLang>>;
    commonDeleteLangById(id: string, constraint?: Nullable<QueryStatement>): Nullable<CommonLang> | Promise<Nullable<CommonLang>>;
    commonDeleteLangs(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonLang>[] | Promise<Nullable<CommonLang>[]>;
    commonCreateResource(payload: CommonCreateResourceInput): Nullable<CommonResource> | Promise<Nullable<CommonResource>>;
    commonCreateResources(payload: Nullable<CommonCreateResourceInput>[]): boolean | Promise<boolean>;
    commonUpdateResourceById(payload: CommonUpdateResourceByIdInput, constraint?: Nullable<QueryStatement>): Nullable<CommonResource> | Promise<Nullable<CommonResource>>;
    commonUpdateResources(payload: CommonUpdateResourcesInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonResource>[] | Promise<Nullable<CommonResource>[]>;
    commonUpsertResource(payload: CommonUpdateResourceByIdInput): Nullable<CommonResource> | Promise<Nullable<CommonResource>>;
    commonDeleteResourceById(id: string, constraint?: Nullable<QueryStatement>): Nullable<CommonResource> | Promise<Nullable<CommonResource>>;
    commonDeleteResources(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<CommonResource>[] | Promise<Nullable<CommonResource>[]>;
    iamCreateAccount(payload: IamCreateAccountInput): Nullable<IamAccount> | Promise<Nullable<IamAccount>>;
    iamUpdateAccountById(payload: IamUpdateAccountByIdInput, constraint?: Nullable<QueryStatement>): Nullable<IamAccount> | Promise<Nullable<IamAccount>>;
    iamUpdateAccounts(payload: IamUpdateAccountsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamAccount>[] | Promise<Nullable<IamAccount>[]>;
    iamUpsertAccount(payload: IamUpdateAccountByIdInput): Nullable<IamAccount> | Promise<Nullable<IamAccount>>;
    iamDeleteAccountById(id: string, constraint?: Nullable<QueryStatement>): Nullable<IamAccount> | Promise<Nullable<IamAccount>>;
    iamDeleteAccounts(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamAccount>[] | Promise<Nullable<IamAccount>[]>;
    iamCreateAccounts(payload: Nullable<IamCreateAccountInput>[]): boolean | Promise<boolean>;
    iamUpdateMeAccount(payload: IamUpdateMeAccountInput): boolean | Promise<boolean>;
    iamCreateBoundedContext(payload: IamCreateBoundedContextInput): Nullable<IamBoundedContext> | Promise<Nullable<IamBoundedContext>>;
    iamCreateBoundedContexts(payload: Nullable<IamCreateBoundedContextInput>[]): boolean | Promise<boolean>;
    iamUpdateBoundedContextById(payload: IamUpdateBoundedContextByIdInput, constraint?: Nullable<QueryStatement>): Nullable<IamBoundedContext> | Promise<Nullable<IamBoundedContext>>;
    iamUpdateBoundedContexts(payload: IamUpdateBoundedContextsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamBoundedContext>[] | Promise<Nullable<IamBoundedContext>[]>;
    iamDeleteBoundedContextById(id: string, constraint?: Nullable<QueryStatement>): Nullable<IamBoundedContext> | Promise<Nullable<IamBoundedContext>>;
    iamDeleteBoundedContexts(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamBoundedContext>[] | Promise<Nullable<IamBoundedContext>[]>;
    iamCreatePermissionRole(payload: IamCreatePermissionRoleInput): Nullable<IamPermissionRole> | Promise<Nullable<IamPermissionRole>>;
    iamCreatePermissionsRoles(payload: Nullable<IamCreatePermissionRoleInput>[]): boolean | Promise<boolean>;
    iamUpdatePermissionRoleById(payload: IamUpdatePermissionRoleByIdInput, constraint?: Nullable<QueryStatement>): Nullable<IamPermissionRole> | Promise<Nullable<IamPermissionRole>>;
    iamUpdatePermissionsRoles(payload: IamUpdatePermissionsRolesInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamPermissionRole>[] | Promise<Nullable<IamPermissionRole>[]>;
    iamDeletePermissionRoleById(permissionId: string, roleId: string, constraint?: Nullable<QueryStatement>): Nullable<IamPermissionRole> | Promise<Nullable<IamPermissionRole>>;
    iamDeletePermissionsRoles(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamPermissionRole>[] | Promise<Nullable<IamPermissionRole>[]>;
    iamCreatePermission(payload: IamCreatePermissionInput): Nullable<IamPermission> | Promise<Nullable<IamPermission>>;
    iamCreatePermissions(payload: Nullable<IamCreatePermissionInput>[]): boolean | Promise<boolean>;
    iamUpdatePermissionById(payload: IamUpdatePermissionByIdInput, constraint?: Nullable<QueryStatement>): Nullable<IamPermission> | Promise<Nullable<IamPermission>>;
    iamUpdatePermissions(payload: IamUpdatePermissionsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamPermission>[] | Promise<Nullable<IamPermission>[]>;
    iamDeletePermissionById(id: string, constraint?: Nullable<QueryStatement>): Nullable<IamPermission> | Promise<Nullable<IamPermission>>;
    iamDeletePermissions(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamPermission>[] | Promise<Nullable<IamPermission>[]>;
    iamCreateRoleAccount(payload: IamCreateRoleAccountInput): Nullable<IamRoleAccount> | Promise<Nullable<IamRoleAccount>>;
    iamCreateRolesAccounts(payload: Nullable<IamCreateRoleAccountInput>[]): boolean | Promise<boolean>;
    iamUpdateRoleAccountById(payload: IamUpdateRoleAccountByIdInput, constraint?: Nullable<QueryStatement>): Nullable<IamRoleAccount> | Promise<Nullable<IamRoleAccount>>;
    iamUpdateRolesAccounts(payload: IamUpdateRolesAccountsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamRoleAccount>[] | Promise<Nullable<IamRoleAccount>[]>;
    iamDeleteRoleAccountById(roleId: string, accountId: string, constraint?: Nullable<QueryStatement>): Nullable<IamRoleAccount> | Promise<Nullable<IamRoleAccount>>;
    iamDeleteRolesAccounts(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamRoleAccount>[] | Promise<Nullable<IamRoleAccount>[]>;
    iamCreateRole(payload: IamCreateRoleInput): Nullable<IamRole> | Promise<Nullable<IamRole>>;
    iamCreateRoles(payload: Nullable<IamCreateRoleInput>[]): boolean | Promise<boolean>;
    iamUpdateRoleById(payload: IamUpdateRoleByIdInput, constraint?: Nullable<QueryStatement>): Nullable<IamRole> | Promise<Nullable<IamRole>>;
    iamUpdateRoles(payload: IamUpdateRolesInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamRole>[] | Promise<Nullable<IamRole>[]>;
    iamUpsertRole(payload: IamUpdateRoleByIdInput): Nullable<IamRole> | Promise<Nullable<IamRole>>;
    iamDeleteRoleById(id: string, constraint?: Nullable<QueryStatement>): Nullable<IamRole> | Promise<Nullable<IamRole>>;
    iamDeleteRoles(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamRole>[] | Promise<Nullable<IamRole>[]>;
    iamInheritPermissionsRoleRole(payload: IamInheritRoleInput): boolean | Promise<boolean>;
    iamCreateTag(payload: IamCreateTagInput): Nullable<IamTag> | Promise<Nullable<IamTag>>;
    iamUpdateTagById(payload: IamUpdateTagByIdInput, constraint?: Nullable<QueryStatement>): Nullable<IamTag> | Promise<Nullable<IamTag>>;
    iamDeleteTagById(id: string, constraint?: Nullable<QueryStatement>): Nullable<IamTag> | Promise<Nullable<IamTag>>;
    iamCreateTenantAccount(payload: IamCreateTenantAccountInput): Nullable<IamTenantAccount> | Promise<Nullable<IamTenantAccount>>;
    iamCreateTenantsAccounts(payload: Nullable<IamCreateTenantAccountInput>[]): boolean | Promise<boolean>;
    iamUpdateTenantAccountById(payload: IamUpdateTenantAccountByIdInput, constraint?: Nullable<QueryStatement>): Nullable<IamTenantAccount> | Promise<Nullable<IamTenantAccount>>;
    iamUpdateTenantsAccounts(payload: IamUpdateTenantsAccountsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamTenantAccount>[] | Promise<Nullable<IamTenantAccount>[]>;
    iamDeleteTenantAccountById(tenantId: string, accountId: string, constraint?: Nullable<QueryStatement>): Nullable<IamTenantAccount> | Promise<Nullable<IamTenantAccount>>;
    iamDeleteTenantsAccounts(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamTenantAccount>[] | Promise<Nullable<IamTenantAccount>[]>;
    iamCreateTenant(payload: IamCreateTenantInput): Nullable<IamTenant> | Promise<Nullable<IamTenant>>;
    iamCreateTenants(payload: Nullable<IamCreateTenantInput>[]): boolean | Promise<boolean>;
    iamUpdateTenantById(payload: IamUpdateTenantByIdInput, constraint?: Nullable<QueryStatement>): Nullable<IamTenant> | Promise<Nullable<IamTenant>>;
    iamUpdateTenants(payload: IamUpdateTenantsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamTenant>[] | Promise<Nullable<IamTenant>[]>;
    iamDeleteTenantById(id: string, constraint?: Nullable<QueryStatement>): Nullable<IamTenant> | Promise<Nullable<IamTenant>>;
    iamDeleteTenants(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamTenant>[] | Promise<Nullable<IamTenant>[]>;
    iamUpdateUserMetaById(payload: IamUpdateUserMetaByIdInput): Nullable<IamUserMeta> | Promise<Nullable<IamUserMeta>>;
    iamCreateUser(payload: IamCreateUserInput): Nullable<IamUser> | Promise<Nullable<IamUser>>;
    iamCreateUsers(payload: Nullable<IamCreateUserInput>[]): boolean | Promise<boolean>;
    iamUpdateUserById(payload: IamUpdateUserByIdInput, constraint?: Nullable<QueryStatement>): Nullable<IamUser> | Promise<Nullable<IamUser>>;
    iamUpdateUsers(payload: IamUpdateUsersInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamUser>[] | Promise<Nullable<IamUser>[]>;
    iamDeleteUserById(id: string, constraint?: Nullable<QueryStatement>): Nullable<IamUser> | Promise<Nullable<IamUser>>;
    iamDeleteUsers(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IamUser>[] | Promise<Nullable<IamUser>[]>;
    iamForgotPasswordUser(payload: IamForgotPasswordUserInput): boolean | Promise<boolean>;
    iamResetPasswordUser(payload: IamResetPasswordUserInput): boolean | Promise<boolean>;
    messageCreateInboxSetting(payload: MessageCreateInboxSettingInput): Nullable<MessageInboxSetting> | Promise<Nullable<MessageInboxSetting>>;
    messageCreateInboxSettings(payload: Nullable<MessageCreateInboxSettingInput>[]): boolean | Promise<boolean>;
    messageUpdateInboxSettingById(payload: MessageUpdateInboxSettingByIdInput, constraint?: Nullable<QueryStatement>): Nullable<MessageInboxSetting> | Promise<Nullable<MessageInboxSetting>>;
    messageUpdateInboxSettings(payload: MessageUpdateInboxSettingsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<MessageInboxSetting>[] | Promise<Nullable<MessageInboxSetting>[]>;
    messageDeleteInboxSettingById(id: string, constraint?: Nullable<QueryStatement>): Nullable<MessageInboxSetting> | Promise<Nullable<MessageInboxSetting>>;
    messageDeleteInboxSettings(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<MessageInboxSetting>[] | Promise<Nullable<MessageInboxSetting>[]>;
    messageCreateInbox(payload: MessageCreateInboxInput): Nullable<MessageInbox> | Promise<Nullable<MessageInbox>>;
    messageCreateInboxes(payload: Nullable<MessageCreateInboxInput>[]): boolean | Promise<boolean>;
    messageUpdateInboxById(payload: MessageUpdateInboxByIdInput, constraint?: Nullable<QueryStatement>): Nullable<MessageInbox> | Promise<Nullable<MessageInbox>>;
    messageUpdateInboxes(payload: MessageUpdateInboxesInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<MessageInbox>[] | Promise<Nullable<MessageInbox>[]>;
    messageDeleteInboxById(id: string, constraint?: Nullable<QueryStatement>): Nullable<MessageInbox> | Promise<Nullable<MessageInbox>>;
    messageDeleteInboxes(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<MessageInbox>[] | Promise<Nullable<MessageInbox>[]>;
    messageCheckMessagesInbox(): boolean | Promise<boolean>;
    messageDeleteCustomerMessageInbox(id: string, constraint?: Nullable<QueryStatement>): Nullable<MessageInbox> | Promise<Nullable<MessageInbox>>;
    messageReadCustomerMessageInbox(inbox: MessageUpdateInboxByIdInput, constraint?: Nullable<QueryStatement>): boolean | Promise<boolean>;
    messageUnreadCustomerMessageInbox(inbox: MessageUpdateInboxByIdInput, constraint?: Nullable<QueryStatement>): boolean | Promise<boolean>;
    messageCreateMessage(payload: MessageCreateMessageInput): Nullable<MessageMessage> | Promise<Nullable<MessageMessage>>;
    messageCreateMessages(payload: Nullable<MessageCreateMessageInput>[]): boolean | Promise<boolean>;
    messageUpdateMessageById(payload: MessageUpdateMessageByIdInput, constraint?: Nullable<QueryStatement>): Nullable<MessageMessage> | Promise<Nullable<MessageMessage>>;
    messageUpdateMessages(payload: MessageUpdateMessagesInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<MessageMessage>[] | Promise<Nullable<MessageMessage>[]>;
    messageDeleteMessageById(id: string, constraint?: Nullable<QueryStatement>): Nullable<MessageMessage> | Promise<Nullable<MessageMessage>>;
    messageDeleteMessages(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<MessageMessage>[] | Promise<Nullable<MessageMessage>[]>;
    messageRemoveAttachmentMessage(message: MessageUpdateMessageByIdInput, attachmentId: string, constraint?: Nullable<QueryStatement>): boolean | Promise<boolean>;
    messageSendMessageMessage(message: MessageUpdateMessageByIdInput, constraint?: Nullable<QueryStatement>): boolean | Promise<boolean>;
    messageDraftMessageMessage(message: MessageUpdateMessageByIdInput, constraint?: Nullable<QueryStatement>): boolean | Promise<boolean>;
    messageCreateOutbox(payload: MessageCreateOutboxInput): Nullable<MessageOutbox> | Promise<Nullable<MessageOutbox>>;
    messageCreateOutboxes(payload: Nullable<MessageCreateOutboxInput>[]): boolean | Promise<boolean>;
    messageUpdateOutboxById(payload: MessageUpdateOutboxByIdInput, constraint?: Nullable<QueryStatement>): Nullable<MessageOutbox> | Promise<Nullable<MessageOutbox>>;
    messageUpdateOutboxes(payload: MessageUpdateOutboxesInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<MessageOutbox>[] | Promise<Nullable<MessageOutbox>[]>;
    messageDeleteOutboxById(id: string, constraint?: Nullable<QueryStatement>): Nullable<MessageOutbox> | Promise<Nullable<MessageOutbox>>;
    messageDeleteOutboxes(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<MessageOutbox>[] | Promise<Nullable<MessageOutbox>[]>;
    oAuthDeleteAccessTokenById(id: string, constraint?: Nullable<QueryStatement>): Nullable<OAuthAccessToken> | Promise<Nullable<OAuthAccessToken>>;
    oAuthDeleteAccessTokens(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthAccessToken>[] | Promise<Nullable<OAuthAccessToken>[]>;
    oAuthCreateApplicationClient(payload: OAuthCreateApplicationClientInput): Nullable<OAuthApplicationClient> | Promise<Nullable<OAuthApplicationClient>>;
    oAuthCreateApplicationsClients(payload: Nullable<OAuthCreateApplicationClientInput>[]): boolean | Promise<boolean>;
    oAuthUpdateApplicationClientById(payload: OAuthUpdateApplicationClientByIdInput, constraint?: Nullable<QueryStatement>): Nullable<OAuthApplicationClient> | Promise<Nullable<OAuthApplicationClient>>;
    oAuthDeleteApplicationClientById(applicationId: string, clientId: string, constraint?: Nullable<QueryStatement>): Nullable<OAuthApplicationClient> | Promise<Nullable<OAuthApplicationClient>>;
    oAuthDeleteApplicationsClients(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthApplicationClient>[] | Promise<Nullable<OAuthApplicationClient>[]>;
    oAuthCreateApplication(payload: OAuthCreateApplicationInput): Nullable<OAuthApplication> | Promise<Nullable<OAuthApplication>>;
    oAuthCreateApplications(payload: Nullable<OAuthCreateApplicationInput>[]): boolean | Promise<boolean>;
    oAuthUpdateApplicationById(payload: OAuthUpdateApplicationByIdInput, constraint?: Nullable<QueryStatement>): Nullable<OAuthApplication> | Promise<Nullable<OAuthApplication>>;
    oAuthDeleteApplicationById(id: string, constraint?: Nullable<QueryStatement>): Nullable<OAuthApplication> | Promise<Nullable<OAuthApplication>>;
    oAuthDeleteApplications(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthApplication>[] | Promise<Nullable<OAuthApplication>[]>;
    oAuthCreateClient(payload: OAuthCreateClientInput): Nullable<OAuthClient> | Promise<Nullable<OAuthClient>>;
    oAuthCreateClients(payload: Nullable<OAuthCreateClientInput>[]): boolean | Promise<boolean>;
    oAuthUpdateClientById(payload: OAuthUpdateClientByIdInput, constraint?: Nullable<QueryStatement>): Nullable<OAuthClient> | Promise<Nullable<OAuthClient>>;
    oAuthDeleteClientById(id: string, constraint?: Nullable<QueryStatement>): Nullable<OAuthClient> | Promise<Nullable<OAuthClient>>;
    oAuthDeleteClients(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthClient>[] | Promise<Nullable<OAuthClient>[]>;
    oAuthCreateCredentials(payload: OAuthCreateCredentialsInput): OAuthCredentials | Promise<OAuthCredentials>;
    oAuthCreateImpersonalizeCredentials(accountId: string): OAuthCredentials | Promise<OAuthCredentials>;
    oAuthDeleteRefreshTokenById(id: string, constraint?: Nullable<QueryStatement>): Nullable<OAuthRefreshToken> | Promise<Nullable<OAuthRefreshToken>>;
    oAuthDeleteRefreshTokens(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthRefreshToken>[] | Promise<Nullable<OAuthRefreshToken>[]>;
    oAuthCreateScope(payload: OAuthCreateScopeInput): Nullable<OAuthScope> | Promise<Nullable<OAuthScope>>;
    oAuthUpdateScopeById(payload: OAuthUpdateScopeByIdInput, constraint?: Nullable<QueryStatement>): Nullable<OAuthScope> | Promise<Nullable<OAuthScope>>;
    oAuthDeleteScopeById(id: string, constraint?: Nullable<QueryStatement>): Nullable<OAuthScope> | Promise<Nullable<OAuthScope>>;
    oAuthDeleteScopes(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<OAuthScope>[] | Promise<Nullable<OAuthScope>[]>;
    queueManagerCreateJobRegistry(payload: QueueManagerCreateJobRegistryInput): Nullable<QueueManagerJobRegistry> | Promise<Nullable<QueueManagerJobRegistry>>;
    queueManagerCreateJobsRegistry(payload: Nullable<QueueManagerCreateJobRegistryInput>[]): boolean | Promise<boolean>;
    queueManagerUpdateJobRegistryById(payload: QueueManagerUpdateJobRegistryByIdInput, constraint?: Nullable<QueryStatement>): Nullable<QueueManagerJobRegistry> | Promise<Nullable<QueueManagerJobRegistry>>;
    queueManagerUpdateJobsRegistry(payload: QueueManagerUpdateJobsRegistryInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<QueueManagerJobRegistry>[] | Promise<Nullable<QueueManagerJobRegistry>[]>;
    queueManagerDeleteJobRegistryById(id: string, constraint?: Nullable<QueryStatement>): Nullable<QueueManagerJobRegistry> | Promise<Nullable<QueueManagerJobRegistry>>;
    queueManagerDeleteJobsRegistry(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<QueueManagerJobRegistry>[] | Promise<Nullable<QueueManagerJobRegistry>[]>;
    queueManagerDeleteJobById(id: GraphQLString, name: GraphQLString): Nullable<QueueManagerJob> | Promise<Nullable<QueueManagerJob>>;
    queueManagerCreateQueue(payload: QueueManagerCreateQueueInput): Nullable<QueueManagerQueue> | Promise<Nullable<QueueManagerQueue>>;
    queueManagerCreateQueues(payload: Nullable<QueueManagerCreateQueueInput>[]): boolean | Promise<boolean>;
    queueManagerUpdateQueueById(payload: QueueManagerUpdateQueueByIdInput, constraint?: Nullable<QueryStatement>): Nullable<QueueManagerQueue> | Promise<Nullable<QueueManagerQueue>>;
    queueManagerUpdateQueues(payload: QueueManagerUpdateQueuesInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<QueueManagerQueue>[] | Promise<Nullable<QueueManagerQueue>[]>;
    queueManagerDeleteQueueById(id: string, constraint?: Nullable<QueryStatement>): Nullable<QueueManagerQueue> | Promise<Nullable<QueueManagerQueue>>;
    queueManagerDeleteQueues(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<QueueManagerQueue>[] | Promise<Nullable<QueueManagerQueue>[]>;
    searchEngineCreateCollection(payload: SearchEngineCreateCollectionInput): Nullable<SearchEngineCollection> | Promise<Nullable<SearchEngineCollection>>;
    searchEngineCreateCollections(payload: Nullable<SearchEngineCreateCollectionInput>[]): boolean | Promise<boolean>;
    searchEngineUpdateCollectionById(payload: SearchEngineUpdateCollectionByIdInput, constraint?: Nullable<QueryStatement>): Nullable<SearchEngineCollection> | Promise<Nullable<SearchEngineCollection>>;
    searchEngineUpdateCollections(payload: SearchEngineUpdateCollectionsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<SearchEngineCollection>[] | Promise<Nullable<SearchEngineCollection>[]>;
    searchEngineUpsertCollection(payload: SearchEngineUpdateCollectionByIdInput): Nullable<SearchEngineCollection> | Promise<Nullable<SearchEngineCollection>>;
    searchEngineDeleteCollectionById(id: string, constraint?: Nullable<QueryStatement>): Nullable<SearchEngineCollection> | Promise<Nullable<SearchEngineCollection>>;
    searchEngineDeleteCollections(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<SearchEngineCollection>[] | Promise<Nullable<SearchEngineCollection>[]>;
    searchEngineIndexCollection(id: string, constraint?: Nullable<QueryStatement>): boolean | Promise<boolean>;
    searchEngineCreateField(payload: SearchEngineCreateFieldInput): Nullable<SearchEngineField> | Promise<Nullable<SearchEngineField>>;
    searchEngineCreateFields(payload: Nullable<SearchEngineCreateFieldInput>[]): boolean | Promise<boolean>;
    searchEngineUpdateFieldById(payload: SearchEngineUpdateFieldByIdInput, constraint?: Nullable<QueryStatement>): Nullable<SearchEngineField> | Promise<Nullable<SearchEngineField>>;
    searchEngineUpdateFields(payload: SearchEngineUpdateFieldsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<SearchEngineField>[] | Promise<Nullable<SearchEngineField>[]>;
    searchEngineUpsertField(payload: SearchEngineUpdateFieldByIdInput): Nullable<SearchEngineField> | Promise<Nullable<SearchEngineField>>;
    searchEngineDeleteFieldById(id: string, constraint?: Nullable<QueryStatement>): Nullable<SearchEngineField> | Promise<Nullable<SearchEngineField>>;
    searchEngineDeleteFields(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<SearchEngineField>[] | Promise<Nullable<SearchEngineField>[]>;
    storageAccountCopyFileManager(src: StorageAccountFileManagerFileInput, dest: StorageAccountFileManagerFileInput): Nullable<StorageAccountFileManagerFile> | Promise<Nullable<StorageAccountFileManagerFile>>;
    storageAccountUploadFileFileManager(file: StorageAccountFileManagerFileUploadedInput): Nullable<StorageAccountFileManagerFile> | Promise<Nullable<StorageAccountFileManagerFile>>;
    storageAccountUploadFilesFileManager(files: StorageAccountFileManagerFileUploadedInput[]): Nullable<StorageAccountFileManagerFile>[] | Promise<Nullable<StorageAccountFileManagerFile>[]>;
    supportCreateComment(payload: SupportCreateCommentInput): Nullable<SupportComment> | Promise<Nullable<SupportComment>>;
    supportUpdateCommentById(payload: SupportUpdateCommentByIdInput, constraint?: Nullable<QueryStatement>): Nullable<SupportComment> | Promise<Nullable<SupportComment>>;
    supportUpdateComments(payload: SupportUpdateCommentsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<SupportComment>[] | Promise<Nullable<SupportComment>[]>;
    supportDeleteCommentById(id: string, constraint?: Nullable<QueryStatement>): Nullable<SupportComment> | Promise<Nullable<SupportComment>>;
    supportDeleteComments(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<SupportComment>[] | Promise<Nullable<SupportComment>[]>;
    supportCreateIssue(payload: SupportCreateIssueInput): Nullable<SupportIssue> | Promise<Nullable<SupportIssue>>;
    supportUpdateIssueById(payload: SupportUpdateIssueByIdInput, constraint?: Nullable<QueryStatement>): Nullable<SupportIssue> | Promise<Nullable<SupportIssue>>;
    supportUpdateIssues(payload: SupportUpdateIssuesInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<SupportIssue>[] | Promise<Nullable<SupportIssue>[]>;
    supportDeleteIssueById(id: string, constraint?: Nullable<QueryStatement>): Nullable<SupportIssue> | Promise<Nullable<SupportIssue>>;
    supportCreateWebhookConfig(): ToolsWebhook | Promise<ToolsWebhook>;
    supportDeleteWebhookConfig(): boolean | Promise<boolean>;
    toolsCreateKeyValue(payload: ToolsCreateKeyValueInput): Nullable<ToolsKeyValue> | Promise<Nullable<ToolsKeyValue>>;
    toolsCreateKeyValues(payload: Nullable<ToolsCreateKeyValueInput>[]): boolean | Promise<boolean>;
    toolsUpdateKeyValueById(payload: ToolsUpdateKeyValueByIdInput, constraint?: Nullable<QueryStatement>): Nullable<ToolsKeyValue> | Promise<Nullable<ToolsKeyValue>>;
    toolsDeleteKeyValueById(id: string, constraint?: Nullable<QueryStatement>): Nullable<ToolsKeyValue> | Promise<Nullable<ToolsKeyValue>>;
    toolsDeleteKeyValues(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<ToolsKeyValue>[] | Promise<Nullable<ToolsKeyValue>[]>;
    toolsCreateMigration(payload: ToolsCreateMigrationInput): Nullable<ToolsMigration> | Promise<Nullable<ToolsMigration>>;
    toolsCreateMigrations(payload: Nullable<ToolsCreateMigrationInput>[]): boolean | Promise<boolean>;
    toolsUpdateMigrationById(payload: ToolsUpdateMigrationByIdInput, constraint?: Nullable<QueryStatement>): Nullable<ToolsMigration> | Promise<Nullable<ToolsMigration>>;
    toolsUpdateMigrations(payload: ToolsUpdateMigrationsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<ToolsMigration>[] | Promise<Nullable<ToolsMigration>[]>;
    toolsDeleteMigrationById(id: string, constraint?: Nullable<QueryStatement>): Nullable<ToolsMigration> | Promise<Nullable<ToolsMigration>>;
    toolsDeleteMigrations(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<ToolsMigration>[] | Promise<Nullable<ToolsMigration>[]>;
    toolsUpScriptMigration(migrationId: string): boolean | Promise<boolean>;
    toolsDownScriptMigration(migrationId: string): boolean | Promise<boolean>;
    toolsRunScriptsMigration(): boolean | Promise<boolean>;
    toolsCreateProcedure(payload: ToolsCreateProcedureInput): Nullable<ToolsProcedure> | Promise<Nullable<ToolsProcedure>>;
    toolsCreateProcedures(payload: Nullable<ToolsCreateProcedureInput>[]): boolean | Promise<boolean>;
    toolsUpdateProcedureById(payload: ToolsUpdateProcedureByIdInput, constraint?: Nullable<QueryStatement>): Nullable<ToolsProcedure> | Promise<Nullable<ToolsProcedure>>;
    toolsUpdateProcedures(payload: ToolsUpdateProceduresInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<ToolsProcedure>[] | Promise<Nullable<ToolsProcedure>[]>;
    toolsDeleteProcedureById(id: string, constraint?: Nullable<QueryStatement>): Nullable<ToolsProcedure> | Promise<Nullable<ToolsProcedure>>;
    toolsDeleteProcedures(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<ToolsProcedure>[] | Promise<Nullable<ToolsProcedure>[]>;
    toolsUpScriptProcedure(procedureId: string): boolean | Promise<boolean>;
    toolsDownScriptProcedure(procedureId: string): boolean | Promise<boolean>;
    toolsCheckScriptProcedure(procedureId: string): boolean | Promise<boolean>;
    toolsRunScriptsProcedure(): boolean | Promise<boolean>;
    toolsCreateWebhookLog(payload: ToolsCreateWebhookLogInput): Nullable<ToolsWebhookLog> | Promise<Nullable<ToolsWebhookLog>>;
    toolsCreateWebhookLogs(payload: Nullable<ToolsCreateWebhookLogInput>[]): boolean | Promise<boolean>;
    toolsUpdateWebhookLogById(payload: ToolsUpdateWebhookLogByIdInput, constraint?: Nullable<QueryStatement>): Nullable<ToolsWebhookLog> | Promise<Nullable<ToolsWebhookLog>>;
    toolsDeleteWebhookLogById(id: string, constraint?: Nullable<QueryStatement>): Nullable<ToolsWebhookLog> | Promise<Nullable<ToolsWebhookLog>>;
    toolsDeleteWebhookLogs(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<ToolsWebhookLog>[] | Promise<Nullable<ToolsWebhookLog>[]>;
    toolsCreateWebhook(payload: ToolsCreateWebhookInput): Nullable<ToolsWebhook> | Promise<Nullable<ToolsWebhook>>;
    toolsCreateWebhooks(payload: Nullable<ToolsCreateWebhookInput>[]): boolean | Promise<boolean>;
    toolsUpdateWebhookById(payload: ToolsUpdateWebhookByIdInput, constraint?: Nullable<QueryStatement>): Nullable<ToolsWebhook> | Promise<Nullable<ToolsWebhook>>;
    toolsDeleteWebhookById(id: string, constraint?: Nullable<QueryStatement>): Nullable<ToolsWebhook> | Promise<Nullable<ToolsWebhook>>;
    toolsDeleteWebhooks(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<ToolsWebhook>[] | Promise<Nullable<ToolsWebhook>[]>;
    toolsDigestWebhook(payload: JSON): boolean | Promise<boolean>;
    whatsappUpdateConversationById(payload: WhatsappUpdateConversationByIdInput, constraint?: Nullable<QueryStatement>): Nullable<WhatsappConversation> | Promise<Nullable<WhatsappConversation>>;
    whatsappUpdateConversations(payload: WhatsappUpdateConversationsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<WhatsappConversation>[] | Promise<Nullable<WhatsappConversation>[]>;
    whatsappDeleteConversationById(id: string, constraint?: Nullable<QueryStatement>): Nullable<WhatsappConversation> | Promise<Nullable<WhatsappConversation>>;
    whatsappDeleteConversations(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<WhatsappConversation>[] | Promise<Nullable<WhatsappConversation>[]>;
    whatsappUpdateMessageById(payload: WhatsappUpdateMessageByIdInput, constraint?: Nullable<QueryStatement>): Nullable<WhatsappMessage> | Promise<Nullable<WhatsappMessage>>;
    whatsappUpdateMessages(payload: WhatsappUpdateMessagesInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<WhatsappMessage>[] | Promise<Nullable<WhatsappMessage>[]>;
    whatsappDeleteMessageById(id: string, constraint?: Nullable<QueryStatement>): Nullable<WhatsappMessage> | Promise<Nullable<WhatsappMessage>>;
    whatsappDeleteMessages(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<WhatsappMessage>[] | Promise<Nullable<WhatsappMessage>[]>;
    whatsappUpdateTimelineById(payload: WhatsappUpdateTimelineByIdInput, constraint?: Nullable<QueryStatement>): Nullable<WhatsappTimeline> | Promise<Nullable<WhatsappTimeline>>;
    whatsappUpdateTimelines(payload: WhatsappUpdateTimelinesInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<WhatsappTimeline>[] | Promise<Nullable<WhatsappTimeline>[]>;
    whatsappDeleteTimelineById(id: string, constraint?: Nullable<QueryStatement>): Nullable<WhatsappTimeline> | Promise<Nullable<WhatsappTimeline>>;
    whatsappDeleteTimelines(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<WhatsappTimeline>[] | Promise<Nullable<WhatsappTimeline>[]>;
}

export interface AuditingSideEffect {
    id: string;
    rowId: GraphQLInt;
    tags?: Nullable<Nullable<GraphQLString>[]>;
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
    method?: Nullable<AuditingSideEffectMethod>;
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

export interface CommonAdministrativeAreaLevel1 {
    id: string;
    countryId: string;
    country?: Nullable<CommonCountry>;
    code: GraphQLString;
    customCode?: Nullable<GraphQLString>;
    name: GraphQLString;
    slug: GraphQLString;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType?: Nullable<CommonAdministrativeAreaLevel1MapType>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface CommonAdministrativeAreaLevel2 {
    id: string;
    countryId: string;
    country?: Nullable<CommonCountry>;
    administrativeAreaLevel1Id: string;
    administrativeAreaLevel1?: Nullable<CommonAdministrativeAreaLevel1>;
    code: GraphQLString;
    customCode?: Nullable<GraphQLString>;
    name: GraphQLString;
    slug: GraphQLString;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType?: Nullable<CommonAdministrativeAreaLevel2MapType>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface CommonAdministrativeAreaLevel3 {
    id: string;
    countryId: string;
    country?: Nullable<CommonCountry>;
    administrativeAreaLevel1Id: string;
    administrativeAreaLevel1?: Nullable<CommonAdministrativeAreaLevel1>;
    administrativeAreaLevel2Id: string;
    administrativeAreaLevel2?: Nullable<CommonAdministrativeAreaLevel2>;
    code: GraphQLString;
    customCode?: Nullable<GraphQLString>;
    name: GraphQLString;
    slug: GraphQLString;
    latitude?: Nullable<GraphQLFloat>;
    longitude?: Nullable<GraphQLFloat>;
    zoom?: Nullable<GraphQLInt>;
    mapType?: Nullable<CommonAdministrativeAreaLevel3MapType>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface CommonAttachmentFamily {
    id: string;
    resourceId: string;
    resource?: Nullable<CommonResource>;
    code: GraphQLString;
    name: GraphQLString;
    width?: Nullable<GraphQLInt>;
    height?: Nullable<GraphQLInt>;
    fitType?: Nullable<CommonAttachmentFamilyFitType>;
    quality?: Nullable<GraphQLInt>;
    sizes?: Nullable<JSON>;
    format?: Nullable<CommonAttachmentFamilyFormat>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface CommonAttachmentLibrary {
    id: string;
    originFilename: GraphQLString;
    filename: GraphQLString;
    mimetype: GraphQLString;
    extension: GraphQLString;
    relativePathSegments: JSON;
    width: GraphQLInt;
    height: GraphQLInt;
    size: GraphQLInt;
    url: GraphQLString;
    meta?: Nullable<JSON>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface CommonAttachment {
    id: string;
    familyId?: Nullable<string>;
    family?: Nullable<CommonAttachmentFamily>;
    attachableId: string;
    langId?: Nullable<string>;
    lang?: Nullable<CommonLang>;
    sort?: Nullable<GraphQLInt>;
    alt?: Nullable<GraphQLString>;
    title?: Nullable<GraphQLString>;
    originFilename: GraphQLString;
    filename: GraphQLString;
    mimetype: GraphQLString;
    extension: GraphQLString;
    relativePathSegments: JSON;
    width?: Nullable<GraphQLInt>;
    height?: Nullable<GraphQLInt>;
    size: GraphQLInt;
    url: GraphQLString;
    isCropable: GraphQLBoolean;
    isCropped?: Nullable<GraphQLBoolean>;
    isUploaded?: Nullable<GraphQLBoolean>;
    isChanged?: Nullable<GraphQLBoolean>;
    libraryId?: Nullable<string>;
    library?: Nullable<CommonAttachmentLibrary>;
    libraryFilename?: Nullable<GraphQLString>;
    sizes?: Nullable<JSON>;
    meta?: Nullable<JSON>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface CommonAdministrativeAreasCountry {
    commonCountry?: Nullable<CommonCountry>;
    commonGetAdministrativeAreasLevel1?: Nullable<Nullable<CommonAdministrativeAreaLevel1>[]>;
    commonGetAdministrativeAreasLevel2?: Nullable<Nullable<CommonAdministrativeAreaLevel2>[]>;
    commonGetAdministrativeAreasLevel3?: Nullable<Nullable<CommonAdministrativeAreaLevel3>[]>;
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
    mapType?: Nullable<CommonCountryMapType>;
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

export interface CommonCropProperties {
    x: GraphQLInt;
    y: GraphQLInt;
    width: GraphQLInt;
    height: GraphQLInt;
    rotate: GraphQLInt;
    scaleX: GraphQLInt;
    scaleY: GraphQLInt;
}

export interface CommonCreatedCrop {
    attachment: CommonAttachment;
    crop: CommonCropProperties;
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

export interface CommonResource {
    id: string;
    code: GraphQLString;
    name: GraphQLString;
    isActive: GraphQLBoolean;
    hasAttachments: GraphQLBoolean;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface IamAccount {
    id: string;
    rowId: GraphQLInt;
    type: IamAccountType;
    code?: Nullable<GraphQLString>;
    email?: Nullable<GraphQLString>;
    username: GraphQLString;
    isActive: GraphQLBoolean;
    clientId: string;
    client?: Nullable<OAuthClient>;
    tags?: Nullable<Nullable<GraphQLString>[]>;
    scopes?: Nullable<Nullable<GraphQLString>[]>;
    dApplicationCodes: Nullable<GraphQLString>[];
    dPermissions: JSON;
    dTenants: Nullable<string>[];
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
    rowId: GraphQLInt;
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
    rowId: GraphQLInt;
    name: GraphQLString;
    boundedContextId: string;
    boundedContext?: Nullable<IamBoundedContext>;
    roles?: Nullable<Nullable<IamRole>[]>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface IamRoleAccount {
    roleId: string;
    role?: Nullable<IamRole>;
    accountId: string;
    account?: Nullable<IamAccount>;
}

export interface IamRole {
    id: string;
    rowId: GraphQLInt;
    name: GraphQLString;
    isMaster: GraphQLBoolean;
    permissions?: Nullable<Nullable<IamPermission>[]>;
    accounts?: Nullable<Nullable<IamAccount>[]>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface IamTag {
    id: string;
    rowId: GraphQLInt;
    name: GraphQLString;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface IamTenantAccount {
    tenantId: string;
    tenant?: Nullable<IamTenant>;
    accountId: string;
    account?: Nullable<IamAccount>;
}

export interface IamTenant {
    id: string;
    rowId: GraphQLInt;
    parentId?: Nullable<string>;
    parent?: Nullable<IamTenant>;
    name: GraphQLString;
    code?: Nullable<GraphQLString>;
    logo?: Nullable<JSON>;
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
    rowId: GraphQLInt;
    accountId: string;
    account?: Nullable<IamAccount>;
    name: GraphQLString;
    surname?: Nullable<GraphQLString>;
    avatar?: Nullable<GraphQLString>;
    mobile?: Nullable<GraphQLString>;
    langId?: Nullable<string>;
    password: GraphQLString;
    isTwoFactorAuthenticationEnabled: GraphQLBoolean;
    twoFactorAuthenticationSecret?: Nullable<GraphQLString>;
    rememberToken?: Nullable<GraphQLString>;
    meta?: Nullable<JSON>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface MessageInboxSetting {
    id: string;
    rowId: GraphQLInt;
    accountId: string;
    lastReadMessageRowId: GraphQLInt;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface MessageInbox {
    id: string;
    rowId: GraphQLInt;
    tenantIds?: Nullable<Nullable<string>[]>;
    messageId?: Nullable<string>;
    message?: Nullable<MessageMessage>;
    messageRowId: GraphQLInt;
    accountId: string;
    accountCode?: Nullable<GraphQLString>;
    isImportant: GraphQLBoolean;
    sentAt: GraphQLTimestamp;
    subject: GraphQLString;
    body: GraphQLString;
    link?: Nullable<GraphQLString>;
    isInternalLink?: Nullable<GraphQLBoolean>;
    image?: Nullable<JSON>;
    icon?: Nullable<GraphQLString>;
    attachments?: Nullable<JSON>;
    isRead: GraphQLBoolean;
    isReadAtLeastOnce: GraphQLBoolean;
    meta?: Nullable<JSON>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface MessageMessage {
    id: string;
    rowId: GraphQLInt;
    tenantIds?: Nullable<Nullable<string>[]>;
    status: MessageMessageStatus;
    accountRecipientIds?: Nullable<Nullable<string>[]>;
    tenantRecipientIds?: Nullable<Nullable<string>[]>;
    scopeRecipients?: Nullable<Nullable<GraphQLString>[]>;
    tagRecipients?: Nullable<Nullable<GraphQLString>[]>;
    sendAt?: Nullable<GraphQLTimestamp>;
    isImportant: GraphQLBoolean;
    subject: GraphQLString;
    body: GraphQLString;
    link?: Nullable<GraphQLString>;
    isInternalLink?: Nullable<GraphQLBoolean>;
    image?: Nullable<JSON>;
    icon?: Nullable<GraphQLString>;
    attachments?: Nullable<JSON>;
    totalRecipients: GraphQLInt;
    reads: GraphQLInt;
    meta?: Nullable<JSON>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface MessageOutbox {
    id: string;
    rowId: GraphQLInt;
    messageId: string;
    message?: Nullable<MessageMessage>;
    accountRecipientIds?: Nullable<Nullable<string>[]>;
    tenantRecipientIds?: Nullable<Nullable<string>[]>;
    scopeRecipients?: Nullable<Nullable<GraphQLString>[]>;
    tagRecipients?: Nullable<Nullable<GraphQLString>[]>;
    meta?: Nullable<JSON>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface OAuthAccessToken {
    id: string;
    rowId: GraphQLInt;
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

export interface OAuthApplicationClient {
    applicationId: string;
    application?: Nullable<OAuthApplication>;
    clientId: string;
    client?: Nullable<OAuthClient>;
}

export interface OAuthApplication {
    id: string;
    rowId: GraphQLInt;
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
    rowId: GraphQLInt;
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
    rowId: GraphQLInt;
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
    rowId: GraphQLInt;
    code: GraphQLString;
    name: GraphQLString;
    roleIds?: Nullable<Nullable<string>[]>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface QueueManagerJobRegistry {
    id: string;
    rowId: GraphQLInt;
    queueName: GraphQLString;
    state: QueueManagerJobRegistryState;
    jobId: GraphQLString;
    jobName?: Nullable<GraphQLString>;
    tags?: Nullable<Nullable<GraphQLString>[]>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface QueueManagerJob {
    id?: Nullable<GraphQLString>;
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
    processedOn?: Nullable<GraphQLInt>;
    state: QueueManagerJobState;
}

export interface QueueManagerQueue {
    id: string;
    rowId: GraphQLInt;
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

export interface SearchEngineCollection {
    id: string;
    name: GraphQLString;
    alias?: Nullable<GraphQLString>;
    status: SearchEngineCollectionStatus;
    documentsNumber?: Nullable<GraphQLInt>;
    defaultSortingField?: Nullable<GraphQLString>;
    numMemoryShards?: Nullable<GraphQLInt>;
    timestampCreatedAt?: Nullable<GraphQLInt>;
    isEnableNestedFields: GraphQLBoolean;
    fields?: Nullable<Nullable<SearchEngineField>[]>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface SearchEngineField {
    id: string;
    collectionId: string;
    collection?: Nullable<SearchEngineCollection>;
    name: GraphQLString;
    type: GraphQLString;
    isNullable: GraphQLBoolean;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface StorageAccountFileManagerBase64 {
    base64: GraphQLString;
}

export interface StorageAccountFileManagerFile {
    id: string;
    originFilename: GraphQLString;
    filename: GraphQLString;
    mimetype: GraphQLString;
    extension: GraphQLString;
    relativePathSegments: GraphQLString[];
    containerName?: Nullable<GraphQLString>;
    width?: Nullable<GraphQLInt>;
    height?: Nullable<GraphQLInt>;
    size?: Nullable<GraphQLInt>;
    url?: Nullable<GraphQLString>;
    isCropable: GraphQLBoolean;
    isUploaded: GraphQLBoolean;
    libraryId?: Nullable<string>;
    libraryFilename?: Nullable<GraphQLString>;
    library?: Nullable<StorageAccountFileManagerLibraryFile>;
    meta?: Nullable<JSON>;
}

export interface StorageAccountFileManagerLibraryFile {
    id: string;
    originFilename: GraphQLString;
    filename: GraphQLString;
    mimetype: GraphQLString;
    extension: GraphQLString;
    relativePathSegments: GraphQLString[];
    width: GraphQLInt;
    height: GraphQLInt;
    size: GraphQLInt;
    url: GraphQLString;
    meta?: Nullable<JSON>;
}

export interface ClickupSpace {
    id: string;
    name?: Nullable<GraphQLString>;
    color?: Nullable<GraphQLString>;
    private?: Nullable<GraphQLBoolean>;
    avatar?: Nullable<GraphQLString>;
    admin_can_manage?: Nullable<GraphQLBoolean>;
}

export interface ClickupFolder {
    id: string;
    name?: Nullable<GraphQLString>;
    orderindex?: Nullable<GraphQLInt>;
    content?: Nullable<GraphQLString>;
    status?: Nullable<GraphQLString>;
    priority?: Nullable<GraphQLString>;
    assignee?: Nullable<GraphQLString>;
    task_count?: Nullable<GraphQLInt>;
    due_date?: Nullable<GraphQLString>;
    start_date?: Nullable<GraphQLString>;
    archived?: Nullable<GraphQLBoolean>;
    override_statuses?: Nullable<GraphQLBoolean>;
}

export interface ClickupList {
    id: string;
    name?: Nullable<GraphQLString>;
    orderindex?: Nullable<GraphQLInt>;
    content?: Nullable<GraphQLString>;
    status?: Nullable<GraphQLString>;
    priority?: Nullable<GraphQLString>;
    assignee?: Nullable<GraphQLString>;
    task_count?: Nullable<GraphQLInt>;
    due_date?: Nullable<GraphQLString>;
    start_date?: Nullable<GraphQLString>;
    archived?: Nullable<GraphQLBoolean>;
    override_statuses?: Nullable<GraphQLBoolean>;
}

export interface SupportComment {
    id: string;
    parentId?: Nullable<string>;
    parent?: Nullable<SupportComment>;
    rowId: GraphQLInt;
    externalId?: Nullable<GraphQLString>;
    externalParentId?: Nullable<string>;
    externalParent?: Nullable<SupportComment>;
    issueId?: Nullable<string>;
    issue?: Nullable<SupportIssue>;
    accountId?: Nullable<string>;
    account?: Nullable<IamAccount>;
    accountUsername?: Nullable<GraphQLString>;
    displayName?: Nullable<GraphQLString>;
    description: GraphQLString;
    attachments?: Nullable<JSON>;
    screenRecording?: Nullable<JSON>;
    meta?: Nullable<JSON>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface SupportIssue {
    id: string;
    rowId: GraphQLInt;
    externalId?: Nullable<GraphQLString>;
    externalStatus?: Nullable<GraphQLString>;
    externalColorStatus?: Nullable<GraphQLString>;
    accountId?: Nullable<string>;
    account?: Nullable<IamAccount>;
    accountUsername?: Nullable<GraphQLString>;
    displayName?: Nullable<GraphQLString>;
    frontEnvironment?: Nullable<GraphQLString>;
    frontVersion?: Nullable<GraphQLString>;
    backEnvironment?: Nullable<GraphQLString>;
    backVersion?: Nullable<GraphQLString>;
    subject: GraphQLString;
    description: GraphQLString;
    attachments?: Nullable<JSON>;
    screenRecording?: Nullable<JSON>;
    comments?: Nullable<Nullable<SupportComment>[]>;
    meta?: Nullable<JSON>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface ToolsKeyValue {
    id: string;
    rowId: GraphQLInt;
    key: GraphQLString;
    type: ToolsKeyValueType;
    value?: Nullable<GraphQLString>;
    isCached: GraphQLBoolean;
    isActive: GraphQLBoolean;
    description?: Nullable<GraphQLString>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface ToolsMigration {
    id: string;
    rowId: GraphQLInt;
    name: GraphQLString;
    version: GraphQLString;
    isActive: GraphQLBoolean;
    isExecuted: GraphQLBoolean;
    upScript?: Nullable<GraphQLString>;
    downScript?: Nullable<GraphQLString>;
    sort?: Nullable<GraphQLInt>;
    executedAt?: Nullable<GraphQLTimestamp>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface ToolsProcedure {
    id: string;
    rowId: GraphQLInt;
    name: GraphQLString;
    type: ToolsProcedureType;
    version: GraphQLString;
    isActive: GraphQLBoolean;
    isExecuted: GraphQLBoolean;
    isUpdated: GraphQLBoolean;
    upScript?: Nullable<GraphQLString>;
    downScript?: Nullable<GraphQLString>;
    sort?: Nullable<GraphQLInt>;
    hash?: Nullable<GraphQLString>;
    executedAt?: Nullable<GraphQLTimestamp>;
    checkedAt?: Nullable<GraphQLTimestamp>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface ToolsWebhookLog {
    id: string;
    rowId: GraphQLInt;
    url: GraphQLString;
    headerRequest?: Nullable<JSON>;
    bodyRequest?: Nullable<JSON>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface ToolsWebhook {
    id: string;
    rowId: GraphQLInt;
    name: GraphQLString;
    service: GraphQLString;
    endpoint: GraphQLString;
    externalId?: Nullable<GraphQLString>;
    events?: Nullable<Nullable<GraphQLString>[]>;
    secret?: Nullable<GraphQLString>;
    meta?: Nullable<JSON>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface WhatsappConversation {
    id: string;
    wabaConversationId: GraphQLString;
    timelineId: string;
    timeline?: Nullable<WhatsappTimeline>;
    wabaContactId: GraphQLString;
    expiration: GraphQLString;
    category: GraphQLString;
    isBillable: GraphQLBoolean;
    pricingModel: GraphQLString;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface WhatsappMessage {
    id: string;
    wabaMessageId: GraphQLString;
    timelineId: string;
    timeline?: Nullable<WhatsappTimeline>;
    conversationId?: Nullable<string>;
    conversation?: Nullable<WhatsappConversation>;
    statuses: Nullable<GraphQLString>[];
    direction: WhatsappMessageDirection;
    accountId?: Nullable<string>;
    account?: Nullable<IamAccount>;
    wabaContactId: GraphQLString;
    contactName?: Nullable<GraphQLString>;
    type: WhatsappMessageType;
    payload: JSON;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface WhatsappTimeline {
    id: string;
    accounts?: Nullable<Nullable<string>[]>;
    wabaPhoneNumberId: GraphQLString;
    wabaContactId: GraphQLString;
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
type Nullable<T> = T | null;
