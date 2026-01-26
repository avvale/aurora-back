/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalPurchaseInvoiceHeader } from '@api/graphql';
import {
  BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdCommand,
  BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdQuery,
} from '@app/business-partner-portal/purchase-invoice-header';
import {
  AuditingMeta,
  ICommandBus,
  IQueryBus,
  QueryStatement,
} from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    id: string,
    constraint?: QueryStatement,
    timezone?: string,
    auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPurchaseInvoiceHeader> {
    const purchaseInvoiceHeader = await this.queryBus.ask(
      new BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdQuery(
        id,
        constraint,
        {
          timezone,
        },
      ),
    );

    if (!purchaseInvoiceHeader) {
      throw new NotFoundException(
        `BusinessPartnerPortalPurchaseInvoiceHeader with id: ${id}, not found`,
      );
    }

    await this.commandBus.dispatch(
      new BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdCommand(
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

    return purchaseInvoiceHeader;
  }
}
