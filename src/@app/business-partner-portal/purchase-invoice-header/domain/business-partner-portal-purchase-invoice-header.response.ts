/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartnerResponse } from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalPurchaseInvoicePositionResponse } from '@app/business-partner-portal/purchase-invoice-position';

export class BusinessPartnerPortalPurchaseInvoiceHeaderResponse {
  constructor(
    public readonly id: string,
    public readonly rowId: number,
    public readonly invoiceNumber: string,
    public readonly supplierInvoiceNumber: string,
    public readonly externalId: string,
    public readonly externalSystemCode: string,
    public readonly businessPartnerId: string,
    public readonly invoiceDate: string,
    public readonly receivedDate: string,
    public readonly dueDate: string,
    public readonly status:
      | 'DRAFT'
      | 'RECEIVED'
      | 'APPROVED'
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
    public readonly approvalNotes: string,
    public readonly createdAt: string,
    public readonly updatedAt: string,
    public readonly deletedAt: string,
    public readonly businessPartner: BusinessPartnerPortalBusinessPartnerResponse,
    public readonly positions: BusinessPartnerPortalPurchaseInvoicePositionResponse[],
  ) {}
}
