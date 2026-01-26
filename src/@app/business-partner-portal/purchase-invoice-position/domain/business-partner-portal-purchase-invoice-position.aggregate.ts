/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalPurchaseInvoiceHeader } from '@app/business-partner-portal/purchase-invoice-header';
import {
  BusinessPartnerPortalCreatedPurchaseInvoicePositionEvent,
  BusinessPartnerPortalDeletedPurchaseInvoicePositionEvent,
  BusinessPartnerPortalUpdatedPurchaseInvoicePositionEvent,
} from '@app/business-partner-portal/purchase-invoice-position';
import {
  BusinessPartnerPortalPurchaseInvoicePositionCreatedAt,
  BusinessPartnerPortalPurchaseInvoicePositionDeletedAt,
  BusinessPartnerPortalPurchaseInvoicePositionDescription,
  BusinessPartnerPortalPurchaseInvoicePositionDiscountAmount,
  BusinessPartnerPortalPurchaseInvoicePositionDiscountPercent,
  BusinessPartnerPortalPurchaseInvoicePositionExpenseCategory,
  BusinessPartnerPortalPurchaseInvoicePositionId,
  BusinessPartnerPortalPurchaseInvoicePositionNotes,
  BusinessPartnerPortalPurchaseInvoicePositionPositionNumber,
  BusinessPartnerPortalPurchaseInvoicePositionPositionTotal,
  BusinessPartnerPortalPurchaseInvoicePositionProductCode,
  BusinessPartnerPortalPurchaseInvoicePositionPurchaseInvoiceHeaderId,
  BusinessPartnerPortalPurchaseInvoicePositionQuantity,
  BusinessPartnerPortalPurchaseInvoicePositionRowId,
  BusinessPartnerPortalPurchaseInvoicePositionSubtotal,
  BusinessPartnerPortalPurchaseInvoicePositionTaxAmount,
  BusinessPartnerPortalPurchaseInvoicePositionTaxPercent,
  BusinessPartnerPortalPurchaseInvoicePositionUnitPrice,
  BusinessPartnerPortalPurchaseInvoicePositionUpdatedAt,
} from '@app/business-partner-portal/purchase-invoice-position/domain/value-objects';
import { CQMetadata, LiteralObject } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class BusinessPartnerPortalPurchaseInvoicePosition extends AggregateRoot {
  id: BusinessPartnerPortalPurchaseInvoicePositionId;
  rowId: BusinessPartnerPortalPurchaseInvoicePositionRowId;
  purchaseInvoiceHeaderId: BusinessPartnerPortalPurchaseInvoicePositionPurchaseInvoiceHeaderId;
  positionNumber: BusinessPartnerPortalPurchaseInvoicePositionPositionNumber;
  description: BusinessPartnerPortalPurchaseInvoicePositionDescription;
  productCode: BusinessPartnerPortalPurchaseInvoicePositionProductCode;
  quantity: BusinessPartnerPortalPurchaseInvoicePositionQuantity;
  unitPrice: BusinessPartnerPortalPurchaseInvoicePositionUnitPrice;
  discountPercent: BusinessPartnerPortalPurchaseInvoicePositionDiscountPercent;
  discountAmount: BusinessPartnerPortalPurchaseInvoicePositionDiscountAmount;
  taxPercent: BusinessPartnerPortalPurchaseInvoicePositionTaxPercent;
  taxAmount: BusinessPartnerPortalPurchaseInvoicePositionTaxAmount;
  subtotal: BusinessPartnerPortalPurchaseInvoicePositionSubtotal;
  positionTotal: BusinessPartnerPortalPurchaseInvoicePositionPositionTotal;
  expenseCategory: BusinessPartnerPortalPurchaseInvoicePositionExpenseCategory;
  notes: BusinessPartnerPortalPurchaseInvoicePositionNotes;
  createdAt: BusinessPartnerPortalPurchaseInvoicePositionCreatedAt;
  updatedAt: BusinessPartnerPortalPurchaseInvoicePositionUpdatedAt;
  deletedAt: BusinessPartnerPortalPurchaseInvoicePositionDeletedAt;
  purchaseInvoiceHeader: BusinessPartnerPortalPurchaseInvoiceHeader;

  constructor(
    id: BusinessPartnerPortalPurchaseInvoicePositionId,
    rowId: BusinessPartnerPortalPurchaseInvoicePositionRowId,
    purchaseInvoiceHeaderId: BusinessPartnerPortalPurchaseInvoicePositionPurchaseInvoiceHeaderId,
    positionNumber: BusinessPartnerPortalPurchaseInvoicePositionPositionNumber,
    description: BusinessPartnerPortalPurchaseInvoicePositionDescription,
    productCode: BusinessPartnerPortalPurchaseInvoicePositionProductCode,
    quantity: BusinessPartnerPortalPurchaseInvoicePositionQuantity,
    unitPrice: BusinessPartnerPortalPurchaseInvoicePositionUnitPrice,
    discountPercent: BusinessPartnerPortalPurchaseInvoicePositionDiscountPercent,
    discountAmount: BusinessPartnerPortalPurchaseInvoicePositionDiscountAmount,
    taxPercent: BusinessPartnerPortalPurchaseInvoicePositionTaxPercent,
    taxAmount: BusinessPartnerPortalPurchaseInvoicePositionTaxAmount,
    subtotal: BusinessPartnerPortalPurchaseInvoicePositionSubtotal,
    positionTotal: BusinessPartnerPortalPurchaseInvoicePositionPositionTotal,
    expenseCategory: BusinessPartnerPortalPurchaseInvoicePositionExpenseCategory,
    notes: BusinessPartnerPortalPurchaseInvoicePositionNotes,
    createdAt: BusinessPartnerPortalPurchaseInvoicePositionCreatedAt,
    updatedAt: BusinessPartnerPortalPurchaseInvoicePositionUpdatedAt,
    deletedAt: BusinessPartnerPortalPurchaseInvoicePositionDeletedAt,
    purchaseInvoiceHeader?: BusinessPartnerPortalPurchaseInvoiceHeader,
  ) {
    super();
    this.id = id;
    this.rowId = rowId;
    this.purchaseInvoiceHeaderId = purchaseInvoiceHeaderId;
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
    this.expenseCategory = expenseCategory;
    this.notes = notes;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
    this.purchaseInvoiceHeader = purchaseInvoiceHeader;
  }

  static register(
    id: BusinessPartnerPortalPurchaseInvoicePositionId,
    rowId: BusinessPartnerPortalPurchaseInvoicePositionRowId,
    purchaseInvoiceHeaderId: BusinessPartnerPortalPurchaseInvoicePositionPurchaseInvoiceHeaderId,
    positionNumber: BusinessPartnerPortalPurchaseInvoicePositionPositionNumber,
    description: BusinessPartnerPortalPurchaseInvoicePositionDescription,
    productCode: BusinessPartnerPortalPurchaseInvoicePositionProductCode,
    quantity: BusinessPartnerPortalPurchaseInvoicePositionQuantity,
    unitPrice: BusinessPartnerPortalPurchaseInvoicePositionUnitPrice,
    discountPercent: BusinessPartnerPortalPurchaseInvoicePositionDiscountPercent,
    discountAmount: BusinessPartnerPortalPurchaseInvoicePositionDiscountAmount,
    taxPercent: BusinessPartnerPortalPurchaseInvoicePositionTaxPercent,
    taxAmount: BusinessPartnerPortalPurchaseInvoicePositionTaxAmount,
    subtotal: BusinessPartnerPortalPurchaseInvoicePositionSubtotal,
    positionTotal: BusinessPartnerPortalPurchaseInvoicePositionPositionTotal,
    expenseCategory: BusinessPartnerPortalPurchaseInvoicePositionExpenseCategory,
    notes: BusinessPartnerPortalPurchaseInvoicePositionNotes,
    createdAt: BusinessPartnerPortalPurchaseInvoicePositionCreatedAt,
    updatedAt: BusinessPartnerPortalPurchaseInvoicePositionUpdatedAt,
    deletedAt: BusinessPartnerPortalPurchaseInvoicePositionDeletedAt,
    purchaseInvoiceHeader?: BusinessPartnerPortalPurchaseInvoiceHeader,
  ): BusinessPartnerPortalPurchaseInvoicePosition {
    return new BusinessPartnerPortalPurchaseInvoicePosition(
      id,
      rowId,
      purchaseInvoiceHeaderId,
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
      expenseCategory,
      notes,
      createdAt,
      updatedAt,
      deletedAt,
      purchaseInvoiceHeader,
    );
  }

  created(event: {
    payload: BusinessPartnerPortalPurchaseInvoicePosition;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalCreatedPurchaseInvoicePositionEvent({
        payload: {
          id: event.payload.id.value,
          purchaseInvoiceHeaderId: event.payload.purchaseInvoiceHeaderId.value,
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
          expenseCategory: event.payload.expenseCategory?.value,
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
    payload: BusinessPartnerPortalPurchaseInvoicePosition;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalUpdatedPurchaseInvoicePositionEvent({
        payload: {
          id: event.payload.id?.value,
          purchaseInvoiceHeaderId: event.payload.purchaseInvoiceHeaderId?.value,
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
          expenseCategory: event.payload.expenseCategory?.value,
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
    payload: BusinessPartnerPortalPurchaseInvoicePosition;
    cQMetadata?: CQMetadata;
  }): void {
    this.apply(
      new BusinessPartnerPortalDeletedPurchaseInvoicePositionEvent({
        payload: {
          id: event.payload.id.value,
          rowId: event.payload.rowId.value,
          purchaseInvoiceHeaderId: event.payload.purchaseInvoiceHeaderId.value,
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
          expenseCategory: event.payload.expenseCategory?.value,
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
      purchaseInvoiceHeaderId: this.purchaseInvoiceHeaderId.value,
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
      expenseCategory: this.expenseCategory?.value,
      notes: this.notes?.value,
      createdAt: this.createdAt?.value,
      updatedAt: this.updatedAt?.value,
      deletedAt: this.deletedAt?.value,
      purchaseInvoiceHeader: this.purchaseInvoiceHeader?.toDTO(),
    };
  }

  // function called to get data for repository side effect methods
  toRepository(): LiteralObject {
    return {
      id: this.id.value,
      purchaseInvoiceHeaderId: this.purchaseInvoiceHeaderId.value,
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
      expenseCategory: this.expenseCategory?.value,
      notes: this.notes?.value,
      createdAt: this.createdAt?.value,
      updatedAt: this.updatedAt?.value,
      deletedAt: this.deletedAt?.value,
      purchaseInvoiceHeader: this.purchaseInvoiceHeader?.toDTO(),
    };
  }
}
