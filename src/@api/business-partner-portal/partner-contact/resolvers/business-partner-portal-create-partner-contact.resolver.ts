/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalCreatePartnerContactHandler } from '@api/business-partner-portal/partner-contact';
import {
  BusinessPartnerPortalCreatePartnerContactInput,
  BusinessPartnerPortalPartnerContact,
} from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.partnerContact.create')
export class BusinessPartnerPortalCreatePartnerContactResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalCreatePartnerContactHandler,
  ) {}

  @Mutation('businessPartnerPortalCreatePartnerContact')
  async main(
    @Args('payload') payload: BusinessPartnerPortalCreatePartnerContactInput,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPartnerContact> {
    return await this.handler.main(payload, timezone, auditing);
  }
}
