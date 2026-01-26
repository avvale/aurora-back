/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalFindSalesInvoicePositionByIdHandler,
  BusinessPartnerPortalSalesInvoicePositionDto,
} from '@api/business-partner-portal/sales-invoice-position';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] sales-invoice-position')
@Controller('business-partner-portal/sales-invoice-position/find')
@Auth('businessPartnerPortal.salesInvoicePosition.get')
export class BusinessPartnerPortalFindSalesInvoicePositionByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalFindSalesInvoicePositionByIdHandler,
  ) {}

  @Post(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Find sales-invoice-position by id' })
  @ApiOkResponse({
    description: 'The record has been successfully requested.',
    type: BusinessPartnerPortalSalesInvoicePositionDto,
  })
  async main(
    @Param('id') id: string,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ) {
    return await this.handler.main(id, constraint, timezone);
  }
}
