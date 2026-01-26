/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalFindPurchaseInvoicePositionByIdHandler } from '@api/business-partner-portal/purchase-invoice-position';
import { BusinessPartnerPortalPurchaseInvoicePosition } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.purchaseInvoicePosition.get')
export class BusinessPartnerPortalFindPurchaseInvoicePositionByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalFindPurchaseInvoicePositionByIdHandler,
  ) {}

  @Query('businessPartnerPortalFindPurchaseInvoicePositionById')
  async main(
    @Args('id') id: string,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<BusinessPartnerPortalPurchaseInvoicePosition> {
    return await this.handler.main(id, constraint, timezone);
  }
}
