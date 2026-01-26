/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalIPartnerAddressRepository,
  BusinessPartnerPortalPartnerAddress,
} from '@app/business-partner-portal/partner-address';
import {
  BusinessPartnerPortalPartnerAddressAddressLine1,
  BusinessPartnerPortalPartnerAddressAddressLine2,
  BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel1Id,
  BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel2Id,
  BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel3Id,
  BusinessPartnerPortalPartnerAddressBusinessPartnerId,
  BusinessPartnerPortalPartnerAddressCity,
  BusinessPartnerPortalPartnerAddressCountryId,
  BusinessPartnerPortalPartnerAddressCreatedAt,
  BusinessPartnerPortalPartnerAddressId,
  BusinessPartnerPortalPartnerAddressIsActive,
  BusinessPartnerPortalPartnerAddressIsPrimary,
  BusinessPartnerPortalPartnerAddressLabel,
  BusinessPartnerPortalPartnerAddressLatitude,
  BusinessPartnerPortalPartnerAddressLongitude,
  BusinessPartnerPortalPartnerAddressNotes,
  BusinessPartnerPortalPartnerAddressPostalCode,
  BusinessPartnerPortalPartnerAddressType,
  BusinessPartnerPortalPartnerAddressUpdatedAt,
} from '@app/business-partner-portal/partner-address/domain/value-objects';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class BusinessPartnerPortalCreatePartnerAddressService {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: BusinessPartnerPortalIPartnerAddressRepository,
  ) {}

  async main(
    payload: {
      id: BusinessPartnerPortalPartnerAddressId;
      businessPartnerId: BusinessPartnerPortalPartnerAddressBusinessPartnerId;
      type: BusinessPartnerPortalPartnerAddressType;
      label: BusinessPartnerPortalPartnerAddressLabel;
      addressLine1: BusinessPartnerPortalPartnerAddressAddressLine1;
      addressLine2: BusinessPartnerPortalPartnerAddressAddressLine2;
      city: BusinessPartnerPortalPartnerAddressCity;
      postalCode: BusinessPartnerPortalPartnerAddressPostalCode;
      countryId: BusinessPartnerPortalPartnerAddressCountryId;
      administrativeAreaLevel1Id: BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel1Id;
      administrativeAreaLevel2Id: BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel2Id;
      administrativeAreaLevel3Id: BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel3Id;
      latitude: BusinessPartnerPortalPartnerAddressLatitude;
      longitude: BusinessPartnerPortalPartnerAddressLongitude;
      isPrimary: BusinessPartnerPortalPartnerAddressIsPrimary;
      isActive: BusinessPartnerPortalPartnerAddressIsActive;
      notes: BusinessPartnerPortalPartnerAddressNotes;
    },
    cQMetadata?: CQMetadata,
  ): Promise<void> {
    // create aggregate with factory pattern
    const partnerAddress = BusinessPartnerPortalPartnerAddress.register(
      payload.id,
      undefined, // rowId
      payload.businessPartnerId,
      payload.type,
      payload.label,
      payload.addressLine1,
      payload.addressLine2,
      payload.city,
      payload.postalCode,
      payload.countryId,
      payload.administrativeAreaLevel1Id,
      payload.administrativeAreaLevel2Id,
      payload.administrativeAreaLevel3Id,
      payload.latitude,
      payload.longitude,
      payload.isPrimary,
      payload.isActive,
      payload.notes,
      new BusinessPartnerPortalPartnerAddressCreatedAt({
        currentTimestamp: true,
      }),
      new BusinessPartnerPortalPartnerAddressUpdatedAt({
        currentTimestamp: true,
      }),
      null, // deletedAt
    );

    await this.repository.create(partnerAddress, {
      createOptions: cQMetadata?.repositoryOptions,
    });

    // merge EventBus methods with object returned by the repository, to be able to apply and commit events
    const partnerAddressRegister =
      this.publisher.mergeObjectContext(partnerAddress);

    partnerAddressRegister.created({
      payload: partnerAddress,
      cQMetadata,
    }); // apply event to model events
    partnerAddressRegister.commit(); // commit all events of model
  }
}
