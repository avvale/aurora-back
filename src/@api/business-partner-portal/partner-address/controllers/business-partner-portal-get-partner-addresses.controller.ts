/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPartnerAddressesHandler,
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
@Controller('business-partner-portal/partner-addresses/get')
@Auth('businessPartnerPortal.partnerAddress.get')
export class BusinessPartnerPortalGetPartnerAddressesController {
  constructor(
    private readonly handler: BusinessPartnerPortalGetPartnerAddressesHandler,
  ) {}

  @Post()
  @HttpCode(200)
  @ApiOperation({ summary: 'Get partner-addresses according to query' })
  @ApiOkResponse({
    description: 'The records has been found successfully.',
    type: [BusinessPartnerPortalPartnerAddressDto],
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
