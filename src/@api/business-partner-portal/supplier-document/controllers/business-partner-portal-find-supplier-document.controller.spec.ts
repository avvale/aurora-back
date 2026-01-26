/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalFindSupplierDocumentController,
  BusinessPartnerPortalFindSupplierDocumentHandler,
} from '@api/business-partner-portal/supplier-document';
import { businessPartnerPortalMockSupplierDocumentData } from '@app/business-partner-portal/supplier-document';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindSupplierDocumentController', () => {
  let controller: BusinessPartnerPortalFindSupplierDocumentController;
  let handler: BusinessPartnerPortalFindSupplierDocumentHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalFindSupplierDocumentController],
      providers: [
        {
          provide: BusinessPartnerPortalFindSupplierDocumentHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalFindSupplierDocumentController>(
        BusinessPartnerPortalFindSupplierDocumentController,
      );
    handler = module.get<BusinessPartnerPortalFindSupplierDocumentHandler>(
      BusinessPartnerPortalFindSupplierDocumentHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindSupplierDocumentController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a supplierDocument', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockSupplierDocumentData[0]),
            ),
        );
      expect(await controller.main()).toBe(
        businessPartnerPortalMockSupplierDocumentData[0],
      );
    });
  });
});
