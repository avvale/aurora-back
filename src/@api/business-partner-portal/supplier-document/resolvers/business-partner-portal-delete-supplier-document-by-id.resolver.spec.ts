/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalDeleteSupplierDocumentByIdHandler,
  BusinessPartnerPortalDeleteSupplierDocumentByIdResolver,
} from '@api/business-partner-portal/supplier-document';
import { businessPartnerPortalMockSupplierDocumentData } from '@app/business-partner-portal/supplier-document';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeleteSupplierDocumentByIdResolver', () => {
  let resolver: BusinessPartnerPortalDeleteSupplierDocumentByIdResolver;
  let handler: BusinessPartnerPortalDeleteSupplierDocumentByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalDeleteSupplierDocumentByIdResolver,
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

    resolver =
      module.get<BusinessPartnerPortalDeleteSupplierDocumentByIdResolver>(
        BusinessPartnerPortalDeleteSupplierDocumentByIdResolver,
      );
    handler =
      module.get<BusinessPartnerPortalDeleteSupplierDocumentByIdHandler>(
        BusinessPartnerPortalDeleteSupplierDocumentByIdHandler,
      );
  });

  test('BusinessPartnerPortalDeleteSupplierDocumentByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeleteSupplierDocumentByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
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
        await resolver.main(
          businessPartnerPortalMockSupplierDocumentData[0].id,
        ),
      ).toBe(businessPartnerPortalMockSupplierDocumentData[0]);
    });
  });
});
