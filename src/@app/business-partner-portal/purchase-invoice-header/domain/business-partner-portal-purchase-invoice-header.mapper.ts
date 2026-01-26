/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartnerMapper } from '@app/business-partner-portal/business-partner';
import {
  BusinessPartnerPortalPurchaseInvoiceHeader,
  BusinessPartnerPortalPurchaseInvoiceHeaderResponse,
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
import { BusinessPartnerPortalPurchaseInvoicePositionMapper } from '@app/business-partner-portal/purchase-invoice-position';
import {
  CQMetadata,
  IMapper,
  LiteralObject,
  MapperOptions,
} from '@aurorajs.dev/core';

export class BusinessPartnerPortalPurchaseInvoiceHeaderMapper
  implements IMapper
{
  constructor(public options: MapperOptions = { eagerLoading: true }) {}

  /**
   * Map object to aggregate
   * @param purchaseInvoiceHeader
   */
  mapModelToAggregate(
    purchaseInvoiceHeader: LiteralObject,
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalPurchaseInvoiceHeader {
    if (!purchaseInvoiceHeader) return;

    return this.makeAggregate(purchaseInvoiceHeader, cQMetadata);
  }

  /**
   * Map array of objects to array aggregates
   * @param purchaseInvoiceHeaders
   */
  mapModelsToAggregates(
    purchaseInvoiceHeaders: LiteralObject[],
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalPurchaseInvoiceHeader[] {
    if (!Array.isArray(purchaseInvoiceHeaders)) return;

    return purchaseInvoiceHeaders.map((purchaseInvoiceHeader) =>
      this.makeAggregate(purchaseInvoiceHeader, cQMetadata),
    );
  }

  /**
   * Map aggregate to response
   * @param purchaseInvoiceHeader
   */
  mapAggregateToResponse(
    purchaseInvoiceHeader: BusinessPartnerPortalPurchaseInvoiceHeader,
  ): BusinessPartnerPortalPurchaseInvoiceHeaderResponse {
    return this.makeResponse(purchaseInvoiceHeader);
  }

  /**
   * Map array of aggregates to array responses
   * @param purchaseInvoiceHeaders
   */
  mapAggregatesToResponses(
    purchaseInvoiceHeaders: BusinessPartnerPortalPurchaseInvoiceHeader[],
  ): BusinessPartnerPortalPurchaseInvoiceHeaderResponse[] {
    if (!Array.isArray(purchaseInvoiceHeaders)) return;

    return purchaseInvoiceHeaders.map((purchaseInvoiceHeader) =>
      this.makeResponse(purchaseInvoiceHeader),
    );
  }

  private makeAggregate(
    purchaseInvoiceHeader: LiteralObject,
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalPurchaseInvoiceHeader {
    return BusinessPartnerPortalPurchaseInvoiceHeader.register(
      new BusinessPartnerPortalPurchaseInvoiceHeaderId(
        purchaseInvoiceHeader.id,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoiceHeaderRowId(
        purchaseInvoiceHeader.rowId,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoiceHeaderInvoiceNumber(
        purchaseInvoiceHeader.invoiceNumber,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoiceHeaderSupplierInvoiceNumber(
        purchaseInvoiceHeader.supplierInvoiceNumber,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoiceHeaderExternalId(
        purchaseInvoiceHeader.externalId,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoiceHeaderExternalSystemCode(
        purchaseInvoiceHeader.externalSystemCode,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoiceHeaderBusinessPartnerId(
        purchaseInvoiceHeader.businessPartnerId,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoiceHeaderInvoiceDate(
        purchaseInvoiceHeader.invoiceDate,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoiceHeaderReceivedDate(
        purchaseInvoiceHeader.receivedDate,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoiceHeaderDueDate(
        purchaseInvoiceHeader.dueDate,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoiceHeaderStatus(
        purchaseInvoiceHeader.status,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoiceHeaderSubtotal(
        purchaseInvoiceHeader.subtotal,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoiceHeaderTaxAmount(
        purchaseInvoiceHeader.taxAmount,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoiceHeaderDiscountAmount(
        purchaseInvoiceHeader.discountAmount,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoiceHeaderTotalAmount(
        purchaseInvoiceHeader.totalAmount,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoiceHeaderPaidAmount(
        purchaseInvoiceHeader.paidAmount,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoiceHeaderCurrencyCode(
        purchaseInvoiceHeader.currencyCode,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoiceHeaderPaymentTermDays(
        purchaseInvoiceHeader.paymentTermDays,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoiceHeaderNotes(
        purchaseInvoiceHeader.notes,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoiceHeaderApprovalNotes(
        purchaseInvoiceHeader.approvalNotes,
        { undefinable: true },
      ),
      new BusinessPartnerPortalPurchaseInvoiceHeaderCreatedAt(
        purchaseInvoiceHeader.createdAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      new BusinessPartnerPortalPurchaseInvoiceHeaderUpdatedAt(
        purchaseInvoiceHeader.updatedAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      new BusinessPartnerPortalPurchaseInvoiceHeaderDeletedAt(
        purchaseInvoiceHeader.deletedAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      this.options.eagerLoading
        ? new BusinessPartnerPortalBusinessPartnerMapper({
            eagerLoading: true,
          }).mapModelToAggregate(
            purchaseInvoiceHeader.businessPartner,
            cQMetadata,
          )
        : undefined,
      this.options.eagerLoading
        ? new BusinessPartnerPortalPurchaseInvoicePositionMapper({
            eagerLoading: true,
          }).mapModelsToAggregates(purchaseInvoiceHeader.positions, cQMetadata)
        : undefined,
    );
  }

  private makeResponse(
    purchaseInvoiceHeader: BusinessPartnerPortalPurchaseInvoiceHeader,
  ): BusinessPartnerPortalPurchaseInvoiceHeaderResponse {
    if (!purchaseInvoiceHeader) return null;

    return new BusinessPartnerPortalPurchaseInvoiceHeaderResponse(
      purchaseInvoiceHeader.id.value,
      purchaseInvoiceHeader.rowId.value,
      purchaseInvoiceHeader.invoiceNumber.value,
      purchaseInvoiceHeader.supplierInvoiceNumber.value,
      purchaseInvoiceHeader.externalId.value,
      purchaseInvoiceHeader.externalSystemCode.value,
      purchaseInvoiceHeader.businessPartnerId.value,
      purchaseInvoiceHeader.invoiceDate.value,
      purchaseInvoiceHeader.receivedDate.value,
      purchaseInvoiceHeader.dueDate.value,
      purchaseInvoiceHeader.status.value,
      purchaseInvoiceHeader.subtotal.value,
      purchaseInvoiceHeader.taxAmount.value,
      purchaseInvoiceHeader.discountAmount.value,
      purchaseInvoiceHeader.totalAmount.value,
      purchaseInvoiceHeader.paidAmount.value,
      purchaseInvoiceHeader.currencyCode.value,
      purchaseInvoiceHeader.paymentTermDays.value,
      purchaseInvoiceHeader.notes.value,
      purchaseInvoiceHeader.approvalNotes.value,
      purchaseInvoiceHeader.createdAt.value,
      purchaseInvoiceHeader.updatedAt.value,
      purchaseInvoiceHeader.deletedAt.value,
      this.options.eagerLoading
        ? new BusinessPartnerPortalBusinessPartnerMapper({
            eagerLoading: true,
          }).mapAggregateToResponse(purchaseInvoiceHeader.businessPartner)
        : undefined,
      this.options.eagerLoading
        ? new BusinessPartnerPortalPurchaseInvoicePositionMapper({
            eagerLoading: true,
          }).mapAggregatesToResponses(purchaseInvoiceHeader.positions)
        : undefined,
    );
  }
}
