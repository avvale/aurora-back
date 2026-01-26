/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalDeletePurchaseInvoicePositionByIdHandler,
  BusinessPartnerPortalPurchaseInvoicePositionDto,
} from '@api/business-partner-portal/purchase-invoice-position';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Body, Controller, Delete, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] purchase-invoice-position')
@Controller('business-partner-portal/purchase-invoice-position/delete')
@Auth('businessPartnerPortal.purchaseInvoicePosition.delete')
export class BusinessPartnerPortalDeletePurchaseInvoicePositionByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalDeletePurchaseInvoicePositionByIdHandler,
  ) {}

  @Delete(':id')
  @ApiOperation({ summary: 'Delete purchase-invoice-position by id' })
  @ApiOkResponse({
    description: 'The record has been deleted successfully.',
    type: BusinessPartnerPortalPurchaseInvoicePositionDto,
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
