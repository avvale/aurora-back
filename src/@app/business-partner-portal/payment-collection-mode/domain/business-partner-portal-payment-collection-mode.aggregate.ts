/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartner } from '@app/business-partner-portal/business-partner';
import {
  BusinessPartnerPortalCreatedPaymentCollectionModeEvent,
  BusinessPartnerPortalDeletedPaymentCollectionModeEvent,
  BusinessPartnerPortalUpdatedPaymentCollectionModeEvent,
} from '@app/business-partner-portal/payment-collection-mode';
import {
  BusinessPartnerPortalPaymentCollectionModeAccountHolderName,
  BusinessPartnerPortalPaymentCollectionModeAccountNumber,
  BusinessPartnerPortalPaymentCollectionModeBankName,
  BusinessPartnerPortalPaymentCollectionModeBusinessPartnerId,
  BusinessPartnerPortalPaymentCollectionModeCreatedAt,
  BusinessPartnerPortalPaymentCollectionModeCurrencyCode,
  BusinessPartnerPortalPaymentCollectionModeDeletedAt,
  BusinessPartnerPortalPaymentCollectionModeExpirationDate,
  BusinessPartnerPortalPaymentCollectionModeIban,
  BusinessPartnerPortalPaymentCollectionModeId,
  BusinessPartnerPortalPaymentCollectionModeIsActive,
  BusinessPartnerPortalPaymentCollectionModeIsPrimary,
  BusinessPartnerPortalPaymentCollectionModeLabel,
  BusinessPartnerPortalPaymentCollectionModeLastUsedAt,
  BusinessPartnerPortalPaymentCollectionModeNotes,
  BusinessPartnerPortalPaymentCollectionModePaymentModeId,
  BusinessPartnerPortalPaymentCollectionModeRoutingNumber,
  BusinessPartnerPortalPaymentCollectionModeRowId,
  BusinessPartnerPortalPaymentCollectionModeSwiftCode,
  BusinessPartnerPortalPaymentCollectionModeUpdatedAt,
} from '@app/business-partner-portal/payment-collection-mode/domain/value-objects';
import { BusinessPartnerPortalPaymentMode } from '@app/business-partner-portal/payment-mode';
import { CQMetadata, LiteralObject } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class BusinessPartnerPortalPaymentCollectionMode extends AggregateRoot {
  id: BusinessPartnerPortalPaymentCollectionModeId;
  rowId: BusinessPartnerPortalPaymentCollectionModeRowId;
  businessPartnerId: BusinessPartnerPortalPaymentCollectionModeBusinessPartnerId;
  paymentModeId: BusinessPartnerPortalPaymentCollectionModePaymentModeId;
  label: BusinessPartnerPortalPaymentCollectionModeLabel;
  accountNumber: BusinessPartnerPortalPaymentCollectionModeAccountNumber;
  accountHolderName: BusinessPartnerPortalPaymentCollectionModeAccountHolderName;
  bankName: BusinessPartnerPortalPaymentCollectionModeBankName;
  routingNumber: BusinessPartnerPortalPaymentCollectionModeRoutingNumber;
  iban: BusinessPartnerPortalPaymentCollectionModeIban;
  swiftCode: BusinessPartnerPortalPaymentCollectionModeSwiftCode;
  currencyCode: BusinessPartnerPortalPaymentCollectionModeCurrencyCode;
  expirationDate: BusinessPartnerPortalPaymentCollectionModeExpirationDate;
  isPrimary: BusinessPartnerPortalPaymentCollectionModeIsPrimary;
  isActive: BusinessPartnerPortalPaymentCollectionModeIsActive;
  notes: BusinessPartnerPortalPaymentCollectionModeNotes;
  lastUsedAt: BusinessPartnerPortalPaymentCollectionModeLastUsedAt;
  createdAt: BusinessPartnerPortalPaymentCollectionModeCreatedAt;
  updatedAt: BusinessPartnerPortalPaymentCollectionModeUpdatedAt;
  deletedAt: BusinessPartnerPortalPaymentCollectionModeDeletedAt;
  businessPartner: BusinessPartnerPortalBusinessPartner;
  paymentMode: BusinessPartnerPortalPaymentMode;

  constructor(
    id: BusinessPartnerPortalPaymentCollectionModeId,
    rowId: BusinessPartnerPortalPaymentCollectionModeRowId,
    businessPartnerId: BusinessPartnerPortalPaymentCollectionModeBusinessPartnerId,
    paymentModeId: BusinessPartnerPortalPaymentCollectionModePaymentModeId,
    label: BusinessPartnerPortalPaymentCollectionModeLabel,
    accountNumber: BusinessPartnerPortalPaymentCollectionModeAccountNumber,
    accountHolderName: BusinessPartnerPortalPaymentCollectionModeAccountHolderName,
    bankName: BusinessPartnerPortalPaymentCollectionModeBankName,
    routingNumber: BusinessPartnerPortalPaymentCollectionModeRoutingNumber,
    iban: BusinessPartnerPortalPaymentCollectionModeIban,
    swiftCode: BusinessPartnerPortalPaymentCollectionModeSwiftCode,
    currencyCode: BusinessPartnerPortalPaymentCollectionModeCurrencyCode,
    expirationDate: BusinessPartnerPortalPaymentCollectionModeExpirationDate,
    isPrimary: BusinessPartnerPortalPaymentCollectionModeIsPrimary,
    isActive: BusinessPartnerPortalPaymentCollectionModeIsActive,
    notes: BusinessPartnerPortalPaymentCollectionModeNotes,
    lastUsedAt: BusinessPartnerPortalPaymentCollectionModeLastUsedAt,
    createdAt: BusinessPartnerPortalPaymentCollectionModeCreatedAt,
    updatedAt: BusinessPartnerPortalPaymentCollectionModeUpdatedAt,
    deletedAt: BusinessPartnerPortalPaymentCollectionModeDeletedAt,
    businessPartner?: BusinessPartnerPortalBusinessPartner,
    paymentMode?: BusinessPartnerPortalPaymentMode,
  ) {
    super();
    this.id = id;
    this.rowId = rowId;
    this.businessPartnerId = businessPartnerId;
    this.paymentModeId = paymentModeId;
    this.label = label;
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.bankName = bankName;
    this.routingNumber = routingNumber;
    this.iban = iban;
    this.swiftCode = swiftCode;
    this.currencyCode = currencyCode;
    this.expirationDate = expirationDate;
    this.isPrimary = isPrimary;
    this.isActive = isActive;
    this.notes = notes;
    this.lastUsedAt = lastUsedAt;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
    this.businessPartner = businessPartner;
    this.paymentMode = paymentMode;
  }

  static register(
    id: BusinessPartnerPortalPaymentCollectionModeId,
    rowId: BusinessPartnerPortalPaymentCollectionModeRowId,
    businessPartnerId: BusinessPartnerPortalPaymentCollectionModeBusinessPartnerId,
    paymentModeId: BusinessPartnerPortalPaymentCollectionModePaymentModeId,
    label: BusinessPartnerPortalPaymentCollectionModeLabel,
    accountNumber: BusinessPartnerPortalPaymentCollectionModeAccountNumber,
    accountHolderName: BusinessPartnerPortalPaymentCollectionModeAccountHolderName,
    bankName: BusinessPartnerPortalPaymentCollectionModeBankName,
    routingNumber: BusinessPartnerPortalPaymentCollectionModeRoutingNumber,
    iban: BusinessPartnerPortalPaymentCollectionModeIban,
    swiftCode: BusinessPartnerPortalPaymentCollectionModeSwiftCode,
    currencyCode: BusinessPartnerPortalPaymentCollectionModeCurrencyCode,
    expirationDate: BusinessPartnerPortalPaymentCollectionModeExpirationDate,
    isPrimary: BusinessPartnerPortalPaymentCollectionModeIsPrimary,
    isActive: BusinessPartnerPortalPaymentCollectionModeIsActive,
    notes: BusinessPartnerPortalPaymentCollectionModeNotes,
    lastUsedAt: BusinessPartnerPortalPaymentCollectionModeLastUsedAt,
    createdAt: BusinessPartnerPortalPaymentCollectionModeCreatedAt,
    updatedAt: BusinessPartnerPortalPaymentCollectionModeUpdatedAt,
    deletedAt: BusinessPartnerPortalPaymentCollectionModeDeletedAt,
    businessPartner?: BusinessPartnerPortalBusinessPartner,
    paymentMode?: BusinessPartnerPortalPaymentMode,
  ): BusinessPartnerPortalPaymentCollectionMode {
    return new BusinessPartnerPortalPaymentCollectionMode(
      id,
      rowId,
      businessPartnerId,
      paymentModeId,
      label,
      accountNumber,
      accountHolderName,
      bankName,
      routingNumber,
      iban,
      swiftCode,
      currencyCode,
      expirationDate,
      isPrimary,
      isActive,
      notes,
      lastUsedAt,
      createdAt,
      updatedAt,
      deletedAt,
      businessPartner,
      paymentMode,
    );
  }

  created(event: {
    payload: BusinessPartnerPortalPaymentCollectionMode;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalCreatedPaymentCollectionModeEvent({
        payload: {
          id: event.payload.id.value,
          businessPartnerId: event.payload.businessPartnerId.value,
          paymentModeId: event.payload.paymentModeId.value,
          label: event.payload.label?.value,
          accountNumber: event.payload.accountNumber?.value,
          accountHolderName: event.payload.accountHolderName?.value,
          bankName: event.payload.bankName?.value,
          routingNumber: event.payload.routingNumber?.value,
          iban: event.payload.iban?.value,
          swiftCode: event.payload.swiftCode?.value,
          currencyCode: event.payload.currencyCode?.value,
          expirationDate: event.payload.expirationDate?.value,
          isPrimary: event.payload.isPrimary.value,
          isActive: event.payload.isActive.value,
          notes: event.payload.notes?.value,
          lastUsedAt: event.payload.lastUsedAt?.value,
          createdAt: event.payload.createdAt?.value,
          updatedAt: event.payload.updatedAt?.value,
          deletedAt: event.payload.deletedAt?.value,
        },
        cQMetadata: event.cQMetadata,
      }),
    );
  }

  updated(event: {
    payload: BusinessPartnerPortalPaymentCollectionMode;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalUpdatedPaymentCollectionModeEvent({
        payload: {
          id: event.payload.id?.value,
          businessPartnerId: event.payload.businessPartnerId?.value,
          paymentModeId: event.payload.paymentModeId?.value,
          label: event.payload.label?.value,
          accountNumber: event.payload.accountNumber?.value,
          accountHolderName: event.payload.accountHolderName?.value,
          bankName: event.payload.bankName?.value,
          routingNumber: event.payload.routingNumber?.value,
          iban: event.payload.iban?.value,
          swiftCode: event.payload.swiftCode?.value,
          currencyCode: event.payload.currencyCode?.value,
          expirationDate: event.payload.expirationDate?.value,
          isPrimary: event.payload.isPrimary?.value,
          isActive: event.payload.isActive?.value,
          notes: event.payload.notes?.value,
          lastUsedAt: event.payload.lastUsedAt?.value,
          createdAt: event.payload.createdAt?.value,
          updatedAt: event.payload.updatedAt?.value,
          deletedAt: event.payload.deletedAt?.value,
        },
        cQMetadata: event.cQMetadata,
      }),
    );
  }

  deleted(event: {
    payload: BusinessPartnerPortalPaymentCollectionMode;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalDeletedPaymentCollectionModeEvent({
        payload: {
          id: event.payload.id.value,
          rowId: event.payload.rowId.value,
          businessPartnerId: event.payload.businessPartnerId.value,
          paymentModeId: event.payload.paymentModeId.value,
          label: event.payload.label?.value,
          accountNumber: event.payload.accountNumber?.value,
          accountHolderName: event.payload.accountHolderName?.value,
          bankName: event.payload.bankName?.value,
          routingNumber: event.payload.routingNumber?.value,
          iban: event.payload.iban?.value,
          swiftCode: event.payload.swiftCode?.value,
          currencyCode: event.payload.currencyCode?.value,
          expirationDate: event.payload.expirationDate?.value,
          isPrimary: event.payload.isPrimary.value,
          isActive: event.payload.isActive.value,
          notes: event.payload.notes?.value,
          lastUsedAt: event.payload.lastUsedAt?.value,
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
      paymentModeId: this.paymentModeId.value,
      label: this.label?.value,
      accountNumber: this.accountNumber?.value,
      accountHolderName: this.accountHolderName?.value,
      bankName: this.bankName?.value,
      routingNumber: this.routingNumber?.value,
      iban: this.iban?.value,
      swiftCode: this.swiftCode?.value,
      currencyCode: this.currencyCode?.value,
      expirationDate: this.expirationDate?.value,
      isPrimary: this.isPrimary.value,
      isActive: this.isActive.value,
      notes: this.notes?.value,
      lastUsedAt: this.lastUsedAt?.value,
      createdAt: this.createdAt?.value,
      updatedAt: this.updatedAt?.value,
      deletedAt: this.deletedAt?.value,
      businessPartner: this.businessPartner?.toDTO(),
      paymentMode: this.paymentMode?.toDTO(),
    };
  }

  // function called to get data for repository side effect methods
  toRepository(): LiteralObject {
    return {
      id: this.id.value,
      businessPartnerId: this.businessPartnerId.value,
      paymentModeId: this.paymentModeId.value,
      label: this.label?.value,
      accountNumber: this.accountNumber?.value,
      accountHolderName: this.accountHolderName?.value,
      bankName: this.bankName?.value,
      routingNumber: this.routingNumber?.value,
      iban: this.iban?.value,
      swiftCode: this.swiftCode?.value,
      currencyCode: this.currencyCode?.value,
      expirationDate: this.expirationDate?.value,
      isPrimary: this.isPrimary.value,
      isActive: this.isActive.value,
      notes: this.notes?.value,
      lastUsedAt: this.lastUsedAt?.value,
      createdAt: this.createdAt?.value,
      updatedAt: this.updatedAt?.value,
      deletedAt: this.deletedAt?.value,
      businessPartner: this.businessPartner?.toDTO(),
      paymentMode: this.paymentMode?.toDTO(),
    };
  }
}
