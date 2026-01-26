/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { BusinessPartnerPortalCreatePartnerAddressHandler } from '@api/business-partner-portal/partner-address';
import {
  BusinessPartnerPortalCreatePartnerAddressInput,
  BusinessPartnerPortalPartnerAddress,
} from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.partnerAddress.create')
export class BusinessPartnerPortalCreatePartnerAddressResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalCreatePartnerAddressHandler,
  ) {}

  @Mutation('businessPartnerPortalCreatePartnerAddress')
  async main(
    @Args('payload') payload: BusinessPartnerPortalCreatePartnerAddressInput,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPartnerAddress> {
    return await this.handler.main(payload, timezone, auditing);
  }
}
