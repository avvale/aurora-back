/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalSalesInvoiceHeader } from '@api/graphql';
import {
  BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdCommand,
  BusinessPartnerPortalFindSalesInvoiceHeaderByIdQuery,
} from '@app/business-partner-portal/sales-invoice-header';
import {
  AuditingMeta,
  ICommandBus,
  IQueryBus,
  QueryStatement,
} from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    id: string,
    constraint?: QueryStatement,
    timezone?: string,
    auditing?: AuditingMeta,
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

    await this.commandBus.dispatch(
      new BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdCommand(
        id,
        constraint,
        {
          timezone,
          repositoryOptions: {
            auditing,
          },
        },
      ),
    );

    return salesInvoiceHeader;
  }
}
