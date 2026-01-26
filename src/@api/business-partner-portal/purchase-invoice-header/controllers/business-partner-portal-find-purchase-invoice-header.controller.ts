/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPurchaseInvoiceHeaderHandler,
  BusinessPartnerPortalPurchaseInvoiceHeaderDto,
} from '@api/business-partner-portal/purchase-invoice-header';
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

@ApiTags('[business-partner-portal] purchase-invoice-header')
@Controller('business-partner-portal/purchase-invoice-header/find')
@Auth('businessPartnerPortal.purchaseInvoiceHeader.get')
export class BusinessPartnerPortalFindPurchaseInvoiceHeaderController {
  constructor(
    private readonly handler: BusinessPartnerPortalFindPurchaseInvoiceHeaderHandler,
  ) {}

  @Post()
  @HttpCode(200)
  @ApiOperation({ summary: 'Find purchase-invoice-header according to query' })
  @ApiOkResponse({
    description: 'The record has been successfully created.',
    type: BusinessPartnerPortalPurchaseInvoiceHeaderDto,
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
