/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdController,
  BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdHandler,
} from '@api/business-partner-portal/purchase-invoice-header';
import { businessPartnerPortalMockPurchaseInvoiceHeaderData } from '@app/business-partner-portal/purchase-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdController', () => {
  let controller: BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdController;
  let handler: BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [
        BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdController,
      ],
      providers: [
        {
          provide: BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdController>(
        BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdController,
      );
    handler =
      module.get<BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdHandler>(
        BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a purchaseInvoiceHeader updated', async () => {
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
