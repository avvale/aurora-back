/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartner } from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalPurchaseInvoiceHeader } from '@app/business-partner-portal/purchase-invoice-header';
import {
  BusinessPartnerPortalCreatedSupplierDocumentEvent,
  BusinessPartnerPortalDeletedSupplierDocumentEvent,
  BusinessPartnerPortalUpdatedSupplierDocumentEvent,
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
import { CQMetadata, LiteralObject } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class BusinessPartnerPortalSupplierDocument extends AggregateRoot {
  id: BusinessPartnerPortalSupplierDocumentId;
  rowId: BusinessPartnerPortalSupplierDocumentRowId;
  businessPartnerId: BusinessPartnerPortalSupplierDocumentBusinessPartnerId;
  documentNumber: BusinessPartnerPortalSupplierDocumentDocumentNumber;
  documentType: BusinessPartnerPortalSupplierDocumentDocumentType;
  status: BusinessPartnerPortalSupplierDocumentStatus;
  file: BusinessPartnerPortalSupplierDocumentFile;
  fileHash: BusinessPartnerPortalSupplierDocumentFileHash;
  supplierInvoiceNumber: BusinessPartnerPortalSupplierDocumentSupplierInvoiceNumber;
  supplierInvoiceDate: BusinessPartnerPortalSupplierDocumentSupplierInvoiceDate;
  supplierInvoiceAmount: BusinessPartnerPortalSupplierDocumentSupplierInvoiceAmount;
  currencyCode: BusinessPartnerPortalSupplierDocumentCurrencyCode;
  externalDocumentId: BusinessPartnerPortalSupplierDocumentExternalDocumentId;
  externalCompanyCode: BusinessPartnerPortalSupplierDocumentExternalCompanyCode;
  externalProcessingStatus: BusinessPartnerPortalSupplierDocumentExternalProcessingStatus;
  purchaseInvoiceHeaderId: BusinessPartnerPortalSupplierDocumentPurchaseInvoiceHeaderId;
  ocrConfidenceScore: BusinessPartnerPortalSupplierDocumentOcrConfidenceScore;
  ocrData: BusinessPartnerPortalSupplierDocumentOcrData;
  sentForProcessingAt: BusinessPartnerPortalSupplierDocumentSentForProcessingAt;
  processedAt: BusinessPartnerPortalSupplierDocumentProcessedAt;
  linkedAt: BusinessPartnerPortalSupplierDocumentLinkedAt;
  errorCode: BusinessPartnerPortalSupplierDocumentErrorCode;
  errorMessage: BusinessPartnerPortalSupplierDocumentErrorMessage;
  retryCount: BusinessPartnerPortalSupplierDocumentRetryCount;
  lastRetryAt: BusinessPartnerPortalSupplierDocumentLastRetryAt;
  notes: BusinessPartnerPortalSupplierDocumentNotes;
  supplierNotes: BusinessPartnerPortalSupplierDocumentSupplierNotes;
  isArchived: BusinessPartnerPortalSupplierDocumentIsArchived;
  createdAt: BusinessPartnerPortalSupplierDocumentCreatedAt;
  updatedAt: BusinessPartnerPortalSupplierDocumentUpdatedAt;
  deletedAt: BusinessPartnerPortalSupplierDocumentDeletedAt;
  businessPartner: BusinessPartnerPortalBusinessPartner;
  purchaseInvoiceHeader: BusinessPartnerPortalPurchaseInvoiceHeader;

  constructor(
    id: BusinessPartnerPortalSupplierDocumentId,
    rowId: BusinessPartnerPortalSupplierDocumentRowId,
    businessPartnerId: BusinessPartnerPortalSupplierDocumentBusinessPartnerId,
    documentNumber: BusinessPartnerPortalSupplierDocumentDocumentNumber,
    documentType: BusinessPartnerPortalSupplierDocumentDocumentType,
    status: BusinessPartnerPortalSupplierDocumentStatus,
    file: BusinessPartnerPortalSupplierDocumentFile,
    fileHash: BusinessPartnerPortalSupplierDocumentFileHash,
    supplierInvoiceNumber: BusinessPartnerPortalSupplierDocumentSupplierInvoiceNumber,
    supplierInvoiceDate: BusinessPartnerPortalSupplierDocumentSupplierInvoiceDate,
    supplierInvoiceAmount: BusinessPartnerPortalSupplierDocumentSupplierInvoiceAmount,
    currencyCode: BusinessPartnerPortalSupplierDocumentCurrencyCode,
    externalDocumentId: BusinessPartnerPortalSupplierDocumentExternalDocumentId,
    externalCompanyCode: BusinessPartnerPortalSupplierDocumentExternalCompanyCode,
    externalProcessingStatus: BusinessPartnerPortalSupplierDocumentExternalProcessingStatus,
    purchaseInvoiceHeaderId: BusinessPartnerPortalSupplierDocumentPurchaseInvoiceHeaderId,
    ocrConfidenceScore: BusinessPartnerPortalSupplierDocumentOcrConfidenceScore,
    ocrData: BusinessPartnerPortalSupplierDocumentOcrData,
    sentForProcessingAt: BusinessPartnerPortalSupplierDocumentSentForProcessingAt,
    processedAt: BusinessPartnerPortalSupplierDocumentProcessedAt,
    linkedAt: BusinessPartnerPortalSupplierDocumentLinkedAt,
    errorCode: BusinessPartnerPortalSupplierDocumentErrorCode,
    errorMessage: BusinessPartnerPortalSupplierDocumentErrorMessage,
    retryCount: BusinessPartnerPortalSupplierDocumentRetryCount,
    lastRetryAt: BusinessPartnerPortalSupplierDocumentLastRetryAt,
    notes: BusinessPartnerPortalSupplierDocumentNotes,
    supplierNotes: BusinessPartnerPortalSupplierDocumentSupplierNotes,
    isArchived: BusinessPartnerPortalSupplierDocumentIsArchived,
    createdAt: BusinessPartnerPortalSupplierDocumentCreatedAt,
    updatedAt: BusinessPartnerPortalSupplierDocumentUpdatedAt,
    deletedAt: BusinessPartnerPortalSupplierDocumentDeletedAt,
    businessPartner?: BusinessPartnerPortalBusinessPartner,
    purchaseInvoiceHeader?: BusinessPartnerPortalPurchaseInvoiceHeader,
  ) {
    super();
    this.id = id;
    this.rowId = rowId;
    this.businessPartnerId = businessPartnerId;
    this.documentNumber = documentNumber;
    this.documentType = documentType;
    this.status = status;
    this.file = file;
    this.fileHash = fileHash;
    this.supplierInvoiceNumber = supplierInvoiceNumber;
    this.supplierInvoiceDate = supplierInvoiceDate;
    this.supplierInvoiceAmount = supplierInvoiceAmount;
    this.currencyCode = currencyCode;
    this.externalDocumentId = externalDocumentId;
    this.externalCompanyCode = externalCompanyCode;
    this.externalProcessingStatus = externalProcessingStatus;
    this.purchaseInvoiceHeaderId = purchaseInvoiceHeaderId;
    this.ocrConfidenceScore = ocrConfidenceScore;
    this.ocrData = ocrData;
    this.sentForProcessingAt = sentForProcessingAt;
    this.processedAt = processedAt;
    this.linkedAt = linkedAt;
    this.errorCode = errorCode;
    this.errorMessage = errorMessage;
    this.retryCount = retryCount;
    this.lastRetryAt = lastRetryAt;
    this.notes = notes;
    this.supplierNotes = supplierNotes;
    this.isArchived = isArchived;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
    this.businessPartner = businessPartner;
    this.purchaseInvoiceHeader = purchaseInvoiceHeader;
  }

  static register(
    id: BusinessPartnerPortalSupplierDocumentId,
    rowId: BusinessPartnerPortalSupplierDocumentRowId,
    businessPartnerId: BusinessPartnerPortalSupplierDocumentBusinessPartnerId,
    documentNumber: BusinessPartnerPortalSupplierDocumentDocumentNumber,
    documentType: BusinessPartnerPortalSupplierDocumentDocumentType,
    status: BusinessPartnerPortalSupplierDocumentStatus,
    file: BusinessPartnerPortalSupplierDocumentFile,
    fileHash: BusinessPartnerPortalSupplierDocumentFileHash,
    supplierInvoiceNumber: BusinessPartnerPortalSupplierDocumentSupplierInvoiceNumber,
    supplierInvoiceDate: BusinessPartnerPortalSupplierDocumentSupplierInvoiceDate,
    supplierInvoiceAmount: BusinessPartnerPortalSupplierDocumentSupplierInvoiceAmount,
    currencyCode: BusinessPartnerPortalSupplierDocumentCurrencyCode,
    externalDocumentId: BusinessPartnerPortalSupplierDocumentExternalDocumentId,
    externalCompanyCode: BusinessPartnerPortalSupplierDocumentExternalCompanyCode,
    externalProcessingStatus: BusinessPartnerPortalSupplierDocumentExternalProcessingStatus,
    purchaseInvoiceHeaderId: BusinessPartnerPortalSupplierDocumentPurchaseInvoiceHeaderId,
    ocrConfidenceScore: BusinessPartnerPortalSupplierDocumentOcrConfidenceScore,
    ocrData: BusinessPartnerPortalSupplierDocumentOcrData,
    sentForProcessingAt: BusinessPartnerPortalSupplierDocumentSentForProcessingAt,
    processedAt: BusinessPartnerPortalSupplierDocumentProcessedAt,
    linkedAt: BusinessPartnerPortalSupplierDocumentLinkedAt,
    errorCode: BusinessPartnerPortalSupplierDocumentErrorCode,
    errorMessage: BusinessPartnerPortalSupplierDocumentErrorMessage,
    retryCount: BusinessPartnerPortalSupplierDocumentRetryCount,
    lastRetryAt: BusinessPartnerPortalSupplierDocumentLastRetryAt,
    notes: BusinessPartnerPortalSupplierDocumentNotes,
    supplierNotes: BusinessPartnerPortalSupplierDocumentSupplierNotes,
    isArchived: BusinessPartnerPortalSupplierDocumentIsArchived,
    createdAt: BusinessPartnerPortalSupplierDocumentCreatedAt,
    updatedAt: BusinessPartnerPortalSupplierDocumentUpdatedAt,
    deletedAt: BusinessPartnerPortalSupplierDocumentDeletedAt,
    businessPartner?: BusinessPartnerPortalBusinessPartner,
    purchaseInvoiceHeader?: BusinessPartnerPortalPurchaseInvoiceHeader,
  ): BusinessPartnerPortalSupplierDocument {
    return new BusinessPartnerPortalSupplierDocument(
      id,
      rowId,
      businessPartnerId,
      documentNumber,
      documentType,
      status,
      file,
      fileHash,
      supplierInvoiceNumber,
      supplierInvoiceDate,
      supplierInvoiceAmount,
      currencyCode,
      externalDocumentId,
      externalCompanyCode,
      externalProcessingStatus,
      purchaseInvoiceHeaderId,
      ocrConfidenceScore,
      ocrData,
      sentForProcessingAt,
      processedAt,
      linkedAt,
      errorCode,
      errorMessage,
      retryCount,
      lastRetryAt,
      notes,
      supplierNotes,
      isArchived,
      createdAt,
      updatedAt,
      deletedAt,
      businessPartner,
      purchaseInvoiceHeader,
    );
  }

  created(event: {
    payload: BusinessPartnerPortalSupplierDocument;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalCreatedSupplierDocumentEvent({
        payload: {
          id: event.payload.id.value,
          businessPartnerId: event.payload.businessPartnerId.value,
          documentNumber: event.payload.documentNumber?.value,
          documentType: event.payload.documentType?.value,
          status: event.payload.status.value,
          file: event.payload.file?.value,
          fileHash: event.payload.fileHash?.value,
          supplierInvoiceNumber: event.payload.supplierInvoiceNumber?.value,
          supplierInvoiceDate: event.payload.supplierInvoiceDate?.value,
          supplierInvoiceAmount: event.payload.supplierInvoiceAmount?.value,
          currencyCode: event.payload.currencyCode?.value,
          externalDocumentId: event.payload.externalDocumentId?.value,
          externalCompanyCode: event.payload.externalCompanyCode?.value,
          externalProcessingStatus:
            event.payload.externalProcessingStatus?.value,
          purchaseInvoiceHeaderId: event.payload.purchaseInvoiceHeaderId?.value,
          ocrConfidenceScore: event.payload.ocrConfidenceScore?.value,
          ocrData: event.payload.ocrData?.value,
          sentForProcessingAt: event.payload.sentForProcessingAt?.value,
          processedAt: event.payload.processedAt?.value,
          linkedAt: event.payload.linkedAt?.value,
          errorCode: event.payload.errorCode?.value,
          errorMessage: event.payload.errorMessage?.value,
          retryCount: event.payload.retryCount.value,
          lastRetryAt: event.payload.lastRetryAt?.value,
          notes: event.payload.notes?.value,
          supplierNotes: event.payload.supplierNotes?.value,
          isArchived: event.payload.isArchived.value,
          createdAt: event.payload.createdAt?.value,
          updatedAt: event.payload.updatedAt?.value,
          deletedAt: event.payload.deletedAt?.value,
        },
        cQMetadata: event.cQMetadata,
      }),
    );
  }

  updated(event: {
    payload: BusinessPartnerPortalSupplierDocument;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalUpdatedSupplierDocumentEvent({
        payload: {
          id: event.payload.id?.value,
          businessPartnerId: event.payload.businessPartnerId?.value,
          documentNumber: event.payload.documentNumber?.value,
          documentType: event.payload.documentType?.value,
          status: event.payload.status?.value,
          file: event.payload.file?.value,
          fileHash: event.payload.fileHash?.value,
          supplierInvoiceNumber: event.payload.supplierInvoiceNumber?.value,
          supplierInvoiceDate: event.payload.supplierInvoiceDate?.value,
          supplierInvoiceAmount: event.payload.supplierInvoiceAmount?.value,
          currencyCode: event.payload.currencyCode?.value,
          externalDocumentId: event.payload.externalDocumentId?.value,
          externalCompanyCode: event.payload.externalCompanyCode?.value,
          externalProcessingStatus:
            event.payload.externalProcessingStatus?.value,
          purchaseInvoiceHeaderId: event.payload.purchaseInvoiceHeaderId?.value,
          ocrConfidenceScore: event.payload.ocrConfidenceScore?.value,
          ocrData: event.payload.ocrData?.value,
          sentForProcessingAt: event.payload.sentForProcessingAt?.value,
          processedAt: event.payload.processedAt?.value,
          linkedAt: event.payload.linkedAt?.value,
          errorCode: event.payload.errorCode?.value,
          errorMessage: event.payload.errorMessage?.value,
          retryCount: event.payload.retryCount?.value,
          lastRetryAt: event.payload.lastRetryAt?.value,
          notes: event.payload.notes?.value,
          supplierNotes: event.payload.supplierNotes?.value,
          isArchived: event.payload.isArchived?.value,
          createdAt: event.payload.createdAt?.value,
          updatedAt: event.payload.updatedAt?.value,
          deletedAt: event.payload.deletedAt?.value,
        },
        cQMetadata: event.cQMetadata,
      }),
    );
  }

  deleted(event: {
    payload: BusinessPartnerPortalSupplierDocument;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalDeletedSupplierDocumentEvent({
        payload: {
          id: event.payload.id.value,
          rowId: event.payload.rowId.value,
          businessPartnerId: event.payload.businessPartnerId.value,
          documentNumber: event.payload.documentNumber?.value,
          documentType: event.payload.documentType?.value,
          status: event.payload.status.value,
          file: event.payload.file?.value,
          fileHash: event.payload.fileHash?.value,
          supplierInvoiceNumber: event.payload.supplierInvoiceNumber?.value,
          supplierInvoiceDate: event.payload.supplierInvoiceDate?.value,
          supplierInvoiceAmount: event.payload.supplierInvoiceAmount?.value,
          currencyCode: event.payload.currencyCode?.value,
          externalDocumentId: event.payload.externalDocumentId?.value,
          externalCompanyCode: event.payload.externalCompanyCode?.value,
          externalProcessingStatus:
            event.payload.externalProcessingStatus?.value,
          purchaseInvoiceHeaderId: event.payload.purchaseInvoiceHeaderId?.value,
          ocrConfidenceScore: event.payload.ocrConfidenceScore?.value,
          ocrData: event.payload.ocrData?.value,
          sentForProcessingAt: event.payload.sentForProcessingAt?.value,
          processedAt: event.payload.processedAt?.value,
          linkedAt: event.payload.linkedAt?.value,
          errorCode: event.payload.errorCode?.value,
          errorMessage: event.payload.errorMessage?.value,
          retryCount: event.payload.retryCount.value,
          lastRetryAt: event.payload.lastRetryAt?.value,
          notes: event.payload.notes?.value,
          supplierNotes: event.payload.supplierNotes?.value,
          isArchived: event.payload.isArchived.value,
          createdAt: event.payload.createdAt?.value,
          updatedAt: event.payload.updatedAt?.value,
          deletedAt: event.payload.deletedAt?.value,
        },
        cQMetadata: event.cQMetadata,
      }),
    );
  }

  toDTO(): LiteralObject {
    return {
      id: this.id.value,
      rowId: this.rowId.value,
      businessPartnerId: this.businessPartnerId.value,
      documentNumber: this.documentNumber?.value,
      documentType: this.documentType?.value,
      status: this.status.value,
      file: this.file?.value,
      fileHash: this.fileHash?.value,
      supplierInvoiceNumber: this.supplierInvoiceNumber?.value,
      supplierInvoiceDate: this.supplierInvoiceDate?.value,
      supplierInvoiceAmount: this.supplierInvoiceAmount?.value,
      currencyCode: this.currencyCode?.value,
      externalDocumentId: this.externalDocumentId?.value,
      externalCompanyCode: this.externalCompanyCode?.value,
      externalProcessingStatus: this.externalProcessingStatus?.value,
      purchaseInvoiceHeaderId: this.purchaseInvoiceHeaderId?.value,
      ocrConfidenceScore: this.ocrConfidenceScore?.value,
      ocrData: this.ocrData?.value,
      sentForProcessingAt: this.sentForProcessingAt?.value,
      processedAt: this.processedAt?.value,
      linkedAt: this.linkedAt?.value,
      errorCode: this.errorCode?.value,
      errorMessage: this.errorMessage?.value,
      retryCount: this.retryCount.value,
      lastRetryAt: this.lastRetryAt?.value,
      notes: this.notes?.value,
      supplierNotes: this.supplierNotes?.value,
      isArchived: this.isArchived.value,
      createdAt: this.createdAt?.value,
      updatedAt: this.updatedAt?.value,
      deletedAt: this.deletedAt?.value,
      businessPartner: this.businessPartner?.toDTO(),
      purchaseInvoiceHeader: this.purchaseInvoiceHeader?.toDTO(),
    };
  }

  // function called to get data for repository side effect methods
  toRepository(): LiteralObject {
    return {
      id: this.id.value,
      businessPartnerId: this.businessPartnerId.value,
      documentNumber: this.documentNumber?.value,
      documentType: this.documentType?.value,
      status: this.status.value,
      file: this.file?.value,
      fileHash: this.fileHash?.value,
      supplierInvoiceNumber: this.supplierInvoiceNumber?.value,
      supplierInvoiceDate: this.supplierInvoiceDate?.value,
      supplierInvoiceAmount: this.supplierInvoiceAmount?.value,
      currencyCode: this.currencyCode?.value,
      externalDocumentId: this.externalDocumentId?.value,
      externalCompanyCode: this.externalCompanyCode?.value,
      externalProcessingStatus: this.externalProcessingStatus?.value,
      purchaseInvoiceHeaderId: this.purchaseInvoiceHeaderId?.value,
      ocrConfidenceScore: this.ocrConfidenceScore?.value,
      ocrData: this.ocrData?.value,
      sentForProcessingAt: this.sentForProcessingAt?.value,
      processedAt: this.processedAt?.value,
      linkedAt: this.linkedAt?.value,
      errorCode: this.errorCode?.value,
      errorMessage: this.errorMessage?.value,
      retryCount: this.retryCount.value,
      lastRetryAt: this.lastRetryAt?.value,
      notes: this.notes?.value,
      supplierNotes: this.supplierNotes?.value,
      isArchived: this.isArchived.value,
      createdAt: this.createdAt?.value,
      updatedAt: this.updatedAt?.value,
      deletedAt: this.deletedAt?.value,
      businessPartner: this.businessPartner?.toDTO(),
      purchaseInvoiceHeader: this.purchaseInvoiceHeader?.toDTO(),
    };
  }
}
