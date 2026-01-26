/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePartnerAddressDto,
  BusinessPartnerPortalCreatePartnerAddressHandler,
  BusinessPartnerPortalPartnerAddressDto,
} from '@api/business-partner-portal/partner-address';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] partner-address')
@Controller('business-partner-portal/partner-address/create')
@Auth('businessPartnerPortal.partnerAddress.create')
export class BusinessPartnerPortalCreatePartnerAddressController {
  constructor(
    private readonly handler: BusinessPartnerPortalCreatePartnerAddressHandler,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create partner-address' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: BusinessPartnerPortalPartnerAddressDto,
  })
  async main(
    @Body() payload: BusinessPartnerPortalCreatePartnerAddressDto,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ) {
    return await this.handler.main(payload, timezone, auditing);
  }
}
