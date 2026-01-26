/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { BusinessPartnerPortalFindPartnerAddressByIdHandler } from '@api/business-partner-portal/partner-address';
import { BusinessPartnerPortalPartnerAddress } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.partnerAddress.get')
export class BusinessPartnerPortalFindPartnerAddressByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalFindPartnerAddressByIdHandler,
  ) {}

  @Query('businessPartnerPortalFindPartnerAddressById')
  async main(
    @Args('id') id: string,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<BusinessPartnerPortalPartnerAddress> {
    return await this.handler.main(id, constraint, timezone);
  }
}
