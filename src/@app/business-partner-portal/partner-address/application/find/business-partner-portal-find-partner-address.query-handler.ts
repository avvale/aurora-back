/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPartnerAddressQuery,
  BusinessPartnerPortalPartnerAddressMapper,
  BusinessPartnerPortalPartnerAddressResponse,
} from '@app/business-partner-portal/partner-address';
import { BusinessPartnerPortalFindPartnerAddressService } from '@app/business-partner-portal/partner-address/application/find/business-partner-portal-find-partner-address.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalFindPartnerAddressQuery)
export class BusinessPartnerPortalFindPartnerAddressQueryHandler
  implements IQueryHandler<BusinessPartnerPortalFindPartnerAddressQuery>
{
  private readonly mapper: BusinessPartnerPortalPartnerAddressMapper =
    new BusinessPartnerPortalPartnerAddressMapper();

  constructor(
    private readonly findPartnerAddressService: BusinessPartnerPortalFindPartnerAddressService,
  ) {}

  async execute(
    query: BusinessPartnerPortalFindPartnerAddressQuery,
  ): Promise<BusinessPartnerPortalPartnerAddressResponse> {
    const partnerAddress = await this.findPartnerAddressService.main(
      query.queryStatement,
      query.constraint,
      query.cQMetadata,
    );

    return this.mapper.mapAggregateToResponse(partnerAddress);
  }
}
