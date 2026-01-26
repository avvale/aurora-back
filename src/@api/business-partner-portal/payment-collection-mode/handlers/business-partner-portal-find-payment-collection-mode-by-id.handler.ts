/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { BusinessPartnerPortalPaymentCollectionMode } from '@api/graphql';
import { BusinessPartnerPortalFindPaymentCollectionModeByIdQuery } from '@app/business-partner-portal/payment-collection-mode';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindPaymentCollectionModeByIdHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    id: string,
    constraint?: QueryStatement,
    timezone?: string,
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

    return paymentCollectionMode;
  }
}
