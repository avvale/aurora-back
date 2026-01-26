/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalSalesInvoiceHeader,
  BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdInput,
} from '@api/graphql';
import {
  BusinessPartnerPortalFindSalesInvoiceHeaderByIdQuery,
  BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdCommand,
} from '@app/business-partner-portal/sales-invoice-header';
import {
  AuditingMeta,
  diff,
  ICommandBus,
  IQueryBus,
  QueryStatement,
} from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    payload: BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdInput,
    constraint?: QueryStatement,
    timezone?: string,
    auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalSalesInvoiceHeader> {
    const salesInvoiceHeader = await this.queryBus.ask(
      new BusinessPartnerPortalFindSalesInvoiceHeaderByIdQuery(
        payload.id,
        constraint,
        {
          timezone,
        },
      ),
    );

    if (!salesInvoiceHeader) {
      throw new NotFoundException(
        `BusinessPartnerPortalSalesInvoiceHeader with id: ${payload.id}, not found`,
      );
    }

    const dataToUpdate = diff(payload, salesInvoiceHeader);

    await this.commandBus.dispatch(
      new BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdCommand(
        {
          ...dataToUpdate,
          id: payload.id,
        },
        constraint,
        {
          timezone,
          repositoryOptions: {
            auditing,
          },
        },
      ),
    );

    return await this.queryBus.ask(
      new BusinessPartnerPortalFindSalesInvoiceHeaderByIdQuery(
        payload.id,
        constraint,
        {
          timezone,
        },
      ),
    );
  }
}
