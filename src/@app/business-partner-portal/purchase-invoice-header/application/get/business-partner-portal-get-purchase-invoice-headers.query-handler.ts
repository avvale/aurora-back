/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPurchaseInvoiceHeadersQuery,
  BusinessPartnerPortalPurchaseInvoiceHeader,
  BusinessPartnerPortalPurchaseInvoiceHeaderMapper,
  BusinessPartnerPortalPurchaseInvoiceHeaderResponse,
} from '@app/business-partner-portal/purchase-invoice-header';
import { BusinessPartnerPortalGetPurchaseInvoiceHeadersService } from '@app/business-partner-portal/purchase-invoice-header/application/get/business-partner-portal-get-purchase-invoice-headers.service';
import { LiteralObject } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalGetPurchaseInvoiceHeadersQuery)
export class BusinessPartnerPortalGetPurchaseInvoiceHeadersQueryHandler
  implements IQueryHandler<BusinessPartnerPortalGetPurchaseInvoiceHeadersQuery>
{
  private readonly mapper: BusinessPartnerPortalPurchaseInvoiceHeaderMapper =
    new BusinessPartnerPortalPurchaseInvoiceHeaderMapper();

  constructor(
    private readonly getPurchaseInvoiceHeadersService: BusinessPartnerPortalGetPurchaseInvoiceHeadersService,
  ) {}

  async execute(
    query: BusinessPartnerPortalGetPurchaseInvoiceHeadersQuery,
  ): Promise<
    BusinessPartnerPortalPurchaseInvoiceHeaderResponse[] | LiteralObject[]
  > {
    const models = await this.getPurchaseInvoiceHeadersService.main(
      query.queryStatement,
      query.constraint,
      query.cQMetadata,
    );

    if (query.cQMetadata?.excludeMapModelToAggregate) return models;

    return this.mapper.mapAggregatesToResponses(
      models as BusinessPartnerPortalPurchaseInvoiceHeader[],
    );
  }
}
