/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginatePurchaseInvoicePositionsQuery,
  BusinessPartnerPortalPurchaseInvoicePositionMapper,
} from '@app/business-partner-portal/purchase-invoice-position';
import { BusinessPartnerPortalPaginatePurchaseInvoicePositionsService } from '@app/business-partner-portal/purchase-invoice-position/application/paginate/business-partner-portal-paginate-purchase-invoice-positions.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalPaginatePurchaseInvoicePositionsQuery)
export class BusinessPartnerPortalPaginatePurchaseInvoicePositionsQueryHandler
  implements
    IQueryHandler<BusinessPartnerPortalPaginatePurchaseInvoicePositionsQuery>
{
  private readonly mapper: BusinessPartnerPortalPurchaseInvoicePositionMapper =
    new BusinessPartnerPortalPurchaseInvoicePositionMapper();

  constructor(
    private readonly paginatePurchaseInvoicePositionsService: BusinessPartnerPortalPaginatePurchaseInvoicePositionsService,
  ) {}

  async execute(
    query: BusinessPartnerPortalPaginatePurchaseInvoicePositionsQuery,
  ): Promise<PaginationResponse> {
    const { total, count, rows } =
      await this.paginatePurchaseInvoicePositionsService.main(
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
