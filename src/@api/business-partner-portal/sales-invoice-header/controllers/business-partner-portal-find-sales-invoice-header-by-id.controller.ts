/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalFindSalesInvoiceHeaderByIdHandler,
  BusinessPartnerPortalSalesInvoiceHeaderDto,
} from '@api/business-partner-portal/sales-invoice-header';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] sales-invoice-header')
@Controller('business-partner-portal/sales-invoice-header/find')
@Auth('businessPartnerPortal.salesInvoiceHeader.get')
export class BusinessPartnerPortalFindSalesInvoiceHeaderByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalFindSalesInvoiceHeaderByIdHandler,
  ) {}

  @Post(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Find sales-invoice-header by id' })
  @ApiOkResponse({
    description: 'The record has been successfully requested.',
    type: BusinessPartnerPortalSalesInvoiceHeaderDto,
  })
  async main(
    @Param('id') id: string,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ) {
    return await this.handler.main(id, constraint, timezone);
  }
}
