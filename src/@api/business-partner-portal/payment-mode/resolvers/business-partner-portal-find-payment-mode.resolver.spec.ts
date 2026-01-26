/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPaymentModeHandler,
  BusinessPartnerPortalFindPaymentModeResolver,
} from '@api/business-partner-portal/payment-mode';
import { businessPartnerPortalMockPaymentModeData } from '@app/business-partner-portal/payment-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPaymentModeResolver', () => {
  let resolver: BusinessPartnerPortalFindPaymentModeResolver;
  let handler: BusinessPartnerPortalFindPaymentModeHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalFindPaymentModeResolver,
        {
          provide: BusinessPartnerPortalFindPaymentModeHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<BusinessPartnerPortalFindPaymentModeResolver>(
      BusinessPartnerPortalFindPaymentModeResolver,
    );
    handler = module.get<BusinessPartnerPortalFindPaymentModeHandler>(
      BusinessPartnerPortalFindPaymentModeHandler,
    );
  });

  test('BusinessPartnerPortalFindPaymentModeResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPaymentModeResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a paymentMode', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPaymentModeData[0]),
            ),
        );
      expect(await resolver.main()).toBe(
        businessPartnerPortalMockPaymentModeData[0],
      );
    });
  });
});
