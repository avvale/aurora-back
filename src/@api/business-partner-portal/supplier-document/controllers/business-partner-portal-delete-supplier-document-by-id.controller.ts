/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalDeleteSupplierDocumentByIdHandler,
  BusinessPartnerPortalSupplierDocumentDto,
} from '@api/business-partner-portal/supplier-document';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Body, Controller, Delete, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] supplier-document')
@Controller('business-partner-portal/supplier-document/delete')
@Auth('businessPartnerPortal.supplierDocument.delete')
export class BusinessPartnerPortalDeleteSupplierDocumentByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalDeleteSupplierDocumentByIdHandler,
  ) {}

  @Delete(':id')
  @ApiOperation({ summary: 'Delete supplier-document by id' })
  @ApiOkResponse({
    description: 'The record has been deleted successfully.',
    type: BusinessPartnerPortalSupplierDocumentDto,
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
