/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdHandler } from '@api/business-partner-portal/purchase-invoice-position';
import {
  BusinessPartnerPortalPurchaseInvoicePosition,
  BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdInput,
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
@Auth('businessPartnerPortal.purchaseInvoicePosition.update')
export class BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdHandler,
  ) {}

  @Mutation('businessPartnerPortalUpdatePurchaseInvoicePositionById')
  async main(
    @Args('payload')
    payload: BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdInput,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPurchaseInvoicePosition> {
    return await this.handler.main(payload, constraint, timezone, auditing);
  }
}
