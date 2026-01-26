/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalFindPurchaseInvoicePositionHandler } from '@api/business-partner-portal/purchase-invoice-position';
import { BusinessPartnerPortalPurchaseInvoicePosition } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.purchaseInvoicePosition.get')
export class BusinessPartnerPortalFindPurchaseInvoicePositionResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalFindPurchaseInvoicePositionHandler,
  ) {}

  @Query('businessPartnerPortalFindPurchaseInvoicePosition')
  async main(
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<BusinessPartnerPortalPurchaseInvoicePosition> {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
