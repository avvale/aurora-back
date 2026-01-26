/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { BusinessPartnerPortalPaginatePaymentCollectionModesHandler } from '@api/business-partner-portal/payment-collection-mode';
import { Auth } from '@aurora/decorators';
import { Pagination, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('[business-partner-portal] payment-collection-mode')
@Controller('business-partner-portal/payment-collection-modes/paginate')
@Auth('businessPartnerPortal.paymentCollectionMode.get')
export class BusinessPartnerPortalPaginatePaymentCollectionModesController {
  constructor(
    private readonly handler: BusinessPartnerPortalPaginatePaymentCollectionModesHandler,
  ) {}

  @Post()
  @HttpCode(200)
  @ApiOperation({ summary: 'Paginate payment-collection-modes' })
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
