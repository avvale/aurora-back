/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePaymentModeInput,
  BusinessPartnerPortalPaymentMode,
} from '@api/graphql';
import {
  BusinessPartnerPortalCreatePaymentModeCommand,
  BusinessPartnerPortalFindPaymentModeByIdQuery,
} from '@app/business-partner-portal/payment-mode';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalCreatePaymentModeHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    payload: BusinessPartnerPortalCreatePaymentModeInput,
    timezone?: string,
    auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPaymentMode> {
    await this.commandBus.dispatch(
      new BusinessPartnerPortalCreatePaymentModeCommand(payload, {
        timezone,
        repositoryOptions: {
          auditing,
        },
      }),
    );

    return await this.queryBus.ask(
      new BusinessPartnerPortalFindPaymentModeByIdQuery(
        payload.id,
        {},
        {
          timezone,
        },
      ),
    );
  }
}
