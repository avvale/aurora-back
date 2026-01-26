/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalPaginateSalesInvoiceHeadersHandler } from '@api/business-partner-portal/sales-invoice-header';
import { Auth } from '@aurora/decorators';
import { Pagination, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('[business-partner-portal] sales-invoice-header')
@Controller('business-partner-portal/sales-invoice-headers/paginate')
@Auth('businessPartnerPortal.salesInvoiceHeader.get')
export class BusinessPartnerPortalPaginateSalesInvoiceHeadersController {
  constructor(
    private readonly handler: BusinessPartnerPortalPaginateSalesInvoiceHeadersHandler,
  ) {}

  @Post()
  @HttpCode(200)
  @ApiOperation({ summary: 'Paginate sales-invoice-headers' })
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
