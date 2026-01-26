/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalDeletePartnerContactByIdHandler,
  BusinessPartnerPortalPartnerContactDto,
} from '@api/business-partner-portal/partner-contact';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Body, Controller, Delete, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] partner-contact')
@Controller('business-partner-portal/partner-contact/delete')
@Auth('businessPartnerPortal.partnerContact.delete')
export class BusinessPartnerPortalDeletePartnerContactByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalDeletePartnerContactByIdHandler,
  ) {}

  @Delete(':id')
  @ApiOperation({ summary: 'Delete partner-contact by id' })
  @ApiOkResponse({
    description: 'The record has been deleted successfully.',
    type: BusinessPartnerPortalPartnerContactDto,
  })
  async main(
    @Param('id') id: string,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ) {
    return await this.handler.main(id, constraint, timezone, auditing);
  }
}
