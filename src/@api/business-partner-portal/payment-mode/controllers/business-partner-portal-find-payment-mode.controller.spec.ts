/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPaymentModeController,
  BusinessPartnerPortalFindPaymentModeHandler,
} from '@api/business-partner-portal/payment-mode';
import { businessPartnerPortalMockPaymentModeData } from '@app/business-partner-portal/payment-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPaymentModeController', () => {
  let controller: BusinessPartnerPortalFindPaymentModeController;
  let handler: BusinessPartnerPortalFindPaymentModeHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalFindPaymentModeController],
      providers: [
        {
          provide: BusinessPartnerPortalFindPaymentModeHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller = module.get<BusinessPartnerPortalFindPaymentModeController>(
      BusinessPartnerPortalFindPaymentModeController,
    );
    handler = module.get<BusinessPartnerPortalFindPaymentModeHandler>(
      BusinessPartnerPortalFindPaymentModeHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPaymentModeController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a paymentMode', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPaymentModeData[0]),
            ),
        );
      expect(await controller.main()).toBe(
        businessPartnerPortalMockPaymentModeData[0],
      );
    });
  });
});
