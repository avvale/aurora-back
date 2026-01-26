/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalUpdatePaymentCollectionModeByIdController,
  BusinessPartnerPortalUpdatePaymentCollectionModeByIdHandler,
} from '@api/business-partner-portal/payment-collection-mode';
import { businessPartnerPortalMockPaymentCollectionModeData } from '@app/business-partner-portal/payment-collection-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdatePaymentCollectionModeByIdController', () => {
  let controller: BusinessPartnerPortalUpdatePaymentCollectionModeByIdController;
  let handler: BusinessPartnerPortalUpdatePaymentCollectionModeByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [
        BusinessPartnerPortalUpdatePaymentCollectionModeByIdController,
      ],
      providers: [
        {
          provide: BusinessPartnerPortalUpdatePaymentCollectionModeByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalUpdatePaymentCollectionModeByIdController>(
        BusinessPartnerPortalUpdatePaymentCollectionModeByIdController,
      );
    handler =
      module.get<BusinessPartnerPortalUpdatePaymentCollectionModeByIdHandler>(
        BusinessPartnerPortalUpdatePaymentCollectionModeByIdHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdatePaymentCollectionModeByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a paymentCollectionMode updated', async () => {
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
