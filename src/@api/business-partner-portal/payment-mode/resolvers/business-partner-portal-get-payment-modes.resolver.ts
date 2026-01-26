/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { BusinessPartnerPortalGetPaymentModesHandler } from '@api/business-partner-portal/payment-mode';
import { BusinessPartnerPortalPaymentMode } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.paymentMode.get')
export class BusinessPartnerPortalGetPaymentModesResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalGetPaymentModesHandler,
  ) {}

  @Query('businessPartnerPortalGetPaymentModes')
  async main(
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<BusinessPartnerPortalPaymentMode[]> {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
