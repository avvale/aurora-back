/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPaymentModesHandler,
  BusinessPartnerPortalGetPaymentModesResolver,
} from '@api/business-partner-portal/payment-mode';
import { businessPartnerPortalMockPaymentModeData } from '@app/business-partner-portal/payment-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetPaymentModesResolver', () => {
  let resolver: BusinessPartnerPortalGetPaymentModesResolver;
  let handler: BusinessPartnerPortalGetPaymentModesHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalGetPaymentModesResolver,
        {
          provide: BusinessPartnerPortalGetPaymentModesHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<BusinessPartnerPortalGetPaymentModesResolver>(
      BusinessPartnerPortalGetPaymentModesResolver,
    );
    handler = module.get<BusinessPartnerPortalGetPaymentModesHandler>(
      BusinessPartnerPortalGetPaymentModesHandler,
    );
  });

  test('BusinessPartnerPortalGetPaymentModesResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetPaymentModesResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a businessPartnerPortalMockPaymentModeData', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPaymentModeData),
            ),
        );
      expect(await resolver.main()).toBe(
        businessPartnerPortalMockPaymentModeData,
      );
    });
  });
});
