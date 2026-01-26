/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalCreateSalesInvoiceHeaderCommand,
  businessPartnerPortalMockSalesInvoiceHeaderData,
} from '@app/business-partner-portal/sales-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';
import { BusinessPartnerPortalCreateSalesInvoiceHeaderCommandHandler } from './business-partner-portal-create-sales-invoice-header.command-handler';
import { BusinessPartnerPortalCreateSalesInvoiceHeaderService } from './business-partner-portal-create-sales-invoice-header.service';

describe('BusinessPartnerPortalCreateSalesInvoiceHeaderCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalCreateSalesInvoiceHeaderCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalCreateSalesInvoiceHeaderCommandHandler,
        {
          provide: BusinessPartnerPortalCreateSalesInvoiceHeaderService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalCreateSalesInvoiceHeaderCommandHandler>(
        BusinessPartnerPortalCreateSalesInvoiceHeaderCommandHandler,
      );
  });

  describe('main', () => {
    test('CreateSalesInvoiceHeaderCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should create the values objects and pass them as parameters to the BusinessPartnerPortalCreateSalesInvoiceHeaderService', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalCreateSalesInvoiceHeaderCommand(
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
            { timezone: process.env.TZ },
          ),
        ),
      ).toBe(undefined);
    });
  });
});
