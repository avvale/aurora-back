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
  BusinessPartnerPortalBusinessPartnerCreatedAt,
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
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class BusinessPartnerPortalCreateBusinessPartnerService {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: BusinessPartnerPortalIBusinessPartnerRepository,
  ) {}

  async main(
    payload: {
      id: BusinessPartnerPortalBusinessPartnerId;
      externalId: BusinessPartnerPortalBusinessPartnerExternalId;
      code: BusinessPartnerPortalBusinessPartnerCode;
      type: BusinessPartnerPortalBusinessPartnerType;
      name: BusinessPartnerPortalBusinessPartnerName;
      tin: BusinessPartnerPortalBusinessPartnerTin;
      email: BusinessPartnerPortalBusinessPartnerEmail;
      website: BusinessPartnerPortalBusinessPartnerWebsite;
      phone: BusinessPartnerPortalBusinessPartnerPhone;
      phoneCountryPrefix: BusinessPartnerPortalBusinessPartnerPhoneCountryPrefix;
      phoneSanitized: BusinessPartnerPortalBusinessPartnerPhoneSanitized;
      isActive: BusinessPartnerPortalBusinessPartnerIsActive;
      meta: BusinessPartnerPortalBusinessPartnerMeta;
    },
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
      new BusinessPartnerPortalBusinessPartnerCreatedAt({
        currentTimestamp: true,
      }),
      new BusinessPartnerPortalBusinessPartnerUpdatedAt({
        currentTimestamp: true,
      }),
      null, // deletedAt
    );

    await this.repository.create(businessPartner, {
      createOptions: cQMetadata?.repositoryOptions,
    });

    // merge EventBus methods with object returned by the repository, to be able to apply and commit events
    const businessPartnerRegister =
      this.publisher.mergeObjectContext(businessPartner);

    businessPartnerRegister.created({
      payload: businessPartner,
      cQMetadata,
    }); // apply event to model events
    businessPartnerRegister.commit(); // commit all events of model
  }
}
