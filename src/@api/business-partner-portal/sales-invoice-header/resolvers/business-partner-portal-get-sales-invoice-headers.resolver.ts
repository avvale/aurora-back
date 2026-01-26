/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalGetSalesInvoiceHeadersHandler } from '@api/business-partner-portal/sales-invoice-header';
import { BusinessPartnerPortalSalesInvoiceHeader } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.salesInvoiceHeader.get')
export class BusinessPartnerPortalGetSalesInvoiceHeadersResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalGetSalesInvoiceHeadersHandler,
  ) {}

  @Query('businessPartnerPortalGetSalesInvoiceHeaders')
  async main(
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<BusinessPartnerPortalSalesInvoiceHeader[]> {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
