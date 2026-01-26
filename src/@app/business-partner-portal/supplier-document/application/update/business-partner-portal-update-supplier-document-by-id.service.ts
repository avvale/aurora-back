/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalISupplierDocumentRepository,
  BusinessPartnerPortalSupplierDocument,
} from '@app/business-partner-portal/supplier-document';
import {
  BusinessPartnerPortalSupplierDocumentBusinessPartnerId,
  BusinessPartnerPortalSupplierDocumentCurrencyCode,
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
  BusinessPartnerPortalSupplierDocumentSentForProcessingAt,
  BusinessPartnerPortalSupplierDocumentStatus,
  BusinessPartnerPortalSupplierDocumentSupplierInvoiceAmount,
  BusinessPartnerPortalSupplierDocumentSupplierInvoiceDate,
  BusinessPartnerPortalSupplierDocumentSupplierInvoiceNumber,
  BusinessPartnerPortalSupplierDocumentSupplierNotes,
  BusinessPartnerPortalSupplierDocumentUpdatedAt,
} from '@app/business-partner-portal/supplier-document/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class BusinessPartnerPortalUpdateSupplierDocumentByIdService {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: BusinessPartnerPortalISupplierDocumentRepository,
  ) {}

  async main(
    payload: {
      id: BusinessPartnerPortalSupplierDocumentId;
      businessPartnerId?: BusinessPartnerPortalSupplierDocumentBusinessPartnerId;
      documentNumber?: BusinessPartnerPortalSupplierDocumentDocumentNumber;
      documentType?: BusinessPartnerPortalSupplierDocumentDocumentType;
      status?: BusinessPartnerPortalSupplierDocumentStatus;
      file?: BusinessPartnerPortalSupplierDocumentFile;
      fileHash?: BusinessPartnerPortalSupplierDocumentFileHash;
      supplierInvoiceNumber?: BusinessPartnerPortalSupplierDocumentSupplierInvoiceNumber;
      supplierInvoiceDate?: BusinessPartnerPortalSupplierDocumentSupplierInvoiceDate;
      supplierInvoiceAmount?: BusinessPartnerPortalSupplierDocumentSupplierInvoiceAmount;
      currencyCode?: BusinessPartnerPortalSupplierDocumentCurrencyCode;
      externalDocumentId?: BusinessPartnerPortalSupplierDocumentExternalDocumentId;
      externalCompanyCode?: BusinessPartnerPortalSupplierDocumentExternalCompanyCode;
      externalProcessingStatus?: BusinessPartnerPortalSupplierDocumentExternalProcessingStatus;
      purchaseInvoiceHeaderId?: BusinessPartnerPortalSupplierDocumentPurchaseInvoiceHeaderId;
      ocrConfidenceScore?: BusinessPartnerPortalSupplierDocumentOcrConfidenceScore;
      ocrData?: BusinessPartnerPortalSupplierDocumentOcrData;
      sentForProcessingAt?: BusinessPartnerPortalSupplierDocumentSentForProcessingAt;
      processedAt?: BusinessPartnerPortalSupplierDocumentProcessedAt;
      linkedAt?: BusinessPartnerPortalSupplierDocumentLinkedAt;
      errorCode?: BusinessPartnerPortalSupplierDocumentErrorCode;
      errorMessage?: BusinessPartnerPortalSupplierDocumentErrorMessage;
      retryCount?: BusinessPartnerPortalSupplierDocumentRetryCount;
      lastRetryAt?: BusinessPartnerPortalSupplierDocumentLastRetryAt;
      notes?: BusinessPartnerPortalSupplierDocumentNotes;
      supplierNotes?: BusinessPartnerPortalSupplierDocumentSupplierNotes;
      isArchived?: BusinessPartnerPortalSupplierDocumentIsArchived;
    },
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<void> {
    // create aggregate with factory pattern
    const supplierDocument = BusinessPartnerPortalSupplierDocument.register(
      payload.id,
      undefined, // rowId
      payload.businessPartnerId,
      payload.documentNumber,
      payload.documentType,
      payload.status,
      payload.file,
      payload.fileHash,
      payload.supplierInvoiceNumber,
      payload.supplierInvoiceDate,
      payload.supplierInvoiceAmount,
      payload.currencyCode,
      payload.externalDocumentId,
      payload.externalCompanyCode,
      payload.externalProcessingStatus,
      payload.purchaseInvoiceHeaderId,
      payload.ocrConfidenceScore,
      payload.ocrData,
      payload.sentForProcessingAt,
      payload.processedAt,
      payload.linkedAt,
      payload.errorCode,
      payload.errorMessage,
      payload.retryCount,
      payload.lastRetryAt,
      payload.notes,
      payload.supplierNotes,
      payload.isArchived,
      null, // createdAt
      new BusinessPartnerPortalSupplierDocumentUpdatedAt({
        currentTimestamp: true,
      }),
      null, // deletedAt
    );

    // update by id
    await this.repository.updateById(supplierDocument, {
      constraint,
      cQMetadata,
      updateByIdOptions: cQMetadata?.repositoryOptions,
    });

    // merge EventBus methods with object returned by the repository, to be able to apply and commit events
    const supplierDocumentRegister =
      this.publisher.mergeObjectContext(supplierDocument);

    supplierDocumentRegister.updated({
      payload: supplierDocument,
      cQMetadata,
    }); // apply event to model events
    supplierDocumentRegister.commit(); // commit all events of model
  }
}
