/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalPurchaseInvoicePosition } from '@api/graphql';
import { BusinessPartnerPortalFindPurchaseInvoicePositionQuery } from '@app/business-partner-portal/purchase-invoice-position';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindPurchaseInvoicePositionHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalPurchaseInvoicePosition> {
    const purchaseInvoicePosition = await this.queryBus.ask(
      new BusinessPartnerPortalFindPurchaseInvoicePositionQuery(
        queryStatement,
        constraint,
        {
          timezone,
        },
      ),
    );

    if (!purchaseInvoicePosition) {
      throw new NotFoundException(
        `BusinessPartnerPortalPurchaseInvoicePosition not found`,
      );
    }

    return purchaseInvoicePosition;
  }
}
