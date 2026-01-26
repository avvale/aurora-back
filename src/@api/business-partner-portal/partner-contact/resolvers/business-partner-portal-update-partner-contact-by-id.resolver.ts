/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalUpdatePartnerContactByIdHandler } from '@api/business-partner-portal/partner-contact';
import {
  BusinessPartnerPortalPartnerContact,
  BusinessPartnerPortalUpdatePartnerContactByIdInput,
} from '@api/graphql';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.partnerContact.update')
export class BusinessPartnerPortalUpdatePartnerContactByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalUpdatePartnerContactByIdHandler,
  ) {}

  @Mutation('businessPartnerPortalUpdatePartnerContactById')
  async main(
    @Args('payload')
    payload: BusinessPartnerPortalUpdatePartnerContactByIdInput,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPartnerContact> {
    return await this.handler.main(payload, constraint, timezone, auditing);
  }
}
