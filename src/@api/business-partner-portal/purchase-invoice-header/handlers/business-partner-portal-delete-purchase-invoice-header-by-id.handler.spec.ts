/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdHandler } from '@api/business-partner-portal/purchase-invoice-header';
import { businessPartnerPortalMockPurchaseInvoiceHeaderData } from '@app/business-partner-portal/purchase-invoice-header';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdController', () => {
  let handler: BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdHandler,
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
      module.get<BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdHandler>(
        BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdHandler,
      );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return an purchaseInvoiceHeader deleted', async () => {
      jest
        .spyOn(queryBus, 'ask')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPurchaseInvoiceHeaderData[0]),
            ),
        );
      expect(
        await handler.main(
          businessPartnerPortalMockPurchaseInvoiceHeaderData[0].id,
          {},
          'Europe/Madrid',
        ),
      ).toBe(businessPartnerPortalMockPurchaseInvoiceHeaderData[0]);
    });
  });
});
