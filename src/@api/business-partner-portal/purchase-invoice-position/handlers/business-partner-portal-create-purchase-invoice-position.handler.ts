/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePurchaseInvoicePositionInput,
  BusinessPartnerPortalPurchaseInvoicePosition,
} from '@api/graphql';
import {
  BusinessPartnerPortalCreatePurchaseInvoicePositionCommand,
  BusinessPartnerPortalFindPurchaseInvoicePositionByIdQuery,
} from '@app/business-partner-portal/purchase-invoice-position';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalCreatePurchaseInvoicePositionHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    payload: BusinessPartnerPortalCreatePurchaseInvoicePositionInput,
    timezone?: string,
    auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPurchaseInvoicePosition> {
    await this.commandBus.dispatch(
      new BusinessPartnerPortalCreatePurchaseInvoicePositionCommand(payload, {
        timezone,
        repositoryOptions: {
          auditing,
        },
      }),
    );

    return await this.queryBus.ask(
      new BusinessPartnerPortalFindPurchaseInvoicePositionByIdQuery(
        payload.id,
        {},
        {
          timezone,
        },
      ),
    );
  }
}
