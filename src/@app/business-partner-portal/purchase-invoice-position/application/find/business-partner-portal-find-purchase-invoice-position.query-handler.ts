/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPurchaseInvoicePositionQuery,
  BusinessPartnerPortalPurchaseInvoicePositionMapper,
  BusinessPartnerPortalPurchaseInvoicePositionResponse,
} from '@app/business-partner-portal/purchase-invoice-position';
import { BusinessPartnerPortalFindPurchaseInvoicePositionService } from '@app/business-partner-portal/purchase-invoice-position/application/find/business-partner-portal-find-purchase-invoice-position.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalFindPurchaseInvoicePositionQuery)
export class BusinessPartnerPortalFindPurchaseInvoicePositionQueryHandler
  implements
    IQueryHandler<BusinessPartnerPortalFindPurchaseInvoicePositionQuery>
{
  private readonly mapper: BusinessPartnerPortalPurchaseInvoicePositionMapper =
    new BusinessPartnerPortalPurchaseInvoicePositionMapper();

  constructor(
    private readonly findPurchaseInvoicePositionService: BusinessPartnerPortalFindPurchaseInvoicePositionService,
  ) {}

  async execute(
    query: BusinessPartnerPortalFindPurchaseInvoicePositionQuery,
  ): Promise<BusinessPartnerPortalPurchaseInvoicePositionResponse> {
    const purchaseInvoicePosition =
      await this.findPurchaseInvoicePositionService.main(
        query.queryStatement,
        query.constraint,
        query.cQMetadata,
      );

    return this.mapper.mapAggregateToResponse(purchaseInvoicePosition);
  }
}
