/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalGetSalesInvoicePositionsHandler } from '@api/business-partner-portal/sales-invoice-position';
import { businessPartnerPortalMockSalesInvoicePositionData } from '@app/business-partner-portal/sales-invoice-position';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetSalesInvoicePositionsHandler', () => {
  let handler: BusinessPartnerPortalGetSalesInvoicePositionsHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalGetSalesInvoicePositionsHandler,
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

    handler = module.get<BusinessPartnerPortalGetSalesInvoicePositionsHandler>(
      BusinessPartnerPortalGetSalesInvoicePositionsHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalGetSalesInvoicePositionsHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetSalesInvoicePositionsHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a businessPartnerPortalMockSalesInvoicePositionData', async () => {
      jest
        .spyOn(queryBus, 'ask')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockSalesInvoicePositionData),
            ),
        );
      expect(await handler.main({}, {}, 'Europe/Madrid')).toBe(
        businessPartnerPortalMockSalesInvoicePositionData,
      );
    });
  });
});
