/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdHandler } from '@api/business-partner-portal/purchase-invoice-header';
import { businessPartnerPortalMockPurchaseInvoiceHeaderData } from '@app/business-partner-portal/purchase-invoice-header';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdHandler', () => {
  let handler: BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdHandler,
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
      module.get<BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdHandler>(
        BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdHandler,
      );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return an purchaseInvoiceHeader by id', async () => {
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
