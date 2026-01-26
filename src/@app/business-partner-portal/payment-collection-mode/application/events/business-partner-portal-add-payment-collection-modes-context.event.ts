/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatedPaymentCollectionModeEvent,
  BusinessPartnerPortalCreatedPaymentCollectionModesEvent,
  BusinessPartnerPortalPaymentCollectionMode,
} from '@app/business-partner-portal/payment-collection-mode';
import { CQMetadata } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class BusinessPartnerPortalAddPaymentCollectionModesContextEvent extends AggregateRoot {
  constructor(
    public readonly aggregateRoots: BusinessPartnerPortalPaymentCollectionMode[] = [],
    public readonly cQMetadata?: CQMetadata,
  ) {
    super();
  }

  *[Symbol.iterator]() {
    for (const aggregateRoot of this.aggregateRoots) yield aggregateRoot;
  }

  created(): void {
    this.apply(
      new BusinessPartnerPortalCreatedPaymentCollectionModesEvent({
        payload: this.aggregateRoots.map(
          (paymentCollectionMode) =>
            new BusinessPartnerPortalCreatedPaymentCollectionModeEvent({
              payload: {
                id: paymentCollectionMode.id.value,
                businessPartnerId:
                  paymentCollectionMode.businessPartnerId.value,
                paymentModeId: paymentCollectionMode.paymentModeId.value,
                label: paymentCollectionMode.label?.value,
                accountNumber: paymentCollectionMode.accountNumber?.value,
                accountHolderName:
                  paymentCollectionMode.accountHolderName?.value,
                bankName: paymentCollectionMode.bankName?.value,
                routingNumber: paymentCollectionMode.routingNumber?.value,
                iban: paymentCollectionMode.iban?.value,
                swiftCode: paymentCollectionMode.swiftCode?.value,
                currencyCode: paymentCollectionMode.currencyCode?.value,
                expirationDate: paymentCollectionMode.expirationDate?.value,
                isPrimary: paymentCollectionMode.isPrimary.value,
                isActive: paymentCollectionMode.isActive.value,
                notes: paymentCollectionMode.notes?.value,
                lastUsedAt: paymentCollectionMode.lastUsedAt?.value,
                createdAt: paymentCollectionMode.createdAt?.value,
                updatedAt: paymentCollectionMode.updatedAt?.value,
                deletedAt: paymentCollectionMode.deletedAt?.value,
              },
            }),
        ),
        cQMetadata: this.cQMetadata,
      }),
    );
  }
}
