/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePurchaseInvoicePositionDto,
  BusinessPartnerPortalCreatePurchaseInvoicePositionHandler,
  BusinessPartnerPortalPurchaseInvoicePositionDto,
} from '@api/business-partner-portal/purchase-invoice-position';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] purchase-invoice-position')
@Controller('business-partner-portal/purchase-invoice-position/create')
@Auth('businessPartnerPortal.purchaseInvoicePosition.create')
export class BusinessPartnerPortalCreatePurchaseInvoicePositionController {
  constructor(
    private readonly handler: BusinessPartnerPortalCreatePurchaseInvoicePositionHandler,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create purchase-invoice-position' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: BusinessPartnerPortalPurchaseInvoicePositionDto,
  })
  async main(
    @Body() payload: BusinessPartnerPortalCreatePurchaseInvoicePositionDto,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ) {
    return await this.handler.main(payload, timezone, auditing);
  }
}
