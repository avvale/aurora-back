/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalDeletePaymentCollectionModeByIdController,
  BusinessPartnerPortalDeletePaymentCollectionModeByIdHandler,
} from '@api/business-partner-portal/payment-collection-mode';
import { businessPartnerPortalMockPaymentCollectionModeData } from '@app/business-partner-portal/payment-collection-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeletePaymentCollectionModeByIdController', () => {
  let controller: BusinessPartnerPortalDeletePaymentCollectionModeByIdController;
  let handler: BusinessPartnerPortalDeletePaymentCollectionModeByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [
        BusinessPartnerPortalDeletePaymentCollectionModeByIdController,
      ],
      providers: [
        {
          provide: BusinessPartnerPortalDeletePaymentCollectionModeByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalDeletePaymentCollectionModeByIdController>(
        BusinessPartnerPortalDeletePaymentCollectionModeByIdController,
      );
    handler =
      module.get<BusinessPartnerPortalDeletePaymentCollectionModeByIdHandler>(
        BusinessPartnerPortalDeletePaymentCollectionModeByIdHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeletePaymentCollectionModeByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an paymentCollectionMode deleted', async () => {
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
          businessPartnerPortalMockPaymentCollectionModeData[0].id,
        ),
      ).toBe(businessPartnerPortalMockPaymentCollectionModeData[0]);
    });
  });
});
