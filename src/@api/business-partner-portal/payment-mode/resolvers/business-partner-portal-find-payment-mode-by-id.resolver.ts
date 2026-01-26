/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { BusinessPartnerPortalFindPaymentModeByIdHandler } from '@api/business-partner-portal/payment-mode';
import { BusinessPartnerPortalPaymentMode } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.paymentMode.get')
export class BusinessPartnerPortalFindPaymentModeByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalFindPaymentModeByIdHandler,
  ) {}

  @Query('businessPartnerPortalFindPaymentModeById')
  async main(
    @Args('id') id: string,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<BusinessPartnerPortalPaymentMode> {
    return await this.handler.main(id, constraint, timezone);
  }
}
