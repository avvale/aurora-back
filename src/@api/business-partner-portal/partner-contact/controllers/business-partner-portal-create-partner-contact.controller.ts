/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePartnerContactDto,
  BusinessPartnerPortalCreatePartnerContactHandler,
  BusinessPartnerPortalPartnerContactDto,
} from '@api/business-partner-portal/partner-contact';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] partner-contact')
@Controller('business-partner-portal/partner-contact/create')
@Auth('businessPartnerPortal.partnerContact.create')
export class BusinessPartnerPortalCreatePartnerContactController {
  constructor(
    private readonly handler: BusinessPartnerPortalCreatePartnerContactHandler,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create partner-contact' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: BusinessPartnerPortalPartnerContactDto,
  })
  async main(
    @Body() payload: BusinessPartnerPortalCreatePartnerContactDto,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ) {
    return await this.handler.main(payload, timezone, auditing);
  }
}
