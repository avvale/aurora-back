/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { BusinessPartnerPortalPaymentCollectionMode } from '@api/graphql';
import { BusinessPartnerPortalGetPaymentCollectionModesQuery } from '@app/business-partner-portal/payment-collection-mode';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalGetPaymentCollectionModesHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalPaymentCollectionMode[]> {
    return await this.queryBus.ask(
      new BusinessPartnerPortalGetPaymentCollectionModesQuery(
        queryStatement,
        constraint,
        {
          timezone,
        },
      ),
    );
  }
}
