/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginateSupplierDocumentsQuery,
  BusinessPartnerPortalSupplierDocumentMapper,
} from '@app/business-partner-portal/supplier-document';
import { BusinessPartnerPortalPaginateSupplierDocumentsService } from '@app/business-partner-portal/supplier-document/application/paginate/business-partner-portal-paginate-supplier-documents.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalPaginateSupplierDocumentsQuery)
export class BusinessPartnerPortalPaginateSupplierDocumentsQueryHandler
  implements IQueryHandler<BusinessPartnerPortalPaginateSupplierDocumentsQuery>
{
  private readonly mapper: BusinessPartnerPortalSupplierDocumentMapper =
    new BusinessPartnerPortalSupplierDocumentMapper();

  constructor(
    private readonly paginateSupplierDocumentsService: BusinessPartnerPortalPaginateSupplierDocumentsService,
  ) {}

  async execute(
    query: BusinessPartnerPortalPaginateSupplierDocumentsQuery,
  ): Promise<PaginationResponse> {
    const { total, count, rows } =
      await this.paginateSupplierDocumentsService.main(
        query.queryStatement,
        query.constraint,
        query.cQMetadata,
      );

    return new PaginationResponse(
      total,
      count,
      this.mapper.mapAggregatesToResponses(rows),
    );
  }
}
