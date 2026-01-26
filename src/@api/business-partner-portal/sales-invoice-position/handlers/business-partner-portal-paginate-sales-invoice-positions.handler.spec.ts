/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalPaginateSalesInvoicePositionsHandler } from '@api/business-partner-portal/sales-invoice-position';
import { businessPartnerPortalMockSalesInvoicePositionData } from '@app/business-partner-portal/sales-invoice-position';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginateSalesInvoicePositionsHandler', () => {
  let handler: BusinessPartnerPortalPaginateSalesInvoicePositionsHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalPaginateSalesInvoicePositionsHandler,
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
      module.get<BusinessPartnerPortalPaginateSalesInvoicePositionsHandler>(
        BusinessPartnerPortalPaginateSalesInvoicePositionsHandler,
      );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalPaginateSalesInvoicePositionsHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginateSalesInvoicePositionsHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a salesInvoicePositions', async () => {
      jest.spyOn(queryBus, 'ask').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: businessPartnerPortalMockSalesInvoicePositionData.length,
              count: businessPartnerPortalMockSalesInvoicePositionData.length,
              rows: businessPartnerPortalMockSalesInvoicePositionData,
            }),
          ),
      );
      expect(await handler.main({}, {})).toEqual({
        total: businessPartnerPortalMockSalesInvoicePositionData.length,
        count: businessPartnerPortalMockSalesInvoicePositionData.length,
        rows: businessPartnerPortalMockSalesInvoicePositionData,
      });
    });
  });
});
