/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalSalesInvoiceHeaderResponse } from '@app/business-partner-portal/sales-invoice-header';

export class BusinessPartnerPortalSalesInvoicePositionResponse {
  constructor(
    public readonly id: string,
    public readonly rowId: number,
    public readonly salesInvoiceHeaderId: string,
    public readonly positionNumber: number,
    public readonly description: string,
    public readonly productCode: string,
    public readonly quantity: number,
    public readonly unitPrice: number,
    public readonly discountPercent: number,
    public readonly discountAmount: number,
    public readonly taxPercent: number,
    public readonly taxAmount: number,
    public readonly subtotal: number,
    public readonly positionTotal: number,
    public readonly notes: string,
    public readonly createdAt: string,
    public readonly updatedAt: string,
    public readonly deletedAt: string,
    public readonly salesInvoiceHeader: BusinessPartnerPortalSalesInvoiceHeaderResponse,
  ) {}
}
