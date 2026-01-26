/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPurchaseInvoiceHeaderHandler,
  BusinessPartnerPortalFindPurchaseInvoiceHeaderResolver,
} from '@api/business-partner-portal/purchase-invoice-header';
import { businessPartnerPortalMockPurchaseInvoiceHeaderData } from '@app/business-partner-portal/purchase-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPurchaseInvoiceHeaderResolver', () => {
  let resolver: BusinessPartnerPortalFindPurchaseInvoiceHeaderResolver;
  let handler: BusinessPartnerPortalFindPurchaseInvoiceHeaderHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalFindPurchaseInvoiceHeaderResolver,
        {
          provide: BusinessPartnerPortalFindPurchaseInvoiceHeaderHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalFindPurchaseInvoiceHeaderResolver>(
        BusinessPartnerPortalFindPurchaseInvoiceHeaderResolver,
      );
    handler = module.get<BusinessPartnerPortalFindPurchaseInvoiceHeaderHandler>(
      BusinessPartnerPortalFindPurchaseInvoiceHeaderHandler,
    );
  });

  test('BusinessPartnerPortalFindPurchaseInvoiceHeaderResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPurchaseInvoiceHeaderResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a purchaseInvoiceHeader', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPurchaseInvoiceHeaderData[0]),
            ),
        );
      expect(await resolver.main()).toBe(
        businessPartnerPortalMockPurchaseInvoiceHeaderData[0],
      );
    });
  });
});
