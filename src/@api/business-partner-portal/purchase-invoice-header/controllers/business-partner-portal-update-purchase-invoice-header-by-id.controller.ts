/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalPurchaseInvoiceHeaderDto,
  BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdDto,
  BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdHandler,
} from '@api/business-partner-portal/purchase-invoice-header';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] purchase-invoice-header')
@Controller('business-partner-portal/purchase-invoice-header/update')
@Auth('businessPartnerPortal.purchaseInvoiceHeader.update')
export class BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdHandler,
  ) {}

  @Put()
  @ApiOperation({ summary: 'Update purchase-invoice-header by id' })
  @ApiOkResponse({
    description: 'The record has been successfully updated.',
    type: BusinessPartnerPortalPurchaseInvoiceHeaderDto,
  })
  async main(
    @Body() payload: BusinessPartnerPortalUpdatePurchaseInvoiceHeaderByIdDto,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ) {
    return await this.handler.main(payload, constraint, timezone, auditing);
  }
}
