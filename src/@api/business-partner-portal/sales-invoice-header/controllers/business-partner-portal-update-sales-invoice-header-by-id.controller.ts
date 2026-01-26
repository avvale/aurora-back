/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalSalesInvoiceHeaderDto,
  BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdDto,
  BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdHandler,
} from '@api/business-partner-portal/sales-invoice-header';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] sales-invoice-header')
@Controller('business-partner-portal/sales-invoice-header/update')
@Auth('businessPartnerPortal.salesInvoiceHeader.update')
export class BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdHandler,
  ) {}

  @Put()
  @ApiOperation({ summary: 'Update sales-invoice-header by id' })
  @ApiOkResponse({
    description: 'The record has been successfully updated.',
    type: BusinessPartnerPortalSalesInvoiceHeaderDto,
  })
  async main(
    @Body() payload: BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdDto,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ) {
    return await this.handler.main(payload, constraint, timezone, auditing);
  }
}
