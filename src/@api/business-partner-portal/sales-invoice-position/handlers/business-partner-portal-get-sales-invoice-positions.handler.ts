/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalSalesInvoicePosition } from '@api/graphql';
import { BusinessPartnerPortalGetSalesInvoicePositionsQuery } from '@app/business-partner-portal/sales-invoice-position';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalGetSalesInvoicePositionsHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalSalesInvoicePosition[]> {
    return await this.queryBus.ask(
      new BusinessPartnerPortalGetSalesInvoicePositionsQuery(
        queryStatement,
        constraint,
        {
          timezone,
        },
      ),
    );
  }
}
