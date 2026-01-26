/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdHandler } from '@api/business-partner-portal/purchase-invoice-header';
import {
  BusinessPartnerPortalPurchaseInvoiceHeader,
  BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdInput,
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
@Auth('businessPartnerPortal.purchaseInvoiceHeader.update')
export class BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdHandler,
  ) {}

  @Mutation('businessPartnerPortalUpdatePurchaseInvoiceHeaderById')
  async main(
    @Args('payload')
    payload: BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdInput,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPurchaseInvoiceHeader> {
    return await this.handler.main(payload, constraint, timezone, auditing);
  }
}
