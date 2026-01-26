/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalPaginateSalesInvoicePositionsHandler } from '@api/business-partner-portal/sales-invoice-position';
import { Pagination } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.salesInvoicePosition.get')
export class BusinessPartnerPortalPaginateSalesInvoicePositionsResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalPaginateSalesInvoicePositionsHandler,
  ) {}

  @Query('businessPartnerPortalPaginateSalesInvoicePositions')
  async main(
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<Pagination> {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
