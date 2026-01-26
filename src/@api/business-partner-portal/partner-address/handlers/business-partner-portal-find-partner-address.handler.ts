/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { BusinessPartnerPortalPartnerAddress } from '@api/graphql';
import { BusinessPartnerPortalFindPartnerAddressQuery } from '@app/business-partner-portal/partner-address';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindPartnerAddressHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalPartnerAddress> {
    const partnerAddress = await this.queryBus.ask(
      new BusinessPartnerPortalFindPartnerAddressQuery(
        queryStatement,
        constraint,
        {
          timezone,
        },
      ),
    );

    if (!partnerAddress) {
      throw new NotFoundException(
        `BusinessPartnerPortalPartnerAddress not found`,
      );
    }

    return partnerAddress;
  }
}
