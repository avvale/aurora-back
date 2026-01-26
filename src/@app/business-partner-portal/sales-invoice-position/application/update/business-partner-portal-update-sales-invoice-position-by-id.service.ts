/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalISalesInvoicePositionRepository,
  BusinessPartnerPortalSalesInvoicePosition,
} from '@app/business-partner-portal/sales-invoice-position';
import {
  BusinessPartnerPortalSalesInvoicePositionDescription,
  BusinessPartnerPortalSalesInvoicePositionDiscountAmount,
  BusinessPartnerPortalSalesInvoicePositionDiscountPercent,
  BusinessPartnerPortalSalesInvoicePositionId,
  BusinessPartnerPortalSalesInvoicePositionNotes,
  BusinessPartnerPortalSalesInvoicePositionPositionNumber,
  BusinessPartnerPortalSalesInvoicePositionPositionTotal,
  BusinessPartnerPortalSalesInvoicePositionProductCode,
  BusinessPartnerPortalSalesInvoicePositionQuantity,
  BusinessPartnerPortalSalesInvoicePositionSalesInvoiceHeaderId,
  BusinessPartnerPortalSalesInvoicePositionSubtotal,
  BusinessPartnerPortalSalesInvoicePositionTaxAmount,
  BusinessPartnerPortalSalesInvoicePositionTaxPercent,
  BusinessPartnerPortalSalesInvoicePositionUnitPrice,
  BusinessPartnerPortalSalesInvoicePositionUpdatedAt,
} from '@app/business-partner-portal/sales-invoice-position/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class BusinessPartnerPortalUpdateSalesInvoicePositionByIdService {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: BusinessPartnerPortalISalesInvoicePositionRepository,
  ) {}

  async main(
    payload: {
      id: BusinessPartnerPortalSalesInvoicePositionId;
      salesInvoiceHeaderId?: BusinessPartnerPortalSalesInvoicePositionSalesInvoiceHeaderId;
      positionNumber?: BusinessPartnerPortalSalesInvoicePositionPositionNumber;
      description?: BusinessPartnerPortalSalesInvoicePositionDescription;
      productCode?: BusinessPartnerPortalSalesInvoicePositionProductCode;
      quantity?: BusinessPartnerPortalSalesInvoicePositionQuantity;
      unitPrice?: BusinessPartnerPortalSalesInvoicePositionUnitPrice;
      discountPercent?: BusinessPartnerPortalSalesInvoicePositionDiscountPercent;
      discountAmount?: BusinessPartnerPortalSalesInvoicePositionDiscountAmount;
      taxPercent?: BusinessPartnerPortalSalesInvoicePositionTaxPercent;
      taxAmount?: BusinessPartnerPortalSalesInvoicePositionTaxAmount;
      subtotal?: BusinessPartnerPortalSalesInvoicePositionSubtotal;
      positionTotal?: BusinessPartnerPortalSalesInvoicePositionPositionTotal;
      notes?: BusinessPartnerPortalSalesInvoicePositionNotes;
    },
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<void> {
    // create aggregate with factory pattern
    const salesInvoicePosition =
      BusinessPartnerPortalSalesInvoicePosition.register(
        payload.id,
        undefined, // rowId
        payload.salesInvoiceHeaderId,
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
        payload.notes,
        null, // createdAt
        new BusinessPartnerPortalSalesInvoicePositionUpdatedAt({
          currentTimestamp: true,
        }),
        null, // deletedAt
      );

    // update by id
    await this.repository.updateById(salesInvoicePosition, {
      constraint,
      cQMetadata,
      updateByIdOptions: cQMetadata?.repositoryOptions,
    });

    // merge EventBus methods with object returned by the repository, to be able to apply and commit events
    const salesInvoicePositionRegister =
      this.publisher.mergeObjectContext(salesInvoicePosition);

    salesInvoicePositionRegister.updated({
      payload: salesInvoicePosition,
      cQMetadata,
    }); // apply event to model events
    salesInvoicePositionRegister.commit(); // commit all events of model
  }
}
