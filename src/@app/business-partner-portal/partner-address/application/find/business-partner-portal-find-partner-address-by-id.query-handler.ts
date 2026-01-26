/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPartnerAddressByIdQuery,
  BusinessPartnerPortalPartnerAddressMapper,
  BusinessPartnerPortalPartnerAddressResponse,
} from '@app/business-partner-portal/partner-address';
import { BusinessPartnerPortalFindPartnerAddressByIdService } from '@app/business-partner-portal/partner-address/application/find/business-partner-portal-find-partner-address-by-id.service';
import { BusinessPartnerPortalPartnerAddressId } from '@app/business-partner-portal/partner-address/domain/value-objects';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalFindPartnerAddressByIdQuery)
export class BusinessPartnerPortalFindPartnerAddressByIdQueryHandler
  implements IQueryHandler<BusinessPartnerPortalFindPartnerAddressByIdQuery>
{
  private readonly mapper: BusinessPartnerPortalPartnerAddressMapper =
    new BusinessPartnerPortalPartnerAddressMapper();

  constructor(
    private readonly findPartnerAddressByIdService: BusinessPartnerPortalFindPartnerAddressByIdService,
  ) {}

  async execute(
    query: BusinessPartnerPortalFindPartnerAddressByIdQuery,
  ): Promise<BusinessPartnerPortalPartnerAddressResponse> {
    const partnerAddress = await this.findPartnerAddressByIdService.main(
      new BusinessPartnerPortalPartnerAddressId(query.id),
      query.constraint,
      query.cQMetadata,
    );

    return this.mapper.mapAggregateToResponse(partnerAddress);
  }
}
