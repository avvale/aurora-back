/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalPaymentModeDto,
  BusinessPartnerPortalUpdatePaymentModeByIdDto,
  BusinessPartnerPortalUpdatePaymentModeByIdHandler,
} from '@api/business-partner-portal/payment-mode';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] payment-mode')
@Controller('business-partner-portal/payment-mode/update')
@Auth('businessPartnerPortal.paymentMode.update')
export class BusinessPartnerPortalUpdatePaymentModeByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalUpdatePaymentModeByIdHandler,
  ) {}

  @Put()
  @ApiOperation({ summary: 'Update payment-mode by id' })
  @ApiOkResponse({
    description: 'The record has been successfully updated.',
    type: BusinessPartnerPortalPaymentModeDto,
  })
  async main(
    @Body() payload: BusinessPartnerPortalUpdatePaymentModeByIdDto,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ) {
    return await this.handler.main(payload, constraint, timezone, auditing);
  }
}
