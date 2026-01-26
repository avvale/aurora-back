/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalPurchaseInvoicePosition } from '@api/graphql';
import { BusinessPartnerPortalFindPurchaseInvoicePositionByIdQuery } from '@app/business-partner-portal/purchase-invoice-position';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindPurchaseInvoicePositionByIdHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    id: string,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalPurchaseInvoicePosition> {
    const purchaseInvoicePosition = await this.queryBus.ask(
      new BusinessPartnerPortalFindPurchaseInvoicePositionByIdQuery(
        id,
        constraint,
        {
          timezone,
        },
      ),
    );

    if (!purchaseInvoicePosition) {
      throw new NotFoundException(
        `BusinessPartnerPortalPurchaseInvoicePosition with id: ${id}, not found`,
      );
    }

    return purchaseInvoicePosition;
  }
}
