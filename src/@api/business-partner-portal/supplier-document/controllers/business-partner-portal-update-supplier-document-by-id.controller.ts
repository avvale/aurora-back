/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalSupplierDocumentDto,
  BusinessPartnerPortalUpdateSupplierDocumentByIdDto,
  BusinessPartnerPortalUpdateSupplierDocumentByIdHandler,
} from '@api/business-partner-portal/supplier-document';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] supplier-document')
@Controller('business-partner-portal/supplier-document/update')
@Auth('businessPartnerPortal.supplierDocument.update')
export class BusinessPartnerPortalUpdateSupplierDocumentByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalUpdateSupplierDocumentByIdHandler,
  ) {}

  @Put()
  @ApiOperation({ summary: 'Update supplier-document by id' })
  @ApiOkResponse({
    description: 'The record has been successfully updated.',
    type: BusinessPartnerPortalSupplierDocumentDto,
  })
  async main(
    @Body() payload: BusinessPartnerPortalUpdateSupplierDocumentByIdDto,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ) {
    return await this.handler.main(payload, constraint, timezone, auditing);
  }
}
