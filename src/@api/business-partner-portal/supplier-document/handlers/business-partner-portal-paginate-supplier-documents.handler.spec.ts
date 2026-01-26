/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { BusinessPartnerPortalPaginateSupplierDocumentsHandler } from '@api/business-partner-portal/supplier-document';
import { businessPartnerPortalMockSupplierDocumentData } from '@app/business-partner-portal/supplier-document';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginateSupplierDocumentsHandler', () => {
  let handler: BusinessPartnerPortalPaginateSupplierDocumentsHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalPaginateSupplierDocumentsHandler,
        {
          provide: IQueryBus,
          useValue: {
            ask: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    handler = module.get<BusinessPartnerPortalPaginateSupplierDocumentsHandler>(
      BusinessPartnerPortalPaginateSupplierDocumentsHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalPaginateSupplierDocumentsHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginateSupplierDocumentsHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a supplierDocuments', async () => {
      jest.spyOn(queryBus, 'ask').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: businessPartnerPortalMockSupplierDocumentData.length,
              count: businessPartnerPortalMockSupplierDocumentData.length,
              rows: businessPartnerPortalMockSupplierDocumentData,
            }),
          ),
      );
      expect(await handler.main({}, {})).toEqual({
        total: businessPartnerPortalMockSupplierDocumentData.length,
        count: businessPartnerPortalMockSupplierDocumentData.length,
        rows: businessPartnerPortalMockSupplierDocumentData,
      });
    });
  });
});
