/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalBusinessPartnerMapper,
  BusinessPartnerPortalBusinessPartnerResponse,
  BusinessPartnerPortalFindBusinessPartnerByIdQuery,
} from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalFindBusinessPartnerByIdService } from '@app/business-partner-portal/business-partner/application/find/business-partner-portal-find-business-partner-by-id.service';
import { BusinessPartnerPortalBusinessPartnerId } from '@app/business-partner-portal/business-partner/domain/value-objects';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalFindBusinessPartnerByIdQuery)
export class BusinessPartnerPortalFindBusinessPartnerByIdQueryHandler
  implements IQueryHandler<BusinessPartnerPortalFindBusinessPartnerByIdQuery>
{
  private readonly mapper: BusinessPartnerPortalBusinessPartnerMapper =
    new BusinessPartnerPortalBusinessPartnerMapper();

  constructor(
    private readonly findBusinessPartnerByIdService: BusinessPartnerPortalFindBusinessPartnerByIdService,
  ) {}

  async execute(
    query: BusinessPartnerPortalFindBusinessPartnerByIdQuery,
  ): Promise<BusinessPartnerPortalBusinessPartnerResponse> {
    const businessPartner = await this.findBusinessPartnerByIdService.main(
      new BusinessPartnerPortalBusinessPartnerId(query.id),
      query.constraint,
      query.cQMetadata,
    );

    return this.mapper.mapAggregateToResponse(businessPartner);
  }
}
