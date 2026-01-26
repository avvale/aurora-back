/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPartnerAddressByIdHandler,
  BusinessPartnerPortalPartnerAddressDto,
} from '@api/business-partner-portal/partner-address';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] partner-address')
@Controller('business-partner-portal/partner-address/find')
@Auth('businessPartnerPortal.partnerAddress.get')
export class BusinessPartnerPortalFindPartnerAddressByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalFindPartnerAddressByIdHandler,
  ) {}

  @Post(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Find partner-address by id' })
  @ApiOkResponse({
    description: 'The record has been successfully requested.',
    type: BusinessPartnerPortalPartnerAddressDto,
  })
  async main(
    @Param('id') id: string,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ) {
    return await this.handler.main(id, constraint, timezone);
  }
}
