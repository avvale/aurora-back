/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalCreatedSalesInvoicePositionEvent } from '@app/business-partner-portal/sales-invoice-position';
import { CQMetadata } from '@aurorajs.dev/core';

export class BusinessPartnerPortalCreatedSalesInvoicePositionsEvent {
  constructor(
    public readonly event: {
      payload: BusinessPartnerPortalCreatedSalesInvoicePositionEvent[];
      cQMetadata?: CQMetadata;
    },
  ) {}
}
