/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalFindSupplierDocumentByIdHandler,
  BusinessPartnerPortalFindSupplierDocumentByIdResolver,
} from '@api/business-partner-portal/supplier-document';
import { businessPartnerPortalMockSupplierDocumentData } from '@app/business-partner-portal/supplier-document';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindSupplierDocumentByIdResolver', () => {
  let resolver: BusinessPartnerPortalFindSupplierDocumentByIdResolver;
  let handler: BusinessPartnerPortalFindSupplierDocumentByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalFindSupplierDocumentByIdResolver,
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

    resolver =
      module.get<BusinessPartnerPortalFindSupplierDocumentByIdResolver>(
        BusinessPartnerPortalFindSupplierDocumentByIdResolver,
      );
    handler = module.get<BusinessPartnerPortalFindSupplierDocumentByIdHandler>(
      BusinessPartnerPortalFindSupplierDocumentByIdHandler,
    );
  });

  test('BusinessPartnerPortalFindSupplierDocumentByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindSupplierDocumentByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
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
        await resolver.main(
          businessPartnerPortalMockSupplierDocumentData[0].id,
        ),
      ).toBe(businessPartnerPortalMockSupplierDocumentData[0]);
    });
  });
});
