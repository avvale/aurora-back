/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalPartnerContact,
  BusinessPartnerPortalUpdatePartnerContactByIdInput,
} from '@api/graphql';
import {
  BusinessPartnerPortalFindPartnerContactByIdQuery,
  BusinessPartnerPortalUpdatePartnerContactByIdCommand,
} from '@app/business-partner-portal/partner-contact';
import {
  AuditingMeta,
  diff,
  ICommandBus,
  IQueryBus,
  QueryStatement,
} from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalUpdatePartnerContactByIdHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    payload: BusinessPartnerPortalUpdatePartnerContactByIdInput,
    constraint?: QueryStatement,
    timezone?: string,
    auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPartnerContact> {
    const partnerContact = await this.queryBus.ask(
      new BusinessPartnerPortalFindPartnerContactByIdQuery(
        payload.id,
        constraint,
        {
          timezone,
        },
      ),
    );

    if (!partnerContact) {
      throw new NotFoundException(
        `BusinessPartnerPortalPartnerContact with id: ${payload.id}, not found`,
      );
    }

    const dataToUpdate = diff(payload, partnerContact);

    await this.commandBus.dispatch(
      new BusinessPartnerPortalUpdatePartnerContactByIdCommand(
        {
          ...dataToUpdate,
          id: payload.id,
        },
        constraint,
        {
          timezone,
          repositoryOptions: {
            auditing,
          },
        },
      ),
    );

    return await this.queryBus.ask(
      new BusinessPartnerPortalFindPartnerContactByIdQuery(
        payload.id,
        constraint,
        {
          timezone,
        },
      ),
    );
  }
}
