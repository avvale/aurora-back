/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalCreateSalesInvoiceHeaderHandler } from '@api/business-partner-portal/sales-invoice-header';
import {
  BusinessPartnerPortalCreateSalesInvoiceHeaderInput,
  BusinessPartnerPortalSalesInvoiceHeader,
} from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.salesInvoiceHeader.create')
export class BusinessPartnerPortalCreateSalesInvoiceHeaderResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalCreateSalesInvoiceHeaderHandler,
  ) {}

  @Mutation('businessPartnerPortalCreateSalesInvoiceHeader')
  async main(
    @Args('payload')
    payload: BusinessPartnerPortalCreateSalesInvoiceHeaderInput,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalSalesInvoiceHeader> {
    return await this.handler.main(payload, timezone, auditing);
  }
}
