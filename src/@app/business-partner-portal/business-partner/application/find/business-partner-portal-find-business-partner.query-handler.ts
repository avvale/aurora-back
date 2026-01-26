/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalBusinessPartnerMapper,
  BusinessPartnerPortalBusinessPartnerResponse,
  BusinessPartnerPortalFindBusinessPartnerQuery,
} from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalFindBusinessPartnerService } from '@app/business-partner-portal/business-partner/application/find/business-partner-portal-find-business-partner.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalFindBusinessPartnerQuery)
export class BusinessPartnerPortalFindBusinessPartnerQueryHandler
  implements IQueryHandler<BusinessPartnerPortalFindBusinessPartnerQuery>
{
  private readonly mapper: BusinessPartnerPortalBusinessPartnerMapper =
    new BusinessPartnerPortalBusinessPartnerMapper();

  constructor(
    private readonly findBusinessPartnerService: BusinessPartnerPortalFindBusinessPartnerService,
  ) {}

  async execute(
    query: BusinessPartnerPortalFindBusinessPartnerQuery,
  ): Promise<BusinessPartnerPortalBusinessPartnerResponse> {
    const businessPartner = await this.findBusinessPartnerService.main(
      query.queryStatement,
      query.constraint,
      query.cQMetadata,
    );

    return this.mapper.mapAggregateToResponse(businessPartner);
  }
}
