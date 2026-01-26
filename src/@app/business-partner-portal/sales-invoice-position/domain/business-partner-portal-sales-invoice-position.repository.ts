/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalSalesInvoicePosition } from '@app/business-partner-portal/sales-invoice-position';
import {
  CQMetadata,
  IRepository,
  LiteralObject,
  Pagination,
  QueryStatement,
} from '@aurorajs.dev/core';
import { BusinessPartnerPortalSalesInvoicePositionId } from './value-objects';

export abstract class BusinessPartnerPortalISalesInvoicePositionRepository
  implements IRepository<BusinessPartnerPortalSalesInvoicePosition>
{
  abstract readonly repository: any;

  // paginate records
  abstract paginate(options?: {
    queryStatement?: QueryStatement;
    constraint?: QueryStatement;
    cQMetadata?: CQMetadata;
  }): Promise<Pagination<BusinessPartnerPortalSalesInvoicePosition>>;

  // find a single record
  abstract find(options?: {
    queryStatement?: QueryStatement;
    constraint?: QueryStatement;
    cQMetadata?: CQMetadata;
  }): Promise<BusinessPartnerPortalSalesInvoicePosition | null>;

  // find a single record by id
  abstract findById(
    id: BusinessPartnerPortalSalesInvoicePositionId,
    options?: {
      constraint?: QueryStatement;
      cQMetadata?: CQMetadata;
      // if id is a composite key, pass find arguments, example: { key1: value1, key2: value2, ...}
      findArguments?: LiteralObject;
    },
  ): Promise<BusinessPartnerPortalSalesInvoicePosition | null>;

  // get multiple records
  abstract get(options?: {
    queryStatement?: QueryStatement;
    constraint?: QueryStatement;
    cQMetadata?: CQMetadata;
  }): Promise<BusinessPartnerPortalSalesInvoicePosition[]>;

  // get records with rawSQL
  abstract rawSQL(options?: {
    rawSQL?: string;
    cQMetadata?: CQMetadata;
  }): Promise<BusinessPartnerPortalSalesInvoicePosition[]>;

  // count records
  abstract count(options?: {
    queryStatement?: QueryStatement;
    constraint?: QueryStatement;
    cQMetadata?: CQMetadata;
  }): Promise<number>;

  // max record
  abstract max(
    column: string,
    options?: {
      queryStatement?: QueryStatement;
      constraint?: QueryStatement;
      cQMetadata?: CQMetadata;
    },
  ): Promise<number>;

  // min record
  abstract min(
    column: string,
    options?: {
      queryStatement?: QueryStatement;
      constraint?: QueryStatement;
      cQMetadata?: CQMetadata;
    },
  ): Promise<number>;

  // sum record
  abstract sum(
    column: string,
    options?: {
      queryStatement?: QueryStatement;
      constraint?: QueryStatement;
      cQMetadata?: CQMetadata;
    },
  ): Promise<number>;

  // ******************
  // ** side effects **
  // ******************

  // create a single record
  abstract create(
    salesInvoicePosition: BusinessPartnerPortalSalesInvoicePosition,
    options?: {
      createOptions?: LiteralObject;
      dataFactory?: (
        aggregate: BusinessPartnerPortalSalesInvoicePosition,
      ) => LiteralObject;
      // arguments to find object and check if object is duplicated
      finderQueryStatement?: (
        aggregate: BusinessPartnerPortalSalesInvoicePosition,
      ) => QueryStatement;
    },
  ): Promise<void>;

  // create a single or multiple records
  abstract insert(
    salesInvoicePositions: BusinessPartnerPortalSalesInvoicePosition[],
    options?: {
      insertOptions?: LiteralObject;
      dataFactory?: (
        aggregate: BusinessPartnerPortalSalesInvoicePosition,
      ) => LiteralObject;
    },
  ): Promise<void>;

  // update record by id
  abstract updateById(
    salesInvoicePosition: BusinessPartnerPortalSalesInvoicePosition,
    options?: {
      updateByIdOptions?: LiteralObject;
      constraint?: QueryStatement;
      cQMetadata?: CQMetadata;
      dataFactory?: (
        aggregate: BusinessPartnerPortalSalesInvoicePosition,
      ) => LiteralObject;
      // arguments to find object to update, with i18n we use langId and id relationship with parent entity
      findArguments?: LiteralObject;
    },
  ): Promise<void>;

  // update records
  abstract update(
    salesInvoicePosition: BusinessPartnerPortalSalesInvoicePosition,
    options?: {
      updateOptions?: LiteralObject;
      queryStatement?: QueryStatement;
      constraint?: QueryStatement;
      cQMetadata?: CQMetadata;
      dataFactory?: (
        aggregate: BusinessPartnerPortalSalesInvoicePosition,
      ) => LiteralObject;
    },
  ): Promise<void>;

  // update and increment records
  abstract updateAndIncrement(
    salesInvoicePosition: BusinessPartnerPortalSalesInvoicePosition,
    options?: {
      updateAndIncrementOptions?: LiteralObject;
      queryStatement?: QueryStatement;
      constraint?: QueryStatement;
      cQMetadata?: CQMetadata;
      dataFactory?: (
        aggregate: BusinessPartnerPortalSalesInvoicePosition,
      ) => LiteralObject;
    },
  ): Promise<void>;

  // insert or update key identification element already existing in the table
  abstract upsert(
    salesInvoicePosition: BusinessPartnerPortalSalesInvoicePosition,
    options?: {
      upsertOptions?: LiteralObject;
      dataFactory?: (
        aggregate: BusinessPartnerPortalSalesInvoicePosition,
      ) => LiteralObject;
    },
  ): Promise<void>;

  // delete record
  abstract deleteById(
    id: BusinessPartnerPortalSalesInvoicePositionId,
    options?: {
      deleteOptions?: LiteralObject;
      constraint?: QueryStatement;
      cQMetadata?: CQMetadata;
      // if id is a composite key, pass find arguments, example: { key1: value1, key2: value2, ...}
      findArguments?: LiteralObject;
    },
  ): Promise<void>;

  // delete records
  abstract delete(options?: {
    deleteOptions?: LiteralObject;
    queryStatement?: QueryStatement;
    constraint?: QueryStatement;
    cQMetadata?: CQMetadata;
  }): Promise<void>;
}
