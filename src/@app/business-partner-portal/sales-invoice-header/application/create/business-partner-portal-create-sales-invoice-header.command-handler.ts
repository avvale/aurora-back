/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalCreateSalesInvoiceHeaderCommand } from '@app/business-partner-portal/sales-invoice-header';
import { BusinessPartnerPortalCreateSalesInvoiceHeaderService } from '@app/business-partner-portal/sales-invoice-header/application/create/business-partner-portal-create-sales-invoice-header.service';
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

@CommandHandler(BusinessPartnerPortalCreateSalesInvoiceHeaderCommand)
export class BusinessPartnerPortalCreateSalesInvoiceHeaderCommandHandler
  implements
    ICommandHandler<BusinessPartnerPortalCreateSalesInvoiceHeaderCommand>
{
  constructor(
    private readonly createSalesInvoiceHeaderService: BusinessPartnerPortalCreateSalesInvoiceHeaderService,
  ) {}

  async execute(
    command: BusinessPartnerPortalCreateSalesInvoiceHeaderCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.createSalesInvoiceHeaderService.main(
      {
        id: new BusinessPartnerPortalSalesInvoiceHeaderId(command.payload.id),
        invoiceNumber: new BusinessPartnerPortalSalesInvoiceHeaderInvoiceNumber(
          command.payload.invoiceNumber,
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
          ),
        invoiceDate: new BusinessPartnerPortalSalesInvoiceHeaderInvoiceDate(
          command.payload.invoiceDate,
        ),
        dueDate: new BusinessPartnerPortalSalesInvoiceHeaderDueDate(
          command.payload.dueDate,
        ),
        status: new BusinessPartnerPortalSalesInvoiceHeaderStatus(
          command.payload.status,
        ),
        subtotal: new BusinessPartnerPortalSalesInvoiceHeaderSubtotal(
          command.payload.subtotal,
        ),
        taxAmount: new BusinessPartnerPortalSalesInvoiceHeaderTaxAmount(
          command.payload.taxAmount,
        ),
        discountAmount:
          new BusinessPartnerPortalSalesInvoiceHeaderDiscountAmount(
            command.payload.discountAmount,
          ),
        totalAmount: new BusinessPartnerPortalSalesInvoiceHeaderTotalAmount(
          command.payload.totalAmount,
        ),
        paidAmount: new BusinessPartnerPortalSalesInvoiceHeaderPaidAmount(
          command.payload.paidAmount,
        ),
        currencyCode: new BusinessPartnerPortalSalesInvoiceHeaderCurrencyCode(
          command.payload.currencyCode,
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
      command.cQMetadata,
    );
  }
}
