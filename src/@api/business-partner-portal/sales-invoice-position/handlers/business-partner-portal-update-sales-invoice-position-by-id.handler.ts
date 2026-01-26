/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalSalesInvoicePosition,
  BusinessPartnerPortalUpdateSalesInvoicePositionByIdInput,
} from '@api/graphql';
import {
  BusinessPartnerPortalFindSalesInvoicePositionByIdQuery,
  BusinessPartnerPortalUpdateSalesInvoicePositionByIdCommand,
} from '@app/business-partner-portal/sales-invoice-position';
import {
  AuditingMeta,
  diff,
  ICommandBus,
  IQueryBus,
  QueryStatement,
} from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalUpdateSalesInvoicePositionByIdHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    payload: BusinessPartnerPortalUpdateSalesInvoicePositionByIdInput,
    constraint?: QueryStatement,
    timezone?: string,
    auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalSalesInvoicePosition> {
    const salesInvoicePosition = await this.queryBus.ask(
      new BusinessPartnerPortalFindSalesInvoicePositionByIdQuery(
        payload.id,
        constraint,
        {
          timezone,
        },
      ),
    );

    if (!salesInvoicePosition) {
      throw new NotFoundException(
        `BusinessPartnerPortalSalesInvoicePosition with id: ${payload.id}, not found`,
      );
    }

    const dataToUpdate = diff(payload, salesInvoicePosition);

    await this.commandBus.dispatch(
      new BusinessPartnerPortalUpdateSalesInvoicePositionByIdCommand(
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
      new BusinessPartnerPortalFindSalesInvoicePositionByIdQuery(
        payload.id,
        constraint,
        {
          timezone,
        },
      ),
    );
  }
}
