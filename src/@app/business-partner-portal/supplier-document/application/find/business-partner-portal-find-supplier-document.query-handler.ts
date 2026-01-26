/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalFindSupplierDocumentQuery,
  BusinessPartnerPortalSupplierDocumentMapper,
  BusinessPartnerPortalSupplierDocumentResponse,
} from '@app/business-partner-portal/supplier-document';
import { BusinessPartnerPortalFindSupplierDocumentService } from '@app/business-partner-portal/supplier-document/application/find/business-partner-portal-find-supplier-document.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalFindSupplierDocumentQuery)
export class BusinessPartnerPortalFindSupplierDocumentQueryHandler
  implements IQueryHandler<BusinessPartnerPortalFindSupplierDocumentQuery>
{
  private readonly mapper: BusinessPartnerPortalSupplierDocumentMapper =
    new BusinessPartnerPortalSupplierDocumentMapper();

  constructor(
    private readonly findSupplierDocumentService: BusinessPartnerPortalFindSupplierDocumentService,
  ) {}

  async execute(
    query: BusinessPartnerPortalFindSupplierDocumentQuery,
  ): Promise<BusinessPartnerPortalSupplierDocumentResponse> {
    const supplierDocument = await this.findSupplierDocumentService.main(
      query.queryStatement,
      query.constraint,
      query.cQMetadata,
    );

    return this.mapper.mapAggregateToResponse(supplierDocument);
  }
}
