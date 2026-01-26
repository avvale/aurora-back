/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartnerResponse } from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalPurchaseInvoiceHeaderResponse } from '@app/business-partner-portal/purchase-invoice-header';

export class BusinessPartnerPortalSupplierDocumentResponse {
  constructor(
    public readonly id: string,
    public readonly rowId: number,
    public readonly businessPartnerId: string,
    public readonly documentNumber: string,
    public readonly documentType:
      | 'INVOICE'
      | 'CREDIT_NOTE'
      | 'DEBIT_NOTE'
      | 'PROFORMA'
      | 'OTHER',
    public readonly status:
      | 'PENDING_UPLOAD'
      | 'UPLOADED'
      | 'VALIDATING'
      | 'SENT_FOR_PROCESSING'
      | 'PROCESSING'
      | 'PROCESSED'
      | 'LINKED'
      | 'ERROR'
      | 'REJECTED',
    public readonly file: any,
    public readonly fileHash: string,
    public readonly supplierInvoiceNumber: string,
    public readonly supplierInvoiceDate: string,
    public readonly supplierInvoiceAmount: number,
    public readonly currencyCode: string,
    public readonly externalDocumentId: string,
    public readonly externalCompanyCode: string,
    public readonly externalProcessingStatus: string,
    public readonly purchaseInvoiceHeaderId: string,
    public readonly ocrConfidenceScore: number,
    public readonly ocrData: any,
    public readonly sentForProcessingAt: string,
    public readonly processedAt: string,
    public readonly linkedAt: string,
    public readonly errorCode: string,
    public readonly errorMessage: string,
    public readonly retryCount: number,
    public readonly lastRetryAt: string,
    public readonly notes: string,
    public readonly supplierNotes: string,
    public readonly isArchived: boolean,
    public readonly createdAt: string,
    public readonly updatedAt: string,
    public readonly deletedAt: string,
    public readonly businessPartner: BusinessPartnerPortalBusinessPartnerResponse,
    public readonly purchaseInvoiceHeader: BusinessPartnerPortalPurchaseInvoiceHeaderResponse,
  ) {}
}
