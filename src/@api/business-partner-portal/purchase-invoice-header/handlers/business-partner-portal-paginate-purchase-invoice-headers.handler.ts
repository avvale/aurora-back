/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { Pagination } from '@api/graphql';
import { BusinessPartnerPortalPaginatePurchaseInvoiceHeadersQuery } from '@app/business-partner-portal/purchase-invoice-header';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalPaginatePurchaseInvoiceHeadersHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<Pagination> {
    return await this.queryBus.ask(
      new BusinessPartnerPortalPaginatePurchaseInvoiceHeadersQuery(
        queryStatement,
        constraint,
        {
          timezone,
        },
      ),
    );
  }
}
