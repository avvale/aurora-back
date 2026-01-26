/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalBusinessPartnerDto,
  BusinessPartnerPortalGetBusinessPartnersHandler,
} from '@api/business-partner-portal/business-partner';
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

@ApiTags('[business-partner-portal] business-partner')
@Controller('business-partner-portal/business-partners/get')
@Auth('businessPartnerPortal.businessPartner.get')
export class BusinessPartnerPortalGetBusinessPartnersController {
  constructor(
    private readonly handler: BusinessPartnerPortalGetBusinessPartnersHandler,
  ) {}

  @Post()
  @HttpCode(200)
  @ApiOperation({ summary: 'Get business-partners according to query' })
  @ApiOkResponse({
    description: 'The records has been found successfully.',
    type: [BusinessPartnerPortalBusinessPartnerDto],
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
