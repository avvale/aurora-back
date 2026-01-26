/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalPurchaseInvoicePositionDto,
  BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdDto,
  BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdHandler,
} from '@api/business-partner-portal/purchase-invoice-position';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] purchase-invoice-position')
@Controller('business-partner-portal/purchase-invoice-position/update')
@Auth('businessPartnerPortal.purchaseInvoicePosition.update')
export class BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdHandler,
  ) {}

  @Put()
  @ApiOperation({ summary: 'Update purchase-invoice-position by id' })
  @ApiOkResponse({
    description: 'The record has been successfully updated.',
    type: BusinessPartnerPortalPurchaseInvoicePositionDto,
  })
  async main(
    @Body() payload: BusinessPartnerPortalUpdatePurchaseInvoicePositionByIdDto,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ) {
    return await this.handler.main(payload, constraint, timezone, auditing);
  }
}
