/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalPartnerAddressDto,
  BusinessPartnerPortalUpdatePartnerAddressByIdDto,
  BusinessPartnerPortalUpdatePartnerAddressByIdHandler,
} from '@api/business-partner-portal/partner-address';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] partner-address')
@Controller('business-partner-portal/partner-address/update')
@Auth('businessPartnerPortal.partnerAddress.update')
export class BusinessPartnerPortalUpdatePartnerAddressByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalUpdatePartnerAddressByIdHandler,
  ) {}

  @Put()
  @ApiOperation({ summary: 'Update partner-address by id' })
  @ApiOkResponse({
    description: 'The record has been successfully updated.',
    type: BusinessPartnerPortalPartnerAddressDto,
  })
  async main(
    @Body() payload: BusinessPartnerPortalUpdatePartnerAddressByIdDto,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ) {
    return await this.handler.main(payload, constraint, timezone, auditing);
  }
}
