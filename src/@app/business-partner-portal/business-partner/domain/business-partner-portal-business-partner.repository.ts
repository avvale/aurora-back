/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartner } from '@app/business-partner-portal/business-partner';
import {
  CQMetadata,
  IRepository,
  LiteralObject,
  Pagination,
  QueryStatement,
} from '@aurorajs.dev/core';
import { BusinessPartnerPortalBusinessPartnerId } from './value-objects';

export abstract class BusinessPartnerPortalIBusinessPartnerRepository
  implements IRepository<BusinessPartnerPortalBusinessPartner>
{
  abstract readonly repository: any;

  // paginate records
  abstract paginate(options?: {
    queryStatement?: QueryStatement;
    constraint?: QueryStatement;
    cQMetadata?: CQMetadata;
  }): Promise<Pagination<BusinessPartnerPortalBusinessPartner>>;

  // find a single record
  abstract find(options?: {
    queryStatement?: QueryStatement;
    constraint?: QueryStatement;
    cQMetadata?: CQMetadata;
  }): Promise<BusinessPartnerPortalBusinessPartner | null>;

  // find a single record by id
  abstract findById(
    id: BusinessPartnerPortalBusinessPartnerId,
    options?: {
      constraint?: QueryStatement;
      cQMetadata?: CQMetadata;
      // if id is a composite key, pass find arguments, example: { key1: value1, key2: value2, ...}
      findArguments?: LiteralObject;
    },
  ): Promise<BusinessPartnerPortalBusinessPartner | null>;

  // get multiple records
  abstract get(options?: {
    queryStatement?: QueryStatement;
    constraint?: QueryStatement;
    cQMetadata?: CQMetadata;
  }): Promise<BusinessPartnerPortalBusinessPartner[]>;

  // get records with rawSQL
  abstract rawSQL(options?: {
    rawSQL?: string;
    cQMetadata?: CQMetadata;
  }): Promise<BusinessPartnerPortalBusinessPartner[]>;

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
    businessPartner: BusinessPartnerPortalBusinessPartner,
    options?: {
      createOptions?: LiteralObject;
      dataFactory?: (
        aggregate: BusinessPartnerPortalBusinessPartner,
      ) => LiteralObject;
      // arguments to find object and check if object is duplicated
      finderQueryStatement?: (
        aggregate: BusinessPartnerPortalBusinessPartner,
      ) => QueryStatement;
    },
  ): Promise<void>;

  // create a single or multiple records
  abstract insert(
    businessPartners: BusinessPartnerPortalBusinessPartner[],
    options?: {
      insertOptions?: LiteralObject;
      dataFactory?: (
        aggregate: BusinessPartnerPortalBusinessPartner,
      ) => LiteralObject;
    },
  ): Promise<void>;

  // update record by id
  abstract updateById(
    businessPartner: BusinessPartnerPortalBusinessPartner,
    options?: {
      updateByIdOptions?: LiteralObject;
      constraint?: QueryStatement;
      cQMetadata?: CQMetadata;
      dataFactory?: (
        aggregate: BusinessPartnerPortalBusinessPartner,
      ) => LiteralObject;
      // arguments to find object to update, with i18n we use langId and id relationship with parent entity
      findArguments?: LiteralObject;
    },
  ): Promise<void>;

  // update records
  abstract update(
    businessPartner: BusinessPartnerPortalBusinessPartner,
    options?: {
      updateOptions?: LiteralObject;
      queryStatement?: QueryStatement;
      constraint?: QueryStatement;
      cQMetadata?: CQMetadata;
      dataFactory?: (
        aggregate: BusinessPartnerPortalBusinessPartner,
      ) => LiteralObject;
    },
  ): Promise<void>;

  // update and increment records
  abstract updateAndIncrement(
    businessPartner: BusinessPartnerPortalBusinessPartner,
    options?: {
      updateAndIncrementOptions?: LiteralObject;
      queryStatement?: QueryStatement;
      constraint?: QueryStatement;
      cQMetadata?: CQMetadata;
      dataFactory?: (
        aggregate: BusinessPartnerPortalBusinessPartner,
      ) => LiteralObject;
    },
  ): Promise<void>;

  // insert or update key identification element already existing in the table
  abstract upsert(
    businessPartner: BusinessPartnerPortalBusinessPartner,
    options?: {
      upsertOptions?: LiteralObject;
      dataFactory?: (
        aggregate: BusinessPartnerPortalBusinessPartner,
      ) => LiteralObject;
    },
  ): Promise<void>;

  // delete record
  abstract deleteById(
    id: BusinessPartnerPortalBusinessPartnerId,
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
