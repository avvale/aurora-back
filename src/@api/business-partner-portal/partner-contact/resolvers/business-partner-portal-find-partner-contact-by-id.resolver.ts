/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalFindPartnerContactByIdHandler } from '@api/business-partner-portal/partner-contact';
import { BusinessPartnerPortalPartnerContact } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.partnerContact.get')
export class BusinessPartnerPortalFindPartnerContactByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalFindPartnerContactByIdHandler,
  ) {}

  @Query('businessPartnerPortalFindPartnerContactById')
  async main(
    @Args('id') id: string,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<BusinessPartnerPortalPartnerContact> {
    return await this.handler.main(id, constraint, timezone);
  }
}
