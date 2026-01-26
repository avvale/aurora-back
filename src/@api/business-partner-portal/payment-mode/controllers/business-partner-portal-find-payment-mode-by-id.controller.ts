/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPaymentModeByIdHandler,
  BusinessPartnerPortalPaymentModeDto,
} from '@api/business-partner-portal/payment-mode';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] payment-mode')
@Controller('business-partner-portal/payment-mode/find')
@Auth('businessPartnerPortal.paymentMode.get')
export class BusinessPartnerPortalFindPaymentModeByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalFindPaymentModeByIdHandler,
  ) {}

  @Post(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Find payment-mode by id' })
  @ApiOkResponse({
    description: 'The record has been successfully requested.',
    type: BusinessPartnerPortalPaymentModeDto,
  })
  async main(
    @Param('id') id: string,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ) {
    return await this.handler.main(id, constraint, timezone);
  }
}
