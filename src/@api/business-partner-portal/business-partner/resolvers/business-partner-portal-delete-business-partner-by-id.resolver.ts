/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { BusinessPartnerPortalDeleteBusinessPartnerByIdHandler } from '@api/business-partner-portal/business-partner';
import { BusinessPartnerPortalBusinessPartner } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.businessPartner.delete')
export class BusinessPartnerPortalDeleteBusinessPartnerByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalDeleteBusinessPartnerByIdHandler,
  ) {}

  @Mutation('businessPartnerPortalDeleteBusinessPartnerById')
  async main(
    @Args('id') id: string,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalBusinessPartner> {
    return await this.handler.main(id, constraint, timezone, auditing);
  }
}
