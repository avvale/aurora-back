/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { BusinessPartnerPortalGetPaymentCollectionModesHandler } from '@api/business-partner-portal/payment-collection-mode';
import { businessPartnerPortalMockPaymentCollectionModeData } from '@app/business-partner-portal/payment-collection-mode';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetPaymentCollectionModesHandler', () => {
  let handler: BusinessPartnerPortalGetPaymentCollectionModesHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalGetPaymentCollectionModesHandler,
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

    handler = module.get<BusinessPartnerPortalGetPaymentCollectionModesHandler>(
      BusinessPartnerPortalGetPaymentCollectionModesHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalGetPaymentCollectionModesHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetPaymentCollectionModesHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a businessPartnerPortalMockPaymentCollectionModeData', async () => {
      jest
        .spyOn(queryBus, 'ask')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPaymentCollectionModeData),
            ),
        );
      expect(await handler.main({}, {}, 'Europe/Madrid')).toBe(
        businessPartnerPortalMockPaymentCollectionModeData,
      );
    });
  });
});
