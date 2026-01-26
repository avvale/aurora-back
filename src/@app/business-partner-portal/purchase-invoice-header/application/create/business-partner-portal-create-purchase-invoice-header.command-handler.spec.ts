/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePurchaseInvoiceHeaderCommand,
  businessPartnerPortalMockPurchaseInvoiceHeaderData,
} from '@app/business-partner-portal/purchase-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';
import { BusinessPartnerPortalCreatePurchaseInvoiceHeaderCommandHandler } from './business-partner-portal-create-purchase-invoice-header.command-handler';
import { BusinessPartnerPortalCreatePurchaseInvoiceHeaderService } from './business-partner-portal-create-purchase-invoice-header.service';

describe('BusinessPartnerPortalCreatePurchaseInvoiceHeaderCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalCreatePurchaseInvoiceHeaderCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalCreatePurchaseInvoiceHeaderCommandHandler,
        {
          provide: BusinessPartnerPortalCreatePurchaseInvoiceHeaderService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalCreatePurchaseInvoiceHeaderCommandHandler>(
        BusinessPartnerPortalCreatePurchaseInvoiceHeaderCommandHandler,
      );
  });

  describe('main', () => {
    test('CreatePurchaseInvoiceHeaderCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should create the values objects and pass them as parameters to the BusinessPartnerPortalCreatePurchaseInvoiceHeaderService', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalCreatePurchaseInvoiceHeaderCommand(
            {
              id: businessPartnerPortalMockPurchaseInvoiceHeaderData[0].id,
              rowId:
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0].rowId,
              invoiceNumber:
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0]
                  .invoiceNumber,
              supplierInvoiceNumber:
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0]
                  .supplierInvoiceNumber,
              externalId:
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0]
                  .externalId,
              externalSystemCode:
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0]
                  .externalSystemCode,
              businessPartnerId:
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0]
                  .businessPartnerId,
              invoiceDate:
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0]
                  .invoiceDate,
              receivedDate:
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0]
                  .receivedDate,
              dueDate:
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0].dueDate,
              status:
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0].status,
              subtotal:
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0].subtotal,
              taxAmount:
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0].taxAmount,
              discountAmount:
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0]
                  .discountAmount,
              totalAmount:
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0]
                  .totalAmount,
              paidAmount:
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0]
                  .paidAmount,
              currencyCode:
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0]
                  .currencyCode,
              paymentTermDays:
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0]
                  .paymentTermDays,
              notes:
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0].notes,
              approvalNotes:
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0]
                  .approvalNotes,
            },
            { timezone: process.env.TZ },
          ),
        ),
      ).toBe(undefined);
    });
  });
});
