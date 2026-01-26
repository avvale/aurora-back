/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdHandler } from '@api/business-partner-portal/sales-invoice-header';
import { BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdInput } from '@api/graphql';
import { businessPartnerPortalMockSalesInvoiceHeaderData } from '@app/business-partner-portal/sales-invoice-header';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdHandler', () => {
  let handler: BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdHandler,
        {
          provide: IQueryBus,
          useValue: {
            ask: () => {
              /**/
            },
          },
        },
        {
          provide: ICommandBus,
          useValue: {
            dispatch: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    handler =
      module.get<BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdHandler>(
        BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdHandler,
      );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a salesInvoiceHeader updated', async () => {
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
          <BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdInput>(
            businessPartnerPortalMockSalesInvoiceHeaderData[0]
          ),
          {},
          'Europe/Madrid',
        ),
      ).toBe(businessPartnerPortalMockSalesInvoiceHeaderData[0]);
    });
  });
});
