/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { BusinessPartnerPortalPaginatePaymentCollectionModesHandler } from '@api/business-partner-portal/payment-collection-mode';
import { businessPartnerPortalMockPaymentCollectionModeData } from '@app/business-partner-portal/payment-collection-mode';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePaymentCollectionModesHandler', () => {
  let handler: BusinessPartnerPortalPaginatePaymentCollectionModesHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalPaginatePaymentCollectionModesHandler,
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
      module.get<BusinessPartnerPortalPaginatePaymentCollectionModesHandler>(
        BusinessPartnerPortalPaginatePaymentCollectionModesHandler,
      );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalPaginatePaymentCollectionModesHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePaymentCollectionModesHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a paymentCollectionModes', async () => {
      jest.spyOn(queryBus, 'ask').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: businessPartnerPortalMockPaymentCollectionModeData.length,
              count: businessPartnerPortalMockPaymentCollectionModeData.length,
              rows: businessPartnerPortalMockPaymentCollectionModeData,
            }),
          ),
      );
      expect(await handler.main({}, {})).toEqual({
        total: businessPartnerPortalMockPaymentCollectionModeData.length,
        count: businessPartnerPortalMockPaymentCollectionModeData.length,
        rows: businessPartnerPortalMockPaymentCollectionModeData,
      });
    });
  });
});
