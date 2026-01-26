/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalFindSupplierDocumentHandler,
  BusinessPartnerPortalFindSupplierDocumentResolver,
} from '@api/business-partner-portal/supplier-document';
import { businessPartnerPortalMockSupplierDocumentData } from '@app/business-partner-portal/supplier-document';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindSupplierDocumentResolver', () => {
  let resolver: BusinessPartnerPortalFindSupplierDocumentResolver;
  let handler: BusinessPartnerPortalFindSupplierDocumentHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalFindSupplierDocumentResolver,
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

    resolver = module.get<BusinessPartnerPortalFindSupplierDocumentResolver>(
      BusinessPartnerPortalFindSupplierDocumentResolver,
    );
    handler = module.get<BusinessPartnerPortalFindSupplierDocumentHandler>(
      BusinessPartnerPortalFindSupplierDocumentHandler,
    );
  });

  test('BusinessPartnerPortalFindSupplierDocumentResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindSupplierDocumentResolver should be defined', () => {
      expect(resolver).toBeDefined();
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
      expect(await resolver.main()).toBe(
        businessPartnerPortalMockSupplierDocumentData[0],
      );
    });
  });
});
