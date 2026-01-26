/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginatePaymentCollectionModesQuery,
  BusinessPartnerPortalPaymentCollectionModeMapper,
} from '@app/business-partner-portal/payment-collection-mode';
import { BusinessPartnerPortalPaginatePaymentCollectionModesService } from '@app/business-partner-portal/payment-collection-mode/application/paginate/business-partner-portal-paginate-payment-collection-modes.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalPaginatePaymentCollectionModesQuery)
export class BusinessPartnerPortalPaginatePaymentCollectionModesQueryHandler
  implements
    IQueryHandler<BusinessPartnerPortalPaginatePaymentCollectionModesQuery>
{
  private readonly mapper: BusinessPartnerPortalPaymentCollectionModeMapper =
    new BusinessPartnerPortalPaymentCollectionModeMapper();

  constructor(
    private readonly paginatePaymentCollectionModesService: BusinessPartnerPortalPaginatePaymentCollectionModesService,
  ) {}

  async execute(
    query: BusinessPartnerPortalPaginatePaymentCollectionModesQuery,
  ): Promise<PaginationResponse> {
    const { total, count, rows } =
      await this.paginatePaymentCollectionModesService.main(
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
