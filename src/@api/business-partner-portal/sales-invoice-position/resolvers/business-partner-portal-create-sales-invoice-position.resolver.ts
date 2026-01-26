/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalCreateSalesInvoicePositionHandler } from '@api/business-partner-portal/sales-invoice-position';
import {
  BusinessPartnerPortalCreateSalesInvoicePositionInput,
  BusinessPartnerPortalSalesInvoicePosition,
} from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.salesInvoicePosition.create')
export class BusinessPartnerPortalCreateSalesInvoicePositionResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalCreateSalesInvoicePositionHandler,
  ) {}

  @Mutation('businessPartnerPortalCreateSalesInvoicePosition')
  async main(
    @Args('payload')
    payload: BusinessPartnerPortalCreateSalesInvoicePositionInput,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalSalesInvoicePosition> {
    return await this.handler.main(payload, timezone, auditing);
  }
}
