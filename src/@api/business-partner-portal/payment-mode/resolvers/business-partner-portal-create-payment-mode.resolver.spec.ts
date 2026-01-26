/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePaymentModeHandler,
  BusinessPartnerPortalCreatePaymentModeResolver,
} from '@api/business-partner-portal/payment-mode';
import { BusinessPartnerPortalCreatePaymentModeInput } from '@api/graphql';
import { businessPartnerPortalMockPaymentModeData } from '@app/business-partner-portal/payment-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreatePaymentModeResolver', () => {
  let resolver: BusinessPartnerPortalCreatePaymentModeResolver;
  let handler: BusinessPartnerPortalCreatePaymentModeHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalCreatePaymentModeResolver,
        {
          provide: BusinessPartnerPortalCreatePaymentModeHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<BusinessPartnerPortalCreatePaymentModeResolver>(
      BusinessPartnerPortalCreatePaymentModeResolver,
    );
    handler = module.get<BusinessPartnerPortalCreatePaymentModeHandler>(
      BusinessPartnerPortalCreatePaymentModeHandler,
    );
  });

  test('BusinessPartnerPortalCreatePaymentModeResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreatePaymentModeResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an paymentMode created', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPaymentModeData[0]),
            ),
        );
      expect(
        await resolver.main(
          <BusinessPartnerPortalCreatePaymentModeInput>(
            businessPartnerPortalMockPaymentModeData[0]
          ),
        ),
      ).toBe(businessPartnerPortalMockPaymentModeData[0]);
    });
  });
});
