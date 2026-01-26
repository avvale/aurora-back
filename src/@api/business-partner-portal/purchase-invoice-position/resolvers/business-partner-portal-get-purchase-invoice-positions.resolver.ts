/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalGetPurchaseInvoicePositionsHandler } from '@api/business-partner-portal/purchase-invoice-position';
import { BusinessPartnerPortalPurchaseInvoicePosition } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.purchaseInvoicePosition.get')
export class BusinessPartnerPortalGetPurchaseInvoicePositionsResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalGetPurchaseInvoicePositionsHandler,
  ) {}

  @Query('businessPartnerPortalGetPurchaseInvoicePositions')
  async main(
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<BusinessPartnerPortalPurchaseInvoicePosition[]> {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
