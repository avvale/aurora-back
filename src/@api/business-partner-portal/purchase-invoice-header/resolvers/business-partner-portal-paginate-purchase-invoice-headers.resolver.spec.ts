/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginatePurchaseInvoiceHeadersHandler,
  BusinessPartnerPortalPaginatePurchaseInvoiceHeadersResolver,
} from '@api/business-partner-portal/purchase-invoice-header';
import { businessPartnerPortalMockPurchaseInvoiceHeaderData } from '@app/business-partner-portal/purchase-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePurchaseInvoiceHeadersResolver', () => {
  let resolver: BusinessPartnerPortalPaginatePurchaseInvoiceHeadersResolver;
  let handler: BusinessPartnerPortalPaginatePurchaseInvoiceHeadersHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalPaginatePurchaseInvoiceHeadersResolver,
        {
          provide: BusinessPartnerPortalPaginatePurchaseInvoiceHeadersHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalPaginatePurchaseInvoiceHeadersResolver>(
        BusinessPartnerPortalPaginatePurchaseInvoiceHeadersResolver,
      );
    handler =
      module.get<BusinessPartnerPortalPaginatePurchaseInvoiceHeadersHandler>(
        BusinessPartnerPortalPaginatePurchaseInvoiceHeadersHandler,
      );
  });

  test('BusinessPartnerPortalPaginatePurchaseInvoiceHeadersResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePurchaseInvoiceHeadersResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a businessPartnerPortalMockPurchaseInvoiceHeaderData', async () => {
      jest.spyOn(handler, 'main').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: 5,
              count: 5,
              rows: businessPartnerPortalMockPurchaseInvoiceHeaderData,
            }),
          ),
      );
      expect(await resolver.main()).toStrictEqual({
        total: 5,
        count: 5,
        rows: businessPartnerPortalMockPurchaseInvoiceHeaderData,
      });
    });
  });
});
