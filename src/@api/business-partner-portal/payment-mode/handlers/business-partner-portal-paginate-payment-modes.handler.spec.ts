/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { BusinessPartnerPortalPaginatePaymentModesHandler } from '@api/business-partner-portal/payment-mode';
import { businessPartnerPortalMockPaymentModeData } from '@app/business-partner-portal/payment-mode';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePaymentModesHandler', () => {
  let handler: BusinessPartnerPortalPaginatePaymentModesHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalPaginatePaymentModesHandler,
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

    handler = module.get<BusinessPartnerPortalPaginatePaymentModesHandler>(
      BusinessPartnerPortalPaginatePaymentModesHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalPaginatePaymentModesHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePaymentModesHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a paymentModes', async () => {
      jest.spyOn(queryBus, 'ask').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: businessPartnerPortalMockPaymentModeData.length,
              count: businessPartnerPortalMockPaymentModeData.length,
              rows: businessPartnerPortalMockPaymentModeData,
            }),
          ),
      );
      expect(await handler.main({}, {})).toEqual({
        total: businessPartnerPortalMockPaymentModeData.length,
        count: businessPartnerPortalMockPaymentModeData.length,
        rows: businessPartnerPortalMockPaymentModeData,
      });
    });
  });
});
