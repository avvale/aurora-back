/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalPaginatePurchaseInvoiceHeadersHandler } from '@api/business-partner-portal/purchase-invoice-header';
import { Pagination } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.purchaseInvoiceHeader.get')
export class BusinessPartnerPortalPaginatePurchaseInvoiceHeadersResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalPaginatePurchaseInvoiceHeadersHandler,
  ) {}

  @Query('businessPartnerPortalPaginatePurchaseInvoiceHeaders')
  async main(
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<Pagination> {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
