/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPurchaseInvoicePositionController,
  BusinessPartnerPortalFindPurchaseInvoicePositionHandler,
} from '@api/business-partner-portal/purchase-invoice-position';
import { businessPartnerPortalMockPurchaseInvoicePositionData } from '@app/business-partner-portal/purchase-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPurchaseInvoicePositionController', () => {
  let controller: BusinessPartnerPortalFindPurchaseInvoicePositionController;
  let handler: BusinessPartnerPortalFindPurchaseInvoicePositionHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalFindPurchaseInvoicePositionController],
      providers: [
        {
          provide: BusinessPartnerPortalFindPurchaseInvoicePositionHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalFindPurchaseInvoicePositionController>(
        BusinessPartnerPortalFindPurchaseInvoicePositionController,
      );
    handler =
      module.get<BusinessPartnerPortalFindPurchaseInvoicePositionHandler>(
        BusinessPartnerPortalFindPurchaseInvoicePositionHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPurchaseInvoicePositionController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a purchaseInvoicePosition', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPurchaseInvoicePositionData[0]),
            ),
        );
      expect(await controller.main()).toBe(
        businessPartnerPortalMockPurchaseInvoicePositionData[0],
      );
    });
  });
});
