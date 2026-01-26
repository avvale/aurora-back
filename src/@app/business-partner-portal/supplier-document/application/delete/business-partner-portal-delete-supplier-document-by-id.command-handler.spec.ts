/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalDeleteSupplierDocumentByIdCommand,
  businessPartnerPortalMockSupplierDocumentData,
} from '@app/business-partner-portal/supplier-document';
import { BusinessPartnerPortalDeleteSupplierDocumentByIdCommandHandler } from '@app/business-partner-portal/supplier-document/application/delete/business-partner-portal-delete-supplier-document-by-id.command-handler';
import { BusinessPartnerPortalDeleteSupplierDocumentByIdService } from '@app/business-partner-portal/supplier-document/application/delete/business-partner-portal-delete-supplier-document-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeleteSupplierDocumentByIdCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalDeleteSupplierDocumentByIdCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalDeleteSupplierDocumentByIdCommandHandler,
        {
          provide: BusinessPartnerPortalDeleteSupplierDocumentByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalDeleteSupplierDocumentByIdCommandHandler>(
        BusinessPartnerPortalDeleteSupplierDocumentByIdCommandHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeleteSupplierDocumentByIdCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should create the value object id and pass them as parameters to the BusinessPartnerPortalDeleteSupplierDocumentByIdService', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalDeleteSupplierDocumentByIdCommand(
            businessPartnerPortalMockSupplierDocumentData[0].id,
          ),
        ),
      ).toBe(undefined);
    });
  });
});
