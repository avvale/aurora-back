/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalBusinessPartner,
  BusinessPartnerPortalUpdateBusinessPartnerByIdInput,
} from '@api/graphql';
import {
  BusinessPartnerPortalFindBusinessPartnerByIdQuery,
  BusinessPartnerPortalUpdateBusinessPartnerByIdCommand,
} from '@app/business-partner-portal/business-partner';
import {
  AuditingMeta,
  diff,
  ICommandBus,
  IQueryBus,
  QueryStatement,
} from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalUpdateBusinessPartnerByIdHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    payload: BusinessPartnerPortalUpdateBusinessPartnerByIdInput,
    constraint?: QueryStatement,
    timezone?: string,
    auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalBusinessPartner> {
    const businessPartner = await this.queryBus.ask(
      new BusinessPartnerPortalFindBusinessPartnerByIdQuery(
        payload.id,
        constraint,
        {
          timezone,
        },
      ),
    );

    if (!businessPartner) {
      throw new NotFoundException(
        `BusinessPartnerPortalBusinessPartner with id: ${payload.id}, not found`,
      );
    }

    const dataToUpdate = diff(payload, businessPartner);

    await this.commandBus.dispatch(
      new BusinessPartnerPortalUpdateBusinessPartnerByIdCommand(
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
      new BusinessPartnerPortalFindBusinessPartnerByIdQuery(
        payload.id,
        constraint,
        {
          timezone,
        },
      ),
    );
  }
}
