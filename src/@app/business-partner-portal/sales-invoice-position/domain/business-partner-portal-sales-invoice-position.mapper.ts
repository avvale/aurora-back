/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalSalesInvoiceHeaderMapper } from '@app/business-partner-portal/sales-invoice-header';
import {
  BusinessPartnerPortalSalesInvoicePosition,
  BusinessPartnerPortalSalesInvoicePositionResponse,
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
import {
  CQMetadata,
  IMapper,
  LiteralObject,
  MapperOptions,
} from '@aurorajs.dev/core';

export class BusinessPartnerPortalSalesInvoicePositionMapper
  implements IMapper
{
  constructor(public options: MapperOptions = { eagerLoading: true }) {}

  /**
   * Map object to aggregate
   * @param salesInvoicePosition
   */
  mapModelToAggregate(
    salesInvoicePosition: LiteralObject,
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalSalesInvoicePosition {
    if (!salesInvoicePosition) return;

    return this.makeAggregate(salesInvoicePosition, cQMetadata);
  }

  /**
   * Map array of objects to array aggregates
   * @param salesInvoicePositions
   */
  mapModelsToAggregates(
    salesInvoicePositions: LiteralObject[],
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalSalesInvoicePosition[] {
    if (!Array.isArray(salesInvoicePositions)) return;

    return salesInvoicePositions.map((salesInvoicePosition) =>
      this.makeAggregate(salesInvoicePosition, cQMetadata),
    );
  }

  /**
   * Map aggregate to response
   * @param salesInvoicePosition
   */
  mapAggregateToResponse(
    salesInvoicePosition: BusinessPartnerPortalSalesInvoicePosition,
  ): BusinessPartnerPortalSalesInvoicePositionResponse {
    return this.makeResponse(salesInvoicePosition);
  }

  /**
   * Map array of aggregates to array responses
   * @param salesInvoicePositions
   */
  mapAggregatesToResponses(
    salesInvoicePositions: BusinessPartnerPortalSalesInvoicePosition[],
  ): BusinessPartnerPortalSalesInvoicePositionResponse[] {
    if (!Array.isArray(salesInvoicePositions)) return;

    return salesInvoicePositions.map((salesInvoicePosition) =>
      this.makeResponse(salesInvoicePosition),
    );
  }

  private makeAggregate(
    salesInvoicePosition: LiteralObject,
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalSalesInvoicePosition {
    return BusinessPartnerPortalSalesInvoicePosition.register(
      new BusinessPartnerPortalSalesInvoicePositionId(salesInvoicePosition.id, {
        undefinable: true,
      }),
      new BusinessPartnerPortalSalesInvoicePositionRowId(
        salesInvoicePosition.rowId,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoicePositionSalesInvoiceHeaderId(
        salesInvoicePosition.salesInvoiceHeaderId,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoicePositionPositionNumber(
        salesInvoicePosition.positionNumber,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoicePositionDescription(
        salesInvoicePosition.description,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoicePositionProductCode(
        salesInvoicePosition.productCode,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoicePositionQuantity(
        salesInvoicePosition.quantity,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoicePositionUnitPrice(
        salesInvoicePosition.unitPrice,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoicePositionDiscountPercent(
        salesInvoicePosition.discountPercent,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoicePositionDiscountAmount(
        salesInvoicePosition.discountAmount,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoicePositionTaxPercent(
        salesInvoicePosition.taxPercent,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoicePositionTaxAmount(
        salesInvoicePosition.taxAmount,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoicePositionSubtotal(
        salesInvoicePosition.subtotal,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoicePositionPositionTotal(
        salesInvoicePosition.positionTotal,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoicePositionNotes(
        salesInvoicePosition.notes,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoicePositionCreatedAt(
        salesInvoicePosition.createdAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      new BusinessPartnerPortalSalesInvoicePositionUpdatedAt(
        salesInvoicePosition.updatedAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      new BusinessPartnerPortalSalesInvoicePositionDeletedAt(
        salesInvoicePosition.deletedAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      this.options.eagerLoading
        ? new BusinessPartnerPortalSalesInvoiceHeaderMapper({
            eagerLoading: true,
          }).mapModelToAggregate(
            salesInvoicePosition.salesInvoiceHeader,
            cQMetadata,
          )
        : undefined,
    );
  }

  private makeResponse(
    salesInvoicePosition: BusinessPartnerPortalSalesInvoicePosition,
  ): BusinessPartnerPortalSalesInvoicePositionResponse {
    if (!salesInvoicePosition) return null;

    return new BusinessPartnerPortalSalesInvoicePositionResponse(
      salesInvoicePosition.id.value,
      salesInvoicePosition.rowId.value,
      salesInvoicePosition.salesInvoiceHeaderId.value,
      salesInvoicePosition.positionNumber.value,
      salesInvoicePosition.description.value,
      salesInvoicePosition.productCode.value,
      salesInvoicePosition.quantity.value,
      salesInvoicePosition.unitPrice.value,
      salesInvoicePosition.discountPercent.value,
      salesInvoicePosition.discountAmount.value,
      salesInvoicePosition.taxPercent.value,
      salesInvoicePosition.taxAmount.value,
      salesInvoicePosition.subtotal.value,
      salesInvoicePosition.positionTotal.value,
      salesInvoicePosition.notes.value,
      salesInvoicePosition.createdAt.value,
      salesInvoicePosition.updatedAt.value,
      salesInvoicePosition.deletedAt.value,
      this.options.eagerLoading
        ? new BusinessPartnerPortalSalesInvoiceHeaderMapper({
            eagerLoading: true,
          }).mapAggregateToResponse(salesInvoicePosition.salesInvoiceHeader)
        : undefined,
    );
  }
}
