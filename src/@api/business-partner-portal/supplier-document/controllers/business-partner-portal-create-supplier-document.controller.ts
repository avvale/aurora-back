/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalCreateSupplierDocumentDto,
  BusinessPartnerPortalCreateSupplierDocumentHandler,
  BusinessPartnerPortalSupplierDocumentDto,
} from '@api/business-partner-portal/supplier-document';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] supplier-document')
@Controller('business-partner-portal/supplier-document/create')
@Auth('businessPartnerPortal.supplierDocument.create')
export class BusinessPartnerPortalCreateSupplierDocumentController {
  constructor(
    private readonly handler: BusinessPartnerPortalCreateSupplierDocumentHandler,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create supplier-document' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: BusinessPartnerPortalSupplierDocumentDto,
  })
  async main(
    @Body() payload: BusinessPartnerPortalCreateSupplierDocumentDto,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ) {
    return await this.handler.main(payload, timezone, auditing);
  }
}
