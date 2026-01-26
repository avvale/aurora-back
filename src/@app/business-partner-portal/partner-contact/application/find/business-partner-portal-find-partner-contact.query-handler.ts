/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPartnerContactQuery,
  BusinessPartnerPortalPartnerContactMapper,
  BusinessPartnerPortalPartnerContactResponse,
} from '@app/business-partner-portal/partner-contact';
import { BusinessPartnerPortalFindPartnerContactService } from '@app/business-partner-portal/partner-contact/application/find/business-partner-portal-find-partner-contact.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalFindPartnerContactQuery)
export class BusinessPartnerPortalFindPartnerContactQueryHandler
  implements IQueryHandler<BusinessPartnerPortalFindPartnerContactQuery>
{
  private readonly mapper: BusinessPartnerPortalPartnerContactMapper =
    new BusinessPartnerPortalPartnerContactMapper();

  constructor(
    private readonly findPartnerContactService: BusinessPartnerPortalFindPartnerContactService,
  ) {}

  async execute(
    query: BusinessPartnerPortalFindPartnerContactQuery,
  ): Promise<BusinessPartnerPortalPartnerContactResponse> {
    const partnerContact = await this.findPartnerContactService.main(
      query.queryStatement,
      query.constraint,
      query.cQMetadata,
    );

    return this.mapper.mapAggregateToResponse(partnerContact);
  }
}
