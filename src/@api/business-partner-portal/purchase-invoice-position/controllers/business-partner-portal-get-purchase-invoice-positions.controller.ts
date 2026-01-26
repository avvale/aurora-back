/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPurchaseInvoicePositionsHandler,
  BusinessPartnerPortalPurchaseInvoicePositionDto,
} from '@api/business-partner-portal/purchase-invoice-position';
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

@ApiTags('[business-partner-portal] purchase-invoice-position')
@Controller('business-partner-portal/purchase-invoice-positions/get')
@Auth('businessPartnerPortal.purchaseInvoicePosition.get')
export class BusinessPartnerPortalGetPurchaseInvoicePositionsController {
  constructor(
    private readonly handler: BusinessPartnerPortalGetPurchaseInvoicePositionsHandler,
  ) {}

  @Post()
  @HttpCode(200)
  @ApiOperation({
    summary: 'Get purchase-invoice-positions according to query',
  })
  @ApiOkResponse({
    description: 'The records has been found successfully.',
    type: [BusinessPartnerPortalPurchaseInvoicePositionDto],
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
