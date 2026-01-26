/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { CQMetadata } from '@aurorajs.dev/core';

export class BusinessPartnerPortalCreatePurchaseInvoicePositionCommand {
  constructor(
    public readonly payload: {
      id: string;
      purchaseInvoiceHeaderId: string;
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
      expenseCategory?: string;
      notes?: string;
    },
    public readonly cQMetadata?: CQMetadata,
  ) {}
}
