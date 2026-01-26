/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { BusinessPartnerPortalUpdatePaymentCollectionModeByIdHandler } from '@api/business-partner-portal/payment-collection-mode';
import {
  BusinessPartnerPortalPaymentCollectionMode,
  BusinessPartnerPortalUpdatePaymentCollectionModeByIdInput,
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
@Auth('businessPartnerPortal.paymentCollectionMode.update')
export class BusinessPartnerPortalUpdatePaymentCollectionModeByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalUpdatePaymentCollectionModeByIdHandler,
  ) {}

  @Mutation('businessPartnerPortalUpdatePaymentCollectionModeById')
  async main(
    @Args('payload')
    payload: BusinessPartnerPortalUpdatePaymentCollectionModeByIdInput,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPaymentCollectionMode> {
    return await this.handler.main(payload, constraint, timezone, auditing);
  }
}
