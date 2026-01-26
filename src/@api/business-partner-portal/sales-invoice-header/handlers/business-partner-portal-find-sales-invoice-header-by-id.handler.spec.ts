/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalFindSalesInvoiceHeaderByIdHandler } from '@api/business-partner-portal/sales-invoice-header';
import { businessPartnerPortalMockSalesInvoiceHeaderData } from '@app/business-partner-portal/sales-invoice-header';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindSalesInvoiceHeaderByIdHandler', () => {
  let handler: BusinessPartnerPortalFindSalesInvoiceHeaderByIdHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalFindSalesInvoiceHeaderByIdHandler,
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
      module.get<BusinessPartnerPortalFindSalesInvoiceHeaderByIdHandler>(
        BusinessPartnerPortalFindSalesInvoiceHeaderByIdHandler,
      );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalFindSalesInvoiceHeaderByIdHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindSalesInvoiceHeaderByIdHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return an salesInvoiceHeader by id', async () => {
      jest
        .spyOn(queryBus, 'ask')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockSalesInvoiceHeaderData[0]),
            ),
        );
      expect(
        await handler.main(
          businessPartnerPortalMockSalesInvoiceHeaderData[0].id,
          {},
          'Europe/Madrid',
        ),
      ).toBe(businessPartnerPortalMockSalesInvoiceHeaderData[0]);
    });
  });
});
