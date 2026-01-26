/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { BusinessPartnerPortalUpdatePartnerAddressByIdHandler } from '@api/business-partner-portal/partner-address';
import {
  BusinessPartnerPortalPartnerAddress,
  BusinessPartnerPortalUpdatePartnerAddressByIdInput,
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
@Auth('businessPartnerPortal.partnerAddress.update')
export class BusinessPartnerPortalUpdatePartnerAddressByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalUpdatePartnerAddressByIdHandler,
  ) {}

  @Mutation('businessPartnerPortalUpdatePartnerAddressById')
  async main(
    @Args('payload')
    payload: BusinessPartnerPortalUpdatePartnerAddressByIdInput,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPartnerAddress> {
    return await this.handler.main(payload, constraint, timezone, auditing);
  }
}
