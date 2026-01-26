/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalSalesInvoicePosition } from '@api/graphql';
import { BusinessPartnerPortalFindSalesInvoicePositionQuery } from '@app/business-partner-portal/sales-invoice-position';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindSalesInvoicePositionHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalSalesInvoicePosition> {
    const salesInvoicePosition = await this.queryBus.ask(
      new BusinessPartnerPortalFindSalesInvoicePositionQuery(
        queryStatement,
        constraint,
        {
          timezone,
        },
      ),
    );

    if (!salesInvoicePosition) {
      throw new NotFoundException(
        `BusinessPartnerPortalSalesInvoicePosition not found`,
      );
    }

    return salesInvoicePosition;
  }
}
