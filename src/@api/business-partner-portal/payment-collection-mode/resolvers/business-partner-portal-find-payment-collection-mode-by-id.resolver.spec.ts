/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPaymentCollectionModeByIdHandler,
  BusinessPartnerPortalFindPaymentCollectionModeByIdResolver,
} from '@api/business-partner-portal/payment-collection-mode';
import { businessPartnerPortalMockPaymentCollectionModeData } from '@app/business-partner-portal/payment-collection-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPaymentCollectionModeByIdResolver', () => {
  let resolver: BusinessPartnerPortalFindPaymentCollectionModeByIdResolver;
  let handler: BusinessPartnerPortalFindPaymentCollectionModeByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalFindPaymentCollectionModeByIdResolver,
        {
          provide: BusinessPartnerPortalFindPaymentCollectionModeByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalFindPaymentCollectionModeByIdResolver>(
        BusinessPartnerPortalFindPaymentCollectionModeByIdResolver,
      );
    handler =
      module.get<BusinessPartnerPortalFindPaymentCollectionModeByIdHandler>(
        BusinessPartnerPortalFindPaymentCollectionModeByIdHandler,
      );
  });

  test('BusinessPartnerPortalFindPaymentCollectionModeByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPaymentCollectionModeByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an paymentCollectionMode by id', async () => {
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
