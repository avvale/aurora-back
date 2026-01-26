/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalPartnerAddress,
  BusinessPartnerPortalUpdatePartnerAddressByIdInput,
} from '@api/graphql';
import {
  BusinessPartnerPortalFindPartnerAddressByIdQuery,
  BusinessPartnerPortalUpdatePartnerAddressByIdCommand,
} from '@app/business-partner-portal/partner-address';
import {
  AuditingMeta,
  diff,
  ICommandBus,
  IQueryBus,
  QueryStatement,
} from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalUpdatePartnerAddressByIdHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    payload: BusinessPartnerPortalUpdatePartnerAddressByIdInput,
    constraint?: QueryStatement,
    timezone?: string,
    auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPartnerAddress> {
    const partnerAddress = await this.queryBus.ask(
      new BusinessPartnerPortalFindPartnerAddressByIdQuery(
        payload.id,
        constraint,
        {
          timezone,
        },
      ),
    );

    if (!partnerAddress) {
      throw new NotFoundException(
        `BusinessPartnerPortalPartnerAddress with id: ${payload.id}, not found`,
      );
    }

    const dataToUpdate = diff(payload, partnerAddress);

    await this.commandBus.dispatch(
      new BusinessPartnerPortalUpdatePartnerAddressByIdCommand(
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
      new BusinessPartnerPortalFindPartnerAddressByIdQuery(
        payload.id,
        constraint,
        {
          timezone,
        },
      ),
    );
  }
}
