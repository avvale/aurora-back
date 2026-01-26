/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalCreateSalesInvoicePositionDto,
  BusinessPartnerPortalCreateSalesInvoicePositionHandler,
  BusinessPartnerPortalSalesInvoicePositionDto,
} from '@api/business-partner-portal/sales-invoice-position';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] sales-invoice-position')
@Controller('business-partner-portal/sales-invoice-position/create')
@Auth('businessPartnerPortal.salesInvoicePosition.create')
export class BusinessPartnerPortalCreateSalesInvoicePositionController {
  constructor(
    private readonly handler: BusinessPartnerPortalCreateSalesInvoicePositionHandler,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create sales-invoice-position' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: BusinessPartnerPortalSalesInvoicePositionDto,
  })
  async main(
    @Body() payload: BusinessPartnerPortalCreateSalesInvoicePositionDto,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ) {
    return await this.handler.main(payload, timezone, auditing);
  }
}
