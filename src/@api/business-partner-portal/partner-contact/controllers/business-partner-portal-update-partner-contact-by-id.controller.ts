/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalPartnerContactDto,
  BusinessPartnerPortalUpdatePartnerContactByIdDto,
  BusinessPartnerPortalUpdatePartnerContactByIdHandler,
} from '@api/business-partner-portal/partner-contact';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] partner-contact')
@Controller('business-partner-portal/partner-contact/update')
@Auth('businessPartnerPortal.partnerContact.update')
export class BusinessPartnerPortalUpdatePartnerContactByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalUpdatePartnerContactByIdHandler,
  ) {}

  @Put()
  @ApiOperation({ summary: 'Update partner-contact by id' })
  @ApiOkResponse({
    description: 'The record has been successfully updated.',
    type: BusinessPartnerPortalPartnerContactDto,
  })
  async main(
    @Body() payload: BusinessPartnerPortalUpdatePartnerContactByIdDto,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ) {
    return await this.handler.main(payload, constraint, timezone, auditing);
  }
}
