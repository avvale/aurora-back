/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { BusinessPartnerPortalCreatedPaymentModeEvent } from '@app/business-partner-portal/payment-mode';
import { CQMetadata } from '@aurorajs.dev/core';

export class BusinessPartnerPortalCreatedPaymentModesEvent {
  constructor(
    public readonly event: {
      payload: BusinessPartnerPortalCreatedPaymentModeEvent[];
      cQMetadata?: CQMetadata;
    },
  ) {}
}
