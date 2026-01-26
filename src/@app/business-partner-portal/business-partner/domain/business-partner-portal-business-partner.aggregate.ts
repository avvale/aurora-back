/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatedBusinessPartnerEvent,
  BusinessPartnerPortalDeletedBusinessPartnerEvent,
  BusinessPartnerPortalUpdatedBusinessPartnerEvent,
} from '@app/business-partner-portal/business-partner';
import {
  BusinessPartnerPortalBusinessPartnerCode,
  BusinessPartnerPortalBusinessPartnerCreatedAt,
  BusinessPartnerPortalBusinessPartnerDeletedAt,
  BusinessPartnerPortalBusinessPartnerEmail,
  BusinessPartnerPortalBusinessPartnerExternalId,
  BusinessPartnerPortalBusinessPartnerId,
  BusinessPartnerPortalBusinessPartnerIsActive,
  BusinessPartnerPortalBusinessPartnerMeta,
  BusinessPartnerPortalBusinessPartnerName,
  BusinessPartnerPortalBusinessPartnerPhone,
  BusinessPartnerPortalBusinessPartnerPhoneCountryPrefix,
  BusinessPartnerPortalBusinessPartnerPhoneSanitized,
  BusinessPartnerPortalBusinessPartnerRowId,
  BusinessPartnerPortalBusinessPartnerTin,
  BusinessPartnerPortalBusinessPartnerType,
  BusinessPartnerPortalBusinessPartnerUpdatedAt,
  BusinessPartnerPortalBusinessPartnerWebsite,
} from '@app/business-partner-portal/business-partner/domain/value-objects';
import { BusinessPartnerPortalPartnerAddress } from '@app/business-partner-portal/partner-address';
import { BusinessPartnerPortalPartnerContact } from '@app/business-partner-portal/partner-contact';
import { BusinessPartnerPortalPaymentCollectionMode } from '@app/business-partner-portal/payment-collection-mode';
import { CQMetadata, LiteralObject } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class BusinessPartnerPortalBusinessPartner extends AggregateRoot {
  id: BusinessPartnerPortalBusinessPartnerId;
  rowId: BusinessPartnerPortalBusinessPartnerRowId;
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
  createdAt: BusinessPartnerPortalBusinessPartnerCreatedAt;
  updatedAt: BusinessPartnerPortalBusinessPartnerUpdatedAt;
  deletedAt: BusinessPartnerPortalBusinessPartnerDeletedAt;
  contacts: BusinessPartnerPortalPartnerContact[];
  addresses: BusinessPartnerPortalPartnerAddress[];
  paymentCollectionModes: BusinessPartnerPortalPaymentCollectionMode[];

  constructor(
    id: BusinessPartnerPortalBusinessPartnerId,
    rowId: BusinessPartnerPortalBusinessPartnerRowId,
    externalId: BusinessPartnerPortalBusinessPartnerExternalId,
    code: BusinessPartnerPortalBusinessPartnerCode,
    type: BusinessPartnerPortalBusinessPartnerType,
    name: BusinessPartnerPortalBusinessPartnerName,
    tin: BusinessPartnerPortalBusinessPartnerTin,
    email: BusinessPartnerPortalBusinessPartnerEmail,
    website: BusinessPartnerPortalBusinessPartnerWebsite,
    phone: BusinessPartnerPortalBusinessPartnerPhone,
    phoneCountryPrefix: BusinessPartnerPortalBusinessPartnerPhoneCountryPrefix,
    phoneSanitized: BusinessPartnerPortalBusinessPartnerPhoneSanitized,
    isActive: BusinessPartnerPortalBusinessPartnerIsActive,
    meta: BusinessPartnerPortalBusinessPartnerMeta,
    createdAt: BusinessPartnerPortalBusinessPartnerCreatedAt,
    updatedAt: BusinessPartnerPortalBusinessPartnerUpdatedAt,
    deletedAt: BusinessPartnerPortalBusinessPartnerDeletedAt,
    contacts?: BusinessPartnerPortalPartnerContact[],
    addresses?: BusinessPartnerPortalPartnerAddress[],
    paymentCollectionModes?: BusinessPartnerPortalPaymentCollectionMode[],
  ) {
    super();
    this.id = id;
    this.rowId = rowId;
    this.externalId = externalId;
    this.code = code;
    this.type = type;
    this.name = name;
    this.tin = tin;
    this.email = email;
    this.website = website;
    this.phone = phone;
    this.phoneCountryPrefix = phoneCountryPrefix;
    this.phoneSanitized = phoneSanitized;
    this.isActive = isActive;
    this.meta = meta;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
    this.contacts = contacts;
    this.addresses = addresses;
    this.paymentCollectionModes = paymentCollectionModes;
  }

  static register(
    id: BusinessPartnerPortalBusinessPartnerId,
    rowId: BusinessPartnerPortalBusinessPartnerRowId,
    externalId: BusinessPartnerPortalBusinessPartnerExternalId,
    code: BusinessPartnerPortalBusinessPartnerCode,
    type: BusinessPartnerPortalBusinessPartnerType,
    name: BusinessPartnerPortalBusinessPartnerName,
    tin: BusinessPartnerPortalBusinessPartnerTin,
    email: BusinessPartnerPortalBusinessPartnerEmail,
    website: BusinessPartnerPortalBusinessPartnerWebsite,
    phone: BusinessPartnerPortalBusinessPartnerPhone,
    phoneCountryPrefix: BusinessPartnerPortalBusinessPartnerPhoneCountryPrefix,
    phoneSanitized: BusinessPartnerPortalBusinessPartnerPhoneSanitized,
    isActive: BusinessPartnerPortalBusinessPartnerIsActive,
    meta: BusinessPartnerPortalBusinessPartnerMeta,
    createdAt: BusinessPartnerPortalBusinessPartnerCreatedAt,
    updatedAt: BusinessPartnerPortalBusinessPartnerUpdatedAt,
    deletedAt: BusinessPartnerPortalBusinessPartnerDeletedAt,
    contacts?: BusinessPartnerPortalPartnerContact[],
    addresses?: BusinessPartnerPortalPartnerAddress[],
    paymentCollectionModes?: BusinessPartnerPortalPaymentCollectionMode[],
  ): BusinessPartnerPortalBusinessPartner {
    return new BusinessPartnerPortalBusinessPartner(
      id,
      rowId,
      externalId,
      code,
      type,
      name,
      tin,
      email,
      website,
      phone,
      phoneCountryPrefix,
      phoneSanitized,
      isActive,
      meta,
      createdAt,
      updatedAt,
      deletedAt,
      contacts,
      addresses,
      paymentCollectionModes,
    );
  }

  created(event: {
    payload: BusinessPartnerPortalBusinessPartner;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalCreatedBusinessPartnerEvent({
        payload: {
          id: event.payload.id.value,
          externalId: event.payload.externalId?.value,
          code: event.payload.code?.value,
          type: event.payload.type.value,
          name: event.payload.name.value,
          tin: event.payload.tin?.value,
          email: event.payload.email?.value,
          website: event.payload.website?.value,
          phone: event.payload.phone?.value,
          phoneCountryPrefix: event.payload.phoneCountryPrefix?.value,
          phoneSanitized: event.payload.phoneSanitized?.value,
          isActive: event.payload.isActive.value,
          meta: event.payload.meta?.value,
          createdAt: event.payload.createdAt?.value,
          updatedAt: event.payload.updatedAt?.value,
          deletedAt: event.payload.deletedAt?.value,
        },
        cQMetadata: event.cQMetadata,
      }),
    );
  }

  updated(event: {
    payload: BusinessPartnerPortalBusinessPartner;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalUpdatedBusinessPartnerEvent({
        payload: {
          id: event.payload.id?.value,
          externalId: event.payload.externalId?.value,
          code: event.payload.code?.value,
          type: event.payload.type?.value,
          name: event.payload.name?.value,
          tin: event.payload.tin?.value,
          email: event.payload.email?.value,
          website: event.payload.website?.value,
          phone: event.payload.phone?.value,
          phoneCountryPrefix: event.payload.phoneCountryPrefix?.value,
          phoneSanitized: event.payload.phoneSanitized?.value,
          isActive: event.payload.isActive?.value,
          meta: event.payload.meta?.value,
          createdAt: event.payload.createdAt?.value,
          updatedAt: event.payload.updatedAt?.value,
          deletedAt: event.payload.deletedAt?.value,
        },
        cQMetadata: event.cQMetadata,
      }),
    );
  }

  deleted(event: {
    payload: BusinessPartnerPortalBusinessPartner;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalDeletedBusinessPartnerEvent({
        payload: {
          id: event.payload.id.value,
          rowId: event.payload.rowId.value,
          externalId: event.payload.externalId?.value,
          code: event.payload.code?.value,
          type: event.payload.type.value,
          name: event.payload.name.value,
          tin: event.payload.tin?.value,
          email: event.payload.email?.value,
          website: event.payload.website?.value,
          phone: event.payload.phone?.value,
          phoneCountryPrefix: event.payload.phoneCountryPrefix?.value,
          phoneSanitized: event.payload.phoneSanitized?.value,
          isActive: event.payload.isActive.value,
          meta: event.payload.meta?.value,
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
      externalId: this.externalId?.value,
      code: this.code?.value,
      type: this.type.value,
      name: this.name.value,
      tin: this.tin?.value,
      email: this.email?.value,
      website: this.website?.value,
      phone: this.phone?.value,
      phoneCountryPrefix: this.phoneCountryPrefix?.value,
      phoneSanitized: this.phoneSanitized?.value,
      isActive: this.isActive.value,
      meta: this.meta?.value,
      createdAt: this.createdAt?.value,
      updatedAt: this.updatedAt?.value,
      deletedAt: this.deletedAt?.value,
      contacts: this.contacts?.map((item) => item.toDTO()),
      addresses: this.addresses?.map((item) => item.toDTO()),
      paymentCollectionModes: this.paymentCollectionModes?.map((item) =>
        item.toDTO(),
      ),
    };
  }

  // function called to get data for repository side effect methods
  toRepository(): LiteralObject {
    return {
      id: this.id.value,
      externalId: this.externalId?.value,
      code: this.code?.value,
      type: this.type.value,
      name: this.name.value,
      tin: this.tin?.value,
      email: this.email?.value,
      website: this.website?.value,
      phone: this.phone?.value,
      phoneCountryPrefix: this.phoneCountryPrefix?.value,
      phoneSanitized: this.phoneSanitized?.value,
      isActive: this.isActive.value,
      meta: this.meta?.value,
      createdAt: this.createdAt?.value,
      updatedAt: this.updatedAt?.value,
      deletedAt: this.deletedAt?.value,
      contacts: this.contacts?.map((item) => item.toDTO()),
      addresses: this.addresses?.map((item) => item.toDTO()),
      paymentCollectionModes: this.paymentCollectionModes?.map((item) =>
        item.toDTO(),
      ),
    };
  }
}
