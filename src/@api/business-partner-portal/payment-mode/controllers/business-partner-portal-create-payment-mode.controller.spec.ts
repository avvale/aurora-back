/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePaymentModeController,
  BusinessPartnerPortalCreatePaymentModeHandler,
} from '@api/business-partner-portal/payment-mode';
import { businessPartnerPortalMockPaymentModeData } from '@app/business-partner-portal/payment-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreatePaymentModeController', () => {
  let controller: BusinessPartnerPortalCreatePaymentModeController;
  let handler: BusinessPartnerPortalCreatePaymentModeHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalCreatePaymentModeController],
      providers: [
        {
          provide: BusinessPartnerPortalCreatePaymentModeHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller = module.get<BusinessPartnerPortalCreatePaymentModeController>(
      BusinessPartnerPortalCreatePaymentModeController,
    );
    handler = module.get<BusinessPartnerPortalCreatePaymentModeHandler>(
      BusinessPartnerPortalCreatePaymentModeHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreatePaymentModeController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an paymentMode created', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPaymentModeData[0]),
            ),
        );
      expect(
        await controller.main(businessPartnerPortalMockPaymentModeData[0]),
      ).toBe(businessPartnerPortalMockPaymentModeData[0]);
    });
  });
});
