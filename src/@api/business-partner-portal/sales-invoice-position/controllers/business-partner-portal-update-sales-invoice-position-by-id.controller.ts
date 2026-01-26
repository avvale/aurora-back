/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalSalesInvoicePositionDto,
  BusinessPartnerPortalUpdateSalesInvoicePositionByIdDto,
  BusinessPartnerPortalUpdateSalesInvoicePositionByIdHandler,
} from '@api/business-partner-portal/sales-invoice-position';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] sales-invoice-position')
@Controller('business-partner-portal/sales-invoice-position/update')
@Auth('businessPartnerPortal.salesInvoicePosition.update')
export class BusinessPartnerPortalUpdateSalesInvoicePositionByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalUpdateSalesInvoicePositionByIdHandler,
  ) {}

  @Put()
  @ApiOperation({ summary: 'Update sales-invoice-position by id' })
  @ApiOkResponse({
    description: 'The record has been successfully updated.',
    type: BusinessPartnerPortalSalesInvoicePositionDto,
  })
  async main(
    @Body() payload: BusinessPartnerPortalUpdateSalesInvoicePositionByIdDto,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ) {
    return await this.handler.main(payload, constraint, timezone, auditing);
  }
}
