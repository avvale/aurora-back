/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPartnerContactByIdQuery,
  BusinessPartnerPortalPartnerContactMapper,
  BusinessPartnerPortalPartnerContactResponse,
} from '@app/business-partner-portal/partner-contact';
import { BusinessPartnerPortalFindPartnerContactByIdService } from '@app/business-partner-portal/partner-contact/application/find/business-partner-portal-find-partner-contact-by-id.service';
import { BusinessPartnerPortalPartnerContactId } from '@app/business-partner-portal/partner-contact/domain/value-objects';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalFindPartnerContactByIdQuery)
export class BusinessPartnerPortalFindPartnerContactByIdQueryHandler
  implements IQueryHandler<BusinessPartnerPortalFindPartnerContactByIdQuery>
{
  private readonly mapper: BusinessPartnerPortalPartnerContactMapper =
    new BusinessPartnerPortalPartnerContactMapper();

  constructor(
    private readonly findPartnerContactByIdService: BusinessPartnerPortalFindPartnerContactByIdService,
  ) {}

  async execute(
    query: BusinessPartnerPortalFindPartnerContactByIdQuery,
  ): Promise<BusinessPartnerPortalPartnerContactResponse> {
    const partnerContact = await this.findPartnerContactByIdService.main(
      new BusinessPartnerPortalPartnerContactId(query.id),
      query.constraint,
      query.cQMetadata,
    );

    return this.mapper.mapAggregateToResponse(partnerContact);
  }
}
