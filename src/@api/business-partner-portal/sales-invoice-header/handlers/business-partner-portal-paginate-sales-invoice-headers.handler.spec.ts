/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalPaginateSalesInvoiceHeadersHandler } from '@api/business-partner-portal/sales-invoice-header';
import { businessPartnerPortalMockSalesInvoiceHeaderData } from '@app/business-partner-portal/sales-invoice-header';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginateSalesInvoiceHeadersHandler', () => {
  let handler: BusinessPartnerPortalPaginateSalesInvoiceHeadersHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalPaginateSalesInvoiceHeadersHandler,
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
      module.get<BusinessPartnerPortalPaginateSalesInvoiceHeadersHandler>(
        BusinessPartnerPortalPaginateSalesInvoiceHeadersHandler,
      );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalPaginateSalesInvoiceHeadersHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginateSalesInvoiceHeadersHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a salesInvoiceHeaders', async () => {
      jest.spyOn(queryBus, 'ask').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: businessPartnerPortalMockSalesInvoiceHeaderData.length,
              count: businessPartnerPortalMockSalesInvoiceHeaderData.length,
              rows: businessPartnerPortalMockSalesInvoiceHeaderData,
            }),
          ),
      );
      expect(await handler.main({}, {})).toEqual({
        total: businessPartnerPortalMockSalesInvoiceHeaderData.length,
        count: businessPartnerPortalMockSalesInvoiceHeaderData.length,
        rows: businessPartnerPortalMockSalesInvoiceHeaderData,
      });
    });
  });
});
