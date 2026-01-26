/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePurchaseInvoicePositionController,
  BusinessPartnerPortalCreatePurchaseInvoicePositionHandler,
} from '@api/business-partner-portal/purchase-invoice-position';
import { businessPartnerPortalMockPurchaseInvoicePositionData } from '@app/business-partner-portal/purchase-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreatePurchaseInvoicePositionController', () => {
  let controller: BusinessPartnerPortalCreatePurchaseInvoicePositionController;
  let handler: BusinessPartnerPortalCreatePurchaseInvoicePositionHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [
        BusinessPartnerPortalCreatePurchaseInvoicePositionController,
      ],
      providers: [
        {
          provide: BusinessPartnerPortalCreatePurchaseInvoicePositionHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalCreatePurchaseInvoicePositionController>(
        BusinessPartnerPortalCreatePurchaseInvoicePositionController,
      );
    handler =
      module.get<BusinessPartnerPortalCreatePurchaseInvoicePositionHandler>(
        BusinessPartnerPortalCreatePurchaseInvoicePositionHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreatePurchaseInvoicePositionController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an purchaseInvoicePosition created', async () => {
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
