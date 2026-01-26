/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { BusinessPartnerPortalPaginatePaymentCollectionModesHandler } from '@api/business-partner-portal/payment-collection-mode';
import { Pagination } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.paymentCollectionMode.get')
export class BusinessPartnerPortalPaginatePaymentCollectionModesResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalPaginatePaymentCollectionModesHandler,
  ) {}

  @Query('businessPartnerPortalPaginatePaymentCollectionModes')
  async main(
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<Pagination> {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
