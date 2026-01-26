/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalPaymentMode,
  BusinessPartnerPortalUpdatePaymentModeByIdInput,
} from '@api/graphql';
import {
  BusinessPartnerPortalFindPaymentModeByIdQuery,
  BusinessPartnerPortalUpdatePaymentModeByIdCommand,
} from '@app/business-partner-portal/payment-mode';
import {
  AuditingMeta,
  diff,
  ICommandBus,
  IQueryBus,
  QueryStatement,
} from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalUpdatePaymentModeByIdHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    payload: BusinessPartnerPortalUpdatePaymentModeByIdInput,
    constraint?: QueryStatement,
    timezone?: string,
    auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPaymentMode> {
    const paymentMode = await this.queryBus.ask(
      new BusinessPartnerPortalFindPaymentModeByIdQuery(
        payload.id,
        constraint,
        {
          timezone,
        },
      ),
    );

    if (!paymentMode) {
      throw new NotFoundException(
        `BusinessPartnerPortalPaymentMode with id: ${payload.id}, not found`,
      );
    }

    const dataToUpdate = diff(payload, paymentMode);

    await this.commandBus.dispatch(
      new BusinessPartnerPortalUpdatePaymentModeByIdCommand(
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
      new BusinessPartnerPortalFindPaymentModeByIdQuery(
        payload.id,
        constraint,
        {
          timezone,
        },
      ),
    );
  }
}
