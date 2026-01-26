/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalDeleteSalesInvoicePositionByIdHandler } from '@api/business-partner-portal/sales-invoice-position';
import { BusinessPartnerPortalSalesInvoicePosition } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.salesInvoicePosition.delete')
export class BusinessPartnerPortalDeleteSalesInvoicePositionByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalDeleteSalesInvoicePositionByIdHandler,
  ) {}

  @Mutation('businessPartnerPortalDeleteSalesInvoicePositionById')
  async main(
    @Args('id') id: string,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalSalesInvoicePosition> {
    return await this.handler.main(id, constraint, timezone, auditing);
  }
}
