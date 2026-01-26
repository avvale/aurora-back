/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalUpdateSupplierDocumentByIdController,
  BusinessPartnerPortalUpdateSupplierDocumentByIdHandler,
} from '@api/business-partner-portal/supplier-document';
import { businessPartnerPortalMockSupplierDocumentData } from '@app/business-partner-portal/supplier-document';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdateSupplierDocumentByIdController', () => {
  let controller: BusinessPartnerPortalUpdateSupplierDocumentByIdController;
  let handler: BusinessPartnerPortalUpdateSupplierDocumentByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalUpdateSupplierDocumentByIdController],
      providers: [
        {
          provide: BusinessPartnerPortalUpdateSupplierDocumentByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalUpdateSupplierDocumentByIdController>(
        BusinessPartnerPortalUpdateSupplierDocumentByIdController,
      );
    handler =
      module.get<BusinessPartnerPortalUpdateSupplierDocumentByIdHandler>(
        BusinessPartnerPortalUpdateSupplierDocumentByIdHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdateSupplierDocumentByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a supplierDocument updated', async () => {
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
