/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPurchaseInvoicePositionByIdController,
  BusinessPartnerPortalFindPurchaseInvoicePositionByIdHandler,
} from '@api/business-partner-portal/purchase-invoice-position';
import { businessPartnerPortalMockPurchaseInvoicePositionData } from '@app/business-partner-portal/purchase-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPurchaseInvoicePositionByIdController', () => {
  let controller: BusinessPartnerPortalFindPurchaseInvoicePositionByIdController;
  let handler: BusinessPartnerPortalFindPurchaseInvoicePositionByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [
        BusinessPartnerPortalFindPurchaseInvoicePositionByIdController,
      ],
      providers: [
        {
          provide: BusinessPartnerPortalFindPurchaseInvoicePositionByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalFindPurchaseInvoicePositionByIdController>(
        BusinessPartnerPortalFindPurchaseInvoicePositionByIdController,
      );
    handler =
      module.get<BusinessPartnerPortalFindPurchaseInvoicePositionByIdHandler>(
        BusinessPartnerPortalFindPurchaseInvoicePositionByIdHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPurchaseInvoicePositionByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an purchaseInvoicePosition by id', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPurchaseInvoicePositionData[0]),
            ),
        );
      expect(
        await controller.main(
          businessPartnerPortalMockPurchaseInvoicePositionData[0].id,
        ),
      ).toBe(businessPartnerPortalMockPurchaseInvoicePositionData[0]);
    });
  });
});
