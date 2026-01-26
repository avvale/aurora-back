/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { BusinessPartnerPortalPartnerAddress } from '@api/graphql';
import {
  BusinessPartnerPortalDeletePartnerAddressByIdCommand,
  BusinessPartnerPortalFindPartnerAddressByIdQuery,
} from '@app/business-partner-portal/partner-address';
import {
  AuditingMeta,
  ICommandBus,
  IQueryBus,
  QueryStatement,
} from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalDeletePartnerAddressByIdHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    id: string,
    constraint?: QueryStatement,
    timezone?: string,
    auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPartnerAddress> {
    const partnerAddress = await this.queryBus.ask(
      new BusinessPartnerPortalFindPartnerAddressByIdQuery(id, constraint, {
        timezone,
      }),
    );

    if (!partnerAddress) {
      throw new NotFoundException(
        `BusinessPartnerPortalPartnerAddress with id: ${id}, not found`,
      );
    }

    await this.commandBus.dispatch(
      new BusinessPartnerPortalDeletePartnerAddressByIdCommand(id, constraint, {
        timezone,
        repositoryOptions: {
          auditing,
        },
      }),
    );

    return partnerAddress;
  }
}
