/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginatePurchaseInvoicePositionsController,
  BusinessPartnerPortalPaginatePurchaseInvoicePositionsHandler,
} from '@api/business-partner-portal/purchase-invoice-position';
import { businessPartnerPortalMockPurchaseInvoicePositionData } from '@app/business-partner-portal/purchase-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePurchaseInvoicePositionsController', () => {
  let controller: BusinessPartnerPortalPaginatePurchaseInvoicePositionsController;
  let handler: BusinessPartnerPortalPaginatePurchaseInvoicePositionsHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [
        BusinessPartnerPortalPaginatePurchaseInvoicePositionsController,
      ],
      providers: [
        {
          provide: BusinessPartnerPortalPaginatePurchaseInvoicePositionsHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalPaginatePurchaseInvoicePositionsController>(
        BusinessPartnerPortalPaginatePurchaseInvoicePositionsController,
      );
    handler =
      module.get<BusinessPartnerPortalPaginatePurchaseInvoicePositionsHandler>(
        BusinessPartnerPortalPaginatePurchaseInvoicePositionsHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePurchaseInvoicePositionsController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a businessPartnerPortalMockPurchaseInvoicePositionData', async () => {
      jest.spyOn(handler, 'main').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: 5,
              count: 5,
              rows: businessPartnerPortalMockPurchaseInvoicePositionData,
            }),
          ),
      );
      expect(await controller.main()).toStrictEqual({
        total: 5,
        count: 5,
        rows: businessPartnerPortalMockPurchaseInvoicePositionData,
      });
    });
  });
});
