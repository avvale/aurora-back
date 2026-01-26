/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginatePurchaseInvoicePositionsHandler,
  BusinessPartnerPortalPaginatePurchaseInvoicePositionsResolver,
} from '@api/business-partner-portal/purchase-invoice-position';
import { businessPartnerPortalMockPurchaseInvoicePositionData } from '@app/business-partner-portal/purchase-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePurchaseInvoicePositionsResolver', () => {
  let resolver: BusinessPartnerPortalPaginatePurchaseInvoicePositionsResolver;
  let handler: BusinessPartnerPortalPaginatePurchaseInvoicePositionsHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalPaginatePurchaseInvoicePositionsResolver,
        {
          provide: BusinessPartnerPortalPaginatePurchaseInvoicePositionsHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalPaginatePurchaseInvoicePositionsResolver>(
        BusinessPartnerPortalPaginatePurchaseInvoicePositionsResolver,
      );
    handler =
      module.get<BusinessPartnerPortalPaginatePurchaseInvoicePositionsHandler>(
        BusinessPartnerPortalPaginatePurchaseInvoicePositionsHandler,
      );
  });

  test('BusinessPartnerPortalPaginatePurchaseInvoicePositionsResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePurchaseInvoicePositionsResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a businessPartnerPortalMockPurchaseInvoicePositionData', async () => {
      jest.spyOn(handler, 'main').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: 5,
              count: 5,
              rows: businessPartnerPortalMockPurchaseInvoicePositionData,
            }),
          ),
      );
      expect(await resolver.main()).toStrictEqual({
        total: 5,
        count: 5,
        rows: businessPartnerPortalMockPurchaseInvoicePositionData,
      });
    });
  });
});
