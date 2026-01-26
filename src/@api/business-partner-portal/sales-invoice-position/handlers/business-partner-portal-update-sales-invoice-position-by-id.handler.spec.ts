/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalUpdateSalesInvoicePositionByIdHandler } from '@api/business-partner-portal/sales-invoice-position';
import { BusinessPartnerPortalUpdateSalesInvoicePositionByIdInput } from '@api/graphql';
import { businessPartnerPortalMockSalesInvoicePositionData } from '@app/business-partner-portal/sales-invoice-position';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdateSalesInvoicePositionByIdHandler', () => {
  let handler: BusinessPartnerPortalUpdateSalesInvoicePositionByIdHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalUpdateSalesInvoicePositionByIdHandler,
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
      module.get<BusinessPartnerPortalUpdateSalesInvoicePositionByIdHandler>(
        BusinessPartnerPortalUpdateSalesInvoicePositionByIdHandler,
      );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalUpdateSalesInvoicePositionByIdHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdateSalesInvoicePositionByIdHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a salesInvoicePosition updated', async () => {
      jest
        .spyOn(queryBus, 'ask')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockSalesInvoicePositionData[0]),
            ),
        );
      expect(
        await handler.main(
          <BusinessPartnerPortalUpdateSalesInvoicePositionByIdInput>(
            businessPartnerPortalMockSalesInvoicePositionData[0]
          ),
          {},
          'Europe/Madrid',
        ),
      ).toBe(businessPartnerPortalMockSalesInvoicePositionData[0]);
    });
  });
});
