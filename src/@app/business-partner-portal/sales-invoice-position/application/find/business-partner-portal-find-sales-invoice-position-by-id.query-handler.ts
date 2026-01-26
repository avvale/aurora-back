/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalFindSalesInvoicePositionByIdQuery,
  BusinessPartnerPortalSalesInvoicePositionMapper,
  BusinessPartnerPortalSalesInvoicePositionResponse,
} from '@app/business-partner-portal/sales-invoice-position';
import { BusinessPartnerPortalFindSalesInvoicePositionByIdService } from '@app/business-partner-portal/sales-invoice-position/application/find/business-partner-portal-find-sales-invoice-position-by-id.service';
import { BusinessPartnerPortalSalesInvoicePositionId } from '@app/business-partner-portal/sales-invoice-position/domain/value-objects';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalFindSalesInvoicePositionByIdQuery)
export class BusinessPartnerPortalFindSalesInvoicePositionByIdQueryHandler
  implements
    IQueryHandler<BusinessPartnerPortalFindSalesInvoicePositionByIdQuery>
{
  private readonly mapper: BusinessPartnerPortalSalesInvoicePositionMapper =
    new BusinessPartnerPortalSalesInvoicePositionMapper();

  constructor(
    private readonly findSalesInvoicePositionByIdService: BusinessPartnerPortalFindSalesInvoicePositionByIdService,
  ) {}

  async execute(
    query: BusinessPartnerPortalFindSalesInvoicePositionByIdQuery,
  ): Promise<BusinessPartnerPortalSalesInvoicePositionResponse> {
    const salesInvoicePosition =
      await this.findSalesInvoicePositionByIdService.main(
        new BusinessPartnerPortalSalesInvoicePositionId(query.id),
        query.constraint,
        query.cQMetadata,
      );

    return this.mapper.mapAggregateToResponse(salesInvoicePosition);
  }
}
