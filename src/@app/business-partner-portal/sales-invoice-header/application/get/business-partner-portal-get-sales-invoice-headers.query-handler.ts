/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalGetSalesInvoiceHeadersQuery,
  BusinessPartnerPortalSalesInvoiceHeader,
  BusinessPartnerPortalSalesInvoiceHeaderMapper,
  BusinessPartnerPortalSalesInvoiceHeaderResponse,
} from '@app/business-partner-portal/sales-invoice-header';
import { BusinessPartnerPortalGetSalesInvoiceHeadersService } from '@app/business-partner-portal/sales-invoice-header/application/get/business-partner-portal-get-sales-invoice-headers.service';
import { LiteralObject } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalGetSalesInvoiceHeadersQuery)
export class BusinessPartnerPortalGetSalesInvoiceHeadersQueryHandler
  implements IQueryHandler<BusinessPartnerPortalGetSalesInvoiceHeadersQuery>
{
  private readonly mapper: BusinessPartnerPortalSalesInvoiceHeaderMapper =
    new BusinessPartnerPortalSalesInvoiceHeaderMapper();

  constructor(
    private readonly getSalesInvoiceHeadersService: BusinessPartnerPortalGetSalesInvoiceHeadersService,
  ) {}

  async execute(
    query: BusinessPartnerPortalGetSalesInvoiceHeadersQuery,
  ): Promise<
    BusinessPartnerPortalSalesInvoiceHeaderResponse[] | LiteralObject[]
  > {
    const models = await this.getSalesInvoiceHeadersService.main(
      query.queryStatement,
      query.constraint,
      query.cQMetadata,
    );

    if (query.cQMetadata?.excludeMapModelToAggregate) return models;

    return this.mapper.mapAggregatesToResponses(
      models as BusinessPartnerPortalSalesInvoiceHeader[],
    );
  }
}
