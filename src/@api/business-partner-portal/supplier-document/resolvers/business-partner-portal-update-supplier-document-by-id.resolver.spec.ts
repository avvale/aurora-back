/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalUpdateSupplierDocumentByIdHandler,
  BusinessPartnerPortalUpdateSupplierDocumentByIdResolver,
} from '@api/business-partner-portal/supplier-document';
import { BusinessPartnerPortalUpdateSupplierDocumentByIdInput } from '@api/graphql';
import { businessPartnerPortalMockSupplierDocumentData } from '@app/business-partner-portal/supplier-document';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdateSupplierDocumentByIdResolver', () => {
  let resolver: BusinessPartnerPortalUpdateSupplierDocumentByIdResolver;
  let handler: BusinessPartnerPortalUpdateSupplierDocumentByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalUpdateSupplierDocumentByIdResolver,
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

    resolver =
      module.get<BusinessPartnerPortalUpdateSupplierDocumentByIdResolver>(
        BusinessPartnerPortalUpdateSupplierDocumentByIdResolver,
      );
    handler =
      module.get<BusinessPartnerPortalUpdateSupplierDocumentByIdHandler>(
        BusinessPartnerPortalUpdateSupplierDocumentByIdHandler,
      );
  });

  test('BusinessPartnerPortalUpdateSupplierDocumentByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdateSupplierDocumentByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a supplierDocument by id updated', async () => {
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
          <BusinessPartnerPortalUpdateSupplierDocumentByIdInput>(
            businessPartnerPortalMockSupplierDocumentData[0]
          ),
        ),
      ).toBe(businessPartnerPortalMockSupplierDocumentData[0]);
    });
  });
});
