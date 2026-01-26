/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPaymentModeByIdQuery,
  BusinessPartnerPortalPaymentModeMapper,
  BusinessPartnerPortalPaymentModeResponse,
} from '@app/business-partner-portal/payment-mode';
import { BusinessPartnerPortalFindPaymentModeByIdService } from '@app/business-partner-portal/payment-mode/application/find/business-partner-portal-find-payment-mode-by-id.service';
import { BusinessPartnerPortalPaymentModeId } from '@app/business-partner-portal/payment-mode/domain/value-objects';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalFindPaymentModeByIdQuery)
export class BusinessPartnerPortalFindPaymentModeByIdQueryHandler
  implements IQueryHandler<BusinessPartnerPortalFindPaymentModeByIdQuery>
{
  private readonly mapper: BusinessPartnerPortalPaymentModeMapper =
    new BusinessPartnerPortalPaymentModeMapper();

  constructor(
    private readonly findPaymentModeByIdService: BusinessPartnerPortalFindPaymentModeByIdService,
  ) {}

  async execute(
    query: BusinessPartnerPortalFindPaymentModeByIdQuery,
  ): Promise<BusinessPartnerPortalPaymentModeResponse> {
    const paymentMode = await this.findPaymentModeByIdService.main(
      new BusinessPartnerPortalPaymentModeId(query.id),
      query.constraint,
      query.cQMetadata,
    );

    return this.mapper.mapAggregateToResponse(paymentMode);
  }
}
