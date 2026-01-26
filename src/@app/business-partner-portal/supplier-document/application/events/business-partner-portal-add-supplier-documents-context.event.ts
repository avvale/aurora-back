/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatedSupplierDocumentEvent,
  BusinessPartnerPortalCreatedSupplierDocumentsEvent,
  BusinessPartnerPortalSupplierDocument,
} from '@app/business-partner-portal/supplier-document';
import { CQMetadata } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class BusinessPartnerPortalAddSupplierDocumentsContextEvent extends AggregateRoot {
  constructor(
    public readonly aggregateRoots: BusinessPartnerPortalSupplierDocument[] = [],
    public readonly cQMetadata?: CQMetadata,
  ) {
    super();
  }

  *[Symbol.iterator]() {
    for (const aggregateRoot of this.aggregateRoots) yield aggregateRoot;
  }

  created(): void {
    this.apply(
      new BusinessPartnerPortalCreatedSupplierDocumentsEvent({
        payload: this.aggregateRoots.map(
          (supplierDocument) =>
            new BusinessPartnerPortalCreatedSupplierDocumentEvent({
              payload: {
                id: supplierDocument.id.value,
                businessPartnerId: supplierDocument.businessPartnerId.value,
                documentNumber: supplierDocument.documentNumber?.value,
                documentType: supplierDocument.documentType?.value,
                status: supplierDocument.status.value,
                file: supplierDocument.file?.value,
                fileHash: supplierDocument.fileHash?.value,
                supplierInvoiceNumber:
                  supplierDocument.supplierInvoiceNumber?.value,
                supplierInvoiceDate:
                  supplierDocument.supplierInvoiceDate?.value,
                supplierInvoiceAmount:
                  supplierDocument.supplierInvoiceAmount?.value,
                currencyCode: supplierDocument.currencyCode?.value,
                externalDocumentId: supplierDocument.externalDocumentId?.value,
                externalCompanyCode:
                  supplierDocument.externalCompanyCode?.value,
                externalProcessingStatus:
                  supplierDocument.externalProcessingStatus?.value,
                purchaseInvoiceHeaderId:
                  supplierDocument.purchaseInvoiceHeaderId?.value,
                ocrConfidenceScore: supplierDocument.ocrConfidenceScore?.value,
                ocrData: supplierDocument.ocrData?.value,
                sentForProcessingAt:
                  supplierDocument.sentForProcessingAt?.value,
                processedAt: supplierDocument.processedAt?.value,
                linkedAt: supplierDocument.linkedAt?.value,
                errorCode: supplierDocument.errorCode?.value,
                errorMessage: supplierDocument.errorMessage?.value,
                retryCount: supplierDocument.retryCount.value,
                lastRetryAt: supplierDocument.lastRetryAt?.value,
                notes: supplierDocument.notes?.value,
                supplierNotes: supplierDocument.supplierNotes?.value,
                isArchived: supplierDocument.isArchived.value,
                createdAt: supplierDocument.createdAt?.value,
                updatedAt: supplierDocument.updatedAt?.value,
                deletedAt: supplierDocument.deletedAt?.value,
              },
            }),
        ),
        cQMetadata: this.cQMetadata,
      }),
    );
  }
}
