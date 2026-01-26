/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { BusinessPartnerPortalUpdatePaymentModeByIdHandler } from '@api/business-partner-portal/payment-mode';
import {
  BusinessPartnerPortalPaymentMode,
  BusinessPartnerPortalUpdatePaymentModeByIdInput,
} from '@api/graphql';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.paymentMode.update')
export class BusinessPartnerPortalUpdatePaymentModeByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalUpdatePaymentModeByIdHandler,
  ) {}

  @Mutation('businessPartnerPortalUpdatePaymentModeById')
  async main(
    @Args('payload') payload: BusinessPartnerPortalUpdatePaymentModeByIdInput,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPaymentMode> {
    return await this.handler.main(payload, constraint, timezone, auditing);
  }
}
