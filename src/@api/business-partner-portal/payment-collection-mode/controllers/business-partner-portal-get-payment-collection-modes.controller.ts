/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPaymentCollectionModesHandler,
  BusinessPartnerPortalPaymentCollectionModeDto,
} from '@api/business-partner-portal/payment-collection-mode';
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

@ApiTags('[business-partner-portal] payment-collection-mode')
@Controller('business-partner-portal/payment-collection-modes/get')
@Auth('businessPartnerPortal.paymentCollectionMode.get')
export class BusinessPartnerPortalGetPaymentCollectionModesController {
  constructor(
    private readonly handler: BusinessPartnerPortalGetPaymentCollectionModesHandler,
  ) {}

  @Post()
  @HttpCode(200)
  @ApiOperation({ summary: 'Get payment-collection-modes according to query' })
  @ApiOkResponse({
    description: 'The records has been found successfully.',
    type: [BusinessPartnerPortalPaymentCollectionModeDto],
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
