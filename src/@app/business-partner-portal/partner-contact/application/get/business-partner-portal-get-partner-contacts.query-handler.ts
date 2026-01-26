/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPartnerContactsQuery,
  BusinessPartnerPortalPartnerContact,
  BusinessPartnerPortalPartnerContactMapper,
  BusinessPartnerPortalPartnerContactResponse,
} from '@app/business-partner-portal/partner-contact';
import { BusinessPartnerPortalGetPartnerContactsService } from '@app/business-partner-portal/partner-contact/application/get/business-partner-portal-get-partner-contacts.service';
import { LiteralObject } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalGetPartnerContactsQuery)
export class BusinessPartnerPortalGetPartnerContactsQueryHandler
  implements IQueryHandler<BusinessPartnerPortalGetPartnerContactsQuery>
{
  private readonly mapper: BusinessPartnerPortalPartnerContactMapper =
    new BusinessPartnerPortalPartnerContactMapper();

  constructor(
    private readonly getPartnerContactsService: BusinessPartnerPortalGetPartnerContactsService,
  ) {}

  async execute(
    query: BusinessPartnerPortalGetPartnerContactsQuery,
  ): Promise<BusinessPartnerPortalPartnerContactResponse[] | LiteralObject[]> {
    const models = await this.getPartnerContactsService.main(
      query.queryStatement,
      query.constraint,
      query.cQMetadata,
    );

    if (query.cQMetadata?.excludeMapModelToAggregate) return models;

    return this.mapper.mapAggregatesToResponses(
      models as BusinessPartnerPortalPartnerContact[],
    );
  }
}
