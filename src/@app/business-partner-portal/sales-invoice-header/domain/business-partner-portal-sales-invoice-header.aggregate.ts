/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartner } from '@app/business-partner-portal/business-partner';
import {
  BusinessPartnerPortalCreatedSalesInvoiceHeaderEvent,
  BusinessPartnerPortalDeletedSalesInvoiceHeaderEvent,
  BusinessPartnerPortalUpdatedSalesInvoiceHeaderEvent,
} from '@app/business-partner-portal/sales-invoice-header';
import {
  BusinessPartnerPortalSalesInvoiceHeaderBusinessPartnerId,
  BusinessPartnerPortalSalesInvoiceHeaderCreatedAt,
  BusinessPartnerPortalSalesInvoiceHeaderCurrencyCode,
  BusinessPartnerPortalSalesInvoiceHeaderCustomerNotes,
  BusinessPartnerPortalSalesInvoiceHeaderDeletedAt,
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
  BusinessPartnerPortalSalesInvoiceHeaderUpdatedAt,
} from '@app/business-partner-portal/sales-invoice-header/domain/value-objects';
import { BusinessPartnerPortalSalesInvoicePosition } from '@app/business-partner-portal/sales-invoice-position';
import { CQMetadata, LiteralObject } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class BusinessPartnerPortalSalesInvoiceHeader extends AggregateRoot {
  id: BusinessPartnerPortalSalesInvoiceHeaderId;
  rowId: BusinessPartnerPortalSalesInvoiceHeaderRowId;
  invoiceNumber: BusinessPartnerPortalSalesInvoiceHeaderInvoiceNumber;
  externalId: BusinessPartnerPortalSalesInvoiceHeaderExternalId;
  externalSystemCode: BusinessPartnerPortalSalesInvoiceHeaderExternalSystemCode;
  businessPartnerId: BusinessPartnerPortalSalesInvoiceHeaderBusinessPartnerId;
  invoiceDate: BusinessPartnerPortalSalesInvoiceHeaderInvoiceDate;
  dueDate: BusinessPartnerPortalSalesInvoiceHeaderDueDate;
  status: BusinessPartnerPortalSalesInvoiceHeaderStatus;
  subtotal: BusinessPartnerPortalSalesInvoiceHeaderSubtotal;
  taxAmount: BusinessPartnerPortalSalesInvoiceHeaderTaxAmount;
  discountAmount: BusinessPartnerPortalSalesInvoiceHeaderDiscountAmount;
  totalAmount: BusinessPartnerPortalSalesInvoiceHeaderTotalAmount;
  paidAmount: BusinessPartnerPortalSalesInvoiceHeaderPaidAmount;
  currencyCode: BusinessPartnerPortalSalesInvoiceHeaderCurrencyCode;
  paymentTermDays: BusinessPartnerPortalSalesInvoiceHeaderPaymentTermDays;
  notes: BusinessPartnerPortalSalesInvoiceHeaderNotes;
  customerNotes: BusinessPartnerPortalSalesInvoiceHeaderCustomerNotes;
  createdAt: BusinessPartnerPortalSalesInvoiceHeaderCreatedAt;
  updatedAt: BusinessPartnerPortalSalesInvoiceHeaderUpdatedAt;
  deletedAt: BusinessPartnerPortalSalesInvoiceHeaderDeletedAt;
  businessPartner: BusinessPartnerPortalBusinessPartner;
  positions: BusinessPartnerPortalSalesInvoicePosition[];

  constructor(
    id: BusinessPartnerPortalSalesInvoiceHeaderId,
    rowId: BusinessPartnerPortalSalesInvoiceHeaderRowId,
    invoiceNumber: BusinessPartnerPortalSalesInvoiceHeaderInvoiceNumber,
    externalId: BusinessPartnerPortalSalesInvoiceHeaderExternalId,
    externalSystemCode: BusinessPartnerPortalSalesInvoiceHeaderExternalSystemCode,
    businessPartnerId: BusinessPartnerPortalSalesInvoiceHeaderBusinessPartnerId,
    invoiceDate: BusinessPartnerPortalSalesInvoiceHeaderInvoiceDate,
    dueDate: BusinessPartnerPortalSalesInvoiceHeaderDueDate,
    status: BusinessPartnerPortalSalesInvoiceHeaderStatus,
    subtotal: BusinessPartnerPortalSalesInvoiceHeaderSubtotal,
    taxAmount: BusinessPartnerPortalSalesInvoiceHeaderTaxAmount,
    discountAmount: BusinessPartnerPortalSalesInvoiceHeaderDiscountAmount,
    totalAmount: BusinessPartnerPortalSalesInvoiceHeaderTotalAmount,
    paidAmount: BusinessPartnerPortalSalesInvoiceHeaderPaidAmount,
    currencyCode: BusinessPartnerPortalSalesInvoiceHeaderCurrencyCode,
    paymentTermDays: BusinessPartnerPortalSalesInvoiceHeaderPaymentTermDays,
    notes: BusinessPartnerPortalSalesInvoiceHeaderNotes,
    customerNotes: BusinessPartnerPortalSalesInvoiceHeaderCustomerNotes,
    createdAt: BusinessPartnerPortalSalesInvoiceHeaderCreatedAt,
    updatedAt: BusinessPartnerPortalSalesInvoiceHeaderUpdatedAt,
    deletedAt: BusinessPartnerPortalSalesInvoiceHeaderDeletedAt,
    businessPartner?: BusinessPartnerPortalBusinessPartner,
    positions?: BusinessPartnerPortalSalesInvoicePosition[],
  ) {
    super();
    this.id = id;
    this.rowId = rowId;
    this.invoiceNumber = invoiceNumber;
    this.externalId = externalId;
    this.externalSystemCode = externalSystemCode;
    this.businessPartnerId = businessPartnerId;
    this.invoiceDate = invoiceDate;
    this.dueDate = dueDate;
    this.status = status;
    this.subtotal = subtotal;
    this.taxAmount = taxAmount;
    this.discountAmount = discountAmount;
    this.totalAmount = totalAmount;
    this.paidAmount = paidAmount;
    this.currencyCode = currencyCode;
    this.paymentTermDays = paymentTermDays;
    this.notes = notes;
    this.customerNotes = customerNotes;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
    this.businessPartner = businessPartner;
    this.positions = positions;
  }

  static register(
    id: BusinessPartnerPortalSalesInvoiceHeaderId,
    rowId: BusinessPartnerPortalSalesInvoiceHeaderRowId,
    invoiceNumber: BusinessPartnerPortalSalesInvoiceHeaderInvoiceNumber,
    externalId: BusinessPartnerPortalSalesInvoiceHeaderExternalId,
    externalSystemCode: BusinessPartnerPortalSalesInvoiceHeaderExternalSystemCode,
    businessPartnerId: BusinessPartnerPortalSalesInvoiceHeaderBusinessPartnerId,
    invoiceDate: BusinessPartnerPortalSalesInvoiceHeaderInvoiceDate,
    dueDate: BusinessPartnerPortalSalesInvoiceHeaderDueDate,
    status: BusinessPartnerPortalSalesInvoiceHeaderStatus,
    subtotal: BusinessPartnerPortalSalesInvoiceHeaderSubtotal,
    taxAmount: BusinessPartnerPortalSalesInvoiceHeaderTaxAmount,
    discountAmount: BusinessPartnerPortalSalesInvoiceHeaderDiscountAmount,
    totalAmount: BusinessPartnerPortalSalesInvoiceHeaderTotalAmount,
    paidAmount: BusinessPartnerPortalSalesInvoiceHeaderPaidAmount,
    currencyCode: BusinessPartnerPortalSalesInvoiceHeaderCurrencyCode,
    paymentTermDays: BusinessPartnerPortalSalesInvoiceHeaderPaymentTermDays,
    notes: BusinessPartnerPortalSalesInvoiceHeaderNotes,
    customerNotes: BusinessPartnerPortalSalesInvoiceHeaderCustomerNotes,
    createdAt: BusinessPartnerPortalSalesInvoiceHeaderCreatedAt,
    updatedAt: BusinessPartnerPortalSalesInvoiceHeaderUpdatedAt,
    deletedAt: BusinessPartnerPortalSalesInvoiceHeaderDeletedAt,
    businessPartner?: BusinessPartnerPortalBusinessPartner,
    positions?: BusinessPartnerPortalSalesInvoicePosition[],
  ): BusinessPartnerPortalSalesInvoiceHeader {
    return new BusinessPartnerPortalSalesInvoiceHeader(
      id,
      rowId,
      invoiceNumber,
      externalId,
      externalSystemCode,
      businessPartnerId,
      invoiceDate,
      dueDate,
      status,
      subtotal,
      taxAmount,
      discountAmount,
      totalAmount,
      paidAmount,
      currencyCode,
      paymentTermDays,
      notes,
      customerNotes,
      createdAt,
      updatedAt,
      deletedAt,
      businessPartner,
      positions,
    );
  }

  created(event: {
    payload: BusinessPartnerPortalSalesInvoiceHeader;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalCreatedSalesInvoiceHeaderEvent({
        payload: {
          id: event.payload.id.value,
          invoiceNumber: event.payload.invoiceNumber.value,
          externalId: event.payload.externalId?.value,
          externalSystemCode: event.payload.externalSystemCode?.value,
          businessPartnerId: event.payload.businessPartnerId.value,
          invoiceDate: event.payload.invoiceDate.value,
          dueDate: event.payload.dueDate?.value,
          status: event.payload.status.value,
          subtotal: event.payload.subtotal.value,
          taxAmount: event.payload.taxAmount.value,
          discountAmount: event.payload.discountAmount.value,
          totalAmount: event.payload.totalAmount.value,
          paidAmount: event.payload.paidAmount.value,
          currencyCode: event.payload.currencyCode.value,
          paymentTermDays: event.payload.paymentTermDays?.value,
          notes: event.payload.notes?.value,
          customerNotes: event.payload.customerNotes?.value,
          createdAt: event.payload.createdAt?.value,
          updatedAt: event.payload.updatedAt?.value,
          deletedAt: event.payload.deletedAt?.value,
        },
        cQMetadata: event.cQMetadata,
      }),
    );
  }

  updated(event: {
    payload: BusinessPartnerPortalSalesInvoiceHeader;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalUpdatedSalesInvoiceHeaderEvent({
        payload: {
          id: event.payload.id?.value,
          invoiceNumber: event.payload.invoiceNumber?.value,
          externalId: event.payload.externalId?.value,
          externalSystemCode: event.payload.externalSystemCode?.value,
          businessPartnerId: event.payload.businessPartnerId?.value,
          invoiceDate: event.payload.invoiceDate?.value,
          dueDate: event.payload.dueDate?.value,
          status: event.payload.status?.value,
          subtotal: event.payload.subtotal?.value,
          taxAmount: event.payload.taxAmount?.value,
          discountAmount: event.payload.discountAmount?.value,
          totalAmount: event.payload.totalAmount?.value,
          paidAmount: event.payload.paidAmount?.value,
          currencyCode: event.payload.currencyCode?.value,
          paymentTermDays: event.payload.paymentTermDays?.value,
          notes: event.payload.notes?.value,
          customerNotes: event.payload.customerNotes?.value,
          createdAt: event.payload.createdAt?.value,
          updatedAt: event.payload.updatedAt?.value,
          deletedAt: event.payload.deletedAt?.value,
        },
        cQMetadata: event.cQMetadata,
      }),
    );
  }

  deleted(event: {
    payload: BusinessPartnerPortalSalesInvoiceHeader;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalDeletedSalesInvoiceHeaderEvent({
        payload: {
          id: event.payload.id.value,
          rowId: event.payload.rowId.value,
          invoiceNumber: event.payload.invoiceNumber.value,
          externalId: event.payload.externalId?.value,
          externalSystemCode: event.payload.externalSystemCode?.value,
          businessPartnerId: event.payload.businessPartnerId.value,
          invoiceDate: event.payload.invoiceDate.value,
          dueDate: event.payload.dueDate?.value,
          status: event.payload.status.value,
          subtotal: event.payload.subtotal.value,
          taxAmount: event.payload.taxAmount.value,
          discountAmount: event.payload.discountAmount.value,
          totalAmount: event.payload.totalAmount.value,
          paidAmount: event.payload.paidAmount.value,
          currencyCode: event.payload.currencyCode.value,
          paymentTermDays: event.payload.paymentTermDays?.value,
          notes: event.payload.notes?.value,
          customerNotes: event.payload.customerNotes?.value,
          createdAt: event.payload.createdAt?.value,
          updatedAt: event.payload.updatedAt?.value,
          deletedAt: event.payload.deletedAt?.value,
        },
        cQMetadata: event.cQMetadata,
      }),
    );
  }

  toDTO(): LiteralObject {
    return {
      id: this.id.value,
      rowId: this.rowId.value,
      invoiceNumber: this.invoiceNumber.value,
      externalId: this.externalId?.value,
      externalSystemCode: this.externalSystemCode?.value,
      businessPartnerId: this.businessPartnerId.value,
      invoiceDate: this.invoiceDate.value,
      dueDate: this.dueDate?.value,
      status: this.status.value,
      subtotal: this.subtotal.value,
      taxAmount: this.taxAmount.value,
      discountAmount: this.discountAmount.value,
      totalAmount: this.totalAmount.value,
      paidAmount: this.paidAmount.value,
      currencyCode: this.currencyCode.value,
      paymentTermDays: this.paymentTermDays?.value,
      notes: this.notes?.value,
      customerNotes: this.customerNotes?.value,
      createdAt: this.createdAt?.value,
      updatedAt: this.updatedAt?.value,
      deletedAt: this.deletedAt?.value,
      businessPartner: this.businessPartner?.toDTO(),
      positions: this.positions?.map((item) => item.toDTO()),
    };
  }

  // function called to get data for repository side effect methods
  toRepository(): LiteralObject {
    return {
      id: this.id.value,
      invoiceNumber: this.invoiceNumber.value,
      externalId: this.externalId?.value,
      externalSystemCode: this.externalSystemCode?.value,
      businessPartnerId: this.businessPartnerId.value,
      invoiceDate: this.invoiceDate.value,
      dueDate: this.dueDate?.value,
      status: this.status.value,
      subtotal: this.subtotal.value,
      taxAmount: this.taxAmount.value,
      discountAmount: this.discountAmount.value,
      totalAmount: this.totalAmount.value,
      paidAmount: this.paidAmount.value,
      currencyCode: this.currencyCode.value,
      paymentTermDays: this.paymentTermDays?.value,
      notes: this.notes?.value,
      customerNotes: this.customerNotes?.value,
      createdAt: this.createdAt?.value,
      updatedAt: this.updatedAt?.value,
      deletedAt: this.deletedAt?.value,
      businessPartner: this.businessPartner?.toDTO(),
      positions: this.positions?.map((item) => item.toDTO()),
    };
  }
}
