/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { BusinessPartnerPortalPaymentCollectionMode } from '@api/graphql';
import {
  BusinessPartnerPortalDeletePaymentCollectionModeByIdCommand,
  BusinessPartnerPortalFindPaymentCollectionModeByIdQuery,
} from '@app/business-partner-portal/payment-collection-mode';
import {
  AuditingMeta,
  ICommandBus,
  IQueryBus,
  QueryStatement,
} from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalDeletePaymentCollectionModeByIdHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    id: string,
    constraint?: QueryStatement,
    timezone?: string,
    auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPaymentCollectionMode> {
    const paymentCollectionMode = await this.queryBus.ask(
      new BusinessPartnerPortalFindPaymentCollectionModeByIdQuery(
        id,
        constraint,
        {
          timezone,
        },
      ),
    );

    if (!paymentCollectionMode) {
      throw new NotFoundException(
        `BusinessPartnerPortalPaymentCollectionMode with id: ${id}, not found`,
      );
    }

    await this.commandBus.dispatch(
      new BusinessPartnerPortalDeletePaymentCollectionModeByIdCommand(
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

    return paymentCollectionMode;
  }
}
