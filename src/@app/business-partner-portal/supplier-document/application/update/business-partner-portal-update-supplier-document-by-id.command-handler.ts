/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { BusinessPartnerPortalUpdateSupplierDocumentByIdCommand } from '@app/business-partner-portal/supplier-document';
import { BusinessPartnerPortalUpdateSupplierDocumentByIdService } from '@app/business-partner-portal/supplier-document/application/update/business-partner-portal-update-supplier-document-by-id.service';
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
} from '@app/business-partner-portal/supplier-document/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(BusinessPartnerPortalUpdateSupplierDocumentByIdCommand)
export class BusinessPartnerPortalUpdateSupplierDocumentByIdCommandHandler
  implements
    ICommandHandler<BusinessPartnerPortalUpdateSupplierDocumentByIdCommand>
{
  constructor(
    private readonly updateSupplierDocumentByIdService: BusinessPartnerPortalUpdateSupplierDocumentByIdService,
  ) {}

  async execute(
    command: BusinessPartnerPortalUpdateSupplierDocumentByIdCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.updateSupplierDocumentByIdService.main(
      {
        id: new BusinessPartnerPortalSupplierDocumentId(command.payload.id),
        businessPartnerId:
          new BusinessPartnerPortalSupplierDocumentBusinessPartnerId(
            command.payload.businessPartnerId,
            { undefinable: true },
          ),
        documentNumber: new BusinessPartnerPortalSupplierDocumentDocumentNumber(
          command.payload.documentNumber,
        ),
        documentType: new BusinessPartnerPortalSupplierDocumentDocumentType(
          command.payload.documentType,
        ),
        status: new BusinessPartnerPortalSupplierDocumentStatus(
          command.payload.status,
          { undefinable: true },
        ),
        file: new BusinessPartnerPortalSupplierDocumentFile(
          command.payload.file,
        ),
        fileHash: new BusinessPartnerPortalSupplierDocumentFileHash(
          command.payload.fileHash,
        ),
        supplierInvoiceNumber:
          new BusinessPartnerPortalSupplierDocumentSupplierInvoiceNumber(
            command.payload.supplierInvoiceNumber,
          ),
        supplierInvoiceDate:
          new BusinessPartnerPortalSupplierDocumentSupplierInvoiceDate(
            command.payload.supplierInvoiceDate,
          ),
        supplierInvoiceAmount:
          new BusinessPartnerPortalSupplierDocumentSupplierInvoiceAmount(
            command.payload.supplierInvoiceAmount,
          ),
        currencyCode: new BusinessPartnerPortalSupplierDocumentCurrencyCode(
          command.payload.currencyCode,
        ),
        externalDocumentId:
          new BusinessPartnerPortalSupplierDocumentExternalDocumentId(
            command.payload.externalDocumentId,
          ),
        externalCompanyCode:
          new BusinessPartnerPortalSupplierDocumentExternalCompanyCode(
            command.payload.externalCompanyCode,
          ),
        externalProcessingStatus:
          new BusinessPartnerPortalSupplierDocumentExternalProcessingStatus(
            command.payload.externalProcessingStatus,
          ),
        purchaseInvoiceHeaderId:
          new BusinessPartnerPortalSupplierDocumentPurchaseInvoiceHeaderId(
            command.payload.purchaseInvoiceHeaderId,
          ),
        ocrConfidenceScore:
          new BusinessPartnerPortalSupplierDocumentOcrConfidenceScore(
            command.payload.ocrConfidenceScore,
          ),
        ocrData: new BusinessPartnerPortalSupplierDocumentOcrData(
          command.payload.ocrData,
        ),
        sentForProcessingAt:
          new BusinessPartnerPortalSupplierDocumentSentForProcessingAt(
            command.payload.sentForProcessingAt,
            {},
            { addTimezone: command.cQMetadata?.timezone },
          ),
        processedAt: new BusinessPartnerPortalSupplierDocumentProcessedAt(
          command.payload.processedAt,
          {},
          { addTimezone: command.cQMetadata?.timezone },
        ),
        linkedAt: new BusinessPartnerPortalSupplierDocumentLinkedAt(
          command.payload.linkedAt,
          {},
          { addTimezone: command.cQMetadata?.timezone },
        ),
        errorCode: new BusinessPartnerPortalSupplierDocumentErrorCode(
          command.payload.errorCode,
        ),
        errorMessage: new BusinessPartnerPortalSupplierDocumentErrorMessage(
          command.payload.errorMessage,
        ),
        retryCount: new BusinessPartnerPortalSupplierDocumentRetryCount(
          command.payload.retryCount,
          { undefinable: true },
        ),
        lastRetryAt: new BusinessPartnerPortalSupplierDocumentLastRetryAt(
          command.payload.lastRetryAt,
          {},
          { addTimezone: command.cQMetadata?.timezone },
        ),
        notes: new BusinessPartnerPortalSupplierDocumentNotes(
          command.payload.notes,
        ),
        supplierNotes: new BusinessPartnerPortalSupplierDocumentSupplierNotes(
          command.payload.supplierNotes,
        ),
        isArchived: new BusinessPartnerPortalSupplierDocumentIsArchived(
          command.payload.isArchived,
          { undefinable: true },
        ),
      },
      command.constraint,
      command.cQMetadata,
    );
  }
}
