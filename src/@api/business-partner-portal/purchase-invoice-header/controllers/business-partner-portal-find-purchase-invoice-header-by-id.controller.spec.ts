/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdController,
  BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdHandler,
} from '@api/business-partner-portal/purchase-invoice-header';
import { businessPartnerPortalMockPurchaseInvoiceHeaderData } from '@app/business-partner-portal/purchase-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdController', () => {
  let controller: BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdController;
  let handler: BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [
        BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdController,
      ],
      providers: [
        {
          provide: BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdController>(
        BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdController,
      );
    handler =
      module.get<BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdHandler>(
        BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an purchaseInvoiceHeader by id', async () => {
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
          businessPartnerPortalMockPurchaseInvoiceHeaderData[0].id,
        ),
      ).toBe(businessPartnerPortalMockPurchaseInvoiceHeaderData[0]);
    });
  });
});
