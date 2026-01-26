/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdController,
  BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdHandler,
} from '@api/business-partner-portal/purchase-invoice-position';
import { businessPartnerPortalMockPurchaseInvoicePositionData } from '@app/business-partner-portal/purchase-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdController', () => {
  let controller: BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdController;
  let handler: BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [
        BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdController,
      ],
      providers: [
        {
          provide:
            BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdController>(
        BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdController,
      );
    handler =
      module.get<BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdHandler>(
        BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a purchaseInvoicePosition updated', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPurchaseInvoicePositionData[0]),
            ),
        );
      expect(
        await controller.main(
          businessPartnerPortalMockPurchaseInvoicePositionData[0],
        ),
      ).toBe(businessPartnerPortalMockPurchaseInvoicePositionData[0]);
    });
  });
});
