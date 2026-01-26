/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartnerMapper } from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalPurchaseInvoiceHeaderMapper } from '@app/business-partner-portal/purchase-invoice-header';
import {
  BusinessPartnerPortalSupplierDocument,
  BusinessPartnerPortalSupplierDocumentResponse,
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
import {
  CQMetadata,
  IMapper,
  LiteralObject,
  MapperOptions,
} from '@aurorajs.dev/core';

export class BusinessPartnerPortalSupplierDocumentMapper implements IMapper {
  constructor(public options: MapperOptions = { eagerLoading: true }) {}

  /**
   * Map object to aggregate
   * @param supplierDocument
   */
  mapModelToAggregate(
    supplierDocument: LiteralObject,
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalSupplierDocument {
    if (!supplierDocument) return;

    return this.makeAggregate(supplierDocument, cQMetadata);
  }

  /**
   * Map array of objects to array aggregates
   * @param supplierDocuments
   */
  mapModelsToAggregates(
    supplierDocuments: LiteralObject[],
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalSupplierDocument[] {
    if (!Array.isArray(supplierDocuments)) return;

    return supplierDocuments.map((supplierDocument) =>
      this.makeAggregate(supplierDocument, cQMetadata),
    );
  }

  /**
   * Map aggregate to response
   * @param supplierDocument
   */
  mapAggregateToResponse(
    supplierDocument: BusinessPartnerPortalSupplierDocument,
  ): BusinessPartnerPortalSupplierDocumentResponse {
    return this.makeResponse(supplierDocument);
  }

  /**
   * Map array of aggregates to array responses
   * @param supplierDocuments
   */
  mapAggregatesToResponses(
    supplierDocuments: BusinessPartnerPortalSupplierDocument[],
  ): BusinessPartnerPortalSupplierDocumentResponse[] {
    if (!Array.isArray(supplierDocuments)) return;

    return supplierDocuments.map((supplierDocument) =>
      this.makeResponse(supplierDocument),
    );
  }

  private makeAggregate(
    supplierDocument: LiteralObject,
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalSupplierDocument {
    return BusinessPartnerPortalSupplierDocument.register(
      new BusinessPartnerPortalSupplierDocumentId(supplierDocument.id, {
        undefinable: true,
      }),
      new BusinessPartnerPortalSupplierDocumentRowId(supplierDocument.rowId, {
        undefinable: true,
      }),
      new BusinessPartnerPortalSupplierDocumentBusinessPartnerId(
        supplierDocument.businessPartnerId,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSupplierDocumentDocumentNumber(
        supplierDocument.documentNumber,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSupplierDocumentDocumentType(
        supplierDocument.documentType,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSupplierDocumentStatus(supplierDocument.status, {
        undefinable: true,
      }),
      new BusinessPartnerPortalSupplierDocumentFile(supplierDocument.file, {
        undefinable: true,
      }),
      new BusinessPartnerPortalSupplierDocumentFileHash(
        supplierDocument.fileHash,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSupplierDocumentSupplierInvoiceNumber(
        supplierDocument.supplierInvoiceNumber,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSupplierDocumentSupplierInvoiceDate(
        supplierDocument.supplierInvoiceDate,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSupplierDocumentSupplierInvoiceAmount(
        supplierDocument.supplierInvoiceAmount,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSupplierDocumentCurrencyCode(
        supplierDocument.currencyCode,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSupplierDocumentExternalDocumentId(
        supplierDocument.externalDocumentId,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSupplierDocumentExternalCompanyCode(
        supplierDocument.externalCompanyCode,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSupplierDocumentExternalProcessingStatus(
        supplierDocument.externalProcessingStatus,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSupplierDocumentPurchaseInvoiceHeaderId(
        supplierDocument.purchaseInvoiceHeaderId,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSupplierDocumentOcrConfidenceScore(
        supplierDocument.ocrConfidenceScore,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSupplierDocumentOcrData(
        supplierDocument.ocrData,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSupplierDocumentSentForProcessingAt(
        supplierDocument.sentForProcessingAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      new BusinessPartnerPortalSupplierDocumentProcessedAt(
        supplierDocument.processedAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      new BusinessPartnerPortalSupplierDocumentLinkedAt(
        supplierDocument.linkedAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      new BusinessPartnerPortalSupplierDocumentErrorCode(
        supplierDocument.errorCode,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSupplierDocumentErrorMessage(
        supplierDocument.errorMessage,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSupplierDocumentRetryCount(
        supplierDocument.retryCount,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSupplierDocumentLastRetryAt(
        supplierDocument.lastRetryAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      new BusinessPartnerPortalSupplierDocumentNotes(supplierDocument.notes, {
        undefinable: true,
      }),
      new BusinessPartnerPortalSupplierDocumentSupplierNotes(
        supplierDocument.supplierNotes,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSupplierDocumentIsArchived(
        supplierDocument.isArchived,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSupplierDocumentCreatedAt(
        supplierDocument.createdAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      new BusinessPartnerPortalSupplierDocumentUpdatedAt(
        supplierDocument.updatedAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      new BusinessPartnerPortalSupplierDocumentDeletedAt(
        supplierDocument.deletedAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      this.options.eagerLoading
        ? new BusinessPartnerPortalBusinessPartnerMapper({
            eagerLoading: true,
          }).mapModelToAggregate(supplierDocument.businessPartner, cQMetadata)
        : undefined,
      this.options.eagerLoading
        ? new BusinessPartnerPortalPurchaseInvoiceHeaderMapper({
            eagerLoading: true,
          }).mapModelToAggregate(
            supplierDocument.purchaseInvoiceHeader,
            cQMetadata,
          )
        : undefined,
    );
  }

  private makeResponse(
    supplierDocument: BusinessPartnerPortalSupplierDocument,
  ): BusinessPartnerPortalSupplierDocumentResponse {
    if (!supplierDocument) return null;

    return new BusinessPartnerPortalSupplierDocumentResponse(
      supplierDocument.id.value,
      supplierDocument.rowId.value,
      supplierDocument.businessPartnerId.value,
      supplierDocument.documentNumber.value,
      supplierDocument.documentType.value,
      supplierDocument.status.value,
      supplierDocument.file.value,
      supplierDocument.fileHash.value,
      supplierDocument.supplierInvoiceNumber.value,
      supplierDocument.supplierInvoiceDate.value,
      supplierDocument.supplierInvoiceAmount.value,
      supplierDocument.currencyCode.value,
      supplierDocument.externalDocumentId.value,
      supplierDocument.externalCompanyCode.value,
      supplierDocument.externalProcessingStatus.value,
      supplierDocument.purchaseInvoiceHeaderId.value,
      supplierDocument.ocrConfidenceScore.value,
      supplierDocument.ocrData.value,
      supplierDocument.sentForProcessingAt.value,
      supplierDocument.processedAt.value,
      supplierDocument.linkedAt.value,
      supplierDocument.errorCode.value,
      supplierDocument.errorMessage.value,
      supplierDocument.retryCount.value,
      supplierDocument.lastRetryAt.value,
      supplierDocument.notes.value,
      supplierDocument.supplierNotes.value,
      supplierDocument.isArchived.value,
      supplierDocument.createdAt.value,
      supplierDocument.updatedAt.value,
      supplierDocument.deletedAt.value,
      this.options.eagerLoading
        ? new BusinessPartnerPortalBusinessPartnerMapper({
            eagerLoading: true,
          }).mapAggregateToResponse(supplierDocument.businessPartner)
        : undefined,
      this.options.eagerLoading
        ? new BusinessPartnerPortalPurchaseInvoiceHeaderMapper({
            eagerLoading: true,
          }).mapAggregateToResponse(supplierDocument.purchaseInvoiceHeader)
        : undefined,
    );
  }
}
