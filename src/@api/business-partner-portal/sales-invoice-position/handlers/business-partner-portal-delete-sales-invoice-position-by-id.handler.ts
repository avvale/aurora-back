/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalSalesInvoicePosition } from '@api/graphql';
import {
  BusinessPartnerPortalDeleteSalesInvoicePositionByIdCommand,
  BusinessPartnerPortalFindSalesInvoicePositionByIdQuery,
} from '@app/business-partner-portal/sales-invoice-position';
import {
  AuditingMeta,
  ICommandBus,
  IQueryBus,
  QueryStatement,
} from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalDeleteSalesInvoicePositionByIdHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    id: string,
    constraint?: QueryStatement,
    timezone?: string,
    auditing?: AuditingMeta,
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

    await this.commandBus.dispatch(
      new BusinessPartnerPortalDeleteSalesInvoicePositionByIdCommand(
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

    return salesInvoicePosition;
  }
}
