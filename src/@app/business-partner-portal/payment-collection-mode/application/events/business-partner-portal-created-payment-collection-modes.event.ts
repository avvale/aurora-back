/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { BusinessPartnerPortalCreatedPaymentCollectionModeEvent } from '@app/business-partner-portal/payment-collection-mode';
import { CQMetadata } from '@aurorajs.dev/core';

export class BusinessPartnerPortalCreatedPaymentCollectionModesEvent {
  constructor(
    public readonly event: {
      payload: BusinessPartnerPortalCreatedPaymentCollectionModeEvent[];
      cQMetadata?: CQMetadata;
    },
  ) {}
}
