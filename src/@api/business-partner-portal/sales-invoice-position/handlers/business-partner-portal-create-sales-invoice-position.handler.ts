/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalCreateSalesInvoicePositionInput,
  BusinessPartnerPortalSalesInvoicePosition,
} from '@api/graphql';
import {
  BusinessPartnerPortalCreateSalesInvoicePositionCommand,
  BusinessPartnerPortalFindSalesInvoicePositionByIdQuery,
} from '@app/business-partner-portal/sales-invoice-position';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalCreateSalesInvoicePositionHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    payload: BusinessPartnerPortalCreateSalesInvoicePositionInput,
    timezone?: string,
    auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalSalesInvoicePosition> {
    await this.commandBus.dispatch(
      new BusinessPartnerPortalCreateSalesInvoicePositionCommand(payload, {
        timezone,
        repositoryOptions: {
          auditing,
        },
      }),
    );

    return await this.queryBus.ask(
      new BusinessPartnerPortalFindSalesInvoicePositionByIdQuery(
        payload.id,
        {},
        {
          timezone,
        },
      ),
    );
  }
}
