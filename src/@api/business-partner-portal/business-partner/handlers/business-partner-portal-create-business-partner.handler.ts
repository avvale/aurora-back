/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalBusinessPartner,
  BusinessPartnerPortalCreateBusinessPartnerInput,
} from '@api/graphql';
import {
  BusinessPartnerPortalCreateBusinessPartnerCommand,
  BusinessPartnerPortalFindBusinessPartnerByIdQuery,
} from '@app/business-partner-portal/business-partner';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalCreateBusinessPartnerHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    payload: BusinessPartnerPortalCreateBusinessPartnerInput,
    timezone?: string,
    auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalBusinessPartner> {
    await this.commandBus.dispatch(
      new BusinessPartnerPortalCreateBusinessPartnerCommand(payload, {
        timezone,
        repositoryOptions: {
          auditing,
        },
      }),
    );

    return await this.queryBus.ask(
      new BusinessPartnerPortalFindBusinessPartnerByIdQuery(
        payload.id,
        {},
        {
          timezone,
        },
      ),
    );
  }
}
