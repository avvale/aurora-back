/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalUpdatePaymentModeByIdController,
  BusinessPartnerPortalUpdatePaymentModeByIdHandler,
} from '@api/business-partner-portal/payment-mode';
import { businessPartnerPortalMockPaymentModeData } from '@app/business-partner-portal/payment-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdatePaymentModeByIdController', () => {
  let controller: BusinessPartnerPortalUpdatePaymentModeByIdController;
  let handler: BusinessPartnerPortalUpdatePaymentModeByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalUpdatePaymentModeByIdController],
      providers: [
        {
          provide: BusinessPartnerPortalUpdatePaymentModeByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalUpdatePaymentModeByIdController>(
        BusinessPartnerPortalUpdatePaymentModeByIdController,
      );
    handler = module.get<BusinessPartnerPortalUpdatePaymentModeByIdHandler>(
      BusinessPartnerPortalUpdatePaymentModeByIdHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdatePaymentModeByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a paymentMode updated', async () => {
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
