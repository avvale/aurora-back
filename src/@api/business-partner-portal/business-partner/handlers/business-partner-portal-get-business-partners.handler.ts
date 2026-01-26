/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartner } from '@api/graphql';
import { BusinessPartnerPortalGetBusinessPartnersQuery } from '@app/business-partner-portal/business-partner';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalGetBusinessPartnersHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalBusinessPartner[]> {
    return await this.queryBus.ask(
      new BusinessPartnerPortalGetBusinessPartnersQuery(
        queryStatement,
        constraint,
        {
          timezone,
        },
      ),
    );
  }
}
