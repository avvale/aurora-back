/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPaymentCollectionModeQuery,
  BusinessPartnerPortalPaymentCollectionModeMapper,
  BusinessPartnerPortalPaymentCollectionModeResponse,
} from '@app/business-partner-portal/payment-collection-mode';
import { BusinessPartnerPortalFindPaymentCollectionModeService } from '@app/business-partner-portal/payment-collection-mode/application/find/business-partner-portal-find-payment-collection-mode.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalFindPaymentCollectionModeQuery)
export class BusinessPartnerPortalFindPaymentCollectionModeQueryHandler
  implements IQueryHandler<BusinessPartnerPortalFindPaymentCollectionModeQuery>
{
  private readonly mapper: BusinessPartnerPortalPaymentCollectionModeMapper =
    new BusinessPartnerPortalPaymentCollectionModeMapper();

  constructor(
    private readonly findPaymentCollectionModeService: BusinessPartnerPortalFindPaymentCollectionModeService,
  ) {}

  async execute(
    query: BusinessPartnerPortalFindPaymentCollectionModeQuery,
  ): Promise<BusinessPartnerPortalPaymentCollectionModeResponse> {
    const paymentCollectionMode =
      await this.findPaymentCollectionModeService.main(
        query.queryStatement,
        query.constraint,
        query.cQMetadata,
      );

    return this.mapper.mapAggregateToResponse(paymentCollectionMode);
  }
}
