/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { Pagination } from '@api/graphql';
import { BusinessPartnerPortalPaginatePaymentModesQuery } from '@app/business-partner-portal/payment-mode';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalPaginatePaymentModesHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<Pagination> {
    return await this.queryBus.ask(
      new BusinessPartnerPortalPaginatePaymentModesQuery(
        queryStatement,
        constraint,
        {
          timezone,
        },
      ),
    );
  }
}
