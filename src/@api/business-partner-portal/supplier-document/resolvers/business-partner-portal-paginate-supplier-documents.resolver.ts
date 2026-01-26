/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { BusinessPartnerPortalPaginateSupplierDocumentsHandler } from '@api/business-partner-portal/supplier-document';
import { Pagination } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.supplierDocument.get')
export class BusinessPartnerPortalPaginateSupplierDocumentsResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalPaginateSupplierDocumentsHandler,
  ) {}

  @Query('businessPartnerPortalPaginateSupplierDocuments')
  async main(
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<Pagination> {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
