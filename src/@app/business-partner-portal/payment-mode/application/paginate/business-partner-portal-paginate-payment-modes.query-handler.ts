/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginatePaymentModesQuery,
  BusinessPartnerPortalPaymentModeMapper,
} from '@app/business-partner-portal/payment-mode';
import { BusinessPartnerPortalPaginatePaymentModesService } from '@app/business-partner-portal/payment-mode/application/paginate/business-partner-portal-paginate-payment-modes.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalPaginatePaymentModesQuery)
export class BusinessPartnerPortalPaginatePaymentModesQueryHandler
  implements IQueryHandler<BusinessPartnerPortalPaginatePaymentModesQuery>
{
  private readonly mapper: BusinessPartnerPortalPaymentModeMapper =
    new BusinessPartnerPortalPaymentModeMapper();

  constructor(
    private readonly paginatePaymentModesService: BusinessPartnerPortalPaginatePaymentModesService,
  ) {}

  async execute(
    query: BusinessPartnerPortalPaginatePaymentModesQuery,
  ): Promise<PaginationResponse> {
    const { total, count, rows } = await this.paginatePaymentModesService.main(
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
