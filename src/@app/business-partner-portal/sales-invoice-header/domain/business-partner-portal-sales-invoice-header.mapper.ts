/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartnerMapper } from '@app/business-partner-portal/business-partner';
import {
  BusinessPartnerPortalSalesInvoiceHeader,
  BusinessPartnerPortalSalesInvoiceHeaderResponse,
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
import { BusinessPartnerPortalSalesInvoicePositionMapper } from '@app/business-partner-portal/sales-invoice-position';
import {
  CQMetadata,
  IMapper,
  LiteralObject,
  MapperOptions,
} from '@aurorajs.dev/core';

export class BusinessPartnerPortalSalesInvoiceHeaderMapper implements IMapper {
  constructor(public options: MapperOptions = { eagerLoading: true }) {}

  /**
   * Map object to aggregate
   * @param salesInvoiceHeader
   */
  mapModelToAggregate(
    salesInvoiceHeader: LiteralObject,
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalSalesInvoiceHeader {
    if (!salesInvoiceHeader) return;

    return this.makeAggregate(salesInvoiceHeader, cQMetadata);
  }

  /**
   * Map array of objects to array aggregates
   * @param salesInvoiceHeaders
   */
  mapModelsToAggregates(
    salesInvoiceHeaders: LiteralObject[],
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalSalesInvoiceHeader[] {
    if (!Array.isArray(salesInvoiceHeaders)) return;

    return salesInvoiceHeaders.map((salesInvoiceHeader) =>
      this.makeAggregate(salesInvoiceHeader, cQMetadata),
    );
  }

  /**
   * Map aggregate to response
   * @param salesInvoiceHeader
   */
  mapAggregateToResponse(
    salesInvoiceHeader: BusinessPartnerPortalSalesInvoiceHeader,
  ): BusinessPartnerPortalSalesInvoiceHeaderResponse {
    return this.makeResponse(salesInvoiceHeader);
  }

  /**
   * Map array of aggregates to array responses
   * @param salesInvoiceHeaders
   */
  mapAggregatesToResponses(
    salesInvoiceHeaders: BusinessPartnerPortalSalesInvoiceHeader[],
  ): BusinessPartnerPortalSalesInvoiceHeaderResponse[] {
    if (!Array.isArray(salesInvoiceHeaders)) return;

    return salesInvoiceHeaders.map((salesInvoiceHeader) =>
      this.makeResponse(salesInvoiceHeader),
    );
  }

  private makeAggregate(
    salesInvoiceHeader: LiteralObject,
    cQMetadata?: CQMetadata,
  ): BusinessPartnerPortalSalesInvoiceHeader {
    return BusinessPartnerPortalSalesInvoiceHeader.register(
      new BusinessPartnerPortalSalesInvoiceHeaderId(salesInvoiceHeader.id, {
        undefinable: true,
      }),
      new BusinessPartnerPortalSalesInvoiceHeaderRowId(
        salesInvoiceHeader.rowId,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoiceHeaderInvoiceNumber(
        salesInvoiceHeader.invoiceNumber,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoiceHeaderExternalId(
        salesInvoiceHeader.externalId,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoiceHeaderExternalSystemCode(
        salesInvoiceHeader.externalSystemCode,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoiceHeaderBusinessPartnerId(
        salesInvoiceHeader.businessPartnerId,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoiceHeaderInvoiceDate(
        salesInvoiceHeader.invoiceDate,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoiceHeaderDueDate(
        salesInvoiceHeader.dueDate,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoiceHeaderStatus(
        salesInvoiceHeader.status,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoiceHeaderSubtotal(
        salesInvoiceHeader.subtotal,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoiceHeaderTaxAmount(
        salesInvoiceHeader.taxAmount,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoiceHeaderDiscountAmount(
        salesInvoiceHeader.discountAmount,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoiceHeaderTotalAmount(
        salesInvoiceHeader.totalAmount,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoiceHeaderPaidAmount(
        salesInvoiceHeader.paidAmount,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoiceHeaderCurrencyCode(
        salesInvoiceHeader.currencyCode,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoiceHeaderPaymentTermDays(
        salesInvoiceHeader.paymentTermDays,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoiceHeaderNotes(
        salesInvoiceHeader.notes,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoiceHeaderCustomerNotes(
        salesInvoiceHeader.customerNotes,
        { undefinable: true },
      ),
      new BusinessPartnerPortalSalesInvoiceHeaderCreatedAt(
        salesInvoiceHeader.createdAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      new BusinessPartnerPortalSalesInvoiceHeaderUpdatedAt(
        salesInvoiceHeader.updatedAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      new BusinessPartnerPortalSalesInvoiceHeaderDeletedAt(
        salesInvoiceHeader.deletedAt,
        { undefinable: true },
        { addTimezone: cQMetadata?.timezone },
      ),
      this.options.eagerLoading
        ? new BusinessPartnerPortalBusinessPartnerMapper({
            eagerLoading: true,
          }).mapModelToAggregate(salesInvoiceHeader.businessPartner, cQMetadata)
        : undefined,
      this.options.eagerLoading
        ? new BusinessPartnerPortalSalesInvoicePositionMapper({
            eagerLoading: true,
          }).mapModelsToAggregates(salesInvoiceHeader.positions, cQMetadata)
        : undefined,
    );
  }

  private makeResponse(
    salesInvoiceHeader: BusinessPartnerPortalSalesInvoiceHeader,
  ): BusinessPartnerPortalSalesInvoiceHeaderResponse {
    if (!salesInvoiceHeader) return null;

    return new BusinessPartnerPortalSalesInvoiceHeaderResponse(
      salesInvoiceHeader.id.value,
      salesInvoiceHeader.rowId.value,
      salesInvoiceHeader.invoiceNumber.value,
      salesInvoiceHeader.externalId.value,
      salesInvoiceHeader.externalSystemCode.value,
      salesInvoiceHeader.businessPartnerId.value,
      salesInvoiceHeader.invoiceDate.value,
      salesInvoiceHeader.dueDate.value,
      salesInvoiceHeader.status.value,
      salesInvoiceHeader.subtotal.value,
      salesInvoiceHeader.taxAmount.value,
      salesInvoiceHeader.discountAmount.value,
      salesInvoiceHeader.totalAmount.value,
      salesInvoiceHeader.paidAmount.value,
      salesInvoiceHeader.currencyCode.value,
      salesInvoiceHeader.paymentTermDays.value,
      salesInvoiceHeader.notes.value,
      salesInvoiceHeader.customerNotes.value,
      salesInvoiceHeader.createdAt.value,
      salesInvoiceHeader.updatedAt.value,
      salesInvoiceHeader.deletedAt.value,
      this.options.eagerLoading
        ? new BusinessPartnerPortalBusinessPartnerMapper({
            eagerLoading: true,
          }).mapAggregateToResponse(salesInvoiceHeader.businessPartner)
        : undefined,
      this.options.eagerLoading
        ? new BusinessPartnerPortalSalesInvoicePositionMapper({
            eagerLoading: true,
          }).mapAggregatesToResponses(salesInvoiceHeader.positions)
        : undefined,
    );
  }
}
