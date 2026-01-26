/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPartnerContactByIdHandler,
  BusinessPartnerPortalPartnerContactDto,
} from '@api/business-partner-portal/partner-contact';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] partner-contact')
@Controller('business-partner-portal/partner-contact/find')
@Auth('businessPartnerPortal.partnerContact.get')
export class BusinessPartnerPortalFindPartnerContactByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalFindPartnerContactByIdHandler,
  ) {}

  @Post(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Find partner-contact by id' })
  @ApiOkResponse({
    description: 'The record has been successfully requested.',
    type: BusinessPartnerPortalPartnerContactDto,
  })
  async main(
    @Param('id') id: string,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ) {
    return await this.handler.main(id, constraint, timezone);
  }
}
