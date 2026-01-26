/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginatePartnerContactsQuery,
  BusinessPartnerPortalPartnerContactMapper,
} from '@app/business-partner-portal/partner-contact';
import { BusinessPartnerPortalPaginatePartnerContactsService } from '@app/business-partner-portal/partner-contact/application/paginate/business-partner-portal-paginate-partner-contacts.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalPaginatePartnerContactsQuery)
export class BusinessPartnerPortalPaginatePartnerContactsQueryHandler
  implements IQueryHandler<BusinessPartnerPortalPaginatePartnerContactsQuery>
{
  private readonly mapper: BusinessPartnerPortalPartnerContactMapper =
    new BusinessPartnerPortalPartnerContactMapper();

  constructor(
    private readonly paginatePartnerContactsService: BusinessPartnerPortalPaginatePartnerContactsService,
  ) {}

  async execute(
    query: BusinessPartnerPortalPaginatePartnerContactsQuery,
  ): Promise<PaginationResponse> {
    const { total, count, rows } =
      await this.paginatePartnerContactsService.main(
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
