/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { BusinessPartnerPortalUpdateBusinessPartnerByIdHandler } from '@api/business-partner-portal/business-partner';
import {
  BusinessPartnerPortalBusinessPartner,
  BusinessPartnerPortalUpdateBusinessPartnerByIdInput,
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
@Auth('businessPartnerPortal.businessPartner.update')
export class BusinessPartnerPortalUpdateBusinessPartnerByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalUpdateBusinessPartnerByIdHandler,
  ) {}

  @Mutation('businessPartnerPortalUpdateBusinessPartnerById')
  async main(
    @Args('payload')
    payload: BusinessPartnerPortalUpdateBusinessPartnerByIdInput,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalBusinessPartner> {
    return await this.handler.main(payload, constraint, timezone, auditing);
  }
}
