/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPaymentCollectionModeController,
  BusinessPartnerPortalFindPaymentCollectionModeHandler,
} from '@api/business-partner-portal/payment-collection-mode';
import { businessPartnerPortalMockPaymentCollectionModeData } from '@app/business-partner-portal/payment-collection-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPaymentCollectionModeController', () => {
  let controller: BusinessPartnerPortalFindPaymentCollectionModeController;
  let handler: BusinessPartnerPortalFindPaymentCollectionModeHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalFindPaymentCollectionModeController],
      providers: [
        {
          provide: BusinessPartnerPortalFindPaymentCollectionModeHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalFindPaymentCollectionModeController>(
        BusinessPartnerPortalFindPaymentCollectionModeController,
      );
    handler = module.get<BusinessPartnerPortalFindPaymentCollectionModeHandler>(
      BusinessPartnerPortalFindPaymentCollectionModeHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPaymentCollectionModeController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a paymentCollectionMode', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPaymentCollectionModeData[0]),
            ),
        );
      expect(await controller.main()).toBe(
        businessPartnerPortalMockPaymentCollectionModeData[0],
      );
    });
  });
});
