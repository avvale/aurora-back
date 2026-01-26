/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalCreatedPurchaseInvoiceHeaderEvent } from '@app/business-partner-portal/purchase-invoice-header';
import { CQMetadata } from '@aurorajs.dev/core';

export class BusinessPartnerPortalCreatedPurchaseInvoiceHeadersEvent {
  constructor(
    public readonly event: {
      payload: BusinessPartnerPortalCreatedPurchaseInvoiceHeaderEvent[];
      cQMetadata?: CQMetadata;
    },
  ) {}
}
