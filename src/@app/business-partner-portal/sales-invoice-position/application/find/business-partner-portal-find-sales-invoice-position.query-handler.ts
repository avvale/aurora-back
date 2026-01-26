/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalFindSalesInvoicePositionQuery,
  BusinessPartnerPortalSalesInvoicePositionMapper,
  BusinessPartnerPortalSalesInvoicePositionResponse,
} from '@app/business-partner-portal/sales-invoice-position';
import { BusinessPartnerPortalFindSalesInvoicePositionService } from '@app/business-partner-portal/sales-invoice-position/application/find/business-partner-portal-find-sales-invoice-position.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalFindSalesInvoicePositionQuery)
export class BusinessPartnerPortalFindSalesInvoicePositionQueryHandler
  implements IQueryHandler<BusinessPartnerPortalFindSalesInvoicePositionQuery>
{
  private readonly mapper: BusinessPartnerPortalSalesInvoicePositionMapper =
    new BusinessPartnerPortalSalesInvoicePositionMapper();

  constructor(
    private readonly findSalesInvoicePositionService: BusinessPartnerPortalFindSalesInvoicePositionService,
  ) {}

  async execute(
    query: BusinessPartnerPortalFindSalesInvoicePositionQuery,
  ): Promise<BusinessPartnerPortalSalesInvoicePositionResponse> {
    const salesInvoicePosition =
      await this.findSalesInvoicePositionService.main(
        query.queryStatement,
        query.constraint,
        query.cQMetadata,
      );

    return this.mapper.mapAggregateToResponse(salesInvoicePosition);
  }
}
