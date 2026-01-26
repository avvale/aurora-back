/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { BusinessPartnerPortalCreateBusinessPartnerHandler } from '@api/business-partner-portal/business-partner';
import {
  BusinessPartnerPortalBusinessPartner,
  BusinessPartnerPortalCreateBusinessPartnerInput,
} from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.businessPartner.create')
export class BusinessPartnerPortalCreateBusinessPartnerResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalCreateBusinessPartnerHandler,
  ) {}

  @Mutation('businessPartnerPortalCreateBusinessPartner')
  async main(
    @Args('payload') payload: BusinessPartnerPortalCreateBusinessPartnerInput,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalBusinessPartner> {
    return await this.handler.main(payload, timezone, auditing);
  }
}
