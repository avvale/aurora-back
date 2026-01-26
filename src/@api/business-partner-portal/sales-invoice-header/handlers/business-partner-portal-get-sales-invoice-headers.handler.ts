/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalSalesInvoiceHeader } from '@api/graphql';
import { BusinessPartnerPortalGetSalesInvoiceHeadersQuery } from '@app/business-partner-portal/sales-invoice-header';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalGetSalesInvoiceHeadersHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalSalesInvoiceHeader[]> {
    return await this.queryBus.ask(
      new BusinessPartnerPortalGetSalesInvoiceHeadersQuery(
        queryStatement,
        constraint,
        {
          timezone,
        },
      ),
    );
  }
}
