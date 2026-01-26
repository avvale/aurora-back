/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { BusinessPartnerPortalPaymentMode } from '@api/graphql';
import {
  BusinessPartnerPortalDeletePaymentModeByIdCommand,
  BusinessPartnerPortalFindPaymentModeByIdQuery,
} from '@app/business-partner-portal/payment-mode';
import {
  AuditingMeta,
  ICommandBus,
  IQueryBus,
  QueryStatement,
} from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalDeletePaymentModeByIdHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    id: string,
    constraint?: QueryStatement,
    timezone?: string,
    auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPaymentMode> {
    const paymentMode = await this.queryBus.ask(
      new BusinessPartnerPortalFindPaymentModeByIdQuery(id, constraint, {
        timezone,
      }),
    );

    if (!paymentMode) {
      throw new NotFoundException(
        `BusinessPartnerPortalPaymentMode with id: ${id}, not found`,
      );
    }

    await this.commandBus.dispatch(
      new BusinessPartnerPortalDeletePaymentModeByIdCommand(id, constraint, {
        timezone,
        repositoryOptions: {
          auditing,
        },
      }),
    );

    return paymentMode;
  }
}
