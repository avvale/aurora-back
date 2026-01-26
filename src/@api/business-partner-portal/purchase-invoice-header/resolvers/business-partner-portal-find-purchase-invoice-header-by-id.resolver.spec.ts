/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdHandler,
  BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdResolver,
} from '@api/business-partner-portal/purchase-invoice-header';
import { businessPartnerPortalMockPurchaseInvoiceHeaderData } from '@app/business-partner-portal/purchase-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdResolver', () => {
  let resolver: BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdResolver;
  let handler: BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdResolver,
        {
          provide: BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdResolver>(
        BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdResolver,
      );
    handler =
      module.get<BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdHandler>(
        BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdHandler,
      );
  });

  test('BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an purchaseInvoiceHeader by id', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPurchaseInvoiceHeaderData[0]),
            ),
        );
      expect(
        await resolver.main(
          businessPartnerPortalMockPurchaseInvoiceHeaderData[0].id,
        ),
      ).toBe(businessPartnerPortalMockPurchaseInvoiceHeaderData[0]);
    });
  });
});
