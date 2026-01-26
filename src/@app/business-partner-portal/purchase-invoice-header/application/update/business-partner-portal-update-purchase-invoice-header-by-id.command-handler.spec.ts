/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  businessPartnerPortalMockPurchaseInvoiceHeaderData,
  BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdCommand,
} from '@app/business-partner-portal/purchase-invoice-header';
import { BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdCommandHandler } from '@app/business-partner-portal/purchase-invoice-header/application/update/business-partner-portal-update-purchase-invoice-header-by-id.command-handler';
import { BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdService } from '@app/business-partner-portal/purchase-invoice-header/application/update/business-partner-portal-update-purchase-invoice-header-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdCommandHandler,
        {
          provide: BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdCommandHandler>(
        BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdCommandHandler,
      );
  });

  describe('main', () => {
    test('UpdatePurchaseInvoiceHeaderByIdCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should return an purchaseInvoiceHeader created', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdCommand(
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
            {},
            { timezone: process.env.TZ },
          ),
        ),
      ).toBe(undefined);
    });
  });
});
