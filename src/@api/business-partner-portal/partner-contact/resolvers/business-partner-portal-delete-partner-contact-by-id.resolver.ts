/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalDeletePartnerContactByIdHandler } from '@api/business-partner-portal/partner-contact';
import { BusinessPartnerPortalPartnerContact } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.partnerContact.delete')
export class BusinessPartnerPortalDeletePartnerContactByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalDeletePartnerContactByIdHandler,
  ) {}

  @Mutation('businessPartnerPortalDeletePartnerContactById')
  async main(
    @Args('id') id: string,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPartnerContact> {
    return await this.handler.main(id, constraint, timezone, auditing);
  }
}
