/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { BusinessPartnerPortalGetPaymentCollectionModesHandler } from '@api/business-partner-portal/payment-collection-mode';
import { BusinessPartnerPortalPaymentCollectionMode } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.paymentCollectionMode.get')
export class BusinessPartnerPortalGetPaymentCollectionModesResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalGetPaymentCollectionModesHandler,
  ) {}

  @Query('businessPartnerPortalGetPaymentCollectionModes')
  async main(
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<BusinessPartnerPortalPaymentCollectionMode[]> {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
