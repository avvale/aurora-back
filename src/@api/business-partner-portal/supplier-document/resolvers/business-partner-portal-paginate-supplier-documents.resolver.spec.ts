/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginateSupplierDocumentsHandler,
  BusinessPartnerPortalPaginateSupplierDocumentsResolver,
} from '@api/business-partner-portal/supplier-document';
import { businessPartnerPortalMockSupplierDocumentData } from '@app/business-partner-portal/supplier-document';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginateSupplierDocumentsResolver', () => {
  let resolver: BusinessPartnerPortalPaginateSupplierDocumentsResolver;
  let handler: BusinessPartnerPortalPaginateSupplierDocumentsHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalPaginateSupplierDocumentsResolver,
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

    resolver =
      module.get<BusinessPartnerPortalPaginateSupplierDocumentsResolver>(
        BusinessPartnerPortalPaginateSupplierDocumentsResolver,
      );
    handler = module.get<BusinessPartnerPortalPaginateSupplierDocumentsHandler>(
      BusinessPartnerPortalPaginateSupplierDocumentsHandler,
    );
  });

  test('BusinessPartnerPortalPaginateSupplierDocumentsResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginateSupplierDocumentsResolver should be defined', () => {
      expect(resolver).toBeDefined();
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
      expect(await resolver.main()).toStrictEqual({
        total: 5,
        count: 5,
        rows: businessPartnerPortalMockSupplierDocumentData,
      });
    });
  });
});
