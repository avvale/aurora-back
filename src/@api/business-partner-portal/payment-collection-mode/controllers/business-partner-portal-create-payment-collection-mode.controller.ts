/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePaymentCollectionModeDto,
  BusinessPartnerPortalCreatePaymentCollectionModeHandler,
  BusinessPartnerPortalPaymentCollectionModeDto,
} from '@api/business-partner-portal/payment-collection-mode';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] payment-collection-mode')
@Controller('business-partner-portal/payment-collection-mode/create')
@Auth('businessPartnerPortal.paymentCollectionMode.create')
export class BusinessPartnerPortalCreatePaymentCollectionModeController {
  constructor(
    private readonly handler: BusinessPartnerPortalCreatePaymentCollectionModeHandler,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create payment-collection-mode' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: BusinessPartnerPortalPaymentCollectionModeDto,
  })
  async main(
    @Body() payload: BusinessPartnerPortalCreatePaymentCollectionModeDto,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ) {
    return await this.handler.main(payload, timezone, auditing);
  }
}
