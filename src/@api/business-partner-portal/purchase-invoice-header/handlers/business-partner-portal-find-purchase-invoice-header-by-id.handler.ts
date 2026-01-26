/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalPurchaseInvoiceHeader } from '@api/graphql';
import { BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdQuery } from '@app/business-partner-portal/purchase-invoice-header';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    id: string,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalPurchaseInvoiceHeader> {
    const purchaseInvoiceHeader = await this.queryBus.ask(
      new BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdQuery(
        id,
        constraint,
        {
          timezone,
        },
      ),
    );

    if (!purchaseInvoiceHeader) {
      throw new NotFoundException(
        `BusinessPartnerPortalPurchaseInvoiceHeader with id: ${id}, not found`,
      );
    }

    return purchaseInvoiceHeader;
  }
}
