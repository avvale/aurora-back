/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalFindSalesInvoiceHeaderByIdHandler } from '@api/business-partner-portal/sales-invoice-header';
import { BusinessPartnerPortalSalesInvoiceHeader } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.salesInvoiceHeader.get')
export class BusinessPartnerPortalFindSalesInvoiceHeaderByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalFindSalesInvoiceHeaderByIdHandler,
  ) {}

  @Query('businessPartnerPortalFindSalesInvoiceHeaderById')
  async main(
    @Args('id') id: string,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<BusinessPartnerPortalSalesInvoiceHeader> {
    return await this.handler.main(id, constraint, timezone);
  }
}
