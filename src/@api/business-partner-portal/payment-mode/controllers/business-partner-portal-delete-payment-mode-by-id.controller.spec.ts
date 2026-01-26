/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalDeletePaymentModeByIdController,
  BusinessPartnerPortalDeletePaymentModeByIdHandler,
} from '@api/business-partner-portal/payment-mode';
import { businessPartnerPortalMockPaymentModeData } from '@app/business-partner-portal/payment-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeletePaymentModeByIdController', () => {
  let controller: BusinessPartnerPortalDeletePaymentModeByIdController;
  let handler: BusinessPartnerPortalDeletePaymentModeByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalDeletePaymentModeByIdController],
      providers: [
        {
          provide: BusinessPartnerPortalDeletePaymentModeByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalDeletePaymentModeByIdController>(
        BusinessPartnerPortalDeletePaymentModeByIdController,
      );
    handler = module.get<BusinessPartnerPortalDeletePaymentModeByIdHandler>(
      BusinessPartnerPortalDeletePaymentModeByIdHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeletePaymentModeByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an paymentMode deleted', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPaymentModeData[0]),
            ),
        );
      expect(
        await controller.main(businessPartnerPortalMockPaymentModeData[0].id),
      ).toBe(businessPartnerPortalMockPaymentModeData[0]);
    });
  });
});
