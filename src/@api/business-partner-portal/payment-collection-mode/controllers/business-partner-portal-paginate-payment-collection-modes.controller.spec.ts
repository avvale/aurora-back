/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginatePaymentCollectionModesController,
  BusinessPartnerPortalPaginatePaymentCollectionModesHandler,
} from '@api/business-partner-portal/payment-collection-mode';
import { businessPartnerPortalMockPaymentCollectionModeData } from '@app/business-partner-portal/payment-collection-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePaymentCollectionModesController', () => {
  let controller: BusinessPartnerPortalPaginatePaymentCollectionModesController;
  let handler: BusinessPartnerPortalPaginatePaymentCollectionModesHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [
        BusinessPartnerPortalPaginatePaymentCollectionModesController,
      ],
      providers: [
        {
          provide: BusinessPartnerPortalPaginatePaymentCollectionModesHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalPaginatePaymentCollectionModesController>(
        BusinessPartnerPortalPaginatePaymentCollectionModesController,
      );
    handler =
      module.get<BusinessPartnerPortalPaginatePaymentCollectionModesHandler>(
        BusinessPartnerPortalPaginatePaymentCollectionModesHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePaymentCollectionModesController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a businessPartnerPortalMockPaymentCollectionModeData', async () => {
      jest.spyOn(handler, 'main').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: 5,
              count: 5,
              rows: businessPartnerPortalMockPaymentCollectionModeData,
            }),
          ),
      );
      expect(await controller.main()).toStrictEqual({
        total: 5,
        count: 5,
        rows: businessPartnerPortalMockPaymentCollectionModeData,
      });
    });
  });
});
