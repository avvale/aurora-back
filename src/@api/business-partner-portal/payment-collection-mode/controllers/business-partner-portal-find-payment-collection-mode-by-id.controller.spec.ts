/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPaymentCollectionModeByIdController,
  BusinessPartnerPortalFindPaymentCollectionModeByIdHandler,
} from '@api/business-partner-portal/payment-collection-mode';
import { businessPartnerPortalMockPaymentCollectionModeData } from '@app/business-partner-portal/payment-collection-mode';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPaymentCollectionModeByIdController', () => {
  let controller: BusinessPartnerPortalFindPaymentCollectionModeByIdController;
  let handler: BusinessPartnerPortalFindPaymentCollectionModeByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [
        BusinessPartnerPortalFindPaymentCollectionModeByIdController,
      ],
      providers: [
        {
          provide: BusinessPartnerPortalFindPaymentCollectionModeByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalFindPaymentCollectionModeByIdController>(
        BusinessPartnerPortalFindPaymentCollectionModeByIdController,
      );
    handler =
      module.get<BusinessPartnerPortalFindPaymentCollectionModeByIdHandler>(
        BusinessPartnerPortalFindPaymentCollectionModeByIdHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPaymentCollectionModeByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an paymentCollectionMode by id', async () => {
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
