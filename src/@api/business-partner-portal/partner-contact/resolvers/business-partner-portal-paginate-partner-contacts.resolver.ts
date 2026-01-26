/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalPaginatePartnerContactsHandler } from '@api/business-partner-portal/partner-contact';
import { Pagination } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.partnerContact.get')
export class BusinessPartnerPortalPaginatePartnerContactsResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalPaginatePartnerContactsHandler,
  ) {}

  @Query('businessPartnerPortalPaginatePartnerContacts')
  async main(
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<Pagination> {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
