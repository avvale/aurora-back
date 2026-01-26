/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalGetPurchaseInvoiceHeadersHandler } from '@api/business-partner-portal/purchase-invoice-header';
import { businessPartnerPortalMockPurchaseInvoiceHeaderData } from '@app/business-partner-portal/purchase-invoice-header';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetPurchaseInvoiceHeadersHandler', () => {
  let handler: BusinessPartnerPortalGetPurchaseInvoiceHeadersHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalGetPurchaseInvoiceHeadersHandler,
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

    handler = module.get<BusinessPartnerPortalGetPurchaseInvoiceHeadersHandler>(
      BusinessPartnerPortalGetPurchaseInvoiceHeadersHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalGetPurchaseInvoiceHeadersHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetPurchaseInvoiceHeadersHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a businessPartnerPortalMockPurchaseInvoiceHeaderData', async () => {
      jest
        .spyOn(queryBus, 'ask')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPurchaseInvoiceHeaderData),
            ),
        );
      expect(await handler.main({}, {}, 'Europe/Madrid')).toBe(
        businessPartnerPortalMockPurchaseInvoiceHeaderData,
      );
    });
  });
});
