/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalSalesInvoiceHeader } from '@api/graphql';
import { BusinessPartnerPortalFindSalesInvoiceHeaderByIdQuery } from '@app/business-partner-portal/sales-invoice-header';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindSalesInvoiceHeaderByIdHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    id: string,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalSalesInvoiceHeader> {
    const salesInvoiceHeader = await this.queryBus.ask(
      new BusinessPartnerPortalFindSalesInvoiceHeaderByIdQuery(id, constraint, {
        timezone,
      }),
    );

    if (!salesInvoiceHeader) {
      throw new NotFoundException(
        `BusinessPartnerPortalSalesInvoiceHeader with id: ${id}, not found`,
      );
    }

    return salesInvoiceHeader;
  }
}
