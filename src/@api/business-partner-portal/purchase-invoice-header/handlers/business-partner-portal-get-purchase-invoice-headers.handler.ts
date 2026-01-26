/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalPurchaseInvoiceHeader } from '@api/graphql';
import { BusinessPartnerPortalGetPurchaseInvoiceHeadersQuery } from '@app/business-partner-portal/purchase-invoice-header';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalGetPurchaseInvoiceHeadersHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalPurchaseInvoiceHeader[]> {
    return await this.queryBus.ask(
      new BusinessPartnerPortalGetPurchaseInvoiceHeadersQuery(
        queryStatement,
        constraint,
        {
          timezone,
        },
      ),
    );
  }
}
