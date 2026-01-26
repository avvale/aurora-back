/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  businessPartnerPortalMockSalesInvoiceHeaderData,
  BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdCommand,
} from '@app/business-partner-portal/sales-invoice-header';
import { BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdCommandHandler } from '@app/business-partner-portal/sales-invoice-header/application/update/business-partner-portal-update-sales-invoice-header-by-id.command-handler';
import { BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdService } from '@app/business-partner-portal/sales-invoice-header/application/update/business-partner-portal-update-sales-invoice-header-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdCommandHandler,
        {
          provide: BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdCommandHandler>(
        BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdCommandHandler,
      );
  });

  describe('main', () => {
    test('UpdateSalesInvoiceHeaderByIdCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should return an salesInvoiceHeader created', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdCommand(
            {
              id: businessPartnerPortalMockSalesInvoiceHeaderData[0].id,
              rowId: businessPartnerPortalMockSalesInvoiceHeaderData[0].rowId,
              invoiceNumber:
                businessPartnerPortalMockSalesInvoiceHeaderData[0]
                  .invoiceNumber,
              externalId:
                businessPartnerPortalMockSalesInvoiceHeaderData[0].externalId,
              externalSystemCode:
                businessPartnerPortalMockSalesInvoiceHeaderData[0]
                  .externalSystemCode,
              businessPartnerId:
                businessPartnerPortalMockSalesInvoiceHeaderData[0]
                  .businessPartnerId,
              invoiceDate:
                businessPartnerPortalMockSalesInvoiceHeaderData[0].invoiceDate,
              dueDate:
                businessPartnerPortalMockSalesInvoiceHeaderData[0].dueDate,
              status: businessPartnerPortalMockSalesInvoiceHeaderData[0].status,
              subtotal:
                businessPartnerPortalMockSalesInvoiceHeaderData[0].subtotal,
              taxAmount:
                businessPartnerPortalMockSalesInvoiceHeaderData[0].taxAmount,
              discountAmount:
                businessPartnerPortalMockSalesInvoiceHeaderData[0]
                  .discountAmount,
              totalAmount:
                businessPartnerPortalMockSalesInvoiceHeaderData[0].totalAmount,
              paidAmount:
                businessPartnerPortalMockSalesInvoiceHeaderData[0].paidAmount,
              currencyCode:
                businessPartnerPortalMockSalesInvoiceHeaderData[0].currencyCode,
              paymentTermDays:
                businessPartnerPortalMockSalesInvoiceHeaderData[0]
                  .paymentTermDays,
              notes: businessPartnerPortalMockSalesInvoiceHeaderData[0].notes,
              customerNotes:
                businessPartnerPortalMockSalesInvoiceHeaderData[0]
                  .customerNotes,
            },
            {},
            { timezone: process.env.TZ },
          ),
        ),
      ).toBe(undefined);
    });
  });
});
