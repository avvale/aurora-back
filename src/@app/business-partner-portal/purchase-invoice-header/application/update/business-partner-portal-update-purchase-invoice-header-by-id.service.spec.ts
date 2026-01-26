/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
  businessPartnerPortalMockPurchaseInvoiceHeaderData,
  BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository,
} from '@app/business-partner-portal/purchase-invoice-header';
import { BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdService } from '@app/business-partner-portal/purchase-invoice-header/application/update/business-partner-portal-update-purchase-invoice-header-by-id.service';
import {
  BusinessPartnerPortalPurchaseInvoiceHeaderApprovalNotes,
  BusinessPartnerPortalPurchaseInvoiceHeaderBusinessPartnerId,
  BusinessPartnerPortalPurchaseInvoiceHeaderCurrencyCode,
  BusinessPartnerPortalPurchaseInvoiceHeaderDiscountAmount,
  BusinessPartnerPortalPurchaseInvoiceHeaderDueDate,
  BusinessPartnerPortalPurchaseInvoiceHeaderExternalId,
  BusinessPartnerPortalPurchaseInvoiceHeaderExternalSystemCode,
  BusinessPartnerPortalPurchaseInvoiceHeaderId,
  BusinessPartnerPortalPurchaseInvoiceHeaderInvoiceDate,
  BusinessPartnerPortalPurchaseInvoiceHeaderInvoiceNumber,
  BusinessPartnerPortalPurchaseInvoiceHeaderNotes,
  BusinessPartnerPortalPurchaseInvoiceHeaderPaidAmount,
  BusinessPartnerPortalPurchaseInvoiceHeaderPaymentTermDays,
  BusinessPartnerPortalPurchaseInvoiceHeaderReceivedDate,
  BusinessPartnerPortalPurchaseInvoiceHeaderRowId,
  BusinessPartnerPortalPurchaseInvoiceHeaderStatus,
  BusinessPartnerPortalPurchaseInvoiceHeaderSubtotal,
  BusinessPartnerPortalPurchaseInvoiceHeaderSupplierInvoiceNumber,
  BusinessPartnerPortalPurchaseInvoiceHeaderTaxAmount,
  BusinessPartnerPortalPurchaseInvoiceHeaderTotalAmount,
} from '@app/business-partner-portal/purchase-invoice-header/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdService', () => {
  let service: BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdService,
        BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository,
        {
          provide: BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
          useValue: {
            updateById: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(
      BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdService,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should update a purchaseInvoiceHeader and emit event', async () => {
      expect(
        await service.main(
          {
            id: new BusinessPartnerPortalPurchaseInvoiceHeaderId(
              businessPartnerPortalMockPurchaseInvoiceHeaderData[0].id,
            ),
            rowId: new BusinessPartnerPortalPurchaseInvoiceHeaderRowId(
              businessPartnerPortalMockPurchaseInvoiceHeaderData[0].rowId,
            ),
            invoiceNumber:
              new BusinessPartnerPortalPurchaseInvoiceHeaderInvoiceNumber(
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0].invoiceNumber,
              ),
            supplierInvoiceNumber:
              new BusinessPartnerPortalPurchaseInvoiceHeaderSupplierInvoiceNumber(
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0].supplierInvoiceNumber,
              ),
            externalId:
              new BusinessPartnerPortalPurchaseInvoiceHeaderExternalId(
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0].externalId,
              ),
            externalSystemCode:
              new BusinessPartnerPortalPurchaseInvoiceHeaderExternalSystemCode(
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0].externalSystemCode,
              ),
            businessPartnerId:
              new BusinessPartnerPortalPurchaseInvoiceHeaderBusinessPartnerId(
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0].businessPartnerId,
              ),
            invoiceDate:
              new BusinessPartnerPortalPurchaseInvoiceHeaderInvoiceDate(
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0].invoiceDate,
              ),
            receivedDate:
              new BusinessPartnerPortalPurchaseInvoiceHeaderReceivedDate(
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0].receivedDate,
              ),
            dueDate: new BusinessPartnerPortalPurchaseInvoiceHeaderDueDate(
              businessPartnerPortalMockPurchaseInvoiceHeaderData[0].dueDate,
            ),
            status: new BusinessPartnerPortalPurchaseInvoiceHeaderStatus(
              businessPartnerPortalMockPurchaseInvoiceHeaderData[0].status,
            ),
            subtotal: new BusinessPartnerPortalPurchaseInvoiceHeaderSubtotal(
              businessPartnerPortalMockPurchaseInvoiceHeaderData[0].subtotal,
            ),
            taxAmount: new BusinessPartnerPortalPurchaseInvoiceHeaderTaxAmount(
              businessPartnerPortalMockPurchaseInvoiceHeaderData[0].taxAmount,
            ),
            discountAmount:
              new BusinessPartnerPortalPurchaseInvoiceHeaderDiscountAmount(
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0].discountAmount,
              ),
            totalAmount:
              new BusinessPartnerPortalPurchaseInvoiceHeaderTotalAmount(
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0].totalAmount,
              ),
            paidAmount:
              new BusinessPartnerPortalPurchaseInvoiceHeaderPaidAmount(
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0].paidAmount,
              ),
            currencyCode:
              new BusinessPartnerPortalPurchaseInvoiceHeaderCurrencyCode(
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0].currencyCode,
              ),
            paymentTermDays:
              new BusinessPartnerPortalPurchaseInvoiceHeaderPaymentTermDays(
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0].paymentTermDays,
              ),
            notes: new BusinessPartnerPortalPurchaseInvoiceHeaderNotes(
              businessPartnerPortalMockPurchaseInvoiceHeaderData[0].notes,
            ),
            approvalNotes:
              new BusinessPartnerPortalPurchaseInvoiceHeaderApprovalNotes(
                businessPartnerPortalMockPurchaseInvoiceHeaderData[0].approvalNotes,
              ),
          },
          {},
        ),
      ).toBe(undefined);
    });
  });
});
