/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPaymentModeHandler,
  BusinessPartnerPortalPaymentModeDto,
} from '@api/business-partner-portal/payment-mode';
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

@ApiTags('[business-partner-portal] payment-mode')
@Controller('business-partner-portal/payment-mode/find')
@Auth('businessPartnerPortal.paymentMode.get')
export class BusinessPartnerPortalFindPaymentModeController {
  constructor(
    private readonly handler: BusinessPartnerPortalFindPaymentModeHandler,
  ) {}

  @Post()
  @HttpCode(200)
  @ApiOperation({ summary: 'Find payment-mode according to query' })
  @ApiOkResponse({
    description: 'The record has been successfully created.',
    type: BusinessPartnerPortalPaymentModeDto,
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
