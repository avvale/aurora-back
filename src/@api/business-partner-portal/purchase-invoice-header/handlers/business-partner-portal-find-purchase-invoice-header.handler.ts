/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalPurchaseInvoiceHeader } from '@api/graphql';
import { BusinessPartnerPortalFindPurchaseInvoiceHeaderQuery } from '@app/business-partner-portal/purchase-invoice-header';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindPurchaseInvoiceHeaderHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalPurchaseInvoiceHeader> {
    const purchaseInvoiceHeader = await this.queryBus.ask(
      new BusinessPartnerPortalFindPurchaseInvoiceHeaderQuery(
        queryStatement,
        constraint,
        {
          timezone,
        },
      ),
    );

    if (!purchaseInvoiceHeader) {
      throw new NotFoundException(
        `BusinessPartnerPortalPurchaseInvoiceHeader not found`,
      );
    }

    return purchaseInvoiceHeader;
  }
}
