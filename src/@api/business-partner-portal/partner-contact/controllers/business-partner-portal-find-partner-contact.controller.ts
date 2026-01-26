/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPartnerContactHandler,
  BusinessPartnerPortalPartnerContactDto,
} from '@api/business-partner-portal/partner-contact';
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

@ApiTags('[business-partner-portal] partner-contact')
@Controller('business-partner-portal/partner-contact/find')
@Auth('businessPartnerPortal.partnerContact.get')
export class BusinessPartnerPortalFindPartnerContactController {
  constructor(
    private readonly handler: BusinessPartnerPortalFindPartnerContactHandler,
  ) {}

  @Post()
  @HttpCode(200)
  @ApiOperation({ summary: 'Find partner-contact according to query' })
  @ApiOkResponse({
    description: 'The record has been successfully created.',
    type: BusinessPartnerPortalPartnerContactDto,
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
