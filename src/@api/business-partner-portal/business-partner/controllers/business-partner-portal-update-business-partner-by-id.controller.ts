/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalBusinessPartnerDto,
  BusinessPartnerPortalUpdateBusinessPartnerByIdDto,
  BusinessPartnerPortalUpdateBusinessPartnerByIdHandler,
} from '@api/business-partner-portal/business-partner';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] business-partner')
@Controller('business-partner-portal/business-partner/update')
@Auth('businessPartnerPortal.businessPartner.update')
export class BusinessPartnerPortalUpdateBusinessPartnerByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalUpdateBusinessPartnerByIdHandler,
  ) {}

  @Put()
  @ApiOperation({ summary: 'Update business-partner by id' })
  @ApiOkResponse({
    description: 'The record has been successfully updated.',
    type: BusinessPartnerPortalBusinessPartnerDto,
  })
  async main(
    @Body() payload: BusinessPartnerPortalUpdateBusinessPartnerByIdDto,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ) {
    return await this.handler.main(payload, constraint, timezone, auditing);
  }
}
