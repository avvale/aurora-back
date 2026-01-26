/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalPurchaseInvoiceHeader } from '@app/business-partner-portal/purchase-invoice-header';
import {
  CQMetadata,
  IRepository,
  LiteralObject,
  Pagination,
  QueryStatement,
} from '@aurorajs.dev/core';
import { BusinessPartnerPortalPurchaseInvoiceHeaderId } from './value-objects';

export abstract class BusinessPartnerPortalIPurchaseInvoiceHeaderRepository
  implements IRepository<BusinessPartnerPortalPurchaseInvoiceHeader>
{
  abstract readonly repository: any;

  // paginate records
  abstract paginate(options?: {
    queryStatement?: QueryStatement;
    constraint?: QueryStatement;
    cQMetadata?: CQMetadata;
  }): Promise<Pagination<BusinessPartnerPortalPurchaseInvoiceHeader>>;

  // find a single record
  abstract find(options?: {
    queryStatement?: QueryStatement;
    constraint?: QueryStatement;
    cQMetadata?: CQMetadata;
  }): Promise<BusinessPartnerPortalPurchaseInvoiceHeader | null>;

  // find a single record by id
  abstract findById(
    id: BusinessPartnerPortalPurchaseInvoiceHeaderId,
    options?: {
      constraint?: QueryStatement;
      cQMetadata?: CQMetadata;
      // if id is a composite key, pass find arguments, example: { key1: value1, key2: value2, ...}
      findArguments?: LiteralObject;
    },
  ): Promise<BusinessPartnerPortalPurchaseInvoiceHeader | null>;

  // get multiple records
  abstract get(options?: {
    queryStatement?: QueryStatement;
    constraint?: QueryStatement;
    cQMetadata?: CQMetadata;
  }): Promise<BusinessPartnerPortalPurchaseInvoiceHeader[]>;

  // get records with rawSQL
  abstract rawSQL(options?: {
    rawSQL?: string;
    cQMetadata?: CQMetadata;
  }): Promise<BusinessPartnerPortalPurchaseInvoiceHeader[]>;

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
    purchaseInvoiceHeader: BusinessPartnerPortalPurchaseInvoiceHeader,
    options?: {
      createOptions?: LiteralObject;
      dataFactory?: (
        aggregate: BusinessPartnerPortalPurchaseInvoiceHeader,
      ) => LiteralObject;
      // arguments to find object and check if object is duplicated
      finderQueryStatement?: (
        aggregate: BusinessPartnerPortalPurchaseInvoiceHeader,
      ) => QueryStatement;
    },
  ): Promise<void>;

  // create a single or multiple records
  abstract insert(
    purchaseInvoiceHeaders: BusinessPartnerPortalPurchaseInvoiceHeader[],
    options?: {
      insertOptions?: LiteralObject;
      dataFactory?: (
        aggregate: BusinessPartnerPortalPurchaseInvoiceHeader,
      ) => LiteralObject;
    },
  ): Promise<void>;

  // update record by id
  abstract updateById(
    purchaseInvoiceHeader: BusinessPartnerPortalPurchaseInvoiceHeader,
    options?: {
      updateByIdOptions?: LiteralObject;
      constraint?: QueryStatement;
      cQMetadata?: CQMetadata;
      dataFactory?: (
        aggregate: BusinessPartnerPortalPurchaseInvoiceHeader,
      ) => LiteralObject;
      // arguments to find object to update, with i18n we use langId and id relationship with parent entity
      findArguments?: LiteralObject;
    },
  ): Promise<void>;

  // update records
  abstract update(
    purchaseInvoiceHeader: BusinessPartnerPortalPurchaseInvoiceHeader,
    options?: {
      updateOptions?: LiteralObject;
      queryStatement?: QueryStatement;
      constraint?: QueryStatement;
      cQMetadata?: CQMetadata;
      dataFactory?: (
        aggregate: BusinessPartnerPortalPurchaseInvoiceHeader,
      ) => LiteralObject;
    },
  ): Promise<void>;

  // update and increment records
  abstract updateAndIncrement(
    purchaseInvoiceHeader: BusinessPartnerPortalPurchaseInvoiceHeader,
    options?: {
      updateAndIncrementOptions?: LiteralObject;
      queryStatement?: QueryStatement;
      constraint?: QueryStatement;
      cQMetadata?: CQMetadata;
      dataFactory?: (
        aggregate: BusinessPartnerPortalPurchaseInvoiceHeader,
      ) => LiteralObject;
    },
  ): Promise<void>;

  // insert or update key identification element already existing in the table
  abstract upsert(
    purchaseInvoiceHeader: BusinessPartnerPortalPurchaseInvoiceHeader,
    options?: {
      upsertOptions?: LiteralObject;
      dataFactory?: (
        aggregate: BusinessPartnerPortalPurchaseInvoiceHeader,
      ) => LiteralObject;
    },
  ): Promise<void>;

  // delete record
  abstract deleteById(
    id: BusinessPartnerPortalPurchaseInvoiceHeaderId,
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
