/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalSalesInvoicePosition } from '@api/graphql';
import { BusinessPartnerPortalFindSalesInvoicePositionByIdQuery } from '@app/business-partner-portal/sales-invoice-position';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindSalesInvoicePositionByIdHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    id: string,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalSalesInvoicePosition> {
    const salesInvoicePosition = await this.queryBus.ask(
      new BusinessPartnerPortalFindSalesInvoicePositionByIdQuery(
        id,
        constraint,
        {
          timezone,
        },
      ),
    );

    if (!salesInvoicePosition) {
      throw new NotFoundException(
        `BusinessPartnerPortalSalesInvoicePosition with id: ${id}, not found`,
      );
    }

    return salesInvoicePosition;
  }
}
