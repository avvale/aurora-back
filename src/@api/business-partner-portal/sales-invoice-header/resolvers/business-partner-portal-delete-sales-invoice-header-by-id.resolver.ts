/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdHandler } from '@api/business-partner-portal/sales-invoice-header';
import { BusinessPartnerPortalSalesInvoiceHeader } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.salesInvoiceHeader.delete')
export class BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdHandler,
  ) {}

  @Mutation('businessPartnerPortalDeleteSalesInvoiceHeaderById')
  async main(
    @Args('id') id: string,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalSalesInvoiceHeader> {
    return await this.handler.main(id, constraint, timezone, auditing);
  }
}
