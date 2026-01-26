/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalCreateSupplierDocumentHandler,
  BusinessPartnerPortalCreateSupplierDocumentResolver,
} from '@api/business-partner-portal/supplier-document';
import { BusinessPartnerPortalCreateSupplierDocumentInput } from '@api/graphql';
import { businessPartnerPortalMockSupplierDocumentData } from '@app/business-partner-portal/supplier-document';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreateSupplierDocumentResolver', () => {
  let resolver: BusinessPartnerPortalCreateSupplierDocumentResolver;
  let handler: BusinessPartnerPortalCreateSupplierDocumentHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalCreateSupplierDocumentResolver,
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

    resolver = module.get<BusinessPartnerPortalCreateSupplierDocumentResolver>(
      BusinessPartnerPortalCreateSupplierDocumentResolver,
    );
    handler = module.get<BusinessPartnerPortalCreateSupplierDocumentHandler>(
      BusinessPartnerPortalCreateSupplierDocumentHandler,
    );
  });

  test('BusinessPartnerPortalCreateSupplierDocumentResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreateSupplierDocumentResolver should be defined', () => {
      expect(resolver).toBeDefined();
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
        await resolver.main(
          <BusinessPartnerPortalCreateSupplierDocumentInput>(
            businessPartnerPortalMockSupplierDocumentData[0]
          ),
        ),
      ).toBe(businessPartnerPortalMockSupplierDocumentData[0]);
    });
  });
});
