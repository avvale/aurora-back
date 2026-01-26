/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalCreatePurchaseInvoiceHeaderHandler } from '@api/business-partner-portal/purchase-invoice-header';
import {
  BusinessPartnerPortalCreatePurchaseInvoiceHeaderInput,
  BusinessPartnerPortalPurchaseInvoiceHeader,
} from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.purchaseInvoiceHeader.create')
export class BusinessPartnerPortalCreatePurchaseInvoiceHeaderResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalCreatePurchaseInvoiceHeaderHandler,
  ) {}

  @Mutation('businessPartnerPortalCreatePurchaseInvoiceHeader')
  async main(
    @Args('payload')
    payload: BusinessPartnerPortalCreatePurchaseInvoiceHeaderInput,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPurchaseInvoiceHeader> {
    return await this.handler.main(payload, timezone, auditing);
  }
}
