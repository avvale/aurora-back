/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { CQMetadata } from '@aurorajs.dev/core';

export class BusinessPartnerPortalCreatePaymentCollectionModeCommand {
  constructor(
    public readonly payload: {
      id: string;
      businessPartnerId: string;
      paymentModeId: string;
      label?: string;
      accountNumber?: string;
      accountHolderName?: string;
      bankName?: string;
      routingNumber?: string;
      iban?: string;
      swiftCode?: string;
      currencyCode?: string;
      expirationDate?: string;
      isPrimary: boolean;
      isActive: boolean;
      notes?: string;
      lastUsedAt?: string;
    },
    public readonly cQMetadata?: CQMetadata,
  ) {}
}
