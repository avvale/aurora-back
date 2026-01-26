/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalISalesInvoicePositionRepository,
  BusinessPartnerPortalSalesInvoicePosition,
} from '@app/business-partner-portal/sales-invoice-position';
import {
  BusinessPartnerPortalSalesInvoicePositionCreatedAt,
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
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class BusinessPartnerPortalCreateSalesInvoicePositionService {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: BusinessPartnerPortalISalesInvoicePositionRepository,
  ) {}

  async main(
    payload: {
      id: BusinessPartnerPortalSalesInvoicePositionId;
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
    },
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
        new BusinessPartnerPortalSalesInvoicePositionCreatedAt({
          currentTimestamp: true,
        }),
        new BusinessPartnerPortalSalesInvoicePositionUpdatedAt({
          currentTimestamp: true,
        }),
        null, // deletedAt
      );

    await this.repository.create(salesInvoicePosition, {
      createOptions: cQMetadata?.repositoryOptions,
    });

    // merge EventBus methods with object returned by the repository, to be able to apply and commit events
    const salesInvoicePositionRegister =
      this.publisher.mergeObjectContext(salesInvoicePosition);

    salesInvoicePositionRegister.created({
      payload: salesInvoicePosition,
      cQMetadata,
    }); // apply event to model events
    salesInvoicePositionRegister.commit(); // commit all events of model
  }
}
