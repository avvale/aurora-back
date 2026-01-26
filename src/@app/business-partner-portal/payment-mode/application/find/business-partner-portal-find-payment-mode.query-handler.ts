/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPaymentModeQuery,
  BusinessPartnerPortalPaymentModeMapper,
  BusinessPartnerPortalPaymentModeResponse,
} from '@app/business-partner-portal/payment-mode';
import { BusinessPartnerPortalFindPaymentModeService } from '@app/business-partner-portal/payment-mode/application/find/business-partner-portal-find-payment-mode.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalFindPaymentModeQuery)
export class BusinessPartnerPortalFindPaymentModeQueryHandler
  implements IQueryHandler<BusinessPartnerPortalFindPaymentModeQuery>
{
  private readonly mapper: BusinessPartnerPortalPaymentModeMapper =
    new BusinessPartnerPortalPaymentModeMapper();

  constructor(
    private readonly findPaymentModeService: BusinessPartnerPortalFindPaymentModeService,
  ) {}

  async execute(
    query: BusinessPartnerPortalFindPaymentModeQuery,
  ): Promise<BusinessPartnerPortalPaymentModeResponse> {
    const paymentMode = await this.findPaymentModeService.main(
      query.queryStatement,
      query.constraint,
      query.cQMetadata,
    );

    return this.mapper.mapAggregateToResponse(paymentMode);
  }
}
