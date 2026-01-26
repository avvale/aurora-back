/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalPartnerContact } from '@api/graphql';
import { BusinessPartnerPortalGetPartnerContactsQuery } from '@app/business-partner-portal/partner-contact';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalGetPartnerContactsHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalPartnerContact[]> {
    return await this.queryBus.ask(
      new BusinessPartnerPortalGetPartnerContactsQuery(
        queryStatement,
        constraint,
        {
          timezone,
        },
      ),
    );
  }
}
