/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalCreatePurchaseInvoicePositionHandler } from '@api/business-partner-portal/purchase-invoice-position';
import {
  BusinessPartnerPortalCreatePurchaseInvoicePositionInput,
  BusinessPartnerPortalPurchaseInvoicePosition,
} from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.purchaseInvoicePosition.create')
export class BusinessPartnerPortalCreatePurchaseInvoicePositionResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalCreatePurchaseInvoicePositionHandler,
  ) {}

  @Mutation('businessPartnerPortalCreatePurchaseInvoicePosition')
  async main(
    @Args('payload')
    payload: BusinessPartnerPortalCreatePurchaseInvoicePositionInput,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPurchaseInvoicePosition> {
    return await this.handler.main(payload, timezone, auditing);
  }
}
