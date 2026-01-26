/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { CQMetadata } from '@aurorajs.dev/core';

export class BusinessPartnerPortalCreateSalesInvoiceHeaderCommand {
  constructor(
    public readonly payload: {
      id: string;
      invoiceNumber: string;
      externalId?: string;
      externalSystemCode?: string;
      businessPartnerId: string;
      invoiceDate: string;
      dueDate?: string;
      status:
        | 'DRAFT'
        | 'SENT'
        | 'PAID'
        | 'PARTIALLY_PAID'
        | 'OVERDUE'
        | 'CANCELLED'
        | 'REFUNDED';
      subtotal: number;
      taxAmount: number;
      discountAmount: number;
      totalAmount: number;
      paidAmount: number;
      currencyCode: string;
      paymentTermDays?: number;
      notes?: string;
      customerNotes?: string;
    },
    public readonly cQMetadata?: CQMetadata,
  ) {}
}
