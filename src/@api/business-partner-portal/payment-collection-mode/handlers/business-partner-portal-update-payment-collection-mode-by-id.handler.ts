/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalPaymentCollectionMode,
  BusinessPartnerPortalUpdatePaymentCollectionModeByIdInput,
} from '@api/graphql';
import {
  BusinessPartnerPortalFindPaymentCollectionModeByIdQuery,
  BusinessPartnerPortalUpdatePaymentCollectionModeByIdCommand,
} from '@app/business-partner-portal/payment-collection-mode';
import {
  AuditingMeta,
  diff,
  ICommandBus,
  IQueryBus,
  QueryStatement,
} from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalUpdatePaymentCollectionModeByIdHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    payload: BusinessPartnerPortalUpdatePaymentCollectionModeByIdInput,
    constraint?: QueryStatement,
    timezone?: string,
    auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPaymentCollectionMode> {
    const paymentCollectionMode = await this.queryBus.ask(
      new BusinessPartnerPortalFindPaymentCollectionModeByIdQuery(
        payload.id,
        constraint,
        {
          timezone,
        },
      ),
    );

    if (!paymentCollectionMode) {
      throw new NotFoundException(
        `BusinessPartnerPortalPaymentCollectionMode with id: ${payload.id}, not found`,
      );
    }

    const dataToUpdate = diff(payload, paymentCollectionMode);

    await this.commandBus.dispatch(
      new BusinessPartnerPortalUpdatePaymentCollectionModeByIdCommand(
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
      new BusinessPartnerPortalFindPaymentCollectionModeByIdQuery(
        payload.id,
        constraint,
        {
          timezone,
        },
      ),
    );
  }
}
