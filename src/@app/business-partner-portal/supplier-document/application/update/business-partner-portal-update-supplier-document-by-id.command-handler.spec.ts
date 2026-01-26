/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  businessPartnerPortalMockSupplierDocumentData,
  BusinessPartnerPortalUpdateSupplierDocumentByIdCommand,
} from '@app/business-partner-portal/supplier-document';
import { BusinessPartnerPortalUpdateSupplierDocumentByIdCommandHandler } from '@app/business-partner-portal/supplier-document/application/update/business-partner-portal-update-supplier-document-by-id.command-handler';
import { BusinessPartnerPortalUpdateSupplierDocumentByIdService } from '@app/business-partner-portal/supplier-document/application/update/business-partner-portal-update-supplier-document-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdateSupplierDocumentByIdCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalUpdateSupplierDocumentByIdCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalUpdateSupplierDocumentByIdCommandHandler,
        {
          provide: BusinessPartnerPortalUpdateSupplierDocumentByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalUpdateSupplierDocumentByIdCommandHandler>(
        BusinessPartnerPortalUpdateSupplierDocumentByIdCommandHandler,
      );
  });

  describe('main', () => {
    test('UpdateSupplierDocumentByIdCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should return an supplierDocument created', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalUpdateSupplierDocumentByIdCommand(
            {
              id: businessPartnerPortalMockSupplierDocumentData[0].id,
              rowId: businessPartnerPortalMockSupplierDocumentData[0].rowId,
              businessPartnerId:
                businessPartnerPortalMockSupplierDocumentData[0]
                  .businessPartnerId,
              documentNumber:
                businessPartnerPortalMockSupplierDocumentData[0].documentNumber,
              documentType:
                businessPartnerPortalMockSupplierDocumentData[0].documentType,
              status: businessPartnerPortalMockSupplierDocumentData[0].status,
              file: businessPartnerPortalMockSupplierDocumentData[0].file,
              fileHash:
                businessPartnerPortalMockSupplierDocumentData[0].fileHash,
              supplierInvoiceNumber:
                businessPartnerPortalMockSupplierDocumentData[0]
                  .supplierInvoiceNumber,
              supplierInvoiceDate:
                businessPartnerPortalMockSupplierDocumentData[0]
                  .supplierInvoiceDate,
              supplierInvoiceAmount:
                businessPartnerPortalMockSupplierDocumentData[0]
                  .supplierInvoiceAmount,
              currencyCode:
                businessPartnerPortalMockSupplierDocumentData[0].currencyCode,
              externalDocumentId:
                businessPartnerPortalMockSupplierDocumentData[0]
                  .externalDocumentId,
              externalCompanyCode:
                businessPartnerPortalMockSupplierDocumentData[0]
                  .externalCompanyCode,
              externalProcessingStatus:
                businessPartnerPortalMockSupplierDocumentData[0]
                  .externalProcessingStatus,
              purchaseInvoiceHeaderId:
                businessPartnerPortalMockSupplierDocumentData[0]
                  .purchaseInvoiceHeaderId,
              ocrConfidenceScore:
                businessPartnerPortalMockSupplierDocumentData[0]
                  .ocrConfidenceScore,
              ocrData: businessPartnerPortalMockSupplierDocumentData[0].ocrData,
              sentForProcessingAt:
                businessPartnerPortalMockSupplierDocumentData[0]
                  .sentForProcessingAt,
              processedAt:
                businessPartnerPortalMockSupplierDocumentData[0].processedAt,
              linkedAt:
                businessPartnerPortalMockSupplierDocumentData[0].linkedAt,
              errorCode:
                businessPartnerPortalMockSupplierDocumentData[0].errorCode,
              errorMessage:
                businessPartnerPortalMockSupplierDocumentData[0].errorMessage,
              retryCount:
                businessPartnerPortalMockSupplierDocumentData[0].retryCount,
              lastRetryAt:
                businessPartnerPortalMockSupplierDocumentData[0].lastRetryAt,
              notes: businessPartnerPortalMockSupplierDocumentData[0].notes,
              supplierNotes:
                businessPartnerPortalMockSupplierDocumentData[0].supplierNotes,
              isArchived:
                businessPartnerPortalMockSupplierDocumentData[0].isArchived,
            },
            {},
            { timezone: process.env.TZ },
          ),
        ),
      ).toBe(undefined);
    });
  });
});
