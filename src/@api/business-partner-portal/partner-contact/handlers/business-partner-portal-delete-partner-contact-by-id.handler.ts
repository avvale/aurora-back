/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalPartnerContact } from '@api/graphql';
import {
  BusinessPartnerPortalDeletePartnerContactByIdCommand,
  BusinessPartnerPortalFindPartnerContactByIdQuery,
} from '@app/business-partner-portal/partner-contact';
import {
  AuditingMeta,
  ICommandBus,
  IQueryBus,
  QueryStatement,
} from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalDeletePartnerContactByIdHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    id: string,
    constraint?: QueryStatement,
    timezone?: string,
    auditing?: AuditingMeta,
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

    await this.commandBus.dispatch(
      new BusinessPartnerPortalDeletePartnerContactByIdCommand(id, constraint, {
        timezone,
        repositoryOptions: {
          auditing,
        },
      }),
    );

    return partnerContact;
  }
}
