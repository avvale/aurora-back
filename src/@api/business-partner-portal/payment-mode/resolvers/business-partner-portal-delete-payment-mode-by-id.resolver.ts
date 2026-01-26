/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { BusinessPartnerPortalDeletePaymentModeByIdHandler } from '@api/business-partner-portal/payment-mode';
import { BusinessPartnerPortalPaymentMode } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.paymentMode.delete')
export class BusinessPartnerPortalDeletePaymentModeByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalDeletePaymentModeByIdHandler,
  ) {}

  @Mutation('businessPartnerPortalDeletePaymentModeById')
  async main(
    @Args('id') id: string,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPaymentMode> {
    return await this.handler.main(id, constraint, timezone, auditing);
  }
}
