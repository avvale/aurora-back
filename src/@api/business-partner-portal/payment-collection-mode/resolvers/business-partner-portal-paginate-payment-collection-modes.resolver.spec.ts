/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginatePaymentCollectionModesHandler,
  BusinessPartnerPortalPaginatePaymentCollectionModesResolver,
} from '@api/business-partner-portal/payment-collection-mode';
import { businessPartnerPortalMockPaymentCollectionModeData } from '@app/business-partner-portal/payment-collection-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePaymentCollectionModesResolver', () => {
  let resolver: BusinessPartnerPortalPaginatePaymentCollectionModesResolver;
  let handler: BusinessPartnerPortalPaginatePaymentCollectionModesHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalPaginatePaymentCollectionModesResolver,
        {
          provide: BusinessPartnerPortalPaginatePaymentCollectionModesHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalPaginatePaymentCollectionModesResolver>(
        BusinessPartnerPortalPaginatePaymentCollectionModesResolver,
      );
    handler =
      module.get<BusinessPartnerPortalPaginatePaymentCollectionModesHandler>(
        BusinessPartnerPortalPaginatePaymentCollectionModesHandler,
      );
  });

  test('BusinessPartnerPortalPaginatePaymentCollectionModesResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePaymentCollectionModesResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a businessPartnerPortalMockPaymentCollectionModeData', async () => {
      jest.spyOn(handler, 'main').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: 5,
              count: 5,
              rows: businessPartnerPortalMockPaymentCollectionModeData,
            }),
          ),
      );
      expect(await resolver.main()).toStrictEqual({
        total: 5,
        count: 5,
        rows: businessPartnerPortalMockPaymentCollectionModeData,
      });
    });
  });
});
