/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalPurchaseInvoiceHeader,
  BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdInput,
} from '@api/graphql';
import {
  BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdQuery,
  BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdCommand,
} from '@app/business-partner-portal/purchase-invoice-header';
import {
  AuditingMeta,
  diff,
  ICommandBus,
  IQueryBus,
  QueryStatement,
} from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    payload: BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdInput,
    constraint?: QueryStatement,
    timezone?: string,
    auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPurchaseInvoiceHeader> {
    const purchaseInvoiceHeader = await this.queryBus.ask(
      new BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdQuery(
        payload.id,
        constraint,
        {
          timezone,
        },
      ),
    );

    if (!purchaseInvoiceHeader) {
      throw new NotFoundException(
        `BusinessPartnerPortalPurchaseInvoiceHeader with id: ${payload.id}, not found`,
      );
    }

    const dataToUpdate = diff(payload, purchaseInvoiceHeader);

    await this.commandBus.dispatch(
      new BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdCommand(
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
      new BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdQuery(
        payload.id,
        constraint,
        {
          timezone,
        },
      ),
    );
  }
}
