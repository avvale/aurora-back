/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { BusinessPartnerPortalCreatedSupplierDocumentEvent } from '@app/business-partner-portal/supplier-document';
import { CQMetadata } from '@aurorajs.dev/core';

export class BusinessPartnerPortalCreatedSupplierDocumentsEvent {
  constructor(
    public readonly event: {
      payload: BusinessPartnerPortalCreatedSupplierDocumentEvent[];
      cQMetadata?: CQMetadata;
    },
  ) {}
}
