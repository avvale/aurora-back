/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalISalesInvoiceHeaderRepository,
  BusinessPartnerPortalSalesInvoiceHeader,
} from '@app/business-partner-portal/sales-invoice-header';
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
  BusinessPartnerPortalSalesInvoiceHeaderUpdatedAt,
} from '@app/business-partner-portal/sales-invoice-header/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdService {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: BusinessPartnerPortalISalesInvoiceHeaderRepository,
  ) {}

  async main(
    payload: {
      id: BusinessPartnerPortalSalesInvoiceHeaderId;
      invoiceNumber?: BusinessPartnerPortalSalesInvoiceHeaderInvoiceNumber;
      externalId?: BusinessPartnerPortalSalesInvoiceHeaderExternalId;
      externalSystemCode?: BusinessPartnerPortalSalesInvoiceHeaderExternalSystemCode;
      businessPartnerId?: BusinessPartnerPortalSalesInvoiceHeaderBusinessPartnerId;
      invoiceDate?: BusinessPartnerPortalSalesInvoiceHeaderInvoiceDate;
      dueDate?: BusinessPartnerPortalSalesInvoiceHeaderDueDate;
      status?: BusinessPartnerPortalSalesInvoiceHeaderStatus;
      subtotal?: BusinessPartnerPortalSalesInvoiceHeaderSubtotal;
      taxAmount?: BusinessPartnerPortalSalesInvoiceHeaderTaxAmount;
      discountAmount?: BusinessPartnerPortalSalesInvoiceHeaderDiscountAmount;
      totalAmount?: BusinessPartnerPortalSalesInvoiceHeaderTotalAmount;
      paidAmount?: BusinessPartnerPortalSalesInvoiceHeaderPaidAmount;
      currencyCode?: BusinessPartnerPortalSalesInvoiceHeaderCurrencyCode;
      paymentTermDays?: BusinessPartnerPortalSalesInvoiceHeaderPaymentTermDays;
      notes?: BusinessPartnerPortalSalesInvoiceHeaderNotes;
      customerNotes?: BusinessPartnerPortalSalesInvoiceHeaderCustomerNotes;
    },
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<void> {
    // create aggregate with factory pattern
    const salesInvoiceHeader = BusinessPartnerPortalSalesInvoiceHeader.register(
      payload.id,
      undefined, // rowId
      payload.invoiceNumber,
      payload.externalId,
      payload.externalSystemCode,
      payload.businessPartnerId,
      payload.invoiceDate,
      payload.dueDate,
      payload.status,
      payload.subtotal,
      payload.taxAmount,
      payload.discountAmount,
      payload.totalAmount,
      payload.paidAmount,
      payload.currencyCode,
      payload.paymentTermDays,
      payload.notes,
      payload.customerNotes,
      null, // createdAt
      new BusinessPartnerPortalSalesInvoiceHeaderUpdatedAt({
        currentTimestamp: true,
      }),
      null, // deletedAt
    );

    // update by id
    await this.repository.updateById(salesInvoiceHeader, {
      constraint,
      cQMetadata,
      updateByIdOptions: cQMetadata?.repositoryOptions,
    });

    // merge EventBus methods with object returned by the repository, to be able to apply and commit events
    const salesInvoiceHeaderRegister =
      this.publisher.mergeObjectContext(salesInvoiceHeader);

    salesInvoiceHeaderRegister.updated({
      payload: salesInvoiceHeader,
      cQMetadata,
    }); // apply event to model events
    salesInvoiceHeaderRegister.commit(); // commit all events of model
  }
}
