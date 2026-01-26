/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalBusinessPartnerMapper,
  BusinessPartnerPortalPaginateBusinessPartnersQuery,
} from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalPaginateBusinessPartnersService } from '@app/business-partner-portal/business-partner/application/paginate/business-partner-portal-paginate-business-partners.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalPaginateBusinessPartnersQuery)
export class BusinessPartnerPortalPaginateBusinessPartnersQueryHandler
  implements IQueryHandler<BusinessPartnerPortalPaginateBusinessPartnersQuery>
{
  private readonly mapper: BusinessPartnerPortalBusinessPartnerMapper =
    new BusinessPartnerPortalBusinessPartnerMapper();

  constructor(
    private readonly paginateBusinessPartnersService: BusinessPartnerPortalPaginateBusinessPartnersService,
  ) {}

  async execute(
    query: BusinessPartnerPortalPaginateBusinessPartnersQuery,
  ): Promise<PaginationResponse> {
    const { total, count, rows } =
      await this.paginateBusinessPartnersService.main(
        query.queryStatement,
        query.constraint,
        query.cQMetadata,
      );

    return new PaginationResponse(
      total,
      count,
      this.mapper.mapAggregatesToResponses(rows),
    );
  }
}
