/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { CQMetadata } from '@aurorajs.dev/core';

export class BusinessPartnerPortalCreatePaymentModeCommand {
  constructor(
    public readonly payload: {
      id: string;
      externalId?: string;
      code?: string;
      name: string;
      description?: string;
      type:
        | 'ELECTRONIC'
        | 'CASH'
        | 'CHECK'
        | 'CARD'
        | 'WIRE'
        | 'DIRECT_DEBIT'
        | 'DIGITAL_WALLET'
        | 'OTHER';
      isAccountNumberRequired: boolean;
      isRoutingInfoRequired: boolean;
      isRecurringSupported: boolean;
      sort?: number;
      isActive: boolean;
      meta?: any;
    },
    public readonly cQMetadata?: CQMetadata,
  ) {}
}
