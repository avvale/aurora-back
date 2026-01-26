/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdHandler,
  BusinessPartnerPortalSalesInvoiceHeaderDto,
} from '@api/business-partner-portal/sales-invoice-header';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Body, Controller, Delete, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] sales-invoice-header')
@Controller('business-partner-portal/sales-invoice-header/delete')
@Auth('businessPartnerPortal.salesInvoiceHeader.delete')
export class BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdHandler,
  ) {}

  @Delete(':id')
  @ApiOperation({ summary: 'Delete sales-invoice-header by id' })
  @ApiOkResponse({
    description: 'The record has been deleted successfully.',
    type: BusinessPartnerPortalSalesInvoiceHeaderDto,
  })
  async main(
    @Param('id') id: string,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ) {
    return await this.handler.main(id, constraint, timezone, auditing);
  }
}
