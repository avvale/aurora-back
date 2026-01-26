/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalPurchaseInvoicePosition,
  BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdInput,
} from '@api/graphql';
import {
  BusinessPartnerPortalFindPurchaseInvoicePositionByIdQuery,
  BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdCommand,
} from '@app/business-partner-portal/purchase-invoice-position';
import {
  AuditingMeta,
  diff,
  ICommandBus,
  IQueryBus,
  QueryStatement,
} from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    payload: BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdInput,
    constraint?: QueryStatement,
    timezone?: string,
    auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPurchaseInvoicePosition> {
    const purchaseInvoicePosition = await this.queryBus.ask(
      new BusinessPartnerPortalFindPurchaseInvoicePositionByIdQuery(
        payload.id,
        constraint,
        {
          timezone,
        },
      ),
    );

    if (!purchaseInvoicePosition) {
      throw new NotFoundException(
        `BusinessPartnerPortalPurchaseInvoicePosition with id: ${payload.id}, not found`,
      );
    }

    const dataToUpdate = diff(payload, purchaseInvoicePosition);

    await this.commandBus.dispatch(
      new BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdCommand(
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
      new BusinessPartnerPortalFindPurchaseInvoicePositionByIdQuery(
        payload.id,
        constraint,
        {
          timezone,
        },
      ),
    );
  }
}
