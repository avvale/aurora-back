/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartner } from '@api/graphql';
import { BusinessPartnerPortalFindBusinessPartnerQuery } from '@app/business-partner-portal/business-partner';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindBusinessPartnerHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalBusinessPartner> {
    const businessPartner = await this.queryBus.ask(
      new BusinessPartnerPortalFindBusinessPartnerQuery(
        queryStatement,
        constraint,
        {
          timezone,
        },
      ),
    );

    if (!businessPartner) {
      throw new NotFoundException(
        `BusinessPartnerPortalBusinessPartner not found`,
      );
    }

    return businessPartner;
  }
}
