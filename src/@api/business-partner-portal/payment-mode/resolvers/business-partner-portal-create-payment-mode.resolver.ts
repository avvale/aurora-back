/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { BusinessPartnerPortalCreatePaymentModeHandler } from '@api/business-partner-portal/payment-mode';
import {
  BusinessPartnerPortalCreatePaymentModeInput,
  BusinessPartnerPortalPaymentMode,
} from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.paymentMode.create')
export class BusinessPartnerPortalCreatePaymentModeResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalCreatePaymentModeHandler,
  ) {}

  @Mutation('businessPartnerPortalCreatePaymentMode')
  async main(
    @Args('payload') payload: BusinessPartnerPortalCreatePaymentModeInput,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPaymentMode> {
    return await this.handler.main(payload, timezone, auditing);
  }
}
