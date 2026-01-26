/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdHandler } from '@api/business-partner-portal/sales-invoice-header';
import {
  BusinessPartnerPortalSalesInvoiceHeader,
  BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdInput,
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
@Auth('businessPartnerPortal.salesInvoiceHeader.update')
export class BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdHandler,
  ) {}

  @Mutation('businessPartnerPortalUpdateSalesInvoiceHeaderById')
  async main(
    @Args('payload')
    payload: BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdInput,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalSalesInvoiceHeader> {
    return await this.handler.main(payload, constraint, timezone, auditing);
  }
}
