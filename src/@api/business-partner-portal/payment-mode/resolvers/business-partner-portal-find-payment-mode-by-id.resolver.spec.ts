/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPaymentModeByIdHandler,
  BusinessPartnerPortalFindPaymentModeByIdResolver,
} from '@api/business-partner-portal/payment-mode';
import { businessPartnerPortalMockPaymentModeData } from '@app/business-partner-portal/payment-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPaymentModeByIdResolver', () => {
  let resolver: BusinessPartnerPortalFindPaymentModeByIdResolver;
  let handler: BusinessPartnerPortalFindPaymentModeByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalFindPaymentModeByIdResolver,
        {
          provide: BusinessPartnerPortalFindPaymentModeByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<BusinessPartnerPortalFindPaymentModeByIdResolver>(
      BusinessPartnerPortalFindPaymentModeByIdResolver,
    );
    handler = module.get<BusinessPartnerPortalFindPaymentModeByIdHandler>(
      BusinessPartnerPortalFindPaymentModeByIdHandler,
    );
  });

  test('BusinessPartnerPortalFindPaymentModeByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPaymentModeByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an paymentMode by id', async () => {
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
