/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalFindSalesInvoicePositionHandler } from '@api/business-partner-portal/sales-invoice-position';
import { BusinessPartnerPortalSalesInvoicePosition } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.salesInvoicePosition.get')
export class BusinessPartnerPortalFindSalesInvoicePositionResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalFindSalesInvoicePositionHandler,
  ) {}

  @Query('businessPartnerPortalFindSalesInvoicePosition')
  async main(
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<BusinessPartnerPortalSalesInvoicePosition> {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
