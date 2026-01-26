/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdHandler } from '@api/business-partner-portal/purchase-invoice-header';
import { BusinessPartnerPortalPurchaseInvoiceHeader } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.purchaseInvoiceHeader.delete')
export class BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdHandler,
  ) {}

  @Mutation('businessPartnerPortalDeletePurchaseInvoiceHeaderById')
  async main(
    @Args('id') id: string,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPurchaseInvoiceHeader> {
    return await this.handler.main(id, constraint, timezone, auditing);
  }
}
