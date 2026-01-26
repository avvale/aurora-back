/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
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
import { MockSeeder } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class BusinessPartnerPortalMockSupplierDocumentSeeder extends MockSeeder<BusinessPartnerPortalSupplierDocument> {
  public collectionSource: BusinessPartnerPortalSupplierDocument[];

  constructor() {
    super();
    this._createMock();
  }

  private _createMock(): void {
    this.collectionSource = [];

    for (const supplierDocument of _.orderBy(
      businessPartnerPortalMockSupplierDocumentData,
      ['id'],
    )) {
      this.collectionSource.push(
        BusinessPartnerPortalSupplierDocument.register(
          new BusinessPartnerPortalSupplierDocumentId(supplierDocument.id),
          new BusinessPartnerPortalSupplierDocumentRowId(
            supplierDocument.rowId,
          ),
          new BusinessPartnerPortalSupplierDocumentBusinessPartnerId(
            supplierDocument.businessPartnerId,
          ),
          new BusinessPartnerPortalSupplierDocumentDocumentNumber(
            supplierDocument.documentNumber,
          ),
          new BusinessPartnerPortalSupplierDocumentDocumentType(
            supplierDocument.documentType,
          ),
          new BusinessPartnerPortalSupplierDocumentStatus(
            supplierDocument.status,
          ),
          new BusinessPartnerPortalSupplierDocumentFile(supplierDocument.file),
          new BusinessPartnerPortalSupplierDocumentFileHash(
            supplierDocument.fileHash,
          ),
          new BusinessPartnerPortalSupplierDocumentSupplierInvoiceNumber(
            supplierDocument.supplierInvoiceNumber,
          ),
          new BusinessPartnerPortalSupplierDocumentSupplierInvoiceDate(
            supplierDocument.supplierInvoiceDate,
          ),
          new BusinessPartnerPortalSupplierDocumentSupplierInvoiceAmount(
            supplierDocument.supplierInvoiceAmount,
          ),
          new BusinessPartnerPortalSupplierDocumentCurrencyCode(
            supplierDocument.currencyCode,
          ),
          new BusinessPartnerPortalSupplierDocumentExternalDocumentId(
            supplierDocument.externalDocumentId,
          ),
          new BusinessPartnerPortalSupplierDocumentExternalCompanyCode(
            supplierDocument.externalCompanyCode,
          ),
          new BusinessPartnerPortalSupplierDocumentExternalProcessingStatus(
            supplierDocument.externalProcessingStatus,
          ),
          new BusinessPartnerPortalSupplierDocumentPurchaseInvoiceHeaderId(
            supplierDocument.purchaseInvoiceHeaderId,
          ),
          new BusinessPartnerPortalSupplierDocumentOcrConfidenceScore(
            supplierDocument.ocrConfidenceScore,
          ),
          new BusinessPartnerPortalSupplierDocumentOcrData(
            supplierDocument.ocrData,
          ),
          new BusinessPartnerPortalSupplierDocumentSentForProcessingAt(
            supplierDocument.sentForProcessingAt,
          ),
          new BusinessPartnerPortalSupplierDocumentProcessedAt(
            supplierDocument.processedAt,
          ),
          new BusinessPartnerPortalSupplierDocumentLinkedAt(
            supplierDocument.linkedAt,
          ),
          new BusinessPartnerPortalSupplierDocumentErrorCode(
            supplierDocument.errorCode,
          ),
          new BusinessPartnerPortalSupplierDocumentErrorMessage(
            supplierDocument.errorMessage,
          ),
          new BusinessPartnerPortalSupplierDocumentRetryCount(
            supplierDocument.retryCount,
          ),
          new BusinessPartnerPortalSupplierDocumentLastRetryAt(
            supplierDocument.lastRetryAt,
          ),
          new BusinessPartnerPortalSupplierDocumentNotes(
            supplierDocument.notes,
          ),
          new BusinessPartnerPortalSupplierDocumentSupplierNotes(
            supplierDocument.supplierNotes,
          ),
          new BusinessPartnerPortalSupplierDocumentIsArchived(
            supplierDocument.isArchived,
          ),
          new BusinessPartnerPortalSupplierDocumentCreatedAt({
            currentTimestamp: true,
          }),
          new BusinessPartnerPortalSupplierDocumentUpdatedAt({
            currentTimestamp: true,
          }),
          new BusinessPartnerPortalSupplierDocumentDeletedAt(null),
        ),
      );
    }
  }
}
