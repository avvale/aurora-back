/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalCreateSalesInvoiceHeaderDto,
  BusinessPartnerPortalCreateSalesInvoiceHeaderHandler,
  BusinessPartnerPortalSalesInvoiceHeaderDto,
} from '@api/business-partner-portal/sales-invoice-header';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] sales-invoice-header')
@Controller('business-partner-portal/sales-invoice-header/create')
@Auth('businessPartnerPortal.salesInvoiceHeader.create')
export class BusinessPartnerPortalCreateSalesInvoiceHeaderController {
  constructor(
    private readonly handler: BusinessPartnerPortalCreateSalesInvoiceHeaderHandler,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create sales-invoice-header' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: BusinessPartnerPortalSalesInvoiceHeaderDto,
  })
  async main(
    @Body() payload: BusinessPartnerPortalCreateSalesInvoiceHeaderDto,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ) {
    return await this.handler.main(payload, timezone, auditing);
  }
}
