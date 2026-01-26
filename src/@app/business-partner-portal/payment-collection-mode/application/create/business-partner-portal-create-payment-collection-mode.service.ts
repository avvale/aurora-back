/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalIPaymentCollectionModeRepository,
  BusinessPartnerPortalPaymentCollectionMode,
} from '@app/business-partner-portal/payment-collection-mode';
import {
  BusinessPartnerPortalPaymentCollectionModeAccountHolderName,
  BusinessPartnerPortalPaymentCollectionModeAccountNumber,
  BusinessPartnerPortalPaymentCollectionModeBankName,
  BusinessPartnerPortalPaymentCollectionModeBusinessPartnerId,
  BusinessPartnerPortalPaymentCollectionModeCreatedAt,
  BusinessPartnerPortalPaymentCollectionModeCurrencyCode,
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
  BusinessPartnerPortalPaymentCollectionModeSwiftCode,
  BusinessPartnerPortalPaymentCollectionModeUpdatedAt,
} from '@app/business-partner-portal/payment-collection-mode/domain/value-objects';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class BusinessPartnerPortalCreatePaymentCollectionModeService {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: BusinessPartnerPortalIPaymentCollectionModeRepository,
  ) {}

  async main(
    payload: {
      id: BusinessPartnerPortalPaymentCollectionModeId;
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
    },
    cQMetadata?: CQMetadata,
  ): Promise<void> {
    // create aggregate with factory pattern
    const paymentCollectionMode =
      BusinessPartnerPortalPaymentCollectionMode.register(
        payload.id,
        undefined, // rowId
        payload.businessPartnerId,
        payload.paymentModeId,
        payload.label,
        payload.accountNumber,
        payload.accountHolderName,
        payload.bankName,
        payload.routingNumber,
        payload.iban,
        payload.swiftCode,
        payload.currencyCode,
        payload.expirationDate,
        payload.isPrimary,
        payload.isActive,
        payload.notes,
        payload.lastUsedAt,
        new BusinessPartnerPortalPaymentCollectionModeCreatedAt({
          currentTimestamp: true,
        }),
        new BusinessPartnerPortalPaymentCollectionModeUpdatedAt({
          currentTimestamp: true,
        }),
        null, // deletedAt
      );

    await this.repository.create(paymentCollectionMode, {
      createOptions: cQMetadata?.repositoryOptions,
    });

    // merge EventBus methods with object returned by the repository, to be able to apply and commit events
    const paymentCollectionModeRegister = this.publisher.mergeObjectContext(
      paymentCollectionMode,
    );

    paymentCollectionModeRegister.created({
      payload: paymentCollectionMode,
      cQMetadata,
    }); // apply event to model events
    paymentCollectionModeRegister.commit(); // commit all events of model
  }
}
