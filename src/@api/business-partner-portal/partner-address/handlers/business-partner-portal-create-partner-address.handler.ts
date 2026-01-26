/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePartnerAddressInput,
  BusinessPartnerPortalPartnerAddress,
} from '@api/graphql';
import {
  BusinessPartnerPortalCreatePartnerAddressCommand,
  BusinessPartnerPortalFindPartnerAddressByIdQuery,
} from '@app/business-partner-portal/partner-address';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalCreatePartnerAddressHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    payload: BusinessPartnerPortalCreatePartnerAddressInput,
    timezone?: string,
    auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPartnerAddress> {
    await this.commandBus.dispatch(
      new BusinessPartnerPortalCreatePartnerAddressCommand(payload, {
        timezone,
        repositoryOptions: {
          auditing,
        },
      }),
    );

    return await this.queryBus.ask(
      new BusinessPartnerPortalFindPartnerAddressByIdQuery(
        payload.id,
        {},
        {
          timezone,
        },
      ),
    );
  }
}
