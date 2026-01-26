/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalUpdatePaymentCollectionModeByIdHandler,
  BusinessPartnerPortalUpdatePaymentCollectionModeByIdResolver,
} from '@api/business-partner-portal/payment-collection-mode';
import { BusinessPartnerPortalUpdatePaymentCollectionModeByIdInput } from '@api/graphql';
import { businessPartnerPortalMockPaymentCollectionModeData } from '@app/business-partner-portal/payment-collection-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdatePaymentCollectionModeByIdResolver', () => {
  let resolver: BusinessPartnerPortalUpdatePaymentCollectionModeByIdResolver;
  let handler: BusinessPartnerPortalUpdatePaymentCollectionModeByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalUpdatePaymentCollectionModeByIdResolver,
        {
          provide: BusinessPartnerPortalUpdatePaymentCollectionModeByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalUpdatePaymentCollectionModeByIdResolver>(
        BusinessPartnerPortalUpdatePaymentCollectionModeByIdResolver,
      );
    handler =
      module.get<BusinessPartnerPortalUpdatePaymentCollectionModeByIdHandler>(
        BusinessPartnerPortalUpdatePaymentCollectionModeByIdHandler,
      );
  });

  test('BusinessPartnerPortalUpdatePaymentCollectionModeByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdatePaymentCollectionModeByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a paymentCollectionMode by id updated', async () => {
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
          <BusinessPartnerPortalUpdatePaymentCollectionModeByIdInput>(
            businessPartnerPortalMockPaymentCollectionModeData[0]
          ),
        ),
      ).toBe(businessPartnerPortalMockPaymentCollectionModeData[0]);
    });
  });
});
