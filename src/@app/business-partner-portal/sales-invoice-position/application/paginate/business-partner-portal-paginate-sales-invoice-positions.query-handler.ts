/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginateSalesInvoicePositionsQuery,
  BusinessPartnerPortalSalesInvoicePositionMapper,
} from '@app/business-partner-portal/sales-invoice-position';
import { BusinessPartnerPortalPaginateSalesInvoicePositionsService } from '@app/business-partner-portal/sales-invoice-position/application/paginate/business-partner-portal-paginate-sales-invoice-positions.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalPaginateSalesInvoicePositionsQuery)
export class BusinessPartnerPortalPaginateSalesInvoicePositionsQueryHandler
  implements
    IQueryHandler<BusinessPartnerPortalPaginateSalesInvoicePositionsQuery>
{
  private readonly mapper: BusinessPartnerPortalSalesInvoicePositionMapper =
    new BusinessPartnerPortalSalesInvoicePositionMapper();

  constructor(
    private readonly paginateSalesInvoicePositionsService: BusinessPartnerPortalPaginateSalesInvoicePositionsService,
  ) {}

  async execute(
    query: BusinessPartnerPortalPaginateSalesInvoicePositionsQuery,
  ): Promise<PaginationResponse> {
    const { total, count, rows } =
      await this.paginateSalesInvoicePositionsService.main(
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
