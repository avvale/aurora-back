/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPurchaseInvoicePositionByIdQuery,
  BusinessPartnerPortalPurchaseInvoicePositionMapper,
  BusinessPartnerPortalPurchaseInvoicePositionResponse,
} from '@app/business-partner-portal/purchase-invoice-position';
import { BusinessPartnerPortalFindPurchaseInvoicePositionByIdService } from '@app/business-partner-portal/purchase-invoice-position/application/find/business-partner-portal-find-purchase-invoice-position-by-id.service';
import { BusinessPartnerPortalPurchaseInvoicePositionId } from '@app/business-partner-portal/purchase-invoice-position/domain/value-objects';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalFindPurchaseInvoicePositionByIdQuery)
export class BusinessPartnerPortalFindPurchaseInvoicePositionByIdQueryHandler
  implements
    IQueryHandler<BusinessPartnerPortalFindPurchaseInvoicePositionByIdQuery>
{
  private readonly mapper: BusinessPartnerPortalPurchaseInvoicePositionMapper =
    new BusinessPartnerPortalPurchaseInvoicePositionMapper();

  constructor(
    private readonly findPurchaseInvoicePositionByIdService: BusinessPartnerPortalFindPurchaseInvoicePositionByIdService,
  ) {}

  async execute(
    query: BusinessPartnerPortalFindPurchaseInvoicePositionByIdQuery,
  ): Promise<BusinessPartnerPortalPurchaseInvoicePositionResponse> {
    const purchaseInvoicePosition =
      await this.findPurchaseInvoicePositionByIdService.main(
        new BusinessPartnerPortalPurchaseInvoicePositionId(query.id),
        query.constraint,
        query.cQMetadata,
      );

    return this.mapper.mapAggregateToResponse(purchaseInvoicePosition);
  }
}
