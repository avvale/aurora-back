/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalFindSalesInvoiceHeaderQuery,
  BusinessPartnerPortalSalesInvoiceHeaderMapper,
  BusinessPartnerPortalSalesInvoiceHeaderResponse,
} from '@app/business-partner-portal/sales-invoice-header';
import { BusinessPartnerPortalFindSalesInvoiceHeaderService } from '@app/business-partner-portal/sales-invoice-header/application/find/business-partner-portal-find-sales-invoice-header.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalFindSalesInvoiceHeaderQuery)
export class BusinessPartnerPortalFindSalesInvoiceHeaderQueryHandler
  implements IQueryHandler<BusinessPartnerPortalFindSalesInvoiceHeaderQuery>
{
  private readonly mapper: BusinessPartnerPortalSalesInvoiceHeaderMapper =
    new BusinessPartnerPortalSalesInvoiceHeaderMapper();

  constructor(
    private readonly findSalesInvoiceHeaderService: BusinessPartnerPortalFindSalesInvoiceHeaderService,
  ) {}

  async execute(
    query: BusinessPartnerPortalFindSalesInvoiceHeaderQuery,
  ): Promise<BusinessPartnerPortalSalesInvoiceHeaderResponse> {
    const salesInvoiceHeader = await this.findSalesInvoiceHeaderService.main(
      query.queryStatement,
      query.constraint,
      query.cQMetadata,
    );

    return this.mapper.mapAggregateToResponse(salesInvoiceHeader);
  }
}
