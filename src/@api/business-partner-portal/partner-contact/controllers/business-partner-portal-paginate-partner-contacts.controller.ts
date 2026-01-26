/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalPaginatePartnerContactsHandler } from '@api/business-partner-portal/partner-contact';
import { Auth } from '@aurora/decorators';
import { Pagination, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('[business-partner-portal] partner-contact')
@Controller('business-partner-portal/partner-contacts/paginate')
@Auth('businessPartnerPortal.partnerContact.get')
export class BusinessPartnerPortalPaginatePartnerContactsController {
  constructor(
    private readonly handler: BusinessPartnerPortalPaginatePartnerContactsHandler,
  ) {}

  @Post()
  @HttpCode(200)
  @ApiOperation({ summary: 'Paginate partner-contacts' })
  @ApiOkResponse({
    description: 'The records has been paginated successfully.',
    type: Pagination,
  })
  @ApiQuery({ name: 'queryStatement', type: QueryStatement })
  @ApiQuery({ name: 'constraint', type: QueryStatement })
  async main(
    @Body('query') queryStatement?: QueryStatement,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ) {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
