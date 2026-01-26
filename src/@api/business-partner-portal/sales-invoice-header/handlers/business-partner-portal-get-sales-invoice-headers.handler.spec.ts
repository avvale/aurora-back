/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalGetSalesInvoiceHeadersHandler } from '@api/business-partner-portal/sales-invoice-header';
import { businessPartnerPortalMockSalesInvoiceHeaderData } from '@app/business-partner-portal/sales-invoice-header';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetSalesInvoiceHeadersHandler', () => {
  let handler: BusinessPartnerPortalGetSalesInvoiceHeadersHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalGetSalesInvoiceHeadersHandler,
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

    handler = module.get<BusinessPartnerPortalGetSalesInvoiceHeadersHandler>(
      BusinessPartnerPortalGetSalesInvoiceHeadersHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalGetSalesInvoiceHeadersHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetSalesInvoiceHeadersHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a businessPartnerPortalMockSalesInvoiceHeaderData', async () => {
      jest
        .spyOn(queryBus, 'ask')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockSalesInvoiceHeaderData),
            ),
        );
      expect(await handler.main({}, {}, 'Europe/Madrid')).toBe(
        businessPartnerPortalMockSalesInvoiceHeaderData,
      );
    });
  });
});
