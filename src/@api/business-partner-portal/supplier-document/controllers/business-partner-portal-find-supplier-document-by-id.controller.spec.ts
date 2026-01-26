/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalFindSupplierDocumentByIdController,
  BusinessPartnerPortalFindSupplierDocumentByIdHandler,
} from '@api/business-partner-portal/supplier-document';
import { businessPartnerPortalMockSupplierDocumentData } from '@app/business-partner-portal/supplier-document';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindSupplierDocumentByIdController', () => {
  let controller: BusinessPartnerPortalFindSupplierDocumentByIdController;
  let handler: BusinessPartnerPortalFindSupplierDocumentByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalFindSupplierDocumentByIdController],
      providers: [
        {
          provide: BusinessPartnerPortalFindSupplierDocumentByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalFindSupplierDocumentByIdController>(
        BusinessPartnerPortalFindSupplierDocumentByIdController,
      );
    handler = module.get<BusinessPartnerPortalFindSupplierDocumentByIdHandler>(
      BusinessPartnerPortalFindSupplierDocumentByIdHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindSupplierDocumentByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an supplierDocument by id', async () => {
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
