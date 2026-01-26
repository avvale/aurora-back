/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPaymentCollectionModeByIdHandler,
  BusinessPartnerPortalPaymentCollectionModeDto,
} from '@api/business-partner-portal/payment-collection-mode';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] payment-collection-mode')
@Controller('business-partner-portal/payment-collection-mode/find')
@Auth('businessPartnerPortal.paymentCollectionMode.get')
export class BusinessPartnerPortalFindPaymentCollectionModeByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalFindPaymentCollectionModeByIdHandler,
  ) {}

  @Post(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Find payment-collection-mode by id' })
  @ApiOkResponse({
    description: 'The record has been successfully requested.',
    type: BusinessPartnerPortalPaymentCollectionModeDto,
  })
  async main(
    @Param('id') id: string,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ) {
    return await this.handler.main(id, constraint, timezone);
  }
}
