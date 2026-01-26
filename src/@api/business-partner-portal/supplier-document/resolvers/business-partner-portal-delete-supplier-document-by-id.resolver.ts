/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { BusinessPartnerPortalDeleteSupplierDocumentByIdHandler } from '@api/business-partner-portal/supplier-document';
import { BusinessPartnerPortalSupplierDocument } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.supplierDocument.delete')
export class BusinessPartnerPortalDeleteSupplierDocumentByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalDeleteSupplierDocumentByIdHandler,
  ) {}

  @Mutation('businessPartnerPortalDeleteSupplierDocumentById')
  async main(
    @Args('id') id: string,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalSupplierDocument> {
    return await this.handler.main(id, constraint, timezone, auditing);
  }
}
