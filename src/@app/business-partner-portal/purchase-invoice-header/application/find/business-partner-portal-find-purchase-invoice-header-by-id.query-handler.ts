/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdQuery,
  BusinessPartnerPortalPurchaseInvoiceHeaderMapper,
  BusinessPartnerPortalPurchaseInvoiceHeaderResponse,
} from '@app/business-partner-portal/purchase-invoice-header';
import { BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdService } from '@app/business-partner-portal/purchase-invoice-header/application/find/business-partner-portal-find-purchase-invoice-header-by-id.service';
import { BusinessPartnerPortalPurchaseInvoiceHeaderId } from '@app/business-partner-portal/purchase-invoice-header/domain/value-objects';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdQuery)
export class BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdQueryHandler
  implements
    IQueryHandler<BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdQuery>
{
  private readonly mapper: BusinessPartnerPortalPurchaseInvoiceHeaderMapper =
    new BusinessPartnerPortalPurchaseInvoiceHeaderMapper();

  constructor(
    private readonly findPurchaseInvoiceHeaderByIdService: BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdService,
  ) {}

  async execute(
    query: BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdQuery,
  ): Promise<BusinessPartnerPortalPurchaseInvoiceHeaderResponse> {
    const purchaseInvoiceHeader =
      await this.findPurchaseInvoiceHeaderByIdService.main(
        new BusinessPartnerPortalPurchaseInvoiceHeaderId(query.id),
        query.constraint,
        query.cQMetadata,
      );

    return this.mapper.mapAggregateToResponse(purchaseInvoiceHeader);
  }
}
