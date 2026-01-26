/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartner } from '@app/business-partner-portal/business-partner';
import {
  BusinessPartnerPortalCreatedPurchaseInvoiceHeaderEvent,
  BusinessPartnerPortalDeletedPurchaseInvoiceHeaderEvent,
  BusinessPartnerPortalUpdatedPurchaseInvoiceHeaderEvent,
} from '@app/business-partner-portal/purchase-invoice-header';
import {
  BusinessPartnerPortalPurchaseInvoiceHeaderApprovalNotes,
  BusinessPartnerPortalPurchaseInvoiceHeaderBusinessPartnerId,
  BusinessPartnerPortalPurchaseInvoiceHeaderCreatedAt,
  BusinessPartnerPortalPurchaseInvoiceHeaderCurrencyCode,
  BusinessPartnerPortalPurchaseInvoiceHeaderDeletedAt,
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
  BusinessPartnerPortalPurchaseInvoiceHeaderUpdatedAt,
} from '@app/business-partner-portal/purchase-invoice-header/domain/value-objects';
import { BusinessPartnerPortalPurchaseInvoicePosition } from '@app/business-partner-portal/purchase-invoice-position';
import { CQMetadata, LiteralObject } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class BusinessPartnerPortalPurchaseInvoiceHeader extends AggregateRoot {
  id: BusinessPartnerPortalPurchaseInvoiceHeaderId;
  rowId: BusinessPartnerPortalPurchaseInvoiceHeaderRowId;
  invoiceNumber: BusinessPartnerPortalPurchaseInvoiceHeaderInvoiceNumber;
  supplierInvoiceNumber: BusinessPartnerPortalPurchaseInvoiceHeaderSupplierInvoiceNumber;
  externalId: BusinessPartnerPortalPurchaseInvoiceHeaderExternalId;
  externalSystemCode: BusinessPartnerPortalPurchaseInvoiceHeaderExternalSystemCode;
  businessPartnerId: BusinessPartnerPortalPurchaseInvoiceHeaderBusinessPartnerId;
  invoiceDate: BusinessPartnerPortalPurchaseInvoiceHeaderInvoiceDate;
  receivedDate: BusinessPartnerPortalPurchaseInvoiceHeaderReceivedDate;
  dueDate: BusinessPartnerPortalPurchaseInvoiceHeaderDueDate;
  status: BusinessPartnerPortalPurchaseInvoiceHeaderStatus;
  subtotal: BusinessPartnerPortalPurchaseInvoiceHeaderSubtotal;
  taxAmount: BusinessPartnerPortalPurchaseInvoiceHeaderTaxAmount;
  discountAmount: BusinessPartnerPortalPurchaseInvoiceHeaderDiscountAmount;
  totalAmount: BusinessPartnerPortalPurchaseInvoiceHeaderTotalAmount;
  paidAmount: BusinessPartnerPortalPurchaseInvoiceHeaderPaidAmount;
  currencyCode: BusinessPartnerPortalPurchaseInvoiceHeaderCurrencyCode;
  paymentTermDays: BusinessPartnerPortalPurchaseInvoiceHeaderPaymentTermDays;
  notes: BusinessPartnerPortalPurchaseInvoiceHeaderNotes;
  approvalNotes: BusinessPartnerPortalPurchaseInvoiceHeaderApprovalNotes;
  createdAt: BusinessPartnerPortalPurchaseInvoiceHeaderCreatedAt;
  updatedAt: BusinessPartnerPortalPurchaseInvoiceHeaderUpdatedAt;
  deletedAt: BusinessPartnerPortalPurchaseInvoiceHeaderDeletedAt;
  businessPartner: BusinessPartnerPortalBusinessPartner;
  positions: BusinessPartnerPortalPurchaseInvoicePosition[];

  constructor(
    id: BusinessPartnerPortalPurchaseInvoiceHeaderId,
    rowId: BusinessPartnerPortalPurchaseInvoiceHeaderRowId,
    invoiceNumber: BusinessPartnerPortalPurchaseInvoiceHeaderInvoiceNumber,
    supplierInvoiceNumber: BusinessPartnerPortalPurchaseInvoiceHeaderSupplierInvoiceNumber,
    externalId: BusinessPartnerPortalPurchaseInvoiceHeaderExternalId,
    externalSystemCode: BusinessPartnerPortalPurchaseInvoiceHeaderExternalSystemCode,
    businessPartnerId: BusinessPartnerPortalPurchaseInvoiceHeaderBusinessPartnerId,
    invoiceDate: BusinessPartnerPortalPurchaseInvoiceHeaderInvoiceDate,
    receivedDate: BusinessPartnerPortalPurchaseInvoiceHeaderReceivedDate,
    dueDate: BusinessPartnerPortalPurchaseInvoiceHeaderDueDate,
    status: BusinessPartnerPortalPurchaseInvoiceHeaderStatus,
    subtotal: BusinessPartnerPortalPurchaseInvoiceHeaderSubtotal,
    taxAmount: BusinessPartnerPortalPurchaseInvoiceHeaderTaxAmount,
    discountAmount: BusinessPartnerPortalPurchaseInvoiceHeaderDiscountAmount,
    totalAmount: BusinessPartnerPortalPurchaseInvoiceHeaderTotalAmount,
    paidAmount: BusinessPartnerPortalPurchaseInvoiceHeaderPaidAmount,
    currencyCode: BusinessPartnerPortalPurchaseInvoiceHeaderCurrencyCode,
    paymentTermDays: BusinessPartnerPortalPurchaseInvoiceHeaderPaymentTermDays,
    notes: BusinessPartnerPortalPurchaseInvoiceHeaderNotes,
    approvalNotes: BusinessPartnerPortalPurchaseInvoiceHeaderApprovalNotes,
    createdAt: BusinessPartnerPortalPurchaseInvoiceHeaderCreatedAt,
    updatedAt: BusinessPartnerPortalPurchaseInvoiceHeaderUpdatedAt,
    deletedAt: BusinessPartnerPortalPurchaseInvoiceHeaderDeletedAt,
    businessPartner?: BusinessPartnerPortalBusinessPartner,
    positions?: BusinessPartnerPortalPurchaseInvoicePosition[],
  ) {
    super();
    this.id = id;
    this.rowId = rowId;
    this.invoiceNumber = invoiceNumber;
    this.supplierInvoiceNumber = supplierInvoiceNumber;
    this.externalId = externalId;
    this.externalSystemCode = externalSystemCode;
    this.businessPartnerId = businessPartnerId;
    this.invoiceDate = invoiceDate;
    this.receivedDate = receivedDate;
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
    this.approvalNotes = approvalNotes;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
    this.businessPartner = businessPartner;
    this.positions = positions;
  }

  static register(
    id: BusinessPartnerPortalPurchaseInvoiceHeaderId,
    rowId: BusinessPartnerPortalPurchaseInvoiceHeaderRowId,
    invoiceNumber: BusinessPartnerPortalPurchaseInvoiceHeaderInvoiceNumber,
    supplierInvoiceNumber: BusinessPartnerPortalPurchaseInvoiceHeaderSupplierInvoiceNumber,
    externalId: BusinessPartnerPortalPurchaseInvoiceHeaderExternalId,
    externalSystemCode: BusinessPartnerPortalPurchaseInvoiceHeaderExternalSystemCode,
    businessPartnerId: BusinessPartnerPortalPurchaseInvoiceHeaderBusinessPartnerId,
    invoiceDate: BusinessPartnerPortalPurchaseInvoiceHeaderInvoiceDate,
    receivedDate: BusinessPartnerPortalPurchaseInvoiceHeaderReceivedDate,
    dueDate: BusinessPartnerPortalPurchaseInvoiceHeaderDueDate,
    status: BusinessPartnerPortalPurchaseInvoiceHeaderStatus,
    subtotal: BusinessPartnerPortalPurchaseInvoiceHeaderSubtotal,
    taxAmount: BusinessPartnerPortalPurchaseInvoiceHeaderTaxAmount,
    discountAmount: BusinessPartnerPortalPurchaseInvoiceHeaderDiscountAmount,
    totalAmount: BusinessPartnerPortalPurchaseInvoiceHeaderTotalAmount,
    paidAmount: BusinessPartnerPortalPurchaseInvoiceHeaderPaidAmount,
    currencyCode: BusinessPartnerPortalPurchaseInvoiceHeaderCurrencyCode,
    paymentTermDays: BusinessPartnerPortalPurchaseInvoiceHeaderPaymentTermDays,
    notes: BusinessPartnerPortalPurchaseInvoiceHeaderNotes,
    approvalNotes: BusinessPartnerPortalPurchaseInvoiceHeaderApprovalNotes,
    createdAt: BusinessPartnerPortalPurchaseInvoiceHeaderCreatedAt,
    updatedAt: BusinessPartnerPortalPurchaseInvoiceHeaderUpdatedAt,
    deletedAt: BusinessPartnerPortalPurchaseInvoiceHeaderDeletedAt,
    businessPartner?: BusinessPartnerPortalBusinessPartner,
    positions?: BusinessPartnerPortalPurchaseInvoicePosition[],
  ): BusinessPartnerPortalPurchaseInvoiceHeader {
    return new BusinessPartnerPortalPurchaseInvoiceHeader(
      id,
      rowId,
      invoiceNumber,
      supplierInvoiceNumber,
      externalId,
      externalSystemCode,
      businessPartnerId,
      invoiceDate,
      receivedDate,
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
      approvalNotes,
      createdAt,
      updatedAt,
      deletedAt,
      businessPartner,
      positions,
    );
  }

  created(event: {
    payload: BusinessPartnerPortalPurchaseInvoiceHeader;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalCreatedPurchaseInvoiceHeaderEvent({
        payload: {
          id: event.payload.id.value,
          invoiceNumber: event.payload.invoiceNumber.value,
          supplierInvoiceNumber: event.payload.supplierInvoiceNumber?.value,
          externalId: event.payload.externalId?.value,
          externalSystemCode: event.payload.externalSystemCode?.value,
          businessPartnerId: event.payload.businessPartnerId.value,
          invoiceDate: event.payload.invoiceDate.value,
          receivedDate: event.payload.receivedDate?.value,
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
          approvalNotes: event.payload.approvalNotes?.value,
          createdAt: event.payload.createdAt?.value,
          updatedAt: event.payload.updatedAt?.value,
          deletedAt: event.payload.deletedAt?.value,
        },
        cQMetadata: event.cQMetadata,
      }),
    );
  }

  updated(event: {
    payload: BusinessPartnerPortalPurchaseInvoiceHeader;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalUpdatedPurchaseInvoiceHeaderEvent({
        payload: {
          id: event.payload.id?.value,
          invoiceNumber: event.payload.invoiceNumber?.value,
          supplierInvoiceNumber: event.payload.supplierInvoiceNumber?.value,
          externalId: event.payload.externalId?.value,
          externalSystemCode: event.payload.externalSystemCode?.value,
          businessPartnerId: event.payload.businessPartnerId?.value,
          invoiceDate: event.payload.invoiceDate?.value,
          receivedDate: event.payload.receivedDate?.value,
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
          approvalNotes: event.payload.approvalNotes?.value,
          createdAt: event.payload.createdAt?.value,
          updatedAt: event.payload.updatedAt?.value,
          deletedAt: event.payload.deletedAt?.value,
        },
        cQMetadata: event.cQMetadata,
      }),
    );
  }

  deleted(event: {
    payload: BusinessPartnerPortalPurchaseInvoiceHeader;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalDeletedPurchaseInvoiceHeaderEvent({
        payload: {
          id: event.payload.id.value,
          rowId: event.payload.rowId.value,
          invoiceNumber: event.payload.invoiceNumber.value,
          supplierInvoiceNumber: event.payload.supplierInvoiceNumber?.value,
          externalId: event.payload.externalId?.value,
          externalSystemCode: event.payload.externalSystemCode?.value,
          businessPartnerId: event.payload.businessPartnerId.value,
          invoiceDate: event.payload.invoiceDate.value,
          receivedDate: event.payload.receivedDate?.value,
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
          approvalNotes: event.payload.approvalNotes?.value,
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
      supplierInvoiceNumber: this.supplierInvoiceNumber?.value,
      externalId: this.externalId?.value,
      externalSystemCode: this.externalSystemCode?.value,
      businessPartnerId: this.businessPartnerId.value,
      invoiceDate: this.invoiceDate.value,
      receivedDate: this.receivedDate?.value,
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
      approvalNotes: this.approvalNotes?.value,
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
      supplierInvoiceNumber: this.supplierInvoiceNumber?.value,
      externalId: this.externalId?.value,
      externalSystemCode: this.externalSystemCode?.value,
      businessPartnerId: this.businessPartnerId.value,
      invoiceDate: this.invoiceDate.value,
      receivedDate: this.receivedDate?.value,
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
      approvalNotes: this.approvalNotes?.value,
      createdAt: this.createdAt?.value,
      updatedAt: this.updatedAt?.value,
      deletedAt: this.deletedAt?.value,
      businessPartner: this.businessPartner?.toDTO(),
      positions: this.positions?.map((item) => item.toDTO()),
    };
  }
}
