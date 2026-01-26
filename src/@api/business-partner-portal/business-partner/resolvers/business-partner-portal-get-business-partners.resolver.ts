/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { BusinessPartnerPortalGetBusinessPartnersHandler } from '@api/business-partner-portal/business-partner';
import { BusinessPartnerPortalBusinessPartner } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.businessPartner.get')
export class BusinessPartnerPortalGetBusinessPartnersResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalGetBusinessPartnersHandler,
  ) {}

  @Query('businessPartnerPortalGetBusinessPartners')
  async main(
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<BusinessPartnerPortalBusinessPartner[]> {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
