/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalCreatedSalesInvoiceHeaderEvent } from '@app/business-partner-portal/sales-invoice-header';
import { CQMetadata } from '@aurorajs.dev/core';

export class BusinessPartnerPortalCreatedSalesInvoiceHeadersEvent {
  constructor(
    public readonly event: {
      payload: BusinessPartnerPortalCreatedSalesInvoiceHeaderEvent[];
      cQMetadata?: CQMetadata;
    },
  ) {}
}
