/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartner } from '@app/business-partner-portal/business-partner';
import {
  BusinessPartnerPortalCreatedPartnerAddressEvent,
  BusinessPartnerPortalDeletedPartnerAddressEvent,
  BusinessPartnerPortalUpdatedPartnerAddressEvent,
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
  BusinessPartnerPortalPartnerAddressDeletedAt,
  BusinessPartnerPortalPartnerAddressId,
  BusinessPartnerPortalPartnerAddressIsActive,
  BusinessPartnerPortalPartnerAddressIsPrimary,
  BusinessPartnerPortalPartnerAddressLabel,
  BusinessPartnerPortalPartnerAddressLatitude,
  BusinessPartnerPortalPartnerAddressLongitude,
  BusinessPartnerPortalPartnerAddressNotes,
  BusinessPartnerPortalPartnerAddressPostalCode,
  BusinessPartnerPortalPartnerAddressRowId,
  BusinessPartnerPortalPartnerAddressType,
  BusinessPartnerPortalPartnerAddressUpdatedAt,
} from '@app/business-partner-portal/partner-address/domain/value-objects';
import { CommonAdministrativeAreaLevel1 } from '@app/common/administrative-area-level-1';
import { CommonAdministrativeAreaLevel2 } from '@app/common/administrative-area-level-2';
import { CommonAdministrativeAreaLevel3 } from '@app/common/administrative-area-level-3';
import { CommonCountry } from '@app/common/country';
import { CQMetadata, LiteralObject } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class BusinessPartnerPortalPartnerAddress extends AggregateRoot {
  id: BusinessPartnerPortalPartnerAddressId;
  rowId: BusinessPartnerPortalPartnerAddressRowId;
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
  createdAt: BusinessPartnerPortalPartnerAddressCreatedAt;
  updatedAt: BusinessPartnerPortalPartnerAddressUpdatedAt;
  deletedAt: BusinessPartnerPortalPartnerAddressDeletedAt;
  businessPartner: BusinessPartnerPortalBusinessPartner;
  country: CommonCountry;
  administrativeAreaLevel1: CommonAdministrativeAreaLevel1;
  administrativeAreaLevel2: CommonAdministrativeAreaLevel2;
  administrativeAreaLevel3: CommonAdministrativeAreaLevel3;

  constructor(
    id: BusinessPartnerPortalPartnerAddressId,
    rowId: BusinessPartnerPortalPartnerAddressRowId,
    businessPartnerId: BusinessPartnerPortalPartnerAddressBusinessPartnerId,
    type: BusinessPartnerPortalPartnerAddressType,
    label: BusinessPartnerPortalPartnerAddressLabel,
    addressLine1: BusinessPartnerPortalPartnerAddressAddressLine1,
    addressLine2: BusinessPartnerPortalPartnerAddressAddressLine2,
    city: BusinessPartnerPortalPartnerAddressCity,
    postalCode: BusinessPartnerPortalPartnerAddressPostalCode,
    countryId: BusinessPartnerPortalPartnerAddressCountryId,
    administrativeAreaLevel1Id: BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel1Id,
    administrativeAreaLevel2Id: BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel2Id,
    administrativeAreaLevel3Id: BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel3Id,
    latitude: BusinessPartnerPortalPartnerAddressLatitude,
    longitude: BusinessPartnerPortalPartnerAddressLongitude,
    isPrimary: BusinessPartnerPortalPartnerAddressIsPrimary,
    isActive: BusinessPartnerPortalPartnerAddressIsActive,
    notes: BusinessPartnerPortalPartnerAddressNotes,
    createdAt: BusinessPartnerPortalPartnerAddressCreatedAt,
    updatedAt: BusinessPartnerPortalPartnerAddressUpdatedAt,
    deletedAt: BusinessPartnerPortalPartnerAddressDeletedAt,
    businessPartner?: BusinessPartnerPortalBusinessPartner,
    country?: CommonCountry,
    administrativeAreaLevel1?: CommonAdministrativeAreaLevel1,
    administrativeAreaLevel2?: CommonAdministrativeAreaLevel2,
    administrativeAreaLevel3?: CommonAdministrativeAreaLevel3,
  ) {
    super();
    this.id = id;
    this.rowId = rowId;
    this.businessPartnerId = businessPartnerId;
    this.type = type;
    this.label = label;
    this.addressLine1 = addressLine1;
    this.addressLine2 = addressLine2;
    this.city = city;
    this.postalCode = postalCode;
    this.countryId = countryId;
    this.administrativeAreaLevel1Id = administrativeAreaLevel1Id;
    this.administrativeAreaLevel2Id = administrativeAreaLevel2Id;
    this.administrativeAreaLevel3Id = administrativeAreaLevel3Id;
    this.latitude = latitude;
    this.longitude = longitude;
    this.isPrimary = isPrimary;
    this.isActive = isActive;
    this.notes = notes;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
    this.businessPartner = businessPartner;
    this.country = country;
    this.administrativeAreaLevel1 = administrativeAreaLevel1;
    this.administrativeAreaLevel2 = administrativeAreaLevel2;
    this.administrativeAreaLevel3 = administrativeAreaLevel3;
  }

  static register(
    id: BusinessPartnerPortalPartnerAddressId,
    rowId: BusinessPartnerPortalPartnerAddressRowId,
    businessPartnerId: BusinessPartnerPortalPartnerAddressBusinessPartnerId,
    type: BusinessPartnerPortalPartnerAddressType,
    label: BusinessPartnerPortalPartnerAddressLabel,
    addressLine1: BusinessPartnerPortalPartnerAddressAddressLine1,
    addressLine2: BusinessPartnerPortalPartnerAddressAddressLine2,
    city: BusinessPartnerPortalPartnerAddressCity,
    postalCode: BusinessPartnerPortalPartnerAddressPostalCode,
    countryId: BusinessPartnerPortalPartnerAddressCountryId,
    administrativeAreaLevel1Id: BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel1Id,
    administrativeAreaLevel2Id: BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel2Id,
    administrativeAreaLevel3Id: BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel3Id,
    latitude: BusinessPartnerPortalPartnerAddressLatitude,
    longitude: BusinessPartnerPortalPartnerAddressLongitude,
    isPrimary: BusinessPartnerPortalPartnerAddressIsPrimary,
    isActive: BusinessPartnerPortalPartnerAddressIsActive,
    notes: BusinessPartnerPortalPartnerAddressNotes,
    createdAt: BusinessPartnerPortalPartnerAddressCreatedAt,
    updatedAt: BusinessPartnerPortalPartnerAddressUpdatedAt,
    deletedAt: BusinessPartnerPortalPartnerAddressDeletedAt,
    businessPartner?: BusinessPartnerPortalBusinessPartner,
    country?: CommonCountry,
    administrativeAreaLevel1?: CommonAdministrativeAreaLevel1,
    administrativeAreaLevel2?: CommonAdministrativeAreaLevel2,
    administrativeAreaLevel3?: CommonAdministrativeAreaLevel3,
  ): BusinessPartnerPortalPartnerAddress {
    return new BusinessPartnerPortalPartnerAddress(
      id,
      rowId,
      businessPartnerId,
      type,
      label,
      addressLine1,
      addressLine2,
      city,
      postalCode,
      countryId,
      administrativeAreaLevel1Id,
      administrativeAreaLevel2Id,
      administrativeAreaLevel3Id,
      latitude,
      longitude,
      isPrimary,
      isActive,
      notes,
      createdAt,
      updatedAt,
      deletedAt,
      businessPartner,
      country,
      administrativeAreaLevel1,
      administrativeAreaLevel2,
      administrativeAreaLevel3,
    );
  }

  created(event: {
    payload: BusinessPartnerPortalPartnerAddress;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalCreatedPartnerAddressEvent({
        payload: {
          id: event.payload.id.value,
          businessPartnerId: event.payload.businessPartnerId.value,
          type: event.payload.type.value,
          label: event.payload.label?.value,
          addressLine1: event.payload.addressLine1.value,
          addressLine2: event.payload.addressLine2?.value,
          city: event.payload.city.value,
          postalCode: event.payload.postalCode?.value,
          countryId: event.payload.countryId.value,
          administrativeAreaLevel1Id:
            event.payload.administrativeAreaLevel1Id?.value,
          administrativeAreaLevel2Id:
            event.payload.administrativeAreaLevel2Id?.value,
          administrativeAreaLevel3Id:
            event.payload.administrativeAreaLevel3Id?.value,
          latitude: event.payload.latitude?.value,
          longitude: event.payload.longitude?.value,
          isPrimary: event.payload.isPrimary.value,
          isActive: event.payload.isActive.value,
          notes: event.payload.notes?.value,
          createdAt: event.payload.createdAt?.value,
          updatedAt: event.payload.updatedAt?.value,
          deletedAt: event.payload.deletedAt?.value,
        },
        cQMetadata: event.cQMetadata,
      }),
    );
  }

  updated(event: {
    payload: BusinessPartnerPortalPartnerAddress;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalUpdatedPartnerAddressEvent({
        payload: {
          id: event.payload.id?.value,
          businessPartnerId: event.payload.businessPartnerId?.value,
          type: event.payload.type?.value,
          label: event.payload.label?.value,
          addressLine1: event.payload.addressLine1?.value,
          addressLine2: event.payload.addressLine2?.value,
          city: event.payload.city?.value,
          postalCode: event.payload.postalCode?.value,
          countryId: event.payload.countryId?.value,
          administrativeAreaLevel1Id:
            event.payload.administrativeAreaLevel1Id?.value,
          administrativeAreaLevel2Id:
            event.payload.administrativeAreaLevel2Id?.value,
          administrativeAreaLevel3Id:
            event.payload.administrativeAreaLevel3Id?.value,
          latitude: event.payload.latitude?.value,
          longitude: event.payload.longitude?.value,
          isPrimary: event.payload.isPrimary?.value,
          isActive: event.payload.isActive?.value,
          notes: event.payload.notes?.value,
          createdAt: event.payload.createdAt?.value,
          updatedAt: event.payload.updatedAt?.value,
          deletedAt: event.payload.deletedAt?.value,
        },
        cQMetadata: event.cQMetadata,
      }),
    );
  }

  deleted(event: {
    payload: BusinessPartnerPortalPartnerAddress;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalDeletedPartnerAddressEvent({
        payload: {
          id: event.payload.id.value,
          rowId: event.payload.rowId.value,
          businessPartnerId: event.payload.businessPartnerId.value,
          type: event.payload.type.value,
          label: event.payload.label?.value,
          addressLine1: event.payload.addressLine1.value,
          addressLine2: event.payload.addressLine2?.value,
          city: event.payload.city.value,
          postalCode: event.payload.postalCode?.value,
          countryId: event.payload.countryId.value,
          administrativeAreaLevel1Id:
            event.payload.administrativeAreaLevel1Id?.value,
          administrativeAreaLevel2Id:
            event.payload.administrativeAreaLevel2Id?.value,
          administrativeAreaLevel3Id:
            event.payload.administrativeAreaLevel3Id?.value,
          latitude: event.payload.latitude?.value,
          longitude: event.payload.longitude?.value,
          isPrimary: event.payload.isPrimary.value,
          isActive: event.payload.isActive.value,
          notes: event.payload.notes?.value,
          createdAt: event.payload.createdAt?.value,
          updatedAt: event.payload.updatedAt?.value,
          deletedAt: event.payload.deletedAt?.value,
        },
        cQMetadata: event.cQMetadata,
      }),
    );
  }

  toDTO(): LiteralObject {
    return {
      id: this.id.value,
      rowId: this.rowId.value,
      businessPartnerId: this.businessPartnerId.value,
      type: this.type.value,
      label: this.label?.value,
      addressLine1: this.addressLine1.value,
      addressLine2: this.addressLine2?.value,
      city: this.city.value,
      postalCode: this.postalCode?.value,
      countryId: this.countryId.value,
      administrativeAreaLevel1Id: this.administrativeAreaLevel1Id?.value,
      administrativeAreaLevel2Id: this.administrativeAreaLevel2Id?.value,
      administrativeAreaLevel3Id: this.administrativeAreaLevel3Id?.value,
      latitude: this.latitude?.value,
      longitude: this.longitude?.value,
      isPrimary: this.isPrimary.value,
      isActive: this.isActive.value,
      notes: this.notes?.value,
      createdAt: this.createdAt?.value,
      updatedAt: this.updatedAt?.value,
      deletedAt: this.deletedAt?.value,
      businessPartner: this.businessPartner?.toDTO(),
      country: this.country?.toDTO(),
      administrativeAreaLevel1: this.administrativeAreaLevel1?.toDTO(),
      administrativeAreaLevel2: this.administrativeAreaLevel2?.toDTO(),
      administrativeAreaLevel3: this.administrativeAreaLevel3?.toDTO(),
    };
  }

  // function called to get data for repository side effect methods
  toRepository(): LiteralObject {
    return {
      id: this.id.value,
      businessPartnerId: this.businessPartnerId.value,
      type: this.type.value,
      label: this.label?.value,
      addressLine1: this.addressLine1.value,
      addressLine2: this.addressLine2?.value,
      city: this.city.value,
      postalCode: this.postalCode?.value,
      countryId: this.countryId.value,
      administrativeAreaLevel1Id: this.administrativeAreaLevel1Id?.value,
      administrativeAreaLevel2Id: this.administrativeAreaLevel2Id?.value,
      administrativeAreaLevel3Id: this.administrativeAreaLevel3Id?.value,
      latitude: this.latitude?.value,
      longitude: this.longitude?.value,
      isPrimary: this.isPrimary.value,
      isActive: this.isActive.value,
      notes: this.notes?.value,
      createdAt: this.createdAt?.value,
      updatedAt: this.updatedAt?.value,
      deletedAt: this.deletedAt?.value,
      businessPartner: this.businessPartner?.toDTO(),
      country: this.country?.toDTO(),
      administrativeAreaLevel1: this.administrativeAreaLevel1?.toDTO(),
      administrativeAreaLevel2: this.administrativeAreaLevel2?.toDTO(),
      administrativeAreaLevel3: this.administrativeAreaLevel3?.toDTO(),
    };
  }
}
