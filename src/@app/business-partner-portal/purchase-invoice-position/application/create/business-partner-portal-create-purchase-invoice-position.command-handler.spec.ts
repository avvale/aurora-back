/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePurchaseInvoicePositionCommand,
  businessPartnerPortalMockPurchaseInvoicePositionData,
} from '@app/business-partner-portal/purchase-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';
import { BusinessPartnerPortalCreatePurchaseInvoicePositionCommandHandler } from './business-partner-portal-create-purchase-invoice-position.command-handler';
import { BusinessPartnerPortalCreatePurchaseInvoicePositionService } from './business-partner-portal-create-purchase-invoice-position.service';

describe('BusinessPartnerPortalCreatePurchaseInvoicePositionCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalCreatePurchaseInvoicePositionCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalCreatePurchaseInvoicePositionCommandHandler,
        {
          provide: BusinessPartnerPortalCreatePurchaseInvoicePositionService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalCreatePurchaseInvoicePositionCommandHandler>(
        BusinessPartnerPortalCreatePurchaseInvoicePositionCommandHandler,
      );
  });

  describe('main', () => {
    test('CreatePurchaseInvoicePositionCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should create the values objects and pass them as parameters to the BusinessPartnerPortalCreatePurchaseInvoicePositionService', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalCreatePurchaseInvoicePositionCommand(
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
            { timezone: process.env.TZ },
          ),
        ),
      ).toBe(undefined);
    });
  });
});
