/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { BusinessPartnerPortalGetSupplierDocumentsHandler } from '@api/business-partner-portal/supplier-document';
import { BusinessPartnerPortalSupplierDocument } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.supplierDocument.get')
export class BusinessPartnerPortalGetSupplierDocumentsResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalGetSupplierDocumentsHandler,
  ) {}

  @Query('businessPartnerPortalGetSupplierDocuments')
  async main(
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<BusinessPartnerPortalSupplierDocument[]> {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
