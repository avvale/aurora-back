/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { BusinessPartnerPortalUpdatePaymentCollectionModeByIdHandler } from '@api/business-partner-portal/payment-collection-mode';
import { BusinessPartnerPortalUpdatePaymentCollectionModeByIdInput } from '@api/graphql';
import { businessPartnerPortalMockPaymentCollectionModeData } from '@app/business-partner-portal/payment-collection-mode';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdatePaymentCollectionModeByIdHandler', () => {
  let handler: BusinessPartnerPortalUpdatePaymentCollectionModeByIdHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalUpdatePaymentCollectionModeByIdHandler,
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
      module.get<BusinessPartnerPortalUpdatePaymentCollectionModeByIdHandler>(
        BusinessPartnerPortalUpdatePaymentCollectionModeByIdHandler,
      );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalUpdatePaymentCollectionModeByIdHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdatePaymentCollectionModeByIdHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a paymentCollectionMode updated', async () => {
      jest
        .spyOn(queryBus, 'ask')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPaymentCollectionModeData[0]),
            ),
        );
      expect(
        await handler.main(
          <BusinessPartnerPortalUpdatePaymentCollectionModeByIdInput>(
            businessPartnerPortalMockPaymentCollectionModeData[0]
          ),
          {},
          'Europe/Madrid',
        ),
      ).toBe(businessPartnerPortalMockPaymentCollectionModeData[0]);
    });
  });
});
