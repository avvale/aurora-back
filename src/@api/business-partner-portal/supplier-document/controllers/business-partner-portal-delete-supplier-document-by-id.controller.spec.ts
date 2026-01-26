/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalDeleteSupplierDocumentByIdController,
  BusinessPartnerPortalDeleteSupplierDocumentByIdHandler,
} from '@api/business-partner-portal/supplier-document';
import { businessPartnerPortalMockSupplierDocumentData } from '@app/business-partner-portal/supplier-document';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeleteSupplierDocumentByIdController', () => {
  let controller: BusinessPartnerPortalDeleteSupplierDocumentByIdController;
  let handler: BusinessPartnerPortalDeleteSupplierDocumentByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalDeleteSupplierDocumentByIdController],
      providers: [
        {
          provide: BusinessPartnerPortalDeleteSupplierDocumentByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalDeleteSupplierDocumentByIdController>(
        BusinessPartnerPortalDeleteSupplierDocumentByIdController,
      );
    handler =
      module.get<BusinessPartnerPortalDeleteSupplierDocumentByIdHandler>(
        BusinessPartnerPortalDeleteSupplierDocumentByIdHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeleteSupplierDocumentByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an supplierDocument deleted', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockSupplierDocumentData[0]),
            ),
        );
      expect(
        await controller.main(
          businessPartnerPortalMockSupplierDocumentData[0].id,
        ),
      ).toBe(businessPartnerPortalMockSupplierDocumentData[0]);
    });
  });
});
