/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdHandler } from '@api/business-partner-portal/purchase-invoice-header';
import { BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdInput } from '@api/graphql';
import { businessPartnerPortalMockPurchaseInvoiceHeaderData } from '@app/business-partner-portal/purchase-invoice-header';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdHandler', () => {
  let handler: BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdHandler,
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
      module.get<BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdHandler>(
        BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdHandler,
      );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a purchaseInvoiceHeader updated', async () => {
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
          <BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdInput>(
            businessPartnerPortalMockPurchaseInvoiceHeaderData[0]
          ),
          {},
          'Europe/Madrid',
        ),
      ).toBe(businessPartnerPortalMockPurchaseInvoiceHeaderData[0]);
    });
  });
});
