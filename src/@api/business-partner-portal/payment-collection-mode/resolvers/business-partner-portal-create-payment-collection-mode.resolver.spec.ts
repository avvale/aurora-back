/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePaymentCollectionModeHandler,
  BusinessPartnerPortalCreatePaymentCollectionModeResolver,
} from '@api/business-partner-portal/payment-collection-mode';
import { BusinessPartnerPortalCreatePaymentCollectionModeInput } from '@api/graphql';
import { businessPartnerPortalMockPaymentCollectionModeData } from '@app/business-partner-portal/payment-collection-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreatePaymentCollectionModeResolver', () => {
  let resolver: BusinessPartnerPortalCreatePaymentCollectionModeResolver;
  let handler: BusinessPartnerPortalCreatePaymentCollectionModeHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalCreatePaymentCollectionModeResolver,
        {
          provide: BusinessPartnerPortalCreatePaymentCollectionModeHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalCreatePaymentCollectionModeResolver>(
        BusinessPartnerPortalCreatePaymentCollectionModeResolver,
      );
    handler =
      module.get<BusinessPartnerPortalCreatePaymentCollectionModeHandler>(
        BusinessPartnerPortalCreatePaymentCollectionModeHandler,
      );
  });

  test('BusinessPartnerPortalCreatePaymentCollectionModeResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreatePaymentCollectionModeResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an paymentCollectionMode created', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPaymentCollectionModeData[0]),
            ),
        );
      expect(
        await resolver.main(
          <BusinessPartnerPortalCreatePaymentCollectionModeInput>(
            businessPartnerPortalMockPaymentCollectionModeData[0]
          ),
        ),
      ).toBe(businessPartnerPortalMockPaymentCollectionModeData[0]);
    });
  });
});
