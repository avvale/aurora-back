/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalUpdatePaymentModeByIdHandler,
  BusinessPartnerPortalUpdatePaymentModeByIdResolver,
} from '@api/business-partner-portal/payment-mode';
import { BusinessPartnerPortalUpdatePaymentModeByIdInput } from '@api/graphql';
import { businessPartnerPortalMockPaymentModeData } from '@app/business-partner-portal/payment-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdatePaymentModeByIdResolver', () => {
  let resolver: BusinessPartnerPortalUpdatePaymentModeByIdResolver;
  let handler: BusinessPartnerPortalUpdatePaymentModeByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalUpdatePaymentModeByIdResolver,
        {
          provide: BusinessPartnerPortalUpdatePaymentModeByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<BusinessPartnerPortalUpdatePaymentModeByIdResolver>(
      BusinessPartnerPortalUpdatePaymentModeByIdResolver,
    );
    handler = module.get<BusinessPartnerPortalUpdatePaymentModeByIdHandler>(
      BusinessPartnerPortalUpdatePaymentModeByIdHandler,
    );
  });

  test('BusinessPartnerPortalUpdatePaymentModeByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdatePaymentModeByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a paymentMode by id updated', async () => {
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
          <BusinessPartnerPortalUpdatePaymentModeByIdInput>(
            businessPartnerPortalMockPaymentModeData[0]
          ),
        ),
      ).toBe(businessPartnerPortalMockPaymentModeData[0]);
    });
  });
});
