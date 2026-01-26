/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalPartnerContact } from '@api/graphql';
import { BusinessPartnerPortalFindPartnerContactByIdQuery } from '@app/business-partner-portal/partner-contact';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindPartnerContactByIdHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    id: string,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalPartnerContact> {
    const partnerContact = await this.queryBus.ask(
      new BusinessPartnerPortalFindPartnerContactByIdQuery(id, constraint, {
        timezone,
      }),
    );

    if (!partnerContact) {
      throw new NotFoundException(
        `BusinessPartnerPortalPartnerContact with id: ${id}, not found`,
      );
    }

    return partnerContact;
  }
}
