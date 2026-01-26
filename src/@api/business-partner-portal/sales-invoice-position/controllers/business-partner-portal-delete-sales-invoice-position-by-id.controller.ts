/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalDeleteSalesInvoicePositionByIdHandler,
  BusinessPartnerPortalSalesInvoicePositionDto,
} from '@api/business-partner-portal/sales-invoice-position';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Body, Controller, Delete, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] sales-invoice-position')
@Controller('business-partner-portal/sales-invoice-position/delete')
@Auth('businessPartnerPortal.salesInvoicePosition.delete')
export class BusinessPartnerPortalDeleteSalesInvoicePositionByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalDeleteSalesInvoicePositionByIdHandler,
  ) {}

  @Delete(':id')
  @ApiOperation({ summary: 'Delete sales-invoice-position by id' })
  @ApiOkResponse({
    description: 'The record has been deleted successfully.',
    type: BusinessPartnerPortalSalesInvoicePositionDto,
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
