/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdHandler,
  BusinessPartnerPortalPurchaseInvoiceHeaderDto,
} from '@api/business-partner-portal/purchase-invoice-header';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Body, Controller, Delete, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] purchase-invoice-header')
@Controller('business-partner-portal/purchase-invoice-header/delete')
@Auth('businessPartnerPortal.purchaseInvoiceHeader.delete')
export class BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdHandler,
  ) {}

  @Delete(':id')
  @ApiOperation({ summary: 'Delete purchase-invoice-header by id' })
  @ApiOkResponse({
    description: 'The record has been deleted successfully.',
    type: BusinessPartnerPortalPurchaseInvoiceHeaderDto,
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
