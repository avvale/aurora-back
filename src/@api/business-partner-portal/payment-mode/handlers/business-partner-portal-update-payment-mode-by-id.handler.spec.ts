/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { BusinessPartnerPortalUpdatePaymentModeByIdHandler } from '@api/business-partner-portal/payment-mode';
import { BusinessPartnerPortalUpdatePaymentModeByIdInput } from '@api/graphql';
import { businessPartnerPortalMockPaymentModeData } from '@app/business-partner-portal/payment-mode';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdatePaymentModeByIdHandler', () => {
  let handler: BusinessPartnerPortalUpdatePaymentModeByIdHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalUpdatePaymentModeByIdHandler,
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

    handler = module.get<BusinessPartnerPortalUpdatePaymentModeByIdHandler>(
      BusinessPartnerPortalUpdatePaymentModeByIdHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalUpdatePaymentModeByIdHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdatePaymentModeByIdHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a paymentMode updated', async () => {
      jest
        .spyOn(queryBus, 'ask')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPaymentModeData[0]),
            ),
        );
      expect(
        await handler.main(
          <BusinessPartnerPortalUpdatePaymentModeByIdInput>(
            businessPartnerPortalMockPaymentModeData[0]
          ),
          {},
          'Europe/Madrid',
        ),
      ).toBe(businessPartnerPortalMockPaymentModeData[0]);
    });
  });
});
