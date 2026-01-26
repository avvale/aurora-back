/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalIPurchaseInvoicePositionRepository,
  BusinessPartnerPortalPurchaseInvoicePosition,
} from '@app/business-partner-portal/purchase-invoice-position';
import {
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
  BusinessPartnerPortalPurchaseInvoicePositionSubtotal,
  BusinessPartnerPortalPurchaseInvoicePositionTaxAmount,
  BusinessPartnerPortalPurchaseInvoicePositionTaxPercent,
  BusinessPartnerPortalPurchaseInvoicePositionUnitPrice,
  BusinessPartnerPortalPurchaseInvoicePositionUpdatedAt,
} from '@app/business-partner-portal/purchase-invoice-position/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdService {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: BusinessPartnerPortalIPurchaseInvoicePositionRepository,
  ) {}

  async main(
    payload: {
      id: BusinessPartnerPortalPurchaseInvoicePositionId;
      purchaseInvoiceHeaderId?: BusinessPartnerPortalPurchaseInvoicePositionPurchaseInvoiceHeaderId;
      positionNumber?: BusinessPartnerPortalPurchaseInvoicePositionPositionNumber;
      description?: BusinessPartnerPortalPurchaseInvoicePositionDescription;
      productCode?: BusinessPartnerPortalPurchaseInvoicePositionProductCode;
      quantity?: BusinessPartnerPortalPurchaseInvoicePositionQuantity;
      unitPrice?: BusinessPartnerPortalPurchaseInvoicePositionUnitPrice;
      discountPercent?: BusinessPartnerPortalPurchaseInvoicePositionDiscountPercent;
      discountAmount?: BusinessPartnerPortalPurchaseInvoicePositionDiscountAmount;
      taxPercent?: BusinessPartnerPortalPurchaseInvoicePositionTaxPercent;
      taxAmount?: BusinessPartnerPortalPurchaseInvoicePositionTaxAmount;
      subtotal?: BusinessPartnerPortalPurchaseInvoicePositionSubtotal;
      positionTotal?: BusinessPartnerPortalPurchaseInvoicePositionPositionTotal;
      expenseCategory?: BusinessPartnerPortalPurchaseInvoicePositionExpenseCategory;
      notes?: BusinessPartnerPortalPurchaseInvoicePositionNotes;
    },
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<void> {
    // create aggregate with factory pattern
    const purchaseInvoicePosition =
      BusinessPartnerPortalPurchaseInvoicePosition.register(
        payload.id,
        undefined, // rowId
        payload.purchaseInvoiceHeaderId,
        payload.positionNumber,
        payload.description,
        payload.productCode,
        payload.quantity,
        payload.unitPrice,
        payload.discountPercent,
        payload.discountAmount,
        payload.taxPercent,
        payload.taxAmount,
        payload.subtotal,
        payload.positionTotal,
        payload.expenseCategory,
        payload.notes,
        null, // createdAt
        new BusinessPartnerPortalPurchaseInvoicePositionUpdatedAt({
          currentTimestamp: true,
        }),
        null, // deletedAt
      );

    // update by id
    await this.repository.updateById(purchaseInvoicePosition, {
      constraint,
      cQMetadata,
      updateByIdOptions: cQMetadata?.repositoryOptions,
    });

    // merge EventBus methods with object returned by the repository, to be able to apply and commit events
    const purchaseInvoicePositionRegister = this.publisher.mergeObjectContext(
      purchaseInvoicePosition,
    );

    purchaseInvoicePositionRegister.updated({
      payload: purchaseInvoicePosition,
      cQMetadata,
    }); // apply event to model events
    purchaseInvoicePositionRegister.commit(); // commit all events of model
  }
}
