/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePartnerContactInput,
  BusinessPartnerPortalPartnerContact,
} from '@api/graphql';
import {
  BusinessPartnerPortalCreatePartnerContactCommand,
  BusinessPartnerPortalFindPartnerContactByIdQuery,
} from '@app/business-partner-portal/partner-contact';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalCreatePartnerContactHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    payload: BusinessPartnerPortalCreatePartnerContactInput,
    timezone?: string,
    auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPartnerContact> {
    await this.commandBus.dispatch(
      new BusinessPartnerPortalCreatePartnerContactCommand(payload, {
        timezone,
        repositoryOptions: {
          auditing,
        },
      }),
    );

    return await this.queryBus.ask(
      new BusinessPartnerPortalFindPartnerContactByIdQuery(
        payload.id,
        {},
        {
          timezone,
        },
      ),
    );
  }
}
