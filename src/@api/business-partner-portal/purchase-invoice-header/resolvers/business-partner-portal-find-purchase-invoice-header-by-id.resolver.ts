/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdHandler } from '@api/business-partner-portal/purchase-invoice-header';
import { BusinessPartnerPortalPurchaseInvoiceHeader } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.purchaseInvoiceHeader.get')
export class BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdHandler,
  ) {}

  @Query('businessPartnerPortalFindPurchaseInvoiceHeaderById')
  async main(
    @Args('id') id: string,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<BusinessPartnerPortalPurchaseInvoiceHeader> {
    return await this.handler.main(id, constraint, timezone);
  }
}
