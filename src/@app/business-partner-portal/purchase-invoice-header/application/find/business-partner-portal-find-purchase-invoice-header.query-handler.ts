/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPurchaseInvoiceHeaderQuery,
  BusinessPartnerPortalPurchaseInvoiceHeaderMapper,
  BusinessPartnerPortalPurchaseInvoiceHeaderResponse,
} from '@app/business-partner-portal/purchase-invoice-header';
import { BusinessPartnerPortalFindPurchaseInvoiceHeaderService } from '@app/business-partner-portal/purchase-invoice-header/application/find/business-partner-portal-find-purchase-invoice-header.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalFindPurchaseInvoiceHeaderQuery)
export class BusinessPartnerPortalFindPurchaseInvoiceHeaderQueryHandler
  implements IQueryHandler<BusinessPartnerPortalFindPurchaseInvoiceHeaderQuery>
{
  private readonly mapper: BusinessPartnerPortalPurchaseInvoiceHeaderMapper =
    new BusinessPartnerPortalPurchaseInvoiceHeaderMapper();

  constructor(
    private readonly findPurchaseInvoiceHeaderService: BusinessPartnerPortalFindPurchaseInvoiceHeaderService,
  ) {}

  async execute(
    query: BusinessPartnerPortalFindPurchaseInvoiceHeaderQuery,
  ): Promise<BusinessPartnerPortalPurchaseInvoiceHeaderResponse> {
    const purchaseInvoiceHeader =
      await this.findPurchaseInvoiceHeaderService.main(
        query.queryStatement,
        query.constraint,
        query.cQMetadata,
      );

    return this.mapper.mapAggregateToResponse(purchaseInvoiceHeader);
  }
}
