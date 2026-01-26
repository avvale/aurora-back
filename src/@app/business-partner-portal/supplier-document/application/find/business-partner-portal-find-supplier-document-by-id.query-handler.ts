/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalFindSupplierDocumentByIdQuery,
  BusinessPartnerPortalSupplierDocumentMapper,
  BusinessPartnerPortalSupplierDocumentResponse,
} from '@app/business-partner-portal/supplier-document';
import { BusinessPartnerPortalFindSupplierDocumentByIdService } from '@app/business-partner-portal/supplier-document/application/find/business-partner-portal-find-supplier-document-by-id.service';
import { BusinessPartnerPortalSupplierDocumentId } from '@app/business-partner-portal/supplier-document/domain/value-objects';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalFindSupplierDocumentByIdQuery)
export class BusinessPartnerPortalFindSupplierDocumentByIdQueryHandler
  implements IQueryHandler<BusinessPartnerPortalFindSupplierDocumentByIdQuery>
{
  private readonly mapper: BusinessPartnerPortalSupplierDocumentMapper =
    new BusinessPartnerPortalSupplierDocumentMapper();

  constructor(
    private readonly findSupplierDocumentByIdService: BusinessPartnerPortalFindSupplierDocumentByIdService,
  ) {}

  async execute(
    query: BusinessPartnerPortalFindSupplierDocumentByIdQuery,
  ): Promise<BusinessPartnerPortalSupplierDocumentResponse> {
    const supplierDocument = await this.findSupplierDocumentByIdService.main(
      new BusinessPartnerPortalSupplierDocumentId(query.id),
      query.constraint,
      query.cQMetadata,
    );

    return this.mapper.mapAggregateToResponse(supplierDocument);
  }
}
