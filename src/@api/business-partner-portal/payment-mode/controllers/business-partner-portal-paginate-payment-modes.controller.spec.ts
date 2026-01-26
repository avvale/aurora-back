/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginatePaymentModesController,
  BusinessPartnerPortalPaginatePaymentModesHandler,
} from '@api/business-partner-portal/payment-mode';
import { businessPartnerPortalMockPaymentModeData } from '@app/business-partner-portal/payment-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePaymentModesController', () => {
  let controller: BusinessPartnerPortalPaginatePaymentModesController;
  let handler: BusinessPartnerPortalPaginatePaymentModesHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalPaginatePaymentModesController],
      providers: [
        {
          provide: BusinessPartnerPortalPaginatePaymentModesHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalPaginatePaymentModesController>(
        BusinessPartnerPortalPaginatePaymentModesController,
      );
    handler = module.get<BusinessPartnerPortalPaginatePaymentModesHandler>(
      BusinessPartnerPortalPaginatePaymentModesHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePaymentModesController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a businessPartnerPortalMockPaymentModeData', async () => {
      jest.spyOn(handler, 'main').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: 5,
              count: 5,
              rows: businessPartnerPortalMockPaymentModeData,
            }),
          ),
      );
      expect(await controller.main()).toStrictEqual({
        total: 5,
        count: 5,
        rows: businessPartnerPortalMockPaymentModeData,
      });
    });
  });
});
