/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginatePaymentModesHandler,
  BusinessPartnerPortalPaginatePaymentModesResolver,
} from '@api/business-partner-portal/payment-mode';
import { businessPartnerPortalMockPaymentModeData } from '@app/business-partner-portal/payment-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePaymentModesResolver', () => {
  let resolver: BusinessPartnerPortalPaginatePaymentModesResolver;
  let handler: BusinessPartnerPortalPaginatePaymentModesHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalPaginatePaymentModesResolver,
        {
          provide: BusinessPartnerPortalPaginatePaymentModesHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<BusinessPartnerPortalPaginatePaymentModesResolver>(
      BusinessPartnerPortalPaginatePaymentModesResolver,
    );
    handler = module.get<BusinessPartnerPortalPaginatePaymentModesHandler>(
      BusinessPartnerPortalPaginatePaymentModesHandler,
    );
  });

  test('BusinessPartnerPortalPaginatePaymentModesResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePaymentModesResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a businessPartnerPortalMockPaymentModeData', async () => {
      jest.spyOn(handler, 'main').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: 5,
              count: 5,
              rows: businessPartnerPortalMockPaymentModeData,
            }),
          ),
      );
      expect(await resolver.main()).toStrictEqual({
        total: 5,
        count: 5,
        rows: businessPartnerPortalMockPaymentModeData,
      });
    });
  });
});
