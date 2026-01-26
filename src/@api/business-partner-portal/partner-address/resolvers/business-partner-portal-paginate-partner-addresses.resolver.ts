/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { BusinessPartnerPortalPaginatePartnerAddressesHandler } from '@api/business-partner-portal/partner-address';
import { Pagination } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.partnerAddress.get')
export class BusinessPartnerPortalPaginatePartnerAddressesResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalPaginatePartnerAddressesHandler,
  ) {}

  @Query('businessPartnerPortalPaginatePartnerAddresses')
  async main(
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<Pagination> {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
