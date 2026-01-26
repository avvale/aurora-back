/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { BusinessPartnerPortalPaginatePaymentModesHandler } from '@api/business-partner-portal/payment-mode';
import { Pagination } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.paymentMode.get')
export class BusinessPartnerPortalPaginatePaymentModesResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalPaginatePaymentModesHandler,
  ) {}

  @Query('businessPartnerPortalPaginatePaymentModes')
  async main(
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<Pagination> {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
