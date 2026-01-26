/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPurchaseInvoiceHeadersController,
  BusinessPartnerPortalGetPurchaseInvoiceHeadersHandler,
} from '@api/business-partner-portal/purchase-invoice-header';
import { businessPartnerPortalMockPurchaseInvoiceHeaderData } from '@app/business-partner-portal/purchase-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetPurchaseInvoiceHeadersController', () => {
  let controller: BusinessPartnerPortalGetPurchaseInvoiceHeadersController;
  let handler: BusinessPartnerPortalGetPurchaseInvoiceHeadersHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalGetPurchaseInvoiceHeadersController],
      providers: [
        {
          provide: BusinessPartnerPortalGetPurchaseInvoiceHeadersHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalGetPurchaseInvoiceHeadersController>(
        BusinessPartnerPortalGetPurchaseInvoiceHeadersController,
      );
    handler = module.get<BusinessPartnerPortalGetPurchaseInvoiceHeadersHandler>(
      BusinessPartnerPortalGetPurchaseInvoiceHeadersHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetPurchaseInvoiceHeadersController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a businessPartnerPortalMockPurchaseInvoiceHeaderData', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPurchaseInvoiceHeaderData),
            ),
        );
      expect(await controller.main()).toBe(
        businessPartnerPortalMockPurchaseInvoiceHeaderData,
      );
    });
  });
});
