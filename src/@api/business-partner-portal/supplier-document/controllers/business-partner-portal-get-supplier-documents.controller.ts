/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalGetSupplierDocumentsHandler,
  BusinessPartnerPortalSupplierDocumentDto,
} from '@api/business-partner-portal/supplier-document';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('[business-partner-portal] supplier-document')
@Controller('business-partner-portal/supplier-documents/get')
@Auth('businessPartnerPortal.supplierDocument.get')
export class BusinessPartnerPortalGetSupplierDocumentsController {
  constructor(
    private readonly handler: BusinessPartnerPortalGetSupplierDocumentsHandler,
  ) {}

  @Post()
  @HttpCode(200)
  @ApiOperation({ summary: 'Get supplier-documents according to query' })
  @ApiOkResponse({
    description: 'The records has been found successfully.',
    type: [BusinessPartnerPortalSupplierDocumentDto],
  })
  @ApiBody({ type: QueryStatement })
  @ApiQuery({ name: 'query', type: QueryStatement })
  async main(
    @Body('query') queryStatement?: QueryStatement,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ) {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
