/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalSalesInvoiceHeader } from '@app/business-partner-portal/sales-invoice-header';
import {
  BusinessPartnerPortalCreatedSalesInvoicePositionEvent,
  BusinessPartnerPortalDeletedSalesInvoicePositionEvent,
  BusinessPartnerPortalUpdatedSalesInvoicePositionEvent,
} from '@app/business-partner-portal/sales-invoice-position';
import {
  BusinessPartnerPortalSalesInvoicePositionCreatedAt,
  BusinessPartnerPortalSalesInvoicePositionDeletedAt,
  BusinessPartnerPortalSalesInvoicePositionDescription,
  BusinessPartnerPortalSalesInvoicePositionDiscountAmount,
  BusinessPartnerPortalSalesInvoicePositionDiscountPercent,
  BusinessPartnerPortalSalesInvoicePositionId,
  BusinessPartnerPortalSalesInvoicePositionNotes,
  BusinessPartnerPortalSalesInvoicePositionPositionNumber,
  BusinessPartnerPortalSalesInvoicePositionPositionTotal,
  BusinessPartnerPortalSalesInvoicePositionProductCode,
  BusinessPartnerPortalSalesInvoicePositionQuantity,
  BusinessPartnerPortalSalesInvoicePositionRowId,
  BusinessPartnerPortalSalesInvoicePositionSalesInvoiceHeaderId,
  BusinessPartnerPortalSalesInvoicePositionSubtotal,
  BusinessPartnerPortalSalesInvoicePositionTaxAmount,
  BusinessPartnerPortalSalesInvoicePositionTaxPercent,
  BusinessPartnerPortalSalesInvoicePositionUnitPrice,
  BusinessPartnerPortalSalesInvoicePositionUpdatedAt,
} from '@app/business-partner-portal/sales-invoice-position/domain/value-objects';
import { CQMetadata, LiteralObject } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class BusinessPartnerPortalSalesInvoicePosition extends AggregateRoot {
  id: BusinessPartnerPortalSalesInvoicePositionId;
  rowId: BusinessPartnerPortalSalesInvoicePositionRowId;
  salesInvoiceHeaderId: BusinessPartnerPortalSalesInvoicePositionSalesInvoiceHeaderId;
  positionNumber: BusinessPartnerPortalSalesInvoicePositionPositionNumber;
  description: BusinessPartnerPortalSalesInvoicePositionDescription;
  productCode: BusinessPartnerPortalSalesInvoicePositionProductCode;
  quantity: BusinessPartnerPortalSalesInvoicePositionQuantity;
  unitPrice: BusinessPartnerPortalSalesInvoicePositionUnitPrice;
  discountPercent: BusinessPartnerPortalSalesInvoicePositionDiscountPercent;
  discountAmount: BusinessPartnerPortalSalesInvoicePositionDiscountAmount;
  taxPercent: BusinessPartnerPortalSalesInvoicePositionTaxPercent;
  taxAmount: BusinessPartnerPortalSalesInvoicePositionTaxAmount;
  subtotal: BusinessPartnerPortalSalesInvoicePositionSubtotal;
  positionTotal: BusinessPartnerPortalSalesInvoicePositionPositionTotal;
  notes: BusinessPartnerPortalSalesInvoicePositionNotes;
  createdAt: BusinessPartnerPortalSalesInvoicePositionCreatedAt;
  updatedAt: BusinessPartnerPortalSalesInvoicePositionUpdatedAt;
  deletedAt: BusinessPartnerPortalSalesInvoicePositionDeletedAt;
  salesInvoiceHeader: BusinessPartnerPortalSalesInvoiceHeader;

  constructor(
    id: BusinessPartnerPortalSalesInvoicePositionId,
    rowId: BusinessPartnerPortalSalesInvoicePositionRowId,
    salesInvoiceHeaderId: BusinessPartnerPortalSalesInvoicePositionSalesInvoiceHeaderId,
    positionNumber: BusinessPartnerPortalSalesInvoicePositionPositionNumber,
    description: BusinessPartnerPortalSalesInvoicePositionDescription,
    productCode: BusinessPartnerPortalSalesInvoicePositionProductCode,
    quantity: BusinessPartnerPortalSalesInvoicePositionQuantity,
    unitPrice: BusinessPartnerPortalSalesInvoicePositionUnitPrice,
    discountPercent: BusinessPartnerPortalSalesInvoicePositionDiscountPercent,
    discountAmount: BusinessPartnerPortalSalesInvoicePositionDiscountAmount,
    taxPercent: BusinessPartnerPortalSalesInvoicePositionTaxPercent,
    taxAmount: BusinessPartnerPortalSalesInvoicePositionTaxAmount,
    subtotal: BusinessPartnerPortalSalesInvoicePositionSubtotal,
    positionTotal: BusinessPartnerPortalSalesInvoicePositionPositionTotal,
    notes: BusinessPartnerPortalSalesInvoicePositionNotes,
    createdAt: BusinessPartnerPortalSalesInvoicePositionCreatedAt,
    updatedAt: BusinessPartnerPortalSalesInvoicePositionUpdatedAt,
    deletedAt: BusinessPartnerPortalSalesInvoicePositionDeletedAt,
    salesInvoiceHeader?: BusinessPartnerPortalSalesInvoiceHeader,
  ) {
    super();
    this.id = id;
    this.rowId = rowId;
    this.salesInvoiceHeaderId = salesInvoiceHeaderId;
    this.positionNumber = positionNumber;
    this.description = description;
    this.productCode = productCode;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.discountPercent = discountPercent;
    this.discountAmount = discountAmount;
    this.taxPercent = taxPercent;
    this.taxAmount = taxAmount;
    this.subtotal = subtotal;
    this.positionTotal = positionTotal;
    this.notes = notes;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
    this.salesInvoiceHeader = salesInvoiceHeader;
  }

  static register(
    id: BusinessPartnerPortalSalesInvoicePositionId,
    rowId: BusinessPartnerPortalSalesInvoicePositionRowId,
    salesInvoiceHeaderId: BusinessPartnerPortalSalesInvoicePositionSalesInvoiceHeaderId,
    positionNumber: BusinessPartnerPortalSalesInvoicePositionPositionNumber,
    description: BusinessPartnerPortalSalesInvoicePositionDescription,
    productCode: BusinessPartnerPortalSalesInvoicePositionProductCode,
    quantity: BusinessPartnerPortalSalesInvoicePositionQuantity,
    unitPrice: BusinessPartnerPortalSalesInvoicePositionUnitPrice,
    discountPercent: BusinessPartnerPortalSalesInvoicePositionDiscountPercent,
    discountAmount: BusinessPartnerPortalSalesInvoicePositionDiscountAmount,
    taxPercent: BusinessPartnerPortalSalesInvoicePositionTaxPercent,
    taxAmount: BusinessPartnerPortalSalesInvoicePositionTaxAmount,
    subtotal: BusinessPartnerPortalSalesInvoicePositionSubtotal,
    positionTotal: BusinessPartnerPortalSalesInvoicePositionPositionTotal,
    notes: BusinessPartnerPortalSalesInvoicePositionNotes,
    createdAt: BusinessPartnerPortalSalesInvoicePositionCreatedAt,
    updatedAt: BusinessPartnerPortalSalesInvoicePositionUpdatedAt,
    deletedAt: BusinessPartnerPortalSalesInvoicePositionDeletedAt,
    salesInvoiceHeader?: BusinessPartnerPortalSalesInvoiceHeader,
  ): BusinessPartnerPortalSalesInvoicePosition {
    return new BusinessPartnerPortalSalesInvoicePosition(
      id,
      rowId,
      salesInvoiceHeaderId,
      positionNumber,
      description,
      productCode,
      quantity,
      unitPrice,
      discountPercent,
      discountAmount,
      taxPercent,
      taxAmount,
      subtotal,
      positionTotal,
      notes,
      createdAt,
      updatedAt,
      deletedAt,
      salesInvoiceHeader,
    );
  }

  created(event: {
    payload: BusinessPartnerPortalSalesInvoicePosition;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalCreatedSalesInvoicePositionEvent({
        payload: {
          id: event.payload.id.value,
          salesInvoiceHeaderId: event.payload.salesInvoiceHeaderId.value,
          positionNumber: event.payload.positionNumber.value,
          description: event.payload.description.value,
          productCode: event.payload.productCode?.value,
          quantity: event.payload.quantity.value,
          unitPrice: event.payload.unitPrice.value,
          discountPercent: event.payload.discountPercent.value,
          discountAmount: event.payload.discountAmount.value,
          taxPercent: event.payload.taxPercent.value,
          taxAmount: event.payload.taxAmount.value,
          subtotal: event.payload.subtotal.value,
          positionTotal: event.payload.positionTotal.value,
          notes: event.payload.notes?.value,
          createdAt: event.payload.createdAt?.value,
          updatedAt: event.payload.updatedAt?.value,
          deletedAt: event.payload.deletedAt?.value,
        },
        cQMetadata: event.cQMetadata,
      }),
    );
  }

  updated(event: {
    payload: BusinessPartnerPortalSalesInvoicePosition;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalUpdatedSalesInvoicePositionEvent({
        payload: {
          id: event.payload.id?.value,
          salesInvoiceHeaderId: event.payload.salesInvoiceHeaderId?.value,
          positionNumber: event.payload.positionNumber?.value,
          description: event.payload.description?.value,
          productCode: event.payload.productCode?.value,
          quantity: event.payload.quantity?.value,
          unitPrice: event.payload.unitPrice?.value,
          discountPercent: event.payload.discountPercent?.value,
          discountAmount: event.payload.discountAmount?.value,
          taxPercent: event.payload.taxPercent?.value,
          taxAmount: event.payload.taxAmount?.value,
          subtotal: event.payload.subtotal?.value,
          positionTotal: event.payload.positionTotal?.value,
          notes: event.payload.notes?.value,
          createdAt: event.payload.createdAt?.value,
          updatedAt: event.payload.updatedAt?.value,
          deletedAt: event.payload.deletedAt?.value,
        },
        cQMetadata: event.cQMetadata,
      }),
    );
  }

  deleted(event: {
    payload: BusinessPartnerPortalSalesInvoicePosition;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalDeletedSalesInvoicePositionEvent({
        payload: {
          id: event.payload.id.value,
          rowId: event.payload.rowId.value,
          salesInvoiceHeaderId: event.payload.salesInvoiceHeaderId.value,
          positionNumber: event.payload.positionNumber.value,
          description: event.payload.description.value,
          productCode: event.payload.productCode?.value,
          quantity: event.payload.quantity.value,
          unitPrice: event.payload.unitPrice.value,
          discountPercent: event.payload.discountPercent.value,
          discountAmount: event.payload.discountAmount.value,
          taxPercent: event.payload.taxPercent.value,
          taxAmount: event.payload.taxAmount.value,
          subtotal: event.payload.subtotal.value,
          positionTotal: event.payload.positionTotal.value,
          notes: event.payload.notes?.value,
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
      salesInvoiceHeaderId: this.salesInvoiceHeaderId.value,
      positionNumber: this.positionNumber.value,
      description: this.description.value,
      productCode: this.productCode?.value,
      quantity: this.quantity.value,
      unitPrice: this.unitPrice.value,
      discountPercent: this.discountPercent.value,
      discountAmount: this.discountAmount.value,
      taxPercent: this.taxPercent.value,
      taxAmount: this.taxAmount.value,
      subtotal: this.subtotal.value,
      positionTotal: this.positionTotal.value,
      notes: this.notes?.value,
      createdAt: this.createdAt?.value,
      updatedAt: this.updatedAt?.value,
      deletedAt: this.deletedAt?.value,
      salesInvoiceHeader: this.salesInvoiceHeader?.toDTO(),
    };
  }

  // function called to get data for repository side effect methods
  toRepository(): LiteralObject {
    return {
      id: this.id.value,
      salesInvoiceHeaderId: this.salesInvoiceHeaderId.value,
      positionNumber: this.positionNumber.value,
      description: this.description.value,
      productCode: this.productCode?.value,
      quantity: this.quantity.value,
      unitPrice: this.unitPrice.value,
      discountPercent: this.discountPercent.value,
      discountAmount: this.discountAmount.value,
      taxPercent: this.taxPercent.value,
      taxAmount: this.taxAmount.value,
      subtotal: this.subtotal.value,
      positionTotal: this.positionTotal.value,
      notes: this.notes?.value,
      createdAt: this.createdAt?.value,
      updatedAt: this.updatedAt?.value,
      deletedAt: this.deletedAt?.value,
      salesInvoiceHeader: this.salesInvoiceHeader?.toDTO(),
    };
  }
}
