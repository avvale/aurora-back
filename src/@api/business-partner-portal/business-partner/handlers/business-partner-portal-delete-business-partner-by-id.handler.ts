/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartner } from '@api/graphql';
import {
  BusinessPartnerPortalDeleteBusinessPartnerByIdCommand,
  BusinessPartnerPortalFindBusinessPartnerByIdQuery,
} from '@app/business-partner-portal/business-partner';
import {
  AuditingMeta,
  ICommandBus,
  IQueryBus,
  QueryStatement,
} from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalDeleteBusinessPartnerByIdHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    id: string,
    constraint?: QueryStatement,
    timezone?: string,
    auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalBusinessPartner> {
    const businessPartner = await this.queryBus.ask(
      new BusinessPartnerPortalFindBusinessPartnerByIdQuery(id, constraint, {
        timezone,
      }),
    );

    if (!businessPartner) {
      throw new NotFoundException(
        `BusinessPartnerPortalBusinessPartner with id: ${id}, not found`,
      );
    }

    await this.commandBus.dispatch(
      new BusinessPartnerPortalDeleteBusinessPartnerByIdCommand(
        id,
        constraint,
        {
          timezone,
          repositoryOptions: {
            auditing,
          },
        },
      ),
    );

    return businessPartner;
  }
}
