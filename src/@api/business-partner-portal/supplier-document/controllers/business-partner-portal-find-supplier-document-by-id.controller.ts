/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalFindSupplierDocumentByIdHandler,
  BusinessPartnerPortalSupplierDocumentDto,
} from '@api/business-partner-portal/supplier-document';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[business-partner-portal] supplier-document')
@Controller('business-partner-portal/supplier-document/find')
@Auth('businessPartnerPortal.supplierDocument.get')
export class BusinessPartnerPortalFindSupplierDocumentByIdController {
  constructor(
    private readonly handler: BusinessPartnerPortalFindSupplierDocumentByIdHandler,
  ) {}

  @Post(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Find supplier-document by id' })
  @ApiOkResponse({
    description: 'The record has been successfully requested.',
    type: BusinessPartnerPortalSupplierDocumentDto,
  })
  async main(
    @Param('id') id: string,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ) {
    return await this.handler.main(id, constraint, timezone);
  }
}
