/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalUpdateSalesInvoicePositionByIdHandler } from '@api/business-partner-portal/sales-invoice-position';
import {
  BusinessPartnerPortalSalesInvoicePosition,
  BusinessPartnerPortalUpdateSalesInvoicePositionByIdInput,
} from '@api/graphql';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.salesInvoicePosition.update')
export class BusinessPartnerPortalUpdateSalesInvoicePositionByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalUpdateSalesInvoicePositionByIdHandler,
  ) {}

  @Mutation('businessPartnerPortalUpdateSalesInvoicePositionById')
  async main(
    @Args('payload')
    payload: BusinessPartnerPortalUpdateSalesInvoicePositionByIdInput,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalSalesInvoicePosition> {
    return await this.handler.main(payload, constraint, timezone, auditing);
  }
}
