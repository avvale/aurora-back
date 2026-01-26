/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalFindPurchaseInvoiceHeaderHandler } from '@api/business-partner-portal/purchase-invoice-header';
import { businessPartnerPortalMockPurchaseInvoiceHeaderData } from '@app/business-partner-portal/purchase-invoice-header';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPurchaseInvoiceHeaderHandler', () => {
  let handler: BusinessPartnerPortalFindPurchaseInvoiceHeaderHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalFindPurchaseInvoiceHeaderHandler,
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

    handler = module.get<BusinessPartnerPortalFindPurchaseInvoiceHeaderHandler>(
      BusinessPartnerPortalFindPurchaseInvoiceHeaderHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalFindPurchaseInvoiceHeaderHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPurchaseInvoiceHeaderHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a purchaseInvoiceHeader', async () => {
      jest
        .spyOn(queryBus, 'ask')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPurchaseInvoiceHeaderData[0]),
            ),
        );
      expect(await handler.main({}, {}, 'Europe/Madrid')).toBe(
        businessPartnerPortalMockPurchaseInvoiceHeaderData[0],
      );
    });
  });
});
