/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdHandler } from '@api/business-partner-portal/purchase-invoice-position';
import { BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdInput } from '@api/graphql';
import { businessPartnerPortalMockPurchaseInvoicePositionData } from '@app/business-partner-portal/purchase-invoice-position';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdHandler', () => {
  let handler: BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdHandler,
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
      module.get<BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdHandler>(
        BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdHandler,
      );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a purchaseInvoicePosition updated', async () => {
      jest
        .spyOn(queryBus, 'ask')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPurchaseInvoicePositionData[0]),
            ),
        );
      expect(
        await handler.main(
          <BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdInput>(
            businessPartnerPortalMockPurchaseInvoicePositionData[0]
          ),
          {},
          'Europe/Madrid',
        ),
      ).toBe(businessPartnerPortalMockPurchaseInvoicePositionData[0]);
    });
  });
});
