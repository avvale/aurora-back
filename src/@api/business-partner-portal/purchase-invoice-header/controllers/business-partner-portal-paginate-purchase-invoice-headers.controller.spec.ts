/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginatePurchaseInvoiceHeadersController,
  BusinessPartnerPortalPaginatePurchaseInvoiceHeadersHandler,
} from '@api/business-partner-portal/purchase-invoice-header';
import { businessPartnerPortalMockPurchaseInvoiceHeaderData } from '@app/business-partner-portal/purchase-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePurchaseInvoiceHeadersController', () => {
  let controller: BusinessPartnerPortalPaginatePurchaseInvoiceHeadersController;
  let handler: BusinessPartnerPortalPaginatePurchaseInvoiceHeadersHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [
        BusinessPartnerPortalPaginatePurchaseInvoiceHeadersController,
      ],
      providers: [
        {
          provide: BusinessPartnerPortalPaginatePurchaseInvoiceHeadersHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalPaginatePurchaseInvoiceHeadersController>(
        BusinessPartnerPortalPaginatePurchaseInvoiceHeadersController,
      );
    handler =
      module.get<BusinessPartnerPortalPaginatePurchaseInvoiceHeadersHandler>(
        BusinessPartnerPortalPaginatePurchaseInvoiceHeadersHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePurchaseInvoiceHeadersController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a businessPartnerPortalMockPurchaseInvoiceHeaderData', async () => {
      jest.spyOn(handler, 'main').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: 5,
              count: 5,
              rows: businessPartnerPortalMockPurchaseInvoiceHeaderData,
            }),
          ),
      );
      expect(await controller.main()).toStrictEqual({
        total: 5,
        count: 5,
        rows: businessPartnerPortalMockPurchaseInvoiceHeaderData,
      });
    });
  });
});
