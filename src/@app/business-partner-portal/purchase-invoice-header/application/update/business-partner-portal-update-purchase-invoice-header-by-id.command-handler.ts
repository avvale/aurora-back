/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdCommand } from '@app/business-partner-portal/purchase-invoice-header';
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
  BusinessPartnerPortalPurchaseInvoiceHeaderStatus,
  BusinessPartnerPortalPurchaseInvoiceHeaderSubtotal,
  BusinessPartnerPortalPurchaseInvoiceHeaderSupplierInvoiceNumber,
  BusinessPartnerPortalPurchaseInvoiceHeaderTaxAmount,
  BusinessPartnerPortalPurchaseInvoiceHeaderTotalAmount,
} from '@app/business-partner-portal/purchase-invoice-header/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdCommand)
export class BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdCommandHandler
  implements
    ICommandHandler<BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdCommand>
{
  constructor(
    private readonly updatePurchaseInvoiceHeaderByIdService: BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdService,
  ) {}

  async execute(
    command: BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.updatePurchaseInvoiceHeaderByIdService.main(
      {
        id: new BusinessPartnerPortalPurchaseInvoiceHeaderId(
          command.payload.id,
        ),
        invoiceNumber:
          new BusinessPartnerPortalPurchaseInvoiceHeaderInvoiceNumber(
            command.payload.invoiceNumber,
            { undefinable: true },
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
            { undefinable: true },
          ),
        invoiceDate: new BusinessPartnerPortalPurchaseInvoiceHeaderInvoiceDate(
          command.payload.invoiceDate,
          { undefinable: true },
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
          { undefinable: true },
        ),
        subtotal: new BusinessPartnerPortalPurchaseInvoiceHeaderSubtotal(
          command.payload.subtotal,
          { undefinable: true },
        ),
        taxAmount: new BusinessPartnerPortalPurchaseInvoiceHeaderTaxAmount(
          command.payload.taxAmount,
          { undefinable: true },
        ),
        discountAmount:
          new BusinessPartnerPortalPurchaseInvoiceHeaderDiscountAmount(
            command.payload.discountAmount,
            { undefinable: true },
          ),
        totalAmount: new BusinessPartnerPortalPurchaseInvoiceHeaderTotalAmount(
          command.payload.totalAmount,
          { undefinable: true },
        ),
        paidAmount: new BusinessPartnerPortalPurchaseInvoiceHeaderPaidAmount(
          command.payload.paidAmount,
          { undefinable: true },
        ),
        currencyCode:
          new BusinessPartnerPortalPurchaseInvoiceHeaderCurrencyCode(
            command.payload.currencyCode,
            { undefinable: true },
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
      command.constraint,
      command.cQMetadata,
    );
  }
}
