/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalCreateSalesInvoicePositionCommand,
  businessPartnerPortalMockSalesInvoicePositionData,
} from '@app/business-partner-portal/sales-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';
import { BusinessPartnerPortalCreateSalesInvoicePositionCommandHandler } from './business-partner-portal-create-sales-invoice-position.command-handler';
import { BusinessPartnerPortalCreateSalesInvoicePositionService } from './business-partner-portal-create-sales-invoice-position.service';

describe('BusinessPartnerPortalCreateSalesInvoicePositionCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalCreateSalesInvoicePositionCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalCreateSalesInvoicePositionCommandHandler,
        {
          provide: BusinessPartnerPortalCreateSalesInvoicePositionService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalCreateSalesInvoicePositionCommandHandler>(
        BusinessPartnerPortalCreateSalesInvoicePositionCommandHandler,
      );
  });

  describe('main', () => {
    test('CreateSalesInvoicePositionCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should create the values objects and pass them as parameters to the BusinessPartnerPortalCreateSalesInvoicePositionService', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalCreateSalesInvoicePositionCommand(
            {
              id: businessPartnerPortalMockSalesInvoicePositionData[0].id,
              rowId: businessPartnerPortalMockSalesInvoicePositionData[0].rowId,
              salesInvoiceHeaderId:
                businessPartnerPortalMockSalesInvoicePositionData[0]
                  .salesInvoiceHeaderId,
              positionNumber:
                businessPartnerPortalMockSalesInvoicePositionData[0]
                  .positionNumber,
              description:
                businessPartnerPortalMockSalesInvoicePositionData[0]
                  .description,
              productCode:
                businessPartnerPortalMockSalesInvoicePositionData[0]
                  .productCode,
              quantity:
                businessPartnerPortalMockSalesInvoicePositionData[0].quantity,
              unitPrice:
                businessPartnerPortalMockSalesInvoicePositionData[0].unitPrice,
              discountPercent:
                businessPartnerPortalMockSalesInvoicePositionData[0]
                  .discountPercent,
              discountAmount:
                businessPartnerPortalMockSalesInvoicePositionData[0]
                  .discountAmount,
              taxPercent:
                businessPartnerPortalMockSalesInvoicePositionData[0].taxPercent,
              taxAmount:
                businessPartnerPortalMockSalesInvoicePositionData[0].taxAmount,
              subtotal:
                businessPartnerPortalMockSalesInvoicePositionData[0].subtotal,
              positionTotal:
                businessPartnerPortalMockSalesInvoicePositionData[0]
                  .positionTotal,
              notes: businessPartnerPortalMockSalesInvoicePositionData[0].notes,
            },
            { timezone: process.env.TZ },
          ),
        ),
      ).toBe(undefined);
    });
  });
});
