/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPaymentModesController,
  BusinessPartnerPortalGetPaymentModesHandler,
} from '@api/business-partner-portal/payment-mode';
import { businessPartnerPortalMockPaymentModeData } from '@app/business-partner-portal/payment-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetPaymentModesController', () => {
  let controller: BusinessPartnerPortalGetPaymentModesController;
  let handler: BusinessPartnerPortalGetPaymentModesHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalGetPaymentModesController],
      providers: [
        {
          provide: BusinessPartnerPortalGetPaymentModesHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller = module.get<BusinessPartnerPortalGetPaymentModesController>(
      BusinessPartnerPortalGetPaymentModesController,
    );
    handler = module.get<BusinessPartnerPortalGetPaymentModesHandler>(
      BusinessPartnerPortalGetPaymentModesHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetPaymentModesController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a businessPartnerPortalMockPaymentModeData', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPaymentModeData),
            ),
        );
      expect(await controller.main()).toBe(
        businessPartnerPortalMockPaymentModeData,
      );
    });
  });
});
