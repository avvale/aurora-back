/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalGetSupplierDocumentsController,
  BusinessPartnerPortalGetSupplierDocumentsHandler,
} from '@api/business-partner-portal/supplier-document';
import { businessPartnerPortalMockSupplierDocumentData } from '@app/business-partner-portal/supplier-document';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetSupplierDocumentsController', () => {
  let controller: BusinessPartnerPortalGetSupplierDocumentsController;
  let handler: BusinessPartnerPortalGetSupplierDocumentsHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalGetSupplierDocumentsController],
      providers: [
        {
          provide: BusinessPartnerPortalGetSupplierDocumentsHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalGetSupplierDocumentsController>(
        BusinessPartnerPortalGetSupplierDocumentsController,
      );
    handler = module.get<BusinessPartnerPortalGetSupplierDocumentsHandler>(
      BusinessPartnerPortalGetSupplierDocumentsHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetSupplierDocumentsController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a businessPartnerPortalMockSupplierDocumentData', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockSupplierDocumentData),
            ),
        );
      expect(await controller.main()).toBe(
        businessPartnerPortalMockSupplierDocumentData,
      );
    });
  });
});
