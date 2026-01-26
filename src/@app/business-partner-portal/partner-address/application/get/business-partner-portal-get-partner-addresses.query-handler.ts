/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPartnerAddressesQuery,
  BusinessPartnerPortalPartnerAddress,
  BusinessPartnerPortalPartnerAddressMapper,
  BusinessPartnerPortalPartnerAddressResponse,
} from '@app/business-partner-portal/partner-address';
import { BusinessPartnerPortalGetPartnerAddressesService } from '@app/business-partner-portal/partner-address/application/get/business-partner-portal-get-partner-addresses.service';
import { LiteralObject } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalGetPartnerAddressesQuery)
export class BusinessPartnerPortalGetPartnerAddressesQueryHandler
  implements IQueryHandler<BusinessPartnerPortalGetPartnerAddressesQuery>
{
  private readonly mapper: BusinessPartnerPortalPartnerAddressMapper =
    new BusinessPartnerPortalPartnerAddressMapper();

  constructor(
    private readonly getPartnerAddressesService: BusinessPartnerPortalGetPartnerAddressesService,
  ) {}

  async execute(
    query: BusinessPartnerPortalGetPartnerAddressesQuery,
  ): Promise<BusinessPartnerPortalPartnerAddressResponse[] | LiteralObject[]> {
    const models = await this.getPartnerAddressesService.main(
      query.queryStatement,
      query.constraint,
      query.cQMetadata,
    );

    if (query.cQMetadata?.excludeMapModelToAggregate) return models;

    return this.mapper.mapAggregatesToResponses(
      models as BusinessPartnerPortalPartnerAddress[],
    );
  }
}
