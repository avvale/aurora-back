/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalFindSalesInvoicePositionByIdHandler } from '@api/business-partner-portal/sales-invoice-position';
import { BusinessPartnerPortalSalesInvoicePosition } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.salesInvoicePosition.get')
export class BusinessPartnerPortalFindSalesInvoicePositionByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalFindSalesInvoicePositionByIdHandler,
  ) {}

  @Query('businessPartnerPortalFindSalesInvoicePositionById')
  async main(
    @Args('id') id: string,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<BusinessPartnerPortalSalesInvoicePosition> {
    return await this.handler.main(id, constraint, timezone);
  }
}
