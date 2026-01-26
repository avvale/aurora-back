/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPaymentCollectionModesHandler,
  BusinessPartnerPortalGetPaymentCollectionModesResolver,
} from '@api/business-partner-portal/payment-collection-mode';
import { businessPartnerPortalMockPaymentCollectionModeData } from '@app/business-partner-portal/payment-collection-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetPaymentCollectionModesResolver', () => {
  let resolver: BusinessPartnerPortalGetPaymentCollectionModesResolver;
  let handler: BusinessPartnerPortalGetPaymentCollectionModesHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalGetPaymentCollectionModesResolver,
        {
          provide: BusinessPartnerPortalGetPaymentCollectionModesHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalGetPaymentCollectionModesResolver>(
        BusinessPartnerPortalGetPaymentCollectionModesResolver,
      );
    handler = module.get<BusinessPartnerPortalGetPaymentCollectionModesHandler>(
      BusinessPartnerPortalGetPaymentCollectionModesHandler,
    );
  });

  test('BusinessPartnerPortalGetPaymentCollectionModesResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetPaymentCollectionModesResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a businessPartnerPortalMockPaymentCollectionModeData', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPaymentCollectionModeData),
            ),
        );
      expect(await resolver.main()).toBe(
        businessPartnerPortalMockPaymentCollectionModeData,
      );
    });
  });
});
