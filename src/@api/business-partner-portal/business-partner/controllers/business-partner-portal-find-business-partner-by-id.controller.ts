/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalBusinessPartnerDto,
  BusinessPartnerPortalFindBusinessPartnerByIdHandler,
} from '@api/business-partner-portal/business-partner';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] business-partner')
@Controller('business-partner-portal/business-partner/find')
@Auth('businessPartnerPortal.businessPartner.get')
export class BusinessPartnerPortalFindBusinessPartnerByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalFindBusinessPartnerByIdHandler,
  ) {}

  @Post(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Find business-partner by id' })
  @ApiOkResponse({
    description: 'The record has been successfully requested.',
    type: BusinessPartnerPortalBusinessPartnerDto,
  })
  async main(
    @Param('id') id: string,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ) {
    return await this.handler.main(id, constraint, timezone);
  }
}
