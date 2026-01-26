/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';

export class BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdCommand {
  constructor(
    public readonly payload: {
      id: string;
      invoiceNumber?: string;
      supplierInvoiceNumber?: string;
      externalId?: string;
      externalSystemCode?: string;
      businessPartnerId?: string;
      invoiceDate?: string;
      receivedDate?: string;
      dueDate?: string;
      status?:
        | 'DRAFT'
        | 'RECEIVED'
        | 'APPROVED'
        | 'PAID'
        | 'PARTIALLY_PAID'
        | 'OVERDUE'
        | 'CANCELLED'
        | 'REFUNDED';
      subtotal?: number;
      taxAmount?: number;
      discountAmount?: number;
      totalAmount?: number;
      paidAmount?: number;
      currencyCode?: string;
      paymentTermDays?: number;
      notes?: string;
      approvalNotes?: string;
    },
    public readonly constraint?: QueryStatement,
    public readonly cQMetadata?: CQMetadata,
  ) {}
}
