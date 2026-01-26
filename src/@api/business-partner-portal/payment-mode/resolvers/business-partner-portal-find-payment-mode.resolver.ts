/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { BusinessPartnerPortalFindPaymentModeHandler } from '@api/business-partner-portal/payment-mode';
import { BusinessPartnerPortalPaymentMode } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.paymentMode.get')
export class BusinessPartnerPortalFindPaymentModeResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalFindPaymentModeHandler,
  ) {}

  @Query('businessPartnerPortalFindPaymentMode')
  async main(
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<BusinessPartnerPortalPaymentMode> {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
