/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginatePurchaseInvoiceHeadersQuery,
  BusinessPartnerPortalPurchaseInvoiceHeaderMapper,
} from '@app/business-partner-portal/purchase-invoice-header';
import { BusinessPartnerPortalPaginatePurchaseInvoiceHeadersService } from '@app/business-partner-portal/purchase-invoice-header/application/paginate/business-partner-portal-paginate-purchase-invoice-headers.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalPaginatePurchaseInvoiceHeadersQuery)
export class BusinessPartnerPortalPaginatePurchaseInvoiceHeadersQueryHandler
  implements
    IQueryHandler<BusinessPartnerPortalPaginatePurchaseInvoiceHeadersQuery>
{
  private readonly mapper: BusinessPartnerPortalPurchaseInvoiceHeaderMapper =
    new BusinessPartnerPortalPurchaseInvoiceHeaderMapper();

  constructor(
    private readonly paginatePurchaseInvoiceHeadersService: BusinessPartnerPortalPaginatePurchaseInvoiceHeadersService,
  ) {}

  async execute(
    query: BusinessPartnerPortalPaginatePurchaseInvoiceHeadersQuery,
  ): Promise<PaginationResponse> {
    const { total, count, rows } =
      await this.paginatePurchaseInvoiceHeadersService.main(
        query.queryStatement,
        query.constraint,
        query.cQMetadata,
      );

    return new PaginationResponse(
      total,
      count,
      this.mapper.mapAggregatesToResponses(rows),
    );
  }
}
