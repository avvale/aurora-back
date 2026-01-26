/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPurchaseInvoicePositionsQuery,
  BusinessPartnerPortalPurchaseInvoicePosition,
  BusinessPartnerPortalPurchaseInvoicePositionMapper,
  BusinessPartnerPortalPurchaseInvoicePositionResponse,
} from '@app/business-partner-portal/purchase-invoice-position';
import { BusinessPartnerPortalGetPurchaseInvoicePositionsService } from '@app/business-partner-portal/purchase-invoice-position/application/get/business-partner-portal-get-purchase-invoice-positions.service';
import { LiteralObject } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalGetPurchaseInvoicePositionsQuery)
export class BusinessPartnerPortalGetPurchaseInvoicePositionsQueryHandler
  implements
    IQueryHandler<BusinessPartnerPortalGetPurchaseInvoicePositionsQuery>
{
  private readonly mapper: BusinessPartnerPortalPurchaseInvoicePositionMapper =
    new BusinessPartnerPortalPurchaseInvoicePositionMapper();

  constructor(
    private readonly getPurchaseInvoicePositionsService: BusinessPartnerPortalGetPurchaseInvoicePositionsService,
  ) {}

  async execute(
    query: BusinessPartnerPortalGetPurchaseInvoicePositionsQuery,
  ): Promise<
    BusinessPartnerPortalPurchaseInvoicePositionResponse[] | LiteralObject[]
  > {
    const models = await this.getPurchaseInvoicePositionsService.main(
      query.queryStatement,
      query.constraint,
      query.cQMetadata,
    );

    if (query.cQMetadata?.excludeMapModelToAggregate) return models;

    return this.mapper.mapAggregatesToResponses(
      models as BusinessPartnerPortalPurchaseInvoicePosition[],
    );
  }
}
