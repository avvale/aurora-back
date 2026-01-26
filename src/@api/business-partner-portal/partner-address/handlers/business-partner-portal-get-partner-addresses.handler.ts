/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { BusinessPartnerPortalPartnerAddress } from '@api/graphql';
import { BusinessPartnerPortalGetPartnerAddressesQuery } from '@app/business-partner-portal/partner-address';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalGetPartnerAddressesHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalPartnerAddress[]> {
    return await this.queryBus.ask(
      new BusinessPartnerPortalGetPartnerAddressesQuery(
        queryStatement,
        constraint,
        {
          timezone,
        },
      ),
    );
  }
}
