/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalISupplierDocumentRepository,
  BusinessPartnerPortalSupplierDocument,
} from '@app/business-partner-portal/supplier-document';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindSupplierDocumentService {
  constructor(
    private readonly repository: BusinessPartnerPortalISupplierDocumentRepository,
  ) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<BusinessPartnerPortalSupplierDocument> {
    return await this.repository.find({
      queryStatement,
      constraint,
      cQMetadata,
    });
  }
}
