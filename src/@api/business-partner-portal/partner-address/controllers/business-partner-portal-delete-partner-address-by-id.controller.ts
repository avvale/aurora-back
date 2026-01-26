/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalDeletePartnerAddressByIdHandler,
  BusinessPartnerPortalPartnerAddressDto,
} from '@api/business-partner-portal/partner-address';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Body, Controller, Delete, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] partner-address')
@Controller('business-partner-portal/partner-address/delete')
@Auth('businessPartnerPortal.partnerAddress.delete')
export class BusinessPartnerPortalDeletePartnerAddressByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalDeletePartnerAddressByIdHandler,
  ) {}

  @Delete(':id')
  @ApiOperation({ summary: 'Delete partner-address by id' })
  @ApiOkResponse({
    description: 'The record has been deleted successfully.',
    type: BusinessPartnerPortalPartnerAddressDto,
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
