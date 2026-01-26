/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  businessPartnerPortalMockPurchaseInvoicePositionData,
  BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdCommand,
} from '@app/business-partner-portal/purchase-invoice-position';
import { BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdCommandHandler } from '@app/business-partner-portal/purchase-invoice-position/application/update/business-partner-portal-update-purchase-invoice-position-by-id.command-handler';
import { BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdService } from '@app/business-partner-portal/purchase-invoice-position/application/update/business-partner-portal-update-purchase-invoice-position-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdCommandHandler,
        {
          provide:
            BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdCommandHandler>(
        BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdCommandHandler,
      );
  });

  describe('main', () => {
    test('UpdatePurchaseInvoicePositionByIdCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should return an purchaseInvoicePosition created', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdCommand(
            {
              id: businessPartnerPortalMockPurchaseInvoicePositionData[0].id,
              rowId:
                businessPartnerPortalMockPurchaseInvoicePositionData[0].rowId,
              purchaseInvoiceHeaderId:
                businessPartnerPortalMockPurchaseInvoicePositionData[0]
                  .purchaseInvoiceHeaderId,
              positionNumber:
                businessPartnerPortalMockPurchaseInvoicePositionData[0]
                  .positionNumber,
              description:
                businessPartnerPortalMockPurchaseInvoicePositionData[0]
                  .description,
              productCode:
                businessPartnerPortalMockPurchaseInvoicePositionData[0]
                  .productCode,
              quantity:
                businessPartnerPortalMockPurchaseInvoicePositionData[0]
                  .quantity,
              unitPrice:
                businessPartnerPortalMockPurchaseInvoicePositionData[0]
                  .unitPrice,
              discountPercent:
                businessPartnerPortalMockPurchaseInvoicePositionData[0]
                  .discountPercent,
              discountAmount:
                businessPartnerPortalMockPurchaseInvoicePositionData[0]
                  .discountAmount,
              taxPercent:
                businessPartnerPortalMockPurchaseInvoicePositionData[0]
                  .taxPercent,
              taxAmount:
                businessPartnerPortalMockPurchaseInvoicePositionData[0]
                  .taxAmount,
              subtotal:
                businessPartnerPortalMockPurchaseInvoicePositionData[0]
                  .subtotal,
              positionTotal:
                businessPartnerPortalMockPurchaseInvoicePositionData[0]
                  .positionTotal,
              expenseCategory:
                businessPartnerPortalMockPurchaseInvoicePositionData[0]
                  .expenseCategory,
              notes:
                businessPartnerPortalMockPurchaseInvoicePositionData[0].notes,
            },
            {},
            { timezone: process.env.TZ },
          ),
        ),
      ).toBe(undefined);
    });
  });
});
