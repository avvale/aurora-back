/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalPaginatePurchaseInvoicePositionsHandler } from '@api/business-partner-portal/purchase-invoice-position';
import { businessPartnerPortalMockPurchaseInvoicePositionData } from '@app/business-partner-portal/purchase-invoice-position';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePurchaseInvoicePositionsHandler', () => {
  let handler: BusinessPartnerPortalPaginatePurchaseInvoicePositionsHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalPaginatePurchaseInvoicePositionsHandler,
        {
          provide: IQueryBus,
          useValue: {
            ask: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    handler =
      module.get<BusinessPartnerPortalPaginatePurchaseInvoicePositionsHandler>(
        BusinessPartnerPortalPaginatePurchaseInvoicePositionsHandler,
      );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalPaginatePurchaseInvoicePositionsHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePurchaseInvoicePositionsHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a purchaseInvoicePositions', async () => {
      jest.spyOn(queryBus, 'ask').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total:
                businessPartnerPortalMockPurchaseInvoicePositionData.length,
              count:
                businessPartnerPortalMockPurchaseInvoicePositionData.length,
              rows: businessPartnerPortalMockPurchaseInvoicePositionData,
            }),
          ),
      );
      expect(await handler.main({}, {})).toEqual({
        total: businessPartnerPortalMockPurchaseInvoicePositionData.length,
        count: businessPartnerPortalMockPurchaseInvoicePositionData.length,
        rows: businessPartnerPortalMockPurchaseInvoicePositionData,
      });
    });
  });
});
