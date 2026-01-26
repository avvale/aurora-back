/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalBusinessPartnerDto,
  BusinessPartnerPortalCreateBusinessPartnerDto,
  BusinessPartnerPortalCreateBusinessPartnerHandler,
} from '@api/business-partner-portal/business-partner';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] business-partner')
@Controller('business-partner-portal/business-partner/create')
@Auth('businessPartnerPortal.businessPartner.create')
export class BusinessPartnerPortalCreateBusinessPartnerController {
  constructor(
    private readonly handler: BusinessPartnerPortalCreateBusinessPartnerHandler,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create business-partner' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: BusinessPartnerPortalBusinessPartnerDto,
  })
  async main(
    @Body() payload: BusinessPartnerPortalCreateBusinessPartnerDto,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ) {
    return await this.handler.main(payload, timezone, auditing);
  }
}
