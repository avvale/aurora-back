/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  businessPartnerPortalMockSalesInvoicePositionData,
  BusinessPartnerPortalUpdateSalesInvoicePositionByIdCommand,
} from '@app/business-partner-portal/sales-invoice-position';
import { BusinessPartnerPortalUpdateSalesInvoicePositionByIdCommandHandler } from '@app/business-partner-portal/sales-invoice-position/application/update/business-partner-portal-update-sales-invoice-position-by-id.command-handler';
import { BusinessPartnerPortalUpdateSalesInvoicePositionByIdService } from '@app/business-partner-portal/sales-invoice-position/application/update/business-partner-portal-update-sales-invoice-position-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdateSalesInvoicePositionByIdCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalUpdateSalesInvoicePositionByIdCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalUpdateSalesInvoicePositionByIdCommandHandler,
        {
          provide: BusinessPartnerPortalUpdateSalesInvoicePositionByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalUpdateSalesInvoicePositionByIdCommandHandler>(
        BusinessPartnerPortalUpdateSalesInvoicePositionByIdCommandHandler,
      );
  });

  describe('main', () => {
    test('UpdateSalesInvoicePositionByIdCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should return an salesInvoicePosition created', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalUpdateSalesInvoicePositionByIdCommand(
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
            {},
            { timezone: process.env.TZ },
          ),
        ),
      ).toBe(undefined);
    });
  });
});
