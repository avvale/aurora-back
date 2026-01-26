/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPaymentCollectionModesController,
  BusinessPartnerPortalGetPaymentCollectionModesHandler,
} from '@api/business-partner-portal/payment-collection-mode';
import { businessPartnerPortalMockPaymentCollectionModeData } from '@app/business-partner-portal/payment-collection-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetPaymentCollectionModesController', () => {
  let controller: BusinessPartnerPortalGetPaymentCollectionModesController;
  let handler: BusinessPartnerPortalGetPaymentCollectionModesHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalGetPaymentCollectionModesController],
      providers: [
        {
          provide: BusinessPartnerPortalGetPaymentCollectionModesHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalGetPaymentCollectionModesController>(
        BusinessPartnerPortalGetPaymentCollectionModesController,
      );
    handler = module.get<BusinessPartnerPortalGetPaymentCollectionModesHandler>(
      BusinessPartnerPortalGetPaymentCollectionModesHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetPaymentCollectionModesController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a businessPartnerPortalMockPaymentCollectionModeData', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPaymentCollectionModeData),
            ),
        );
      expect(await controller.main()).toBe(
        businessPartnerPortalMockPaymentCollectionModeData,
      );
    });
  });
});
