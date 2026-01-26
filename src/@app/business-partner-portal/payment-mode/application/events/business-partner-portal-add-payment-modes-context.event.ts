/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatedPaymentModeEvent,
  BusinessPartnerPortalCreatedPaymentModesEvent,
  BusinessPartnerPortalPaymentMode,
} from '@app/business-partner-portal/payment-mode';
import { CQMetadata } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class BusinessPartnerPortalAddPaymentModesContextEvent extends AggregateRoot {
  constructor(
    public readonly aggregateRoots: BusinessPartnerPortalPaymentMode[] = [],
    public readonly cQMetadata?: CQMetadata,
  ) {
    super();
  }

  *[Symbol.iterator]() {
    for (const aggregateRoot of this.aggregateRoots) yield aggregateRoot;
  }

  created(): void {
    this.apply(
      new BusinessPartnerPortalCreatedPaymentModesEvent({
        payload: this.aggregateRoots.map(
          (paymentMode) =>
            new BusinessPartnerPortalCreatedPaymentModeEvent({
              payload: {
                id: paymentMode.id.value,
                externalId: paymentMode.externalId?.value,
                code: paymentMode.code?.value,
                name: paymentMode.name.value,
                description: paymentMode.description?.value,
                type: paymentMode.type.value,
                isAccountNumberRequired:
                  paymentMode.isAccountNumberRequired.value,
                isRoutingInfoRequired: paymentMode.isRoutingInfoRequired.value,
                isRecurringSupported: paymentMode.isRecurringSupported.value,
                sort: paymentMode.sort?.value,
                isActive: paymentMode.isActive.value,
                meta: paymentMode.meta?.value,
                createdAt: paymentMode.createdAt?.value,
                updatedAt: paymentMode.updatedAt?.value,
                deletedAt: paymentMode.deletedAt?.value,
              },
            }),
        ),
        cQMetadata: this.cQMetadata,
      }),
    );
  }
}
