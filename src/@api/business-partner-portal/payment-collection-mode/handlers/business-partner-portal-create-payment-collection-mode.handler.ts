/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePaymentCollectionModeInput,
  BusinessPartnerPortalPaymentCollectionMode,
} from '@api/graphql';
import {
  BusinessPartnerPortalCreatePaymentCollectionModeCommand,
  BusinessPartnerPortalFindPaymentCollectionModeByIdQuery,
} from '@app/business-partner-portal/payment-collection-mode';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalCreatePaymentCollectionModeHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    payload: BusinessPartnerPortalCreatePaymentCollectionModeInput,
    timezone?: string,
    auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPaymentCollectionMode> {
    await this.commandBus.dispatch(
      new BusinessPartnerPortalCreatePaymentCollectionModeCommand(payload, {
        timezone,
        repositoryOptions: {
          auditing,
        },
      }),
    );

    return await this.queryBus.ask(
      new BusinessPartnerPortalFindPaymentCollectionModeByIdQuery(
        payload.id,
        {},
        {
          timezone,
        },
      ),
    );
  }
}
