/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { Pagination } from '@api/graphql';
import { BusinessPartnerPortalPaginatePaymentCollectionModesQuery } from '@app/business-partner-portal/payment-collection-mode';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalPaginatePaymentCollectionModesHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<Pagination> {
    return await this.queryBus.ask(
      new BusinessPartnerPortalPaginatePaymentCollectionModesQuery(
        queryStatement,
        constraint,
        {
          timezone,
        },
      ),
    );
  }
}
