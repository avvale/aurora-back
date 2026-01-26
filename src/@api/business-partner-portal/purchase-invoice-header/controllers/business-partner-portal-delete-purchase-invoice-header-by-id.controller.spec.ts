/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdController,
  BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdHandler,
} from '@api/business-partner-portal/purchase-invoice-header';
import { businessPartnerPortalMockPurchaseInvoiceHeaderData } from '@app/business-partner-portal/purchase-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdController', () => {
  let controller: BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdController;
  let handler: BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [
        BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdController,
      ],
      providers: [
        {
          provide: BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdController>(
        BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdController,
      );
    handler =
      module.get<BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdHandler>(
        BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an purchaseInvoiceHeader deleted', async () => {
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
