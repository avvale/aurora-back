/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { BusinessPartnerPortalFindSupplierDocumentByIdHandler } from '@api/business-partner-portal/supplier-document';
import { BusinessPartnerPortalSupplierDocument } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.supplierDocument.get')
export class BusinessPartnerPortalFindSupplierDocumentByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalFindSupplierDocumentByIdHandler,
  ) {}

  @Query('businessPartnerPortalFindSupplierDocumentById')
  async main(
    @Args('id') id: string,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<BusinessPartnerPortalSupplierDocument> {
    return await this.handler.main(id, constraint, timezone);
  }
}
