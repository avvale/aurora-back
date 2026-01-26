/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalISupplierDocumentRepository,
  businessPartnerPortalMockSupplierDocumentData,
  BusinessPartnerPortalSupplierDocument,
} from '@app/business-partner-portal/supplier-document';
import {
  BusinessPartnerPortalSupplierDocumentBusinessPartnerId,
  BusinessPartnerPortalSupplierDocumentCreatedAt,
  BusinessPartnerPortalSupplierDocumentCurrencyCode,
  BusinessPartnerPortalSupplierDocumentDeletedAt,
  BusinessPartnerPortalSupplierDocumentDocumentNumber,
  BusinessPartnerPortalSupplierDocumentDocumentType,
  BusinessPartnerPortalSupplierDocumentErrorCode,
  BusinessPartnerPortalSupplierDocumentErrorMessage,
  BusinessPartnerPortalSupplierDocumentExternalCompanyCode,
  BusinessPartnerPortalSupplierDocumentExternalDocumentId,
  BusinessPartnerPortalSupplierDocumentExternalProcessingStatus,
  BusinessPartnerPortalSupplierDocumentFile,
  BusinessPartnerPortalSupplierDocumentFileHash,
  BusinessPartnerPortalSupplierDocumentId,
  BusinessPartnerPortalSupplierDocumentIsArchived,
  BusinessPartnerPortalSupplierDocumentLastRetryAt,
  BusinessPartnerPortalSupplierDocumentLinkedAt,
  BusinessPartnerPortalSupplierDocumentNotes,
  BusinessPartnerPortalSupplierDocumentOcrConfidenceScore,
  BusinessPartnerPortalSupplierDocumentOcrData,
  BusinessPartnerPortalSupplierDocumentProcessedAt,
  BusinessPartnerPortalSupplierDocumentPurchaseInvoiceHeaderId,
  BusinessPartnerPortalSupplierDocumentRetryCount,
  BusinessPartnerPortalSupplierDocumentRowId,
  BusinessPartnerPortalSupplierDocumentSentForProcessingAt,
  BusinessPartnerPortalSupplierDocumentStatus,
  BusinessPartnerPortalSupplierDocumentSupplierInvoiceAmount,
  BusinessPartnerPortalSupplierDocumentSupplierInvoiceDate,
  BusinessPartnerPortalSupplierDocumentSupplierInvoiceNumber,
  BusinessPartnerPortalSupplierDocumentSupplierNotes,
  BusinessPartnerPortalSupplierDocumentUpdatedAt,
} from '@app/business-partner-portal/supplier-document/domain/value-objects';
import { MockRepository, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalMockSupplierDocumentRepository
  extends MockRepository<BusinessPartnerPortalSupplierDocument>
  implements BusinessPartnerPortalISupplierDocumentRepository
{
  public readonly repository: any;
  public readonly aggregateName: string =
    'BusinessPartnerPortalSupplierDocument';
  public collectionSource: BusinessPartnerPortalSupplierDocument[];

  constructor() {
    super();
    this.createSourceMockData();
  }

  public reset(): void {
    this.createSourceMockData();
  }

  private createSourceMockData(): void {
    this.collectionSource = [];
    const now = Utils.nowTimestamp();

    for (const itemCollection of <any[]>(
      businessPartnerPortalMockSupplierDocumentData
    )) {
      itemCollection['createdAt'] = now;
      itemCollection['updatedAt'] = now;
      itemCollection['deletedAt'] = null;

      this.collectionSource.push(
        BusinessPartnerPortalSupplierDocument.register(
          new BusinessPartnerPortalSupplierDocumentId(itemCollection.id),
          new BusinessPartnerPortalSupplierDocumentRowId(itemCollection.rowId),
          new BusinessPartnerPortalSupplierDocumentBusinessPartnerId(
            itemCollection.businessPartnerId,
          ),
          new BusinessPartnerPortalSupplierDocumentDocumentNumber(
            itemCollection.documentNumber,
          ),
          new BusinessPartnerPortalSupplierDocumentDocumentType(
            itemCollection.documentType,
          ),
          new BusinessPartnerPortalSupplierDocumentStatus(
            itemCollection.status,
          ),
          new BusinessPartnerPortalSupplierDocumentFile(itemCollection.file),
          new BusinessPartnerPortalSupplierDocumentFileHash(
            itemCollection.fileHash,
          ),
          new BusinessPartnerPortalSupplierDocumentSupplierInvoiceNumber(
            itemCollection.supplierInvoiceNumber,
          ),
          new BusinessPartnerPortalSupplierDocumentSupplierInvoiceDate(
            itemCollection.supplierInvoiceDate,
          ),
          new BusinessPartnerPortalSupplierDocumentSupplierInvoiceAmount(
            itemCollection.supplierInvoiceAmount,
          ),
          new BusinessPartnerPortalSupplierDocumentCurrencyCode(
            itemCollection.currencyCode,
          ),
          new BusinessPartnerPortalSupplierDocumentExternalDocumentId(
            itemCollection.externalDocumentId,
          ),
          new BusinessPartnerPortalSupplierDocumentExternalCompanyCode(
            itemCollection.externalCompanyCode,
          ),
          new BusinessPartnerPortalSupplierDocumentExternalProcessingStatus(
            itemCollection.externalProcessingStatus,
          ),
          new BusinessPartnerPortalSupplierDocumentPurchaseInvoiceHeaderId(
            itemCollection.purchaseInvoiceHeaderId,
          ),
          new BusinessPartnerPortalSupplierDocumentOcrConfidenceScore(
            itemCollection.ocrConfidenceScore,
          ),
          new BusinessPartnerPortalSupplierDocumentOcrData(
            itemCollection.ocrData,
          ),
          new BusinessPartnerPortalSupplierDocumentSentForProcessingAt(
            itemCollection.sentForProcessingAt,
          ),
          new BusinessPartnerPortalSupplierDocumentProcessedAt(
            itemCollection.processedAt,
          ),
          new BusinessPartnerPortalSupplierDocumentLinkedAt(
            itemCollection.linkedAt,
          ),
          new BusinessPartnerPortalSupplierDocumentErrorCode(
            itemCollection.errorCode,
          ),
          new BusinessPartnerPortalSupplierDocumentErrorMessage(
            itemCollection.errorMessage,
          ),
          new BusinessPartnerPortalSupplierDocumentRetryCount(
            itemCollection.retryCount,
          ),
          new BusinessPartnerPortalSupplierDocumentLastRetryAt(
            itemCollection.lastRetryAt,
          ),
          new BusinessPartnerPortalSupplierDocumentNotes(itemCollection.notes),
          new BusinessPartnerPortalSupplierDocumentSupplierNotes(
            itemCollection.supplierNotes,
          ),
          new BusinessPartnerPortalSupplierDocumentIsArchived(
            itemCollection.isArchived,
          ),
          new BusinessPartnerPortalSupplierDocumentCreatedAt(
            itemCollection.createdAt,
          ),
          new BusinessPartnerPortalSupplierDocumentUpdatedAt(
            itemCollection.updatedAt,
          ),
          new BusinessPartnerPortalSupplierDocumentDeletedAt(
            itemCollection.deletedAt,
          ),
        ),
      );
    }
  }
}
