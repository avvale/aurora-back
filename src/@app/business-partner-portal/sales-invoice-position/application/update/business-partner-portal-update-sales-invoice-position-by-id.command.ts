/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';

export class BusinessPartnerPortalUpdateSalesInvoicePositionByIdCommand {
  constructor(
    public readonly payload: {
      id: string;
      salesInvoiceHeaderId?: string;
      positionNumber?: number;
      description?: string;
      productCode?: string;
      quantity?: number;
      unitPrice?: number;
      discountPercent?: number;
      discountAmount?: number;
      taxPercent?: number;
      taxAmount?: number;
      subtotal?: number;
      positionTotal?: number;
      notes?: string;
    },
    public readonly constraint?: QueryStatement,
    public readonly cQMetadata?: CQMetadata,
  ) {}
}
