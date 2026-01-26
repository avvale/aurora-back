/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPaymentCollectionModeHandler,
  BusinessPartnerPortalFindPaymentCollectionModeResolver,
} from '@api/business-partner-portal/payment-collection-mode';
import { businessPartnerPortalMockPaymentCollectionModeData } from '@app/business-partner-portal/payment-collection-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPaymentCollectionModeResolver', () => {
  let resolver: BusinessPartnerPortalFindPaymentCollectionModeResolver;
  let handler: BusinessPartnerPortalFindPaymentCollectionModeHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalFindPaymentCollectionModeResolver,
        {
          provide: BusinessPartnerPortalFindPaymentCollectionModeHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalFindPaymentCollectionModeResolver>(
        BusinessPartnerPortalFindPaymentCollectionModeResolver,
      );
    handler = module.get<BusinessPartnerPortalFindPaymentCollectionModeHandler>(
      BusinessPartnerPortalFindPaymentCollectionModeHandler,
    );
  });

  test('BusinessPartnerPortalFindPaymentCollectionModeResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPaymentCollectionModeResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a paymentCollectionMode', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPaymentCollectionModeData[0]),
            ),
        );
      expect(await resolver.main()).toBe(
        businessPartnerPortalMockPaymentCollectionModeData[0],
      );
    });
  });
});
