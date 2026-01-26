/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalGetSupplierDocumentsHandler,
  BusinessPartnerPortalGetSupplierDocumentsResolver,
} from '@api/business-partner-portal/supplier-document';
import { businessPartnerPortalMockSupplierDocumentData } from '@app/business-partner-portal/supplier-document';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetSupplierDocumentsResolver', () => {
  let resolver: BusinessPartnerPortalGetSupplierDocumentsResolver;
  let handler: BusinessPartnerPortalGetSupplierDocumentsHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalGetSupplierDocumentsResolver,
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

    resolver = module.get<BusinessPartnerPortalGetSupplierDocumentsResolver>(
      BusinessPartnerPortalGetSupplierDocumentsResolver,
    );
    handler = module.get<BusinessPartnerPortalGetSupplierDocumentsHandler>(
      BusinessPartnerPortalGetSupplierDocumentsHandler,
    );
  });

  test('BusinessPartnerPortalGetSupplierDocumentsResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetSupplierDocumentsResolver should be defined', () => {
      expect(resolver).toBeDefined();
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
      expect(await resolver.main()).toBe(
        businessPartnerPortalMockSupplierDocumentData,
      );
    });
  });
});
