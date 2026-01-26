/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalPaginateSalesInvoiceHeadersHandler } from '@api/business-partner-portal/sales-invoice-header';
import { Pagination } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.salesInvoiceHeader.get')
export class BusinessPartnerPortalPaginateSalesInvoiceHeadersResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalPaginateSalesInvoiceHeadersHandler,
  ) {}

  @Query('businessPartnerPortalPaginateSalesInvoiceHeaders')
  async main(
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<Pagination> {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
