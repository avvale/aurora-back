/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPartnerAddressHandler,
  BusinessPartnerPortalPartnerAddressDto,
} from '@api/business-partner-portal/partner-address';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('[business-partner-portal] partner-address')
@Controller('business-partner-portal/partner-address/find')
@Auth('businessPartnerPortal.partnerAddress.get')
export class BusinessPartnerPortalFindPartnerAddressController {
  constructor(
    private readonly handler: BusinessPartnerPortalFindPartnerAddressHandler,
  ) {}

  @Post()
  @HttpCode(200)
  @ApiOperation({ summary: 'Find partner-address according to query' })
  @ApiOkResponse({
    description: 'The record has been successfully created.',
    type: BusinessPartnerPortalPartnerAddressDto,
  })
  @ApiBody({ type: QueryStatement })
  @ApiQuery({ name: 'query', type: QueryStatement })
  async main(
    @Body('query') queryStatement?: QueryStatement,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ) {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
