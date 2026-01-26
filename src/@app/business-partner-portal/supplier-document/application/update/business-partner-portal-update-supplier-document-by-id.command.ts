/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';

export class BusinessPartnerPortalUpdateSupplierDocumentByIdCommand {
  constructor(
    public readonly payload: {
      id: string;
      businessPartnerId?: string;
      documentNumber?: string;
      documentType?:
        | 'INVOICE'
        | 'CREDIT_NOTE'
        | 'DEBIT_NOTE'
        | 'PROFORMA'
        | 'OTHER';
      status?:
        | 'PENDING_UPLOAD'
        | 'UPLOADED'
        | 'VALIDATING'
        | 'SENT_FOR_PROCESSING'
        | 'PROCESSING'
        | 'PROCESSED'
        | 'LINKED'
        | 'ERROR'
        | 'REJECTED';
      file?: any;
      fileHash?: string;
      supplierInvoiceNumber?: string;
      supplierInvoiceDate?: string;
      supplierInvoiceAmount?: number;
      currencyCode?: string;
      externalDocumentId?: string;
      externalCompanyCode?: string;
      externalProcessingStatus?: string;
      purchaseInvoiceHeaderId?: string;
      ocrConfidenceScore?: number;
      ocrData?: any;
      sentForProcessingAt?: string;
      processedAt?: string;
      linkedAt?: string;
      errorCode?: string;
      errorMessage?: string;
      retryCount?: number;
      lastRetryAt?: string;
      notes?: string;
      supplierNotes?: string;
      isArchived?: boolean;
    },
    public readonly constraint?: QueryStatement,
    public readonly cQMetadata?: CQMetadata,
  ) {}
}
