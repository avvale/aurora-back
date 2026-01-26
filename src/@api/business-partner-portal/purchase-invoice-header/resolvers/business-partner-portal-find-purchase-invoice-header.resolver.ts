/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalFindPurchaseInvoiceHeaderHandler } from '@api/business-partner-portal/purchase-invoice-header';
import { BusinessPartnerPortalPurchaseInvoiceHeader } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.purchaseInvoiceHeader.get')
export class BusinessPartnerPortalFindPurchaseInvoiceHeaderResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalFindPurchaseInvoiceHeaderHandler,
  ) {}

  @Query('businessPartnerPortalFindPurchaseInvoiceHeader')
  async main(
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<BusinessPartnerPortalPurchaseInvoiceHeader> {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
