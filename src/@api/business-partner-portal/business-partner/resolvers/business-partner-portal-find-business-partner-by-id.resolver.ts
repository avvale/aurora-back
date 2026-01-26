/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { BusinessPartnerPortalFindBusinessPartnerByIdHandler } from '@api/business-partner-portal/business-partner';
import { BusinessPartnerPortalBusinessPartner } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.businessPartner.get')
export class BusinessPartnerPortalFindBusinessPartnerByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalFindBusinessPartnerByIdHandler,
  ) {}

  @Query('businessPartnerPortalFindBusinessPartnerById')
  async main(
    @Args('id') id: string,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<BusinessPartnerPortalBusinessPartner> {
    return await this.handler.main(id, constraint, timezone);
  }
}
