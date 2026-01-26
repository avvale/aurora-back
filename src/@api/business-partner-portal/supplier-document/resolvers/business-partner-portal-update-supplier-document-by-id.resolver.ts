/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { BusinessPartnerPortalUpdateSupplierDocumentByIdHandler } from '@api/business-partner-portal/supplier-document';
import {
  BusinessPartnerPortalSupplierDocument,
  BusinessPartnerPortalUpdateSupplierDocumentByIdInput,
} from '@api/graphql';
import { Auth } from '@aurora/decorators';
import {
  Auditing,
  AuditingMeta,
  QueryStatement,
  Timezone,
} from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.supplierDocument.update')
export class BusinessPartnerPortalUpdateSupplierDocumentByIdResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalUpdateSupplierDocumentByIdHandler,
  ) {}

  @Mutation('businessPartnerPortalUpdateSupplierDocumentById')
  async main(
    @Args('payload')
    payload: BusinessPartnerPortalUpdateSupplierDocumentByIdInput,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalSupplierDocument> {
    return await this.handler.main(payload, constraint, timezone, auditing);
  }
}
