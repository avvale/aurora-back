/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginateSalesInvoiceHeadersQuery,
  BusinessPartnerPortalSalesInvoiceHeaderMapper,
} from '@app/business-partner-portal/sales-invoice-header';
import { BusinessPartnerPortalPaginateSalesInvoiceHeadersService } from '@app/business-partner-portal/sales-invoice-header/application/paginate/business-partner-portal-paginate-sales-invoice-headers.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalPaginateSalesInvoiceHeadersQuery)
export class BusinessPartnerPortalPaginateSalesInvoiceHeadersQueryHandler
  implements
    IQueryHandler<BusinessPartnerPortalPaginateSalesInvoiceHeadersQuery>
{
  private readonly mapper: BusinessPartnerPortalSalesInvoiceHeaderMapper =
    new BusinessPartnerPortalSalesInvoiceHeaderMapper();

  constructor(
    private readonly paginateSalesInvoiceHeadersService: BusinessPartnerPortalPaginateSalesInvoiceHeadersService,
  ) {}

  async execute(
    query: BusinessPartnerPortalPaginateSalesInvoiceHeadersQuery,
  ): Promise<PaginationResponse> {
    const { total, count, rows } =
      await this.paginateSalesInvoiceHeadersService.main(
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
