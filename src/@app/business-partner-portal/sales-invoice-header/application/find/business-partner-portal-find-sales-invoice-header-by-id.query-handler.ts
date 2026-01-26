/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalFindSalesInvoiceHeaderByIdQuery,
  BusinessPartnerPortalSalesInvoiceHeaderMapper,
  BusinessPartnerPortalSalesInvoiceHeaderResponse,
} from '@app/business-partner-portal/sales-invoice-header';
import { BusinessPartnerPortalFindSalesInvoiceHeaderByIdService } from '@app/business-partner-portal/sales-invoice-header/application/find/business-partner-portal-find-sales-invoice-header-by-id.service';
import { BusinessPartnerPortalSalesInvoiceHeaderId } from '@app/business-partner-portal/sales-invoice-header/domain/value-objects';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalFindSalesInvoiceHeaderByIdQuery)
export class BusinessPartnerPortalFindSalesInvoiceHeaderByIdQueryHandler
  implements IQueryHandler<BusinessPartnerPortalFindSalesInvoiceHeaderByIdQuery>
{
  private readonly mapper: BusinessPartnerPortalSalesInvoiceHeaderMapper =
    new BusinessPartnerPortalSalesInvoiceHeaderMapper();

  constructor(
    private readonly findSalesInvoiceHeaderByIdService: BusinessPartnerPortalFindSalesInvoiceHeaderByIdService,
  ) {}

  async execute(
    query: BusinessPartnerPortalFindSalesInvoiceHeaderByIdQuery,
  ): Promise<BusinessPartnerPortalSalesInvoiceHeaderResponse> {
    const salesInvoiceHeader =
      await this.findSalesInvoiceHeaderByIdService.main(
        new BusinessPartnerPortalSalesInvoiceHeaderId(query.id),
        query.constraint,
        query.cQMetadata,
      );

    return this.mapper.mapAggregateToResponse(salesInvoiceHeader);
  }
}
