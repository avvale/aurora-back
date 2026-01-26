/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalGetSupplierDocumentsQuery,
  BusinessPartnerPortalSupplierDocument,
  BusinessPartnerPortalSupplierDocumentMapper,
  BusinessPartnerPortalSupplierDocumentResponse,
} from '@app/business-partner-portal/supplier-document';
import { BusinessPartnerPortalGetSupplierDocumentsService } from '@app/business-partner-portal/supplier-document/application/get/business-partner-portal-get-supplier-documents.service';
import { LiteralObject } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalGetSupplierDocumentsQuery)
export class BusinessPartnerPortalGetSupplierDocumentsQueryHandler
  implements IQueryHandler<BusinessPartnerPortalGetSupplierDocumentsQuery>
{
  private readonly mapper: BusinessPartnerPortalSupplierDocumentMapper =
    new BusinessPartnerPortalSupplierDocumentMapper();

  constructor(
    private readonly getSupplierDocumentsService: BusinessPartnerPortalGetSupplierDocumentsService,
  ) {}

  async execute(
    query: BusinessPartnerPortalGetSupplierDocumentsQuery,
  ): Promise<
    BusinessPartnerPortalSupplierDocumentResponse[] | LiteralObject[]
  > {
    const models = await this.getSupplierDocumentsService.main(
      query.queryStatement,
      query.constraint,
      query.cQMetadata,
    );

    if (query.cQMetadata?.excludeMapModelToAggregate) return models;

    return this.mapper.mapAggregatesToResponses(
      models as BusinessPartnerPortalSupplierDocument[],
    );
  }
}
