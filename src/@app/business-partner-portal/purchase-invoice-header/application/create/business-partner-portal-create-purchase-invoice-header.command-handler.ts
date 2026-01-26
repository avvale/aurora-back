/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalCreatePurchaseInvoiceHeaderCommand } from '@app/business-partner-portal/purchase-invoice-header';
import { BusinessPartnerPortalCreatePurchaseInvoiceHeaderService } from '@app/business-partner-portal/purchase-invoice-header/application/create/business-partner-portal-create-purchase-invoice-header.service';
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
  BusinessPartnerPortalPurchaseInvoiceHeaderStatus,
  BusinessPartnerPortalPurchaseInvoiceHeaderSubtotal,
  BusinessPartnerPortalPurchaseInvoiceHeaderSupplierInvoiceNumber,
  BusinessPartnerPortalPurchaseInvoiceHeaderTaxAmount,
  BusinessPartnerPortalPurchaseInvoiceHeaderTotalAmount,
} from '@app/business-partner-portal/purchase-invoice-header/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(BusinessPartnerPortalCreatePurchaseInvoiceHeaderCommand)
export class BusinessPartnerPortalCreatePurchaseInvoiceHeaderCommandHandler
  implements
    ICommandHandler<BusinessPartnerPortalCreatePurchaseInvoiceHeaderCommand>
{
  constructor(
    private readonly createPurchaseInvoiceHeaderService: BusinessPartnerPortalCreatePurchaseInvoiceHeaderService,
  ) {}

  async execute(
    command: BusinessPartnerPortalCreatePurchaseInvoiceHeaderCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.createPurchaseInvoiceHeaderService.main(
      {
        id: new BusinessPartnerPortalPurchaseInvoiceHeaderId(
          command.payload.id,
        ),
        invoiceNumber:
          new BusinessPartnerPortalPurchaseInvoiceHeaderInvoiceNumber(
            command.payload.invoiceNumber,
          ),
        supplierInvoiceNumber:
          new BusinessPartnerPortalPurchaseInvoiceHeaderSupplierInvoiceNumber(
            command.payload.supplierInvoiceNumber,
          ),
        externalId: new BusinessPartnerPortalPurchaseInvoiceHeaderExternalId(
          command.payload.externalId,
        ),
        externalSystemCode:
          new BusinessPartnerPortalPurchaseInvoiceHeaderExternalSystemCode(
            command.payload.externalSystemCode,
          ),
        businessPartnerId:
          new BusinessPartnerPortalPurchaseInvoiceHeaderBusinessPartnerId(
            command.payload.businessPartnerId,
          ),
        invoiceDate: new BusinessPartnerPortalPurchaseInvoiceHeaderInvoiceDate(
          command.payload.invoiceDate,
        ),
        receivedDate:
          new BusinessPartnerPortalPurchaseInvoiceHeaderReceivedDate(
            command.payload.receivedDate,
          ),
        dueDate: new BusinessPartnerPortalPurchaseInvoiceHeaderDueDate(
          command.payload.dueDate,
        ),
        status: new BusinessPartnerPortalPurchaseInvoiceHeaderStatus(
          command.payload.status,
        ),
        subtotal: new BusinessPartnerPortalPurchaseInvoiceHeaderSubtotal(
          command.payload.subtotal,
        ),
        taxAmount: new BusinessPartnerPortalPurchaseInvoiceHeaderTaxAmount(
          command.payload.taxAmount,
        ),
        discountAmount:
          new BusinessPartnerPortalPurchaseInvoiceHeaderDiscountAmount(
            command.payload.discountAmount,
          ),
        totalAmount: new BusinessPartnerPortalPurchaseInvoiceHeaderTotalAmount(
          command.payload.totalAmount,
        ),
        paidAmount: new BusinessPartnerPortalPurchaseInvoiceHeaderPaidAmount(
          command.payload.paidAmount,
        ),
        currencyCode:
          new BusinessPartnerPortalPurchaseInvoiceHeaderCurrencyCode(
            command.payload.currencyCode,
          ),
        paymentTermDays:
          new BusinessPartnerPortalPurchaseInvoiceHeaderPaymentTermDays(
            command.payload.paymentTermDays,
          ),
        notes: new BusinessPartnerPortalPurchaseInvoiceHeaderNotes(
          command.payload.notes,
        ),
        approvalNotes:
          new BusinessPartnerPortalPurchaseInvoiceHeaderApprovalNotes(
            command.payload.approvalNotes,
          ),
      },
      command.cQMetadata,
    );
  }
}
