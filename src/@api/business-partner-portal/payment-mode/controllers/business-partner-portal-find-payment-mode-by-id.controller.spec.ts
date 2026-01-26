/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPaymentModeByIdController,
  BusinessPartnerPortalFindPaymentModeByIdHandler,
} from '@api/business-partner-portal/payment-mode';
import { businessPartnerPortalMockPaymentModeData } from '@app/business-partner-portal/payment-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPaymentModeByIdController', () => {
  let controller: BusinessPartnerPortalFindPaymentModeByIdController;
  let handler: BusinessPartnerPortalFindPaymentModeByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalFindPaymentModeByIdController],
      providers: [
        {
          provide: BusinessPartnerPortalFindPaymentModeByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller = module.get<BusinessPartnerPortalFindPaymentModeByIdController>(
      BusinessPartnerPortalFindPaymentModeByIdController,
    );
    handler = module.get<BusinessPartnerPortalFindPaymentModeByIdHandler>(
      BusinessPartnerPortalFindPaymentModeByIdHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPaymentModeByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an paymentMode by id', async () => {
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
