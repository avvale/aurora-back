/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdHandler,
  BusinessPartnerPortalPurchaseInvoiceHeaderDto,
} from '@api/business-partner-portal/purchase-invoice-header';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] purchase-invoice-header')
@Controller('business-partner-portal/purchase-invoice-header/find')
@Auth('businessPartnerPortal.purchaseInvoiceHeader.get')
export class BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdHandler,
  ) {}

  @Post(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Find purchase-invoice-header by id' })
  @ApiOkResponse({
    description: 'The record has been successfully requested.',
    type: BusinessPartnerPortalPurchaseInvoiceHeaderDto,
  })
  async main(
    @Param('id') id: string,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ) {
    return await this.handler.main(id, constraint, timezone);
  }
}
