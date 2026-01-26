/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { CQMetadata } from '@aurorajs.dev/core';

export class BusinessPartnerPortalCreateSalesInvoicePositionCommand {
  constructor(
    public readonly payload: {
      id: string;
      salesInvoiceHeaderId: string;
      positionNumber: number;
      description: string;
      productCode?: string;
      quantity: number;
      unitPrice: number;
      discountPercent: number;
      discountAmount: number;
      taxPercent: number;
      taxAmount: number;
      subtotal: number;
      positionTotal: number;
      notes?: string;
    },
    public readonly cQMetadata?: CQMetadata,
  ) {}
}
