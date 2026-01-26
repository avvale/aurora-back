/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalCreatedPurchaseInvoicePositionEvent } from '@app/business-partner-portal/purchase-invoice-position';
import { CQMetadata } from '@aurorajs.dev/core';

export class BusinessPartnerPortalCreatedPurchaseInvoicePositionsEvent {
  constructor(
    public readonly event: {
      payload: BusinessPartnerPortalCreatedPurchaseInvoicePositionEvent[];
      cQMetadata?: CQMetadata;
    },
  ) {}
}
