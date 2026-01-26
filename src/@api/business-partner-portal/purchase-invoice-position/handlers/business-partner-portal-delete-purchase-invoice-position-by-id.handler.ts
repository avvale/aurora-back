/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalPurchaseInvoicePosition } from '@api/graphql';
import {
  BusinessPartnerPortalDeletePurchaseInvoicePositionByIdCommand,
  BusinessPartnerPortalFindPurchaseInvoicePositionByIdQuery,
} from '@app/business-partner-portal/purchase-invoice-position';
import {
  AuditingMeta,
  ICommandBus,
  IQueryBus,
  QueryStatement,
} from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalDeletePurchaseInvoicePositionByIdHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    id: string,
    constraint?: QueryStatement,
    timezone?: string,
    auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPurchaseInvoicePosition> {
    const purchaseInvoicePosition = await this.queryBus.ask(
      new BusinessPartnerPortalFindPurchaseInvoicePositionByIdQuery(
        id,
        constraint,
        {
          timezone,
        },
      ),
    );

    if (!purchaseInvoicePosition) {
      throw new NotFoundException(
        `BusinessPartnerPortalPurchaseInvoicePosition with id: ${id}, not found`,
      );
    }

    await this.commandBus.dispatch(
      new BusinessPartnerPortalDeletePurchaseInvoicePositionByIdCommand(
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

    return purchaseInvoicePosition;
  }
}
