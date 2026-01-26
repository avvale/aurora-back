/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdCommand } from '@app/business-partner-portal/sales-invoice-header';
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
  BusinessPartnerPortalSalesInvoiceHeaderStatus,
  BusinessPartnerPortalSalesInvoiceHeaderSubtotal,
  BusinessPartnerPortalSalesInvoiceHeaderTaxAmount,
  BusinessPartnerPortalSalesInvoiceHeaderTotalAmount,
} from '@app/business-partner-portal/sales-invoice-header/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdCommand)
export class BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdCommandHandler
  implements
    ICommandHandler<BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdCommand>
{
  constructor(
    private readonly updateSalesInvoiceHeaderByIdService: BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdService,
  ) {}

  async execute(
    command: BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.updateSalesInvoiceHeaderByIdService.main(
      {
        id: new BusinessPartnerPortalSalesInvoiceHeaderId(command.payload.id),
        invoiceNumber: new BusinessPartnerPortalSalesInvoiceHeaderInvoiceNumber(
          command.payload.invoiceNumber,
          { undefinable: true },
        ),
        externalId: new BusinessPartnerPortalSalesInvoiceHeaderExternalId(
          command.payload.externalId,
        ),
        externalSystemCode:
          new BusinessPartnerPortalSalesInvoiceHeaderExternalSystemCode(
            command.payload.externalSystemCode,
          ),
        businessPartnerId:
          new BusinessPartnerPortalSalesInvoiceHeaderBusinessPartnerId(
            command.payload.businessPartnerId,
            { undefinable: true },
          ),
        invoiceDate: new BusinessPartnerPortalSalesInvoiceHeaderInvoiceDate(
          command.payload.invoiceDate,
          { undefinable: true },
        ),
        dueDate: new BusinessPartnerPortalSalesInvoiceHeaderDueDate(
          command.payload.dueDate,
        ),
        status: new BusinessPartnerPortalSalesInvoiceHeaderStatus(
          command.payload.status,
          { undefinable: true },
        ),
        subtotal: new BusinessPartnerPortalSalesInvoiceHeaderSubtotal(
          command.payload.subtotal,
          { undefinable: true },
        ),
        taxAmount: new BusinessPartnerPortalSalesInvoiceHeaderTaxAmount(
          command.payload.taxAmount,
          { undefinable: true },
        ),
        discountAmount:
          new BusinessPartnerPortalSalesInvoiceHeaderDiscountAmount(
            command.payload.discountAmount,
            { undefinable: true },
          ),
        totalAmount: new BusinessPartnerPortalSalesInvoiceHeaderTotalAmount(
          command.payload.totalAmount,
          { undefinable: true },
        ),
        paidAmount: new BusinessPartnerPortalSalesInvoiceHeaderPaidAmount(
          command.payload.paidAmount,
          { undefinable: true },
        ),
        currencyCode: new BusinessPartnerPortalSalesInvoiceHeaderCurrencyCode(
          command.payload.currencyCode,
          { undefinable: true },
        ),
        paymentTermDays:
          new BusinessPartnerPortalSalesInvoiceHeaderPaymentTermDays(
            command.payload.paymentTermDays,
          ),
        notes: new BusinessPartnerPortalSalesInvoiceHeaderNotes(
          command.payload.notes,
        ),
        customerNotes: new BusinessPartnerPortalSalesInvoiceHeaderCustomerNotes(
          command.payload.customerNotes,
        ),
      },
      command.constraint,
      command.cQMetadata,
    );
  }
}
