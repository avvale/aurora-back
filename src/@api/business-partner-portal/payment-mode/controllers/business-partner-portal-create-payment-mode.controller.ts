/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePaymentModeDto,
  BusinessPartnerPortalCreatePaymentModeHandler,
  BusinessPartnerPortalPaymentModeDto,
} from '@api/business-partner-portal/payment-mode';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] payment-mode')
@Controller('business-partner-portal/payment-mode/create')
@Auth('businessPartnerPortal.paymentMode.create')
export class BusinessPartnerPortalCreatePaymentModeController {
  constructor(
    private readonly handler: BusinessPartnerPortalCreatePaymentModeHandler,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create payment-mode' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: BusinessPartnerPortalPaymentModeDto,
  })
  async main(
    @Body() payload: BusinessPartnerPortalCreatePaymentModeDto,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ) {
    return await this.handler.main(payload, timezone, auditing);
  }
}
