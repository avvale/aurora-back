/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPurchaseInvoiceHeaderController,
  BusinessPartnerPortalFindPurchaseInvoiceHeaderHandler,
} from '@api/business-partner-portal/purchase-invoice-header';
import { businessPartnerPortalMockPurchaseInvoiceHeaderData } from '@app/business-partner-portal/purchase-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPurchaseInvoiceHeaderController', () => {
  let controller: BusinessPartnerPortalFindPurchaseInvoiceHeaderController;
  let handler: BusinessPartnerPortalFindPurchaseInvoiceHeaderHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalFindPurchaseInvoiceHeaderController],
      providers: [
        {
          provide: BusinessPartnerPortalFindPurchaseInvoiceHeaderHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalFindPurchaseInvoiceHeaderController>(
        BusinessPartnerPortalFindPurchaseInvoiceHeaderController,
      );
    handler = module.get<BusinessPartnerPortalFindPurchaseInvoiceHeaderHandler>(
      BusinessPartnerPortalFindPurchaseInvoiceHeaderHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPurchaseInvoiceHeaderController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a purchaseInvoiceHeader', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPurchaseInvoiceHeaderData[0]),
            ),
        );
      expect(await controller.main()).toBe(
        businessPartnerPortalMockPurchaseInvoiceHeaderData[0],
      );
    });
  });
});
