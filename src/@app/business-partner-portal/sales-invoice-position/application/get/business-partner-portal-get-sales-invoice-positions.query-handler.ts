/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalGetSalesInvoicePositionsQuery,
  BusinessPartnerPortalSalesInvoicePosition,
  BusinessPartnerPortalSalesInvoicePositionMapper,
  BusinessPartnerPortalSalesInvoicePositionResponse,
} from '@app/business-partner-portal/sales-invoice-position';
import { BusinessPartnerPortalGetSalesInvoicePositionsService } from '@app/business-partner-portal/sales-invoice-position/application/get/business-partner-portal-get-sales-invoice-positions.service';
import { LiteralObject } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalGetSalesInvoicePositionsQuery)
export class BusinessPartnerPortalGetSalesInvoicePositionsQueryHandler
  implements IQueryHandler<BusinessPartnerPortalGetSalesInvoicePositionsQuery>
{
  private readonly mapper: BusinessPartnerPortalSalesInvoicePositionMapper =
    new BusinessPartnerPortalSalesInvoicePositionMapper();

  constructor(
    private readonly getSalesInvoicePositionsService: BusinessPartnerPortalGetSalesInvoicePositionsService,
  ) {}

  async execute(
    query: BusinessPartnerPortalGetSalesInvoicePositionsQuery,
  ): Promise<
    BusinessPartnerPortalSalesInvoicePositionResponse[] | LiteralObject[]
  > {
    const models = await this.getSalesInvoicePositionsService.main(
      query.queryStatement,
      query.constraint,
      query.cQMetadata,
    );

    if (query.cQMetadata?.excludeMapModelToAggregate) return models;

    return this.mapper.mapAggregatesToResponses(
      models as BusinessPartnerPortalSalesInvoicePosition[],
    );
  }
}
