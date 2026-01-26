/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { BusinessPartnerPortalDeletePartnerAddressByIdHandler } from '@api/business-partner-portal/partner-address';
import { BusinessPartnerPortalPartnerAddress } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.partnerAddress.delete')
export class BusinessPartnerPortalDeletePartnerAddressByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalDeletePartnerAddressByIdHandler,
  ) {}

  @Mutation('businessPartnerPortalDeletePartnerAddressById')
  async main(
    @Args('id') id: string,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalPartnerAddress> {
    return await this.handler.main(id, constraint, timezone, auditing);
  }
}
