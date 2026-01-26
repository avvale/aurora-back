/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { BusinessPartnerPortalCreatePaymentCollectionModeHandler } from '@api/business-partner-portal/payment-collection-mode';
import {
  BusinessPartnerPortalCreatePaymentCollectionModeInput,
  BusinessPartnerPortalPaymentCollectionMode,
} from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.paymentCollectionMode.create')
export class BusinessPartnerPortalCreatePaymentCollectionModeResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalCreatePaymentCollectionModeHandler,
  ) {}

  @Mutation('businessPartnerPortalCreatePaymentCollectionMode')
  async main(
    @Args('payload')
    payload: BusinessPartnerPortalCreatePaymentCollectionModeInput,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPaymentCollectionMode> {
    return await this.handler.main(payload, timezone, auditing);
  }
}
