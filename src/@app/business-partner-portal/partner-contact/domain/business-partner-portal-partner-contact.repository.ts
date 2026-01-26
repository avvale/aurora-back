/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalPartnerContact } from '@app/business-partner-portal/partner-contact';
import {
  CQMetadata,
  IRepository,
  LiteralObject,
  Pagination,
  QueryStatement,
} from '@aurorajs.dev/core';
import { BusinessPartnerPortalPartnerContactId } from './value-objects';

export abstract class BusinessPartnerPortalIPartnerContactRepository
  implements IRepository<BusinessPartnerPortalPartnerContact>
{
  abstract readonly repository: any;

  // paginate records
  abstract paginate(options?: {
    queryStatement?: QueryStatement;
    constraint?: QueryStatement;
    cQMetadata?: CQMetadata;
  }): Promise<Pagination<BusinessPartnerPortalPartnerContact>>;

  // find a single record
  abstract find(options?: {
    queryStatement?: QueryStatement;
    constraint?: QueryStatement;
    cQMetadata?: CQMetadata;
  }): Promise<BusinessPartnerPortalPartnerContact | null>;

  // find a single record by id
  abstract findById(
    id: BusinessPartnerPortalPartnerContactId,
    options?: {
      constraint?: QueryStatement;
      cQMetadata?: CQMetadata;
      // if id is a composite key, pass find arguments, example: { key1: value1, key2: value2, ...}
      findArguments?: LiteralObject;
    },
  ): Promise<BusinessPartnerPortalPartnerContact | null>;

  // get multiple records
  abstract get(options?: {
    queryStatement?: QueryStatement;
    constraint?: QueryStatement;
    cQMetadata?: CQMetadata;
  }): Promise<BusinessPartnerPortalPartnerContact[]>;

  // get records with rawSQL
  abstract rawSQL(options?: {
    rawSQL?: string;
    cQMetadata?: CQMetadata;
  }): Promise<BusinessPartnerPortalPartnerContact[]>;

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
    partnerContact: BusinessPartnerPortalPartnerContact,
    options?: {
      createOptions?: LiteralObject;
      dataFactory?: (
        aggregate: BusinessPartnerPortalPartnerContact,
      ) => LiteralObject;
      // arguments to find object and check if object is duplicated
      finderQueryStatement?: (
        aggregate: BusinessPartnerPortalPartnerContact,
      ) => QueryStatement;
    },
  ): Promise<void>;

  // create a single or multiple records
  abstract insert(
    partnerContacts: BusinessPartnerPortalPartnerContact[],
    options?: {
      insertOptions?: LiteralObject;
      dataFactory?: (
        aggregate: BusinessPartnerPortalPartnerContact,
      ) => LiteralObject;
    },
  ): Promise<void>;

  // update record by id
  abstract updateById(
    partnerContact: BusinessPartnerPortalPartnerContact,
    options?: {
      updateByIdOptions?: LiteralObject;
      constraint?: QueryStatement;
      cQMetadata?: CQMetadata;
      dataFactory?: (
        aggregate: BusinessPartnerPortalPartnerContact,
      ) => LiteralObject;
      // arguments to find object to update, with i18n we use langId and id relationship with parent entity
      findArguments?: LiteralObject;
    },
  ): Promise<void>;

  // update records
  abstract update(
    partnerContact: BusinessPartnerPortalPartnerContact,
    options?: {
      updateOptions?: LiteralObject;
      queryStatement?: QueryStatement;
      constraint?: QueryStatement;
      cQMetadata?: CQMetadata;
      dataFactory?: (
        aggregate: BusinessPartnerPortalPartnerContact,
      ) => LiteralObject;
    },
  ): Promise<void>;

  // update and increment records
  abstract updateAndIncrement(
    partnerContact: BusinessPartnerPortalPartnerContact,
    options?: {
      updateAndIncrementOptions?: LiteralObject;
      queryStatement?: QueryStatement;
      constraint?: QueryStatement;
      cQMetadata?: CQMetadata;
      dataFactory?: (
        aggregate: BusinessPartnerPortalPartnerContact,
      ) => LiteralObject;
    },
  ): Promise<void>;

  // insert or update key identification element already existing in the table
  abstract upsert(
    partnerContact: BusinessPartnerPortalPartnerContact,
    options?: {
      upsertOptions?: LiteralObject;
      dataFactory?: (
        aggregate: BusinessPartnerPortalPartnerContact,
      ) => LiteralObject;
    },
  ): Promise<void>;

  // delete record
  abstract deleteById(
    id: BusinessPartnerPortalPartnerContactId,
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
