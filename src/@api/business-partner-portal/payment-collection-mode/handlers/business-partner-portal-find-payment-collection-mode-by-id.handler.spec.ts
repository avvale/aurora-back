/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { BusinessPartnerPortalFindPaymentCollectionModeByIdHandler } from '@api/business-partner-portal/payment-collection-mode';
import { businessPartnerPortalMockPaymentCollectionModeData } from '@app/business-partner-portal/payment-collection-mode';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPaymentCollectionModeByIdHandler', () => {
  let handler: BusinessPartnerPortalFindPaymentCollectionModeByIdHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalFindPaymentCollectionModeByIdHandler,
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
      module.get<BusinessPartnerPortalFindPaymentCollectionModeByIdHandler>(
        BusinessPartnerPortalFindPaymentCollectionModeByIdHandler,
      );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalFindPaymentCollectionModeByIdHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPaymentCollectionModeByIdHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return an paymentCollectionMode by id', async () => {
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
          businessPartnerPortalMockPaymentCollectionModeData[0].id,
          {},
          'Europe/Madrid',
        ),
      ).toBe(businessPartnerPortalMockPaymentCollectionModeData[0]);
    });
  });
});
