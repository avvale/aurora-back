/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { BusinessPartnerPortalPaymentCollectionMode } from '@api/graphql';
import { BusinessPartnerPortalFindPaymentCollectionModeQuery } from '@app/business-partner-portal/payment-collection-mode';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindPaymentCollectionModeHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalPaymentCollectionMode> {
    const paymentCollectionMode = await this.queryBus.ask(
      new BusinessPartnerPortalFindPaymentCollectionModeQuery(
        queryStatement,
        constraint,
        {
          timezone,
        },
      ),
    );

    if (!paymentCollectionMode) {
      throw new NotFoundException(
        `BusinessPartnerPortalPaymentCollectionMode not found`,
      );
    }

    return paymentCollectionMode;
  }
}
