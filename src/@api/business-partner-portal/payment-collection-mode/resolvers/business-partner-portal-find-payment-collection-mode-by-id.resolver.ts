/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { BusinessPartnerPortalFindPaymentCollectionModeByIdHandler } from '@api/business-partner-portal/payment-collection-mode';
import { BusinessPartnerPortalPaymentCollectionMode } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.paymentCollectionMode.get')
export class BusinessPartnerPortalFindPaymentCollectionModeByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalFindPaymentCollectionModeByIdHandler,
  ) {}

  @Query('businessPartnerPortalFindPaymentCollectionModeById')
  async main(
    @Args('id') id: string,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<BusinessPartnerPortalPaymentCollectionMode> {
    return await this.handler.main(id, constraint, timezone);
  }
}
