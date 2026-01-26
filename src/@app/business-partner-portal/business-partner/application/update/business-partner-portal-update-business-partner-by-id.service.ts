/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalBusinessPartner,
  BusinessPartnerPortalIBusinessPartnerRepository,
} from '@app/business-partner-portal/business-partner';
import {
  BusinessPartnerPortalBusinessPartnerCode,
  BusinessPartnerPortalBusinessPartnerEmail,
  BusinessPartnerPortalBusinessPartnerExternalId,
  BusinessPartnerPortalBusinessPartnerId,
  BusinessPartnerPortalBusinessPartnerIsActive,
  BusinessPartnerPortalBusinessPartnerMeta,
  BusinessPartnerPortalBusinessPartnerName,
  BusinessPartnerPortalBusinessPartnerPhone,
  BusinessPartnerPortalBusinessPartnerPhoneCountryPrefix,
  BusinessPartnerPortalBusinessPartnerPhoneSanitized,
  BusinessPartnerPortalBusinessPartnerTin,
  BusinessPartnerPortalBusinessPartnerType,
  BusinessPartnerPortalBusinessPartnerUpdatedAt,
  BusinessPartnerPortalBusinessPartnerWebsite,
} from '@app/business-partner-portal/business-partner/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class BusinessPartnerPortalUpdateBusinessPartnerByIdService {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: BusinessPartnerPortalIBusinessPartnerRepository,
  ) {}

  async main(
    payload: {
      id: BusinessPartnerPortalBusinessPartnerId;
      externalId?: BusinessPartnerPortalBusinessPartnerExternalId;
      code?: BusinessPartnerPortalBusinessPartnerCode;
      type?: BusinessPartnerPortalBusinessPartnerType;
      name?: BusinessPartnerPortalBusinessPartnerName;
      tin?: BusinessPartnerPortalBusinessPartnerTin;
      email?: BusinessPartnerPortalBusinessPartnerEmail;
      website?: BusinessPartnerPortalBusinessPartnerWebsite;
      phone?: BusinessPartnerPortalBusinessPartnerPhone;
      phoneCountryPrefix?: BusinessPartnerPortalBusinessPartnerPhoneCountryPrefix;
      phoneSanitized?: BusinessPartnerPortalBusinessPartnerPhoneSanitized;
      isActive?: BusinessPartnerPortalBusinessPartnerIsActive;
      meta?: BusinessPartnerPortalBusinessPartnerMeta;
    },
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<void> {
    // create aggregate with factory pattern
    const businessPartner = BusinessPartnerPortalBusinessPartner.register(
      payload.id,
      undefined, // rowId
      payload.externalId,
      payload.code,
      payload.type,
      payload.name,
      payload.tin,
      payload.email,
      payload.website,
      payload.phone,
      payload.phoneCountryPrefix,
      payload.phoneSanitized,
      payload.isActive,
      payload.meta,
      null, // createdAt
      new BusinessPartnerPortalBusinessPartnerUpdatedAt({
        currentTimestamp: true,
      }),
      null, // deletedAt
    );

    // update by id
    await this.repository.updateById(businessPartner, {
      constraint,
      cQMetadata,
      updateByIdOptions: cQMetadata?.repositoryOptions,
    });

    // merge EventBus methods with object returned by the repository, to be able to apply and commit events
    const businessPartnerRegister =
      this.publisher.mergeObjectContext(businessPartner);

    businessPartnerRegister.updated({
      payload: businessPartner,
      cQMetadata,
    }); // apply event to model events
    businessPartnerRegister.commit(); // commit all events of model
  }
}
