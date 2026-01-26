/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePurchaseInvoiceHeaderDto,
  BusinessPartnerPortalCreatePurchaseInvoiceHeaderHandler,
  BusinessPartnerPortalPurchaseInvoiceHeaderDto,
} from '@api/business-partner-portal/purchase-invoice-header';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] purchase-invoice-header')
@Controller('business-partner-portal/purchase-invoice-header/create')
@Auth('businessPartnerPortal.purchaseInvoiceHeader.create')
export class BusinessPartnerPortalCreatePurchaseInvoiceHeaderController {
  constructor(
    private readonly handler: BusinessPartnerPortalCreatePurchaseInvoiceHeaderHandler,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create purchase-invoice-header' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: BusinessPartnerPortalPurchaseInvoiceHeaderDto,
  })
  async main(
    @Body() payload: BusinessPartnerPortalCreatePurchaseInvoiceHeaderDto,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ) {
    return await this.handler.main(payload, timezone, auditing);
  }
}
