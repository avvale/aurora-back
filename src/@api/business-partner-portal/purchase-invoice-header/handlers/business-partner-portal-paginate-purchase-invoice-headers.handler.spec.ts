/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalPaginatePurchaseInvoiceHeadersHandler } from '@api/business-partner-portal/purchase-invoice-header';
import { businessPartnerPortalMockPurchaseInvoiceHeaderData } from '@app/business-partner-portal/purchase-invoice-header';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePurchaseInvoiceHeadersHandler', () => {
  let handler: BusinessPartnerPortalPaginatePurchaseInvoiceHeadersHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalPaginatePurchaseInvoiceHeadersHandler,
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
      module.get<BusinessPartnerPortalPaginatePurchaseInvoiceHeadersHandler>(
        BusinessPartnerPortalPaginatePurchaseInvoiceHeadersHandler,
      );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalPaginatePurchaseInvoiceHeadersHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePurchaseInvoiceHeadersHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a purchaseInvoiceHeaders', async () => {
      jest.spyOn(queryBus, 'ask').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: businessPartnerPortalMockPurchaseInvoiceHeaderData.length,
              count: businessPartnerPortalMockPurchaseInvoiceHeaderData.length,
              rows: businessPartnerPortalMockPurchaseInvoiceHeaderData,
            }),
          ),
      );
      expect(await handler.main({}, {})).toEqual({
        total: businessPartnerPortalMockPurchaseInvoiceHeaderData.length,
        count: businessPartnerPortalMockPurchaseInvoiceHeaderData.length,
        rows: businessPartnerPortalMockPurchaseInvoiceHeaderData,
      });
    });
  });
});
