/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalDeletePaymentCollectionModeByIdHandler,
  BusinessPartnerPortalDeletePaymentCollectionModeByIdResolver,
} from '@api/business-partner-portal/payment-collection-mode';
import { businessPartnerPortalMockPaymentCollectionModeData } from '@app/business-partner-portal/payment-collection-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeletePaymentCollectionModeByIdResolver', () => {
  let resolver: BusinessPartnerPortalDeletePaymentCollectionModeByIdResolver;
  let handler: BusinessPartnerPortalDeletePaymentCollectionModeByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalDeletePaymentCollectionModeByIdResolver,
        {
          provide: BusinessPartnerPortalDeletePaymentCollectionModeByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalDeletePaymentCollectionModeByIdResolver>(
        BusinessPartnerPortalDeletePaymentCollectionModeByIdResolver,
      );
    handler =
      module.get<BusinessPartnerPortalDeletePaymentCollectionModeByIdHandler>(
        BusinessPartnerPortalDeletePaymentCollectionModeByIdHandler,
      );
  });

  test('BusinessPartnerPortalDeletePaymentCollectionModeByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeletePaymentCollectionModeByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an paymentCollectionMode deleted', async () => {
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
          businessPartnerPortalMockPaymentCollectionModeData[0].id,
        ),
      ).toBe(businessPartnerPortalMockPaymentCollectionModeData[0]);
    });
  });
});
