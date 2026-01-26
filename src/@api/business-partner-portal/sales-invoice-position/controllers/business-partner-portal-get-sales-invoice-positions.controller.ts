/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalGetSalesInvoicePositionsHandler,
  BusinessPartnerPortalSalesInvoicePositionDto,
} from '@api/business-partner-portal/sales-invoice-position';
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

@ApiTags('[business-partner-portal] sales-invoice-position')
@Controller('business-partner-portal/sales-invoice-positions/get')
@Auth('businessPartnerPortal.salesInvoicePosition.get')
export class BusinessPartnerPortalGetSalesInvoicePositionsController {
  constructor(
    private readonly handler: BusinessPartnerPortalGetSalesInvoicePositionsHandler,
  ) {}

  @Post()
  @HttpCode(200)
  @ApiOperation({ summary: 'Get sales-invoice-positions according to query' })
  @ApiOkResponse({
    description: 'The records has been found successfully.',
    type: [BusinessPartnerPortalSalesInvoicePositionDto],
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
