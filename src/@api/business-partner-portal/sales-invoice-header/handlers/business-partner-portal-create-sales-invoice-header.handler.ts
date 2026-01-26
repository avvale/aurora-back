/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalCreateSalesInvoiceHeaderInput,
  BusinessPartnerPortalSalesInvoiceHeader,
} from '@api/graphql';
import {
  BusinessPartnerPortalCreateSalesInvoiceHeaderCommand,
  BusinessPartnerPortalFindSalesInvoiceHeaderByIdQuery,
} from '@app/business-partner-portal/sales-invoice-header';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalCreateSalesInvoiceHeaderHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    payload: BusinessPartnerPortalCreateSalesInvoiceHeaderInput,
    timezone?: string,
    auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalSalesInvoiceHeader> {
    await this.commandBus.dispatch(
      new BusinessPartnerPortalCreateSalesInvoiceHeaderCommand(payload, {
        timezone,
        repositoryOptions: {
          auditing,
        },
      }),
    );

    return await this.queryBus.ask(
      new BusinessPartnerPortalFindSalesInvoiceHeaderByIdQuery(
        payload.id,
        {},
        {
          timezone,
        },
      ),
    );
  }
}
