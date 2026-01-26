/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalPaginatePurchaseInvoicePositionsHandler } from '@api/business-partner-portal/purchase-invoice-position';
import { Pagination } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.purchaseInvoicePosition.get')
export class BusinessPartnerPortalPaginatePurchaseInvoicePositionsResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalPaginatePurchaseInvoicePositionsHandler,
  ) {}

  @Query('businessPartnerPortalPaginatePurchaseInvoicePositions')
  async main(
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<Pagination> {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
