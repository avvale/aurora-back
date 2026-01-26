/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { BusinessPartnerPortalCreateSupplierDocumentHandler } from '@api/business-partner-portal/supplier-document';
import {
  BusinessPartnerPortalCreateSupplierDocumentInput,
  BusinessPartnerPortalSupplierDocument,
} from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('businessPartnerPortal.supplierDocument.create')
export class BusinessPartnerPortalCreateSupplierDocumentResolver {
  constructor(
    private readonly handler: BusinessPartnerPortalCreateSupplierDocumentHandler,
  ) {}

  @Mutation('businessPartnerPortalCreateSupplierDocument')
  async main(
    @Args('payload') payload: BusinessPartnerPortalCreateSupplierDocumentInput,
    @Timezone() timezone?: string,
    @Auditing() auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalSupplierDocument> {
    return await this.handler.main(payload, timezone, auditing);
  }
}
