/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPurchaseInvoiceHeadersHandler,
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
@Controller('business-partner-portal/purchase-invoice-headers/get')
@Auth('businessPartnerPortal.purchaseInvoiceHeader.get')
export class BusinessPartnerPortalGetPurchaseInvoiceHeadersController {
  constructor(
    private readonly handler: BusinessPartnerPortalGetPurchaseInvoiceHeadersHandler,
  ) {}

  @Post()
  @HttpCode(200)
  @ApiOperation({ summary: 'Get purchase-invoice-headers according to query' })
  @ApiOkResponse({
    description: 'The records has been found successfully.',
    type: [BusinessPartnerPortalPurchaseInvoiceHeaderDto],
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
