/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalFindPartnerContactHandler } from '@api/business-partner-portal/partner-contact';
import { BusinessPartnerPortalPartnerContact } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.partnerContact.get')
export class BusinessPartnerPortalFindPartnerContactResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalFindPartnerContactHandler,
  ) {}

  @Query('businessPartnerPortalFindPartnerContact')
  async main(
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<BusinessPartnerPortalPartnerContact> {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
