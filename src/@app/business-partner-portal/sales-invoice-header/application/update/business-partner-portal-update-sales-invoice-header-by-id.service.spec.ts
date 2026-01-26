/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalISalesInvoiceHeaderRepository,
  businessPartnerPortalMockSalesInvoiceHeaderData,
  BusinessPartnerPortalMockSalesInvoiceHeaderRepository,
} from '@app/business-partner-portal/sales-invoice-header';
import { BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdService } from '@app/business-partner-portal/sales-invoice-header/application/update/business-partner-portal-update-sales-invoice-header-by-id.service';
import {
  BusinessPartnerPortalSalesInvoiceHeaderBusinessPartnerId,
  BusinessPartnerPortalSalesInvoiceHeaderCurrencyCode,
  BusinessPartnerPortalSalesInvoiceHeaderCustomerNotes,
  BusinessPartnerPortalSalesInvoiceHeaderDiscountAmount,
  BusinessPartnerPortalSalesInvoiceHeaderDueDate,
  BusinessPartnerPortalSalesInvoiceHeaderExternalId,
  BusinessPartnerPortalSalesInvoiceHeaderExternalSystemCode,
  BusinessPartnerPortalSalesInvoiceHeaderId,
  BusinessPartnerPortalSalesInvoiceHeaderInvoiceDate,
  BusinessPartnerPortalSalesInvoiceHeaderInvoiceNumber,
  BusinessPartnerPortalSalesInvoiceHeaderNotes,
  BusinessPartnerPortalSalesInvoiceHeaderPaidAmount,
  BusinessPartnerPortalSalesInvoiceHeaderPaymentTermDays,
  BusinessPartnerPortalSalesInvoiceHeaderRowId,
  BusinessPartnerPortalSalesInvoiceHeaderStatus,
  BusinessPartnerPortalSalesInvoiceHeaderSubtotal,
  BusinessPartnerPortalSalesInvoiceHeaderTaxAmount,
  BusinessPartnerPortalSalesInvoiceHeaderTotalAmount,
} from '@app/business-partner-portal/sales-invoice-header/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdService', () => {
  let service: BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdService,
        BusinessPartnerPortalMockSalesInvoiceHeaderRepository,
        {
          provide: BusinessPartnerPortalISalesInvoiceHeaderRepository,
          useValue: {
            updateById: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(
      BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdService,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should update a salesInvoiceHeader and emit event', async () => {
      expect(
        await service.main(
          {
            id: new BusinessPartnerPortalSalesInvoiceHeaderId(
              businessPartnerPortalMockSalesInvoiceHeaderData[0].id,
            ),
            rowId: new BusinessPartnerPortalSalesInvoiceHeaderRowId(
              businessPartnerPortalMockSalesInvoiceHeaderData[0].rowId,
            ),
            invoiceNumber:
              new BusinessPartnerPortalSalesInvoiceHeaderInvoiceNumber(
                businessPartnerPortalMockSalesInvoiceHeaderData[0].invoiceNumber,
              ),
            externalId: new BusinessPartnerPortalSalesInvoiceHeaderExternalId(
              businessPartnerPortalMockSalesInvoiceHeaderData[0].externalId,
            ),
            externalSystemCode:
              new BusinessPartnerPortalSalesInvoiceHeaderExternalSystemCode(
                businessPartnerPortalMockSalesInvoiceHeaderData[0].externalSystemCode,
              ),
            businessPartnerId:
              new BusinessPartnerPortalSalesInvoiceHeaderBusinessPartnerId(
                businessPartnerPortalMockSalesInvoiceHeaderData[0].businessPartnerId,
              ),
            invoiceDate: new BusinessPartnerPortalSalesInvoiceHeaderInvoiceDate(
              businessPartnerPortalMockSalesInvoiceHeaderData[0].invoiceDate,
            ),
            dueDate: new BusinessPartnerPortalSalesInvoiceHeaderDueDate(
              businessPartnerPortalMockSalesInvoiceHeaderData[0].dueDate,
            ),
            status: new BusinessPartnerPortalSalesInvoiceHeaderStatus(
              businessPartnerPortalMockSalesInvoiceHeaderData[0].status,
            ),
            subtotal: new BusinessPartnerPortalSalesInvoiceHeaderSubtotal(
              businessPartnerPortalMockSalesInvoiceHeaderData[0].subtotal,
            ),
            taxAmount: new BusinessPartnerPortalSalesInvoiceHeaderTaxAmount(
              businessPartnerPortalMockSalesInvoiceHeaderData[0].taxAmount,
            ),
            discountAmount:
              new BusinessPartnerPortalSalesInvoiceHeaderDiscountAmount(
                businessPartnerPortalMockSalesInvoiceHeaderData[0].discountAmount,
              ),
            totalAmount: new BusinessPartnerPortalSalesInvoiceHeaderTotalAmount(
              businessPartnerPortalMockSalesInvoiceHeaderData[0].totalAmount,
            ),
            paidAmount: new BusinessPartnerPortalSalesInvoiceHeaderPaidAmount(
              businessPartnerPortalMockSalesInvoiceHeaderData[0].paidAmount,
            ),
            currencyCode:
              new BusinessPartnerPortalSalesInvoiceHeaderCurrencyCode(
                businessPartnerPortalMockSalesInvoiceHeaderData[0].currencyCode,
              ),
            paymentTermDays:
              new BusinessPartnerPortalSalesInvoiceHeaderPaymentTermDays(
                businessPartnerPortalMockSalesInvoiceHeaderData[0].paymentTermDays,
              ),
            notes: new BusinessPartnerPortalSalesInvoiceHeaderNotes(
              businessPartnerPortalMockSalesInvoiceHeaderData[0].notes,
            ),
            customerNotes:
              new BusinessPartnerPortalSalesInvoiceHeaderCustomerNotes(
                businessPartnerPortalMockSalesInvoiceHeaderData[0].customerNotes,
              ),
          },
          {},
        ),
      ).toBe(undefined);
    });
  });
});
