/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalISupplierDocumentRepository,
  BusinessPartnerPortalSupplierDocument,
} from '@app/business-partner-portal/supplier-document';
import { BusinessPartnerPortalSupplierDocumentId } from '@app/business-partner-portal/supplier-document/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindSupplierDocumentByIdService {
  constructor(
    private readonly repository: BusinessPartnerPortalISupplierDocumentRepository,
  ) {}

  async main(
    id: BusinessPartnerPortalSupplierDocumentId,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<BusinessPartnerPortalSupplierDocument> {
    return await this.repository.findById(id, {
      constraint,
      cQMetadata,
    });
  }
}
