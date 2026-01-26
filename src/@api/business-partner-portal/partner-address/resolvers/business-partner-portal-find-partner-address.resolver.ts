/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { BusinessPartnerPortalFindPartnerAddressHandler } from '@api/business-partner-portal/partner-address';
import { BusinessPartnerPortalPartnerAddress } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.partnerAddress.get')
export class BusinessPartnerPortalFindPartnerAddressResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalFindPartnerAddressHandler,
  ) {}

  @Query('businessPartnerPortalFindPartnerAddress')
  async main(
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<BusinessPartnerPortalPartnerAddress> {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
