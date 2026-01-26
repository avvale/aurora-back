/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { BusinessPartnerPortalPaginateBusinessPartnersHandler } from '@api/business-partner-portal/business-partner';
import { Pagination } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.businessPartner.get')
export class BusinessPartnerPortalPaginateBusinessPartnersResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalPaginateBusinessPartnersHandler,
  ) {}

  @Query('businessPartnerPortalPaginateBusinessPartners')
  async main(
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<Pagination> {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
