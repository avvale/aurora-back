/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalDeletePurchaseInvoicePositionByIdController,
  BusinessPartnerPortalDeletePurchaseInvoicePositionByIdHandler,
} from '@api/business-partner-portal/purchase-invoice-position';
import { businessPartnerPortalMockPurchaseInvoicePositionData } from '@app/business-partner-portal/purchase-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeletePurchaseInvoicePositionByIdController', () => {
  let controller: BusinessPartnerPortalDeletePurchaseInvoicePositionByIdController;
  let handler: BusinessPartnerPortalDeletePurchaseInvoicePositionByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [
        BusinessPartnerPortalDeletePurchaseInvoicePositionByIdController,
      ],
      providers: [
        {
          provide:
            BusinessPartnerPortalDeletePurchaseInvoicePositionByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalDeletePurchaseInvoicePositionByIdController>(
        BusinessPartnerPortalDeletePurchaseInvoicePositionByIdController,
      );
    handler =
      module.get<BusinessPartnerPortalDeletePurchaseInvoicePositionByIdHandler>(
        BusinessPartnerPortalDeletePurchaseInvoicePositionByIdHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeletePurchaseInvoicePositionByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an purchaseInvoicePosition deleted', async () => {
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
          businessPartnerPortalMockPurchaseInvoicePositionData[0].id,
        ),
      ).toBe(businessPartnerPortalMockPurchaseInvoicePositionData[0]);
    });
  });
});
