
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
