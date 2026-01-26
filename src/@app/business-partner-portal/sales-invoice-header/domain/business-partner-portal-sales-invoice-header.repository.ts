/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalSalesInvoiceHeader } from '@app/business-partner-portal/sales-invoice-header';
import {
  CQMetadata,
  IRepository,
  LiteralObject,
  Pagination,
  QueryStatement,
} from '@aurorajs.dev/core';
import { BusinessPartnerPortalSalesInvoiceHeaderId } from './value-objects';

export abstract class BusinessPartnerPortalISalesInvoiceHeaderRepository
  implements IRepository<BusinessPartnerPortalSalesInvoiceHeader>
{
  abstract readonly repository: any;

  // paginate records
  abstract paginate(options?: {
    queryStatement?: QueryStatement;
    constraint?: QueryStatement;
    cQMetadata?: CQMetadata;
  }): Promise<Pagination<BusinessPartnerPortalSalesInvoiceHeader>>;

  // find a single record
  abstract find(options?: {
    queryStatement?: QueryStatement;
    constraint?: QueryStatement;
    cQMetadata?: CQMetadata;
  }): Promise<BusinessPartnerPortalSalesInvoiceHeader | null>;

  // find a single record by id
  abstract findById(
    id: BusinessPartnerPortalSalesInvoiceHeaderId,
    options?: {
      constraint?: QueryStatement;
      cQMetadata?: CQMetadata;
      // if id is a composite key, pass find arguments, example: { key1: value1, key2: value2, ...}
      findArguments?: LiteralObject;
    },
  ): Promise<BusinessPartnerPortalSalesInvoiceHeader | null>;

  // get multiple records
  abstract get(options?: {
    queryStatement?: QueryStatement;
    constraint?: QueryStatement;
    cQMetadata?: CQMetadata;
  }): Promise<BusinessPartnerPortalSalesInvoiceHeader[]>;

  // get records with rawSQL
  abstract rawSQL(options?: {
    rawSQL?: string;
    cQMetadata?: CQMetadata;
  }): Promise<BusinessPartnerPortalSalesInvoiceHeader[]>;

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
    salesInvoiceHeader: BusinessPartnerPortalSalesInvoiceHeader,
    options?: {
      createOptions?: LiteralObject;
      dataFactory?: (
        aggregate: BusinessPartnerPortalSalesInvoiceHeader,
      ) => LiteralObject;
      // arguments to find object and check if object is duplicated
      finderQueryStatement?: (
        aggregate: BusinessPartnerPortalSalesInvoiceHeader,
      ) => QueryStatement;
    },
  ): Promise<void>;

  // create a single or multiple records
  abstract insert(
    salesInvoiceHeaders: BusinessPartnerPortalSalesInvoiceHeader[],
    options?: {
      insertOptions?: LiteralObject;
      dataFactory?: (
        aggregate: BusinessPartnerPortalSalesInvoiceHeader,
      ) => LiteralObject;
    },
  ): Promise<void>;

  // update record by id
  abstract updateById(
    salesInvoiceHeader: BusinessPartnerPortalSalesInvoiceHeader,
    options?: {
      updateByIdOptions?: LiteralObject;
      constraint?: QueryStatement;
      cQMetadata?: CQMetadata;
      dataFactory?: (
        aggregate: BusinessPartnerPortalSalesInvoiceHeader,
      ) => LiteralObject;
      // arguments to find object to update, with i18n we use langId and id relationship with parent entity
      findArguments?: LiteralObject;
    },
  ): Promise<void>;

  // update records
  abstract update(
    salesInvoiceHeader: BusinessPartnerPortalSalesInvoiceHeader,
    options?: {
      updateOptions?: LiteralObject;
      queryStatement?: QueryStatement;
      constraint?: QueryStatement;
      cQMetadata?: CQMetadata;
      dataFactory?: (
        aggregate: BusinessPartnerPortalSalesInvoiceHeader,
      ) => LiteralObject;
    },
  ): Promise<void>;

  // update and increment records
  abstract updateAndIncrement(
    salesInvoiceHeader: BusinessPartnerPortalSalesInvoiceHeader,
    options?: {
      updateAndIncrementOptions?: LiteralObject;
      queryStatement?: QueryStatement;
      constraint?: QueryStatement;
      cQMetadata?: CQMetadata;
      dataFactory?: (
        aggregate: BusinessPartnerPortalSalesInvoiceHeader,
      ) => LiteralObject;
    },
  ): Promise<void>;

  // insert or update key identification element already existing in the table
  abstract upsert(
    salesInvoiceHeader: BusinessPartnerPortalSalesInvoiceHeader,
    options?: {
      upsertOptions?: LiteralObject;
      dataFactory?: (
        aggregate: BusinessPartnerPortalSalesInvoiceHeader,
      ) => LiteralObject;
    },
  ): Promise<void>;

  // delete record
  abstract deleteById(
    id: BusinessPartnerPortalSalesInvoiceHeaderId,
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
