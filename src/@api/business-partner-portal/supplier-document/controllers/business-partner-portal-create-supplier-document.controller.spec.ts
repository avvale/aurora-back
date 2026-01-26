/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalCreateSupplierDocumentController,
  BusinessPartnerPortalCreateSupplierDocumentHandler,
} from '@api/business-partner-portal/supplier-document';
import { businessPartnerPortalMockSupplierDocumentData } from '@app/business-partner-portal/supplier-document';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreateSupplierDocumentController', () => {
  let controller: BusinessPartnerPortalCreateSupplierDocumentController;
  let handler: BusinessPartnerPortalCreateSupplierDocumentHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalCreateSupplierDocumentController],
      providers: [
        {
          provide: BusinessPartnerPortalCreateSupplierDocumentHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalCreateSupplierDocumentController>(
        BusinessPartnerPortalCreateSupplierDocumentController,
      );
    handler = module.get<BusinessPartnerPortalCreateSupplierDocumentHandler>(
      BusinessPartnerPortalCreateSupplierDocumentHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreateSupplierDocumentController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an supplierDocument created', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockSupplierDocumentData[0]),
            ),
        );
      expect(
        await controller.main(businessPartnerPortalMockSupplierDocumentData[0]),
      ).toBe(businessPartnerPortalMockSupplierDocumentData[0]);
    });
  });
});
