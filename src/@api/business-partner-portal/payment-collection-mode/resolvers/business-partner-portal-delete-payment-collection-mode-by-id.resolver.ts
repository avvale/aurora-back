/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { BusinessPartnerPortalDeletePaymentCollectionModeByIdHandler } from '@api/business-partner-portal/payment-collection-mode';
import { BusinessPartnerPortalPaymentCollectionMode } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.paymentCollectionMode.delete')
export class BusinessPartnerPortalDeletePaymentCollectionModeByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalDeletePaymentCollectionModeByIdHandler,
  ) {}

  @Mutation('businessPartnerPortalDeletePaymentCollectionModeById')
  async main(
    @Args('id') id: string,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPaymentCollectionMode> {
    return await this.handler.main(id, constraint, timezone, auditing);
  }
}
