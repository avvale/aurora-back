/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePaymentCollectionModeController,
  BusinessPartnerPortalCreatePaymentCollectionModeHandler,
} from '@api/business-partner-portal/payment-collection-mode';
import { businessPartnerPortalMockPaymentCollectionModeData } from '@app/business-partner-portal/payment-collection-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreatePaymentCollectionModeController', () => {
  let controller: BusinessPartnerPortalCreatePaymentCollectionModeController;
  let handler: BusinessPartnerPortalCreatePaymentCollectionModeHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalCreatePaymentCollectionModeController],
      providers: [
        {
          provide: BusinessPartnerPortalCreatePaymentCollectionModeHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalCreatePaymentCollectionModeController>(
        BusinessPartnerPortalCreatePaymentCollectionModeController,
      );
    handler =
      module.get<BusinessPartnerPortalCreatePaymentCollectionModeHandler>(
        BusinessPartnerPortalCreatePaymentCollectionModeHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreatePaymentCollectionModeController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an paymentCollectionMode created', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPaymentCollectionModeData[0]),
            ),
        );
      expect(
        await controller.main(
          businessPartnerPortalMockPaymentCollectionModeData[0],
        ),
      ).toBe(businessPartnerPortalMockPaymentCollectionModeData[0]);
    });
  });
});
