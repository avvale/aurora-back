/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartnerResponse } from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalSalesInvoicePositionResponse } from '@app/business-partner-portal/sales-invoice-position';

export class BusinessPartnerPortalSalesInvoiceHeaderResponse {
  constructor(
    public readonly id: string,
    public readonly rowId: number,
    public readonly invoiceNumber: string,
    public readonly externalId: string,
    public readonly externalSystemCode: string,
    public readonly businessPartnerId: string,
    public readonly invoiceDate: string,
    public readonly dueDate: string,
    public readonly status:
      | 'DRAFT'
      | 'SENT'
      | 'PAID'
      | 'PARTIALLY_PAID'
      | 'OVERDUE'
      | 'CANCELLED'
      | 'REFUNDED',
    public readonly subtotal: number,
    public readonly taxAmount: number,
    public readonly discountAmount: number,
    public readonly totalAmount: number,
    public readonly paidAmount: number,
    public readonly currencyCode: string,
    public readonly paymentTermDays: number,
    public readonly notes: string,
    public readonly customerNotes: string,
    public readonly createdAt: string,
    public readonly updatedAt: string,
    public readonly deletedAt: string,
    public readonly businessPartner: BusinessPartnerPortalBusinessPartnerResponse,
    public readonly positions: BusinessPartnerPortalSalesInvoicePositionResponse[],
  ) {}
}
