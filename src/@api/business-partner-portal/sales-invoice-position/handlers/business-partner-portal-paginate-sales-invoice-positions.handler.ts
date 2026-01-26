/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { Pagination } from '@api/graphql';
import { BusinessPartnerPortalPaginateSalesInvoicePositionsQuery } from '@app/business-partner-portal/sales-invoice-position';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalPaginateSalesInvoicePositionsHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<Pagination> {
    return await this.queryBus.ask(
      new BusinessPartnerPortalPaginateSalesInvoicePositionsQuery(
        queryStatement,
        constraint,
        {
          timezone,
        },
      ),
    );
  }
}
