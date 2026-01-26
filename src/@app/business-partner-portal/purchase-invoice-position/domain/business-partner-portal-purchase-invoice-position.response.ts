/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalPurchaseInvoiceHeaderResponse } from '@app/business-partner-portal/purchase-invoice-header';

export class BusinessPartnerPortalPurchaseInvoicePositionResponse {
  constructor(
    public readonly id: string,
    public readonly rowId: number,
    public readonly purchaseInvoiceHeaderId: string,
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
    public readonly expenseCategory: string,
    public readonly notes: string,
    public readonly createdAt: string,
    public readonly updatedAt: string,
    public readonly deletedAt: string,
    public readonly purchaseInvoiceHeader: BusinessPartnerPortalPurchaseInvoiceHeaderResponse,
  ) {}
}
