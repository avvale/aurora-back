/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalBusinessPartner,
  BusinessPartnerPortalBusinessPartnerMapper,
  BusinessPartnerPortalBusinessPartnerResponse,
  BusinessPartnerPortalGetBusinessPartnersQuery,
} from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalGetBusinessPartnersService } from '@app/business-partner-portal/business-partner/application/get/business-partner-portal-get-business-partners.service';
import { LiteralObject } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalGetBusinessPartnersQuery)
export class BusinessPartnerPortalGetBusinessPartnersQueryHandler
  implements IQueryHandler<BusinessPartnerPortalGetBusinessPartnersQuery>
{
  private readonly mapper: BusinessPartnerPortalBusinessPartnerMapper =
    new BusinessPartnerPortalBusinessPartnerMapper();

  constructor(
    private readonly getBusinessPartnersService: BusinessPartnerPortalGetBusinessPartnersService,
  ) {}

  async execute(
    query: BusinessPartnerPortalGetBusinessPartnersQuery,
  ): Promise<BusinessPartnerPortalBusinessPartnerResponse[] | LiteralObject[]> {
    const models = await this.getBusinessPartnersService.main(
      query.queryStatement,
      query.constraint,
      query.cQMetadata,
    );

    if (query.cQMetadata?.excludeMapModelToAggregate) return models;

    return this.mapper.mapAggregatesToResponses(
      models as BusinessPartnerPortalBusinessPartner[],
    );
  }
}
