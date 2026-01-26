/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePurchaseInvoiceHeaderInput,
  BusinessPartnerPortalPurchaseInvoiceHeader,
} from '@api/graphql';
import {
  BusinessPartnerPortalCreatePurchaseInvoiceHeaderCommand,
  BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdQuery,
} from '@app/business-partner-portal/purchase-invoice-header';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalCreatePurchaseInvoiceHeaderHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    payload: BusinessPartnerPortalCreatePurchaseInvoiceHeaderInput,
    timezone?: string,
    auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPurchaseInvoiceHeader> {
    await this.commandBus.dispatch(
      new BusinessPartnerPortalCreatePurchaseInvoiceHeaderCommand(payload, {
        timezone,
        repositoryOptions: {
          auditing,
        },
      }),
    );

    return await this.queryBus.ask(
      new BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdQuery(
        payload.id,
        {},
        {
          timezone,
        },
      ),
    );
  }
}
