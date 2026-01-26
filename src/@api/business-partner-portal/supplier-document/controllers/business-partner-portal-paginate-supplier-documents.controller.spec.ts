/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginateSupplierDocumentsController,
  BusinessPartnerPortalPaginateSupplierDocumentsHandler,
} from '@api/business-partner-portal/supplier-document';
import { businessPartnerPortalMockSupplierDocumentData } from '@app/business-partner-portal/supplier-document';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginateSupplierDocumentsController', () => {
  let controller: BusinessPartnerPortalPaginateSupplierDocumentsController;
  let handler: BusinessPartnerPortalPaginateSupplierDocumentsHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalPaginateSupplierDocumentsController],
      providers: [
        {
          provide: BusinessPartnerPortalPaginateSupplierDocumentsHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalPaginateSupplierDocumentsController>(
        BusinessPartnerPortalPaginateSupplierDocumentsController,
      );
    handler = module.get<BusinessPartnerPortalPaginateSupplierDocumentsHandler>(
      BusinessPartnerPortalPaginateSupplierDocumentsHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginateSupplierDocumentsController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a businessPartnerPortalMockSupplierDocumentData', async () => {
      jest.spyOn(handler, 'main').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: 5,
              count: 5,
              rows: businessPartnerPortalMockSupplierDocumentData,
            }),
          ),
      );
      expect(await controller.main()).toStrictEqual({
        total: 5,
        count: 5,
        rows: businessPartnerPortalMockSupplierDocumentData,
      });
    });
  });
});
