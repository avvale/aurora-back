/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalSalesInvoiceHeader } from '@api/graphql';
import { BusinessPartnerPortalFindSalesInvoiceHeaderQuery } from '@app/business-partner-portal/sales-invoice-header';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindSalesInvoiceHeaderHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalSalesInvoiceHeader> {
    const salesInvoiceHeader = await this.queryBus.ask(
      new BusinessPartnerPortalFindSalesInvoiceHeaderQuery(
        queryStatement,
        constraint,
        {
          timezone,
        },
      ),
    );

    if (!salesInvoiceHeader) {
      throw new NotFoundException(
        `BusinessPartnerPortalSalesInvoiceHeader not found`,
      );
    }

    return salesInvoiceHeader;
  }
}
