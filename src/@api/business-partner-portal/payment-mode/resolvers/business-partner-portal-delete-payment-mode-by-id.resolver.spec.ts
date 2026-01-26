/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalDeletePaymentModeByIdHandler,
  BusinessPartnerPortalDeletePaymentModeByIdResolver,
} from '@api/business-partner-portal/payment-mode';
import { businessPartnerPortalMockPaymentModeData } from '@app/business-partner-portal/payment-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeletePaymentModeByIdResolver', () => {
  let resolver: BusinessPartnerPortalDeletePaymentModeByIdResolver;
  let handler: BusinessPartnerPortalDeletePaymentModeByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalDeletePaymentModeByIdResolver,
        {
          provide: BusinessPartnerPortalDeletePaymentModeByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<BusinessPartnerPortalDeletePaymentModeByIdResolver>(
      BusinessPartnerPortalDeletePaymentModeByIdResolver,
    );
    handler = module.get<BusinessPartnerPortalDeletePaymentModeByIdHandler>(
      BusinessPartnerPortalDeletePaymentModeByIdHandler,
    );
  });

  test('BusinessPartnerPortalDeletePaymentModeByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeletePaymentModeByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an paymentMode deleted', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPaymentModeData[0]),
            ),
        );
      expect(
        await resolver.main(businessPartnerPortalMockPaymentModeData[0].id),
      ).toBe(businessPartnerPortalMockPaymentModeData[0]);
    });
  });
});
