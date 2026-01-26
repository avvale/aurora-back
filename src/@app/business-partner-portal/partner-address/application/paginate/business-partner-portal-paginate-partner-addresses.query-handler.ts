/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginatePartnerAddressesQuery,
  BusinessPartnerPortalPartnerAddressMapper,
} from '@app/business-partner-portal/partner-address';
import { BusinessPartnerPortalPaginatePartnerAddressesService } from '@app/business-partner-portal/partner-address/application/paginate/business-partner-portal-paginate-partner-addresses.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalPaginatePartnerAddressesQuery)
export class BusinessPartnerPortalPaginatePartnerAddressesQueryHandler
  implements IQueryHandler<BusinessPartnerPortalPaginatePartnerAddressesQuery>
{
  private readonly mapper: BusinessPartnerPortalPartnerAddressMapper =
    new BusinessPartnerPortalPartnerAddressMapper();

  constructor(
    private readonly paginatePartnerAddressesService: BusinessPartnerPortalPaginatePartnerAddressesService,
  ) {}

  async execute(
    query: BusinessPartnerPortalPaginatePartnerAddressesQuery,
  ): Promise<PaginationResponse> {
    const { total, count, rows } =
      await this.paginatePartnerAddressesService.main(
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
