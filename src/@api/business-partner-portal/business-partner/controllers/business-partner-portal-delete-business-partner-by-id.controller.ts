/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalBusinessPartnerDto,
  BusinessPartnerPortalDeleteBusinessPartnerByIdHandler,
} from '@api/business-partner-portal/business-partner';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Body, Controller, Delete, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] business-partner')
@Controller('business-partner-portal/business-partner/delete')
@Auth('businessPartnerPortal.businessPartner.delete')
export class BusinessPartnerPortalDeleteBusinessPartnerByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalDeleteBusinessPartnerByIdHandler,
  ) {}

  @Delete(':id')
  @ApiOperation({ summary: 'Delete business-partner by id' })
  @ApiOkResponse({
    description: 'The record has been deleted successfully.',
    type: BusinessPartnerPortalBusinessPartnerDto,
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
