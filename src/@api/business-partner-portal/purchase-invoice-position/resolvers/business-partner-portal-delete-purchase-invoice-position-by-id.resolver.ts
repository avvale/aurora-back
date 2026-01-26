/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalDeletePurchaseInvoicePositionByIdHandler } from '@api/business-partner-portal/purchase-invoice-position';
import { BusinessPartnerPortalPurchaseInvoicePosition } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.purchaseInvoicePosition.delete')
export class BusinessPartnerPortalDeletePurchaseInvoicePositionByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalDeletePurchaseInvoicePositionByIdHandler,
  ) {}

  @Mutation('businessPartnerPortalDeletePurchaseInvoicePositionById')
  async main(
    @Args('id') id: string,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPurchaseInvoicePosition> {
    return await this.handler.main(id, constraint, timezone, auditing);
  }
}
