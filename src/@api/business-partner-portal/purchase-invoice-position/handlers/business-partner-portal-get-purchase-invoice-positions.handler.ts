/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalPurchaseInvoicePosition } from '@api/graphql';
import { BusinessPartnerPortalGetPurchaseInvoicePositionsQuery } from '@app/business-partner-portal/purchase-invoice-position';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalGetPurchaseInvoicePositionsHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalPurchaseInvoicePosition[]> {
    return await this.queryBus.ask(
      new BusinessPartnerPortalGetPurchaseInvoicePositionsQuery(
        queryStatement,
        constraint,
        {
          timezone,
        },
      ),
    );
  }
}
