/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { CQMetadata } from '@aurorajs.dev/core';

export class BusinessPartnerPortalDeletedSupplierDocumentEvent {
  constructor(
    public readonly event: {
      payload: {
        id: string;
        rowId: number;
        businessPartnerId: string;
        documentNumber: string;
        documentType:
          | 'INVOICE'
          | 'CREDIT_NOTE'
          | 'DEBIT_NOTE'
          | 'PROFORMA'
          | 'OTHER';
        status:
          | 'PENDING_UPLOAD'
          | 'UPLOADED'
          | 'VALIDATING'
          | 'SENT_FOR_PROCESSING'
          | 'PROCESSING'
          | 'PROCESSED'
          | 'LINKED'
          | 'ERROR'
          | 'REJECTED';
        file: any;
        fileHash: string;
        supplierInvoiceNumber: string;
        supplierInvoiceDate: string;
        supplierInvoiceAmount: number;
        currencyCode: string;
        externalDocumentId: string;
        externalCompanyCode: string;
        externalProcessingStatus: string;
        purchaseInvoiceHeaderId: string;
        ocrConfidenceScore: number;
        ocrData: any;
        sentForProcessingAt: string;
        processedAt: string;
        linkedAt: string;
        errorCode: string;
        errorMessage: string;
        retryCount: number;
        lastRetryAt: string;
        notes: string;
        supplierNotes: string;
        isArchived: boolean;
        createdAt: string;
        updatedAt: string;
        deletedAt: string;
      };
      cQMetadata?: CQMetadata;
    },
  ) {}
}
