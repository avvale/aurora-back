/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalPurchaseInvoiceHeaderMapper } from '@app/business-partner-portal/purchase-invoice-header';
import {
  BusinessPartnerPortalPurchaseInvoicePosition,
  BusinessPartnerPortalPurchaseInvoicePositionResponse,
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
import {
  CQMetadata,
  IMapper,
  LiteralObject,
  MapperOptions,
} from '@aurorajs.dev/core';

export class BusinessPartnerPortalPurchaseInvoicePositionMapper
  implements IMapper
{
  constructor(public options: MapperOptions = { eagerLoading: true }) {}

  /**
   * Map object to aggregate
   * @param purchaseInvoicePosition
   */
  mapModelToAggregate(
    purchaseInvoicePosition: LiteralObject,
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalPurchaseInvoicePosition {
    if (!purchaseInvoicePosition) return;

    return this.makeAggregate(purchaseInvoicePosition, cQMetadata);
  }

  /**
   * Map array of objects to array aggregates
   * @param purchaseInvoicePositions
   */
  mapModelsToAggregates(
    purchaseInvoicePositions: LiteralObject[],
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalPurchaseInvoicePosition[] {
    if (!Array.isArray(purchaseInvoicePositions)) return;

    return purchaseInvoicePositions.map((purchaseInvoicePosition) =>
      this.makeAggregate(purchaseInvoicePosition, cQMetadata),
    );
  }

  /**
   * Map aggregate to response
   * @param purchaseInvoicePosition
   */
  mapAggregateToResponse(
    purchaseInvoicePosition: BusinessPartnerPortalPurchaseInvoicePosition,
  ): BusinessPartnerPortalPurchaseInvoicePositionResponse {
    return this.makeResponse(purchaseInvoicePosition);
  }

  /**
   * Map array of aggregates to array responses
   * @param purchaseInvoicePositions
   */
  mapAggregatesToResponses(
    purchaseInvoicePositions: BusinessPartnerPortalPurchaseInvoicePosition[],
  ): BusinessPartnerPortalPurchaseInvoicePositionResponse[] {
    if (!Array.isArray(purchaseInvoicePositions)) return;

    return purchaseInvoicePositions.map((purchaseInvoicePosition) =>
      this.makeResponse(purchaseInvoicePosition),
    );
  }

  private makeAggregate(
    purchaseInvoicePosition: LiteralObject,
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalPurchaseInvoicePosition {
    return BusinessPartnerPortalPurchaseInvoicePosition.register(
      new BusinessPartnerPortalPurchaseInvoicePositionId(
        purchaseInvoicePosition.id,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoicePositionRowId(
        purchaseInvoicePosition.rowId,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoicePositionPurchaseInvoiceHeaderId(
        purchaseInvoicePosition.purchaseInvoiceHeaderId,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoicePositionPositionNumber(
        purchaseInvoicePosition.positionNumber,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoicePositionDescription(
        purchaseInvoicePosition.description,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoicePositionProductCode(
        purchaseInvoicePosition.productCode,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoicePositionQuantity(
        purchaseInvoicePosition.quantity,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoicePositionUnitPrice(
        purchaseInvoicePosition.unitPrice,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoicePositionDiscountPercent(
        purchaseInvoicePosition.discountPercent,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoicePositionDiscountAmount(
        purchaseInvoicePosition.discountAmount,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoicePositionTaxPercent(
        purchaseInvoicePosition.taxPercent,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoicePositionTaxAmount(
        purchaseInvoicePosition.taxAmount,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoicePositionSubtotal(
        purchaseInvoicePosition.subtotal,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoicePositionPositionTotal(
        purchaseInvoicePosition.positionTotal,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoicePositionExpenseCategory(
        purchaseInvoicePosition.expenseCategory,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoicePositionNotes(
        purchaseInvoicePosition.notes,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoicePositionCreatedAt(
        purchaseInvoicePosition.createdAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      new BusinessPartnerPortalPurchaseInvoicePositionUpdatedAt(
        purchaseInvoicePosition.updatedAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      new BusinessPartnerPortalPurchaseInvoicePositionDeletedAt(
        purchaseInvoicePosition.deletedAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      this.options.eagerLoading
        ? new BusinessPartnerPortalPurchaseInvoiceHeaderMapper({
            eagerLoading: true,
          }).mapModelToAggregate(
            purchaseInvoicePosition.purchaseInvoiceHeader,
            cQMetadata,
          )
        : undefined,
    );
  }

  private makeResponse(
    purchaseInvoicePosition: BusinessPartnerPortalPurchaseInvoicePosition,
  ): BusinessPartnerPortalPurchaseInvoicePositionResponse {
    if (!purchaseInvoicePosition) return null;

    return new BusinessPartnerPortalPurchaseInvoicePositionResponse(
      purchaseInvoicePosition.id.value,
      purchaseInvoicePosition.rowId.value,
      purchaseInvoicePosition.purchaseInvoiceHeaderId.value,
      purchaseInvoicePosition.positionNumber.value,
      purchaseInvoicePosition.description.value,
      purchaseInvoicePosition.productCode.value,
      purchaseInvoicePosition.quantity.value,
      purchaseInvoicePosition.unitPrice.value,
      purchaseInvoicePosition.discountPercent.value,
      purchaseInvoicePosition.discountAmount.value,
      purchaseInvoicePosition.taxPercent.value,
      purchaseInvoicePosition.taxAmount.value,
      purchaseInvoicePosition.subtotal.value,
      purchaseInvoicePosition.positionTotal.value,
      purchaseInvoicePosition.expenseCategory.value,
      purchaseInvoicePosition.notes.value,
      purchaseInvoicePosition.createdAt.value,
      purchaseInvoicePosition.updatedAt.value,
      purchaseInvoicePosition.deletedAt.value,
      this.options.eagerLoading
        ? new BusinessPartnerPortalPurchaseInvoiceHeaderMapper({
            eagerLoading: true,
          }).mapAggregateToResponse(
            purchaseInvoicePosition.purchaseInvoiceHeader,
          )
        : undefined,
    );
  }
}
