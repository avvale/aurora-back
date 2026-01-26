/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePurchaseInvoiceHeaderController,
  BusinessPartnerPortalCreatePurchaseInvoiceHeaderHandler,
} from '@api/business-partner-portal/purchase-invoice-header';
import { businessPartnerPortalMockPurchaseInvoiceHeaderData } from '@app/business-partner-portal/purchase-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreatePurchaseInvoiceHeaderController', () => {
  let controller: BusinessPartnerPortalCreatePurchaseInvoiceHeaderController;
  let handler: BusinessPartnerPortalCreatePurchaseInvoiceHeaderHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalCreatePurchaseInvoiceHeaderController],
      providers: [
        {
          provide: BusinessPartnerPortalCreatePurchaseInvoiceHeaderHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalCreatePurchaseInvoiceHeaderController>(
        BusinessPartnerPortalCreatePurchaseInvoiceHeaderController,
      );
    handler =
      module.get<BusinessPartnerPortalCreatePurchaseInvoiceHeaderHandler>(
        BusinessPartnerPortalCreatePurchaseInvoiceHeaderHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreatePurchaseInvoiceHeaderController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an purchaseInvoiceHeader created', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPurchaseInvoiceHeaderData[0]),
            ),
        );
      expect(
        await controller.main(
          businessPartnerPortalMockPurchaseInvoiceHeaderData[0],
        ),
      ).toBe(businessPartnerPortalMockPurchaseInvoiceHeaderData[0]);
    });
  });
});
