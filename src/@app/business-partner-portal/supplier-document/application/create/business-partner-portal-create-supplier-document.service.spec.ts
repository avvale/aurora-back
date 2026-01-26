/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalISupplierDocumentRepository,
  businessPartnerPortalMockSupplierDocumentData,
  BusinessPartnerPortalMockSupplierDocumentRepository,
} from '@app/business-partner-portal/supplier-document';
import { BusinessPartnerPortalCreateSupplierDocumentService } from '@app/business-partner-portal/supplier-document/application/create/business-partner-portal-create-supplier-document.service';
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
  BusinessPartnerPortalSupplierDocumentRowId,
  BusinessPartnerPortalSupplierDocumentSentForProcessingAt,
  BusinessPartnerPortalSupplierDocumentStatus,
  BusinessPartnerPortalSupplierDocumentSupplierInvoiceAmount,
  BusinessPartnerPortalSupplierDocumentSupplierInvoiceDate,
  BusinessPartnerPortalSupplierDocumentSupplierInvoiceNumber,
  BusinessPartnerPortalSupplierDocumentSupplierNotes,
} from '@app/business-partner-portal/supplier-document/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreateSupplierDocumentService', () => {
  let service: BusinessPartnerPortalCreateSupplierDocumentService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalCreateSupplierDocumentService,
        BusinessPartnerPortalMockSupplierDocumentRepository,
        {
          provide: BusinessPartnerPortalISupplierDocumentRepository,
          useValue: {
            create: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalCreateSupplierDocumentService);
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreateSupplierDocumentService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should create a supplierDocument and emit event', async () => {
      expect(
        await service.main({
          id: new BusinessPartnerPortalSupplierDocumentId(
            businessPartnerPortalMockSupplierDocumentData[0].id,
          ),
          rowId: new BusinessPartnerPortalSupplierDocumentRowId(
            businessPartnerPortalMockSupplierDocumentData[0].rowId,
          ),
          businessPartnerId:
            new BusinessPartnerPortalSupplierDocumentBusinessPartnerId(
              businessPartnerPortalMockSupplierDocumentData[0].businessPartnerId,
            ),
          documentNumber:
            new BusinessPartnerPortalSupplierDocumentDocumentNumber(
              businessPartnerPortalMockSupplierDocumentData[0].documentNumber,
            ),
          documentType: new BusinessPartnerPortalSupplierDocumentDocumentType(
            businessPartnerPortalMockSupplierDocumentData[0].documentType,
          ),
          status: new BusinessPartnerPortalSupplierDocumentStatus(
            businessPartnerPortalMockSupplierDocumentData[0].status,
          ),
          file: new BusinessPartnerPortalSupplierDocumentFile(
            businessPartnerPortalMockSupplierDocumentData[0].file,
          ),
          fileHash: new BusinessPartnerPortalSupplierDocumentFileHash(
            businessPartnerPortalMockSupplierDocumentData[0].fileHash,
          ),
          supplierInvoiceNumber:
            new BusinessPartnerPortalSupplierDocumentSupplierInvoiceNumber(
              businessPartnerPortalMockSupplierDocumentData[0].supplierInvoiceNumber,
            ),
          supplierInvoiceDate:
            new BusinessPartnerPortalSupplierDocumentSupplierInvoiceDate(
              businessPartnerPortalMockSupplierDocumentData[0].supplierInvoiceDate,
            ),
          supplierInvoiceAmount:
            new BusinessPartnerPortalSupplierDocumentSupplierInvoiceAmount(
              businessPartnerPortalMockSupplierDocumentData[0].supplierInvoiceAmount,
            ),
          currencyCode: new BusinessPartnerPortalSupplierDocumentCurrencyCode(
            businessPartnerPortalMockSupplierDocumentData[0].currencyCode,
          ),
          externalDocumentId:
            new BusinessPartnerPortalSupplierDocumentExternalDocumentId(
              businessPartnerPortalMockSupplierDocumentData[0].externalDocumentId,
            ),
          externalCompanyCode:
            new BusinessPartnerPortalSupplierDocumentExternalCompanyCode(
              businessPartnerPortalMockSupplierDocumentData[0].externalCompanyCode,
            ),
          externalProcessingStatus:
            new BusinessPartnerPortalSupplierDocumentExternalProcessingStatus(
              businessPartnerPortalMockSupplierDocumentData[0].externalProcessingStatus,
            ),
          purchaseInvoiceHeaderId:
            new BusinessPartnerPortalSupplierDocumentPurchaseInvoiceHeaderId(
              businessPartnerPortalMockSupplierDocumentData[0].purchaseInvoiceHeaderId,
            ),
          ocrConfidenceScore:
            new BusinessPartnerPortalSupplierDocumentOcrConfidenceScore(
              businessPartnerPortalMockSupplierDocumentData[0].ocrConfidenceScore,
            ),
          ocrData: new BusinessPartnerPortalSupplierDocumentOcrData(
            businessPartnerPortalMockSupplierDocumentData[0].ocrData,
          ),
          sentForProcessingAt:
            new BusinessPartnerPortalSupplierDocumentSentForProcessingAt(
              businessPartnerPortalMockSupplierDocumentData[0].sentForProcessingAt,
            ),
          processedAt: new BusinessPartnerPortalSupplierDocumentProcessedAt(
            businessPartnerPortalMockSupplierDocumentData[0].processedAt,
          ),
          linkedAt: new BusinessPartnerPortalSupplierDocumentLinkedAt(
            businessPartnerPortalMockSupplierDocumentData[0].linkedAt,
          ),
          errorCode: new BusinessPartnerPortalSupplierDocumentErrorCode(
            businessPartnerPortalMockSupplierDocumentData[0].errorCode,
          ),
          errorMessage: new BusinessPartnerPortalSupplierDocumentErrorMessage(
            businessPartnerPortalMockSupplierDocumentData[0].errorMessage,
          ),
          retryCount: new BusinessPartnerPortalSupplierDocumentRetryCount(
            businessPartnerPortalMockSupplierDocumentData[0].retryCount,
          ),
          lastRetryAt: new BusinessPartnerPortalSupplierDocumentLastRetryAt(
            businessPartnerPortalMockSupplierDocumentData[0].lastRetryAt,
          ),
          notes: new BusinessPartnerPortalSupplierDocumentNotes(
            businessPartnerPortalMockSupplierDocumentData[0].notes,
          ),
          supplierNotes: new BusinessPartnerPortalSupplierDocumentSupplierNotes(
            businessPartnerPortalMockSupplierDocumentData[0].supplierNotes,
          ),
          isArchived: new BusinessPartnerPortalSupplierDocumentIsArchived(
            businessPartnerPortalMockSupplierDocumentData[0].isArchived,
          ),
        }),
      ).toBe(undefined);
    });
  });
});
