/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPurchaseInvoicePositionByIdHandler,
  BusinessPartnerPortalPurchaseInvoicePositionDto,
} from '@api/business-partner-portal/purchase-invoice-position';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] purchase-invoice-position')
@Controller('business-partner-portal/purchase-invoice-position/find')
@Auth('businessPartnerPortal.purchaseInvoicePosition.get')
export class BusinessPartnerPortalFindPurchaseInvoicePositionByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalFindPurchaseInvoicePositionByIdHandler,
  ) {}

  @Post(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Find purchase-invoice-position by id' })
  @ApiOkResponse({
    description: 'The record has been successfully requested.',
    type: BusinessPartnerPortalPurchaseInvoicePositionDto,
  })
  async main(
    @Param('id') id: string,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ) {
    return await this.handler.main(id, constraint, timezone);
  }
}
