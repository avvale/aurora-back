/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalDeletePaymentModeByIdHandler,
  BusinessPartnerPortalPaymentModeDto,
} from '@api/business-partner-portal/payment-mode';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Body, Controller, Delete, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] payment-mode')
@Controller('business-partner-portal/payment-mode/delete')
@Auth('businessPartnerPortal.paymentMode.delete')
export class BusinessPartnerPortalDeletePaymentModeByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalDeletePaymentModeByIdHandler,
  ) {}

  @Delete(':id')
  @ApiOperation({ summary: 'Delete payment-mode by id' })
  @ApiOkResponse({
    description: 'The record has been deleted successfully.',
    type: BusinessPartnerPortalPaymentModeDto,
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
