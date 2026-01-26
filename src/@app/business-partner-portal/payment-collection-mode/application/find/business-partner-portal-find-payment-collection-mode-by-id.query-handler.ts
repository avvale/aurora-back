/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPaymentCollectionModeByIdQuery,
  BusinessPartnerPortalPaymentCollectionModeMapper,
  BusinessPartnerPortalPaymentCollectionModeResponse,
} from '@app/business-partner-portal/payment-collection-mode';
import { BusinessPartnerPortalFindPaymentCollectionModeByIdService } from '@app/business-partner-portal/payment-collection-mode/application/find/business-partner-portal-find-payment-collection-mode-by-id.service';
import { BusinessPartnerPortalPaymentCollectionModeId } from '@app/business-partner-portal/payment-collection-mode/domain/value-objects';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalFindPaymentCollectionModeByIdQuery)
export class BusinessPartnerPortalFindPaymentCollectionModeByIdQueryHandler
  implements
    IQueryHandler<BusinessPartnerPortalFindPaymentCollectionModeByIdQuery>
{
  private readonly mapper: BusinessPartnerPortalPaymentCollectionModeMapper =
    new BusinessPartnerPortalPaymentCollectionModeMapper();

  constructor(
    private readonly findPaymentCollectionModeByIdService: BusinessPartnerPortalFindPaymentCollectionModeByIdService,
  ) {}

  async execute(
    query: BusinessPartnerPortalFindPaymentCollectionModeByIdQuery,
  ): Promise<BusinessPartnerPortalPaymentCollectionModeResponse> {
    const paymentCollectionMode =
      await this.findPaymentCollectionModeByIdService.main(
        new BusinessPartnerPortalPaymentCollectionModeId(query.id),
        query.constraint,
        query.cQMetadata,
      );

    return this.mapper.mapAggregateToResponse(paymentCollectionMode);
  }
}
