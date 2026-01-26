/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalPaginatePurchaseInvoicePositionsHandler } from '@api/business-partner-portal/purchase-invoice-position';
import { Auth } from '@aurora/decorators';
import { Pagination, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('[business-partner-portal] purchase-invoice-position')
@Controller('business-partner-portal/purchase-invoice-positions/paginate')
@Auth('businessPartnerPortal.purchaseInvoicePosition.get')
export class BusinessPartnerPortalPaginatePurchaseInvoicePositionsController {
  constructor(
    private readonly handler: BusinessPartnerPortalPaginatePurchaseInvoicePositionsHandler,
  ) {}

  @Post()
  @HttpCode(200)
  @ApiOperation({ summary: 'Paginate purchase-invoice-positions' })
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
