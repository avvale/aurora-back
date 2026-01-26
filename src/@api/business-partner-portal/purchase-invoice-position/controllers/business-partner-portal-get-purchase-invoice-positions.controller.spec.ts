/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPurchaseInvoicePositionsController,
  BusinessPartnerPortalGetPurchaseInvoicePositionsHandler,
} from '@api/business-partner-portal/purchase-invoice-position';
import { businessPartnerPortalMockPurchaseInvoicePositionData } from '@app/business-partner-portal/purchase-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetPurchaseInvoicePositionsController', () => {
  let controller: BusinessPartnerPortalGetPurchaseInvoicePositionsController;
  let handler: BusinessPartnerPortalGetPurchaseInvoicePositionsHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalGetPurchaseInvoicePositionsController],
      providers: [
        {
          provide: BusinessPartnerPortalGetPurchaseInvoicePositionsHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalGetPurchaseInvoicePositionsController>(
        BusinessPartnerPortalGetPurchaseInvoicePositionsController,
      );
    handler =
      module.get<BusinessPartnerPortalGetPurchaseInvoicePositionsHandler>(
        BusinessPartnerPortalGetPurchaseInvoicePositionsHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetPurchaseInvoicePositionsController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a businessPartnerPortalMockPurchaseInvoicePositionData', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPurchaseInvoicePositionData),
            ),
        );
      expect(await controller.main()).toBe(
        businessPartnerPortalMockPurchaseInvoicePositionData,
      );
    });
  });
});
