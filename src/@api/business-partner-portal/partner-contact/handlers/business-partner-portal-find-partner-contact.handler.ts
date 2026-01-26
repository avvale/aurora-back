/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalPartnerContact } from '@api/graphql';
import { BusinessPartnerPortalFindPartnerContactQuery } from '@app/business-partner-portal/partner-contact';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindPartnerContactHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalPartnerContact> {
    const partnerContact = await this.queryBus.ask(
      new BusinessPartnerPortalFindPartnerContactQuery(
        queryStatement,
        constraint,
        {
          timezone,
        },
      ),
    );

    if (!partnerContact) {
      throw new NotFoundException(
        `BusinessPartnerPortalPartnerContact not found`,
      );
    }

    return partnerContact;
  }
}
