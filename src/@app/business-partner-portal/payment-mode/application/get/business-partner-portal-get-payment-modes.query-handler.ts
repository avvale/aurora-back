/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPaymentModesQuery,
  BusinessPartnerPortalPaymentMode,
  BusinessPartnerPortalPaymentModeMapper,
  BusinessPartnerPortalPaymentModeResponse,
} from '@app/business-partner-portal/payment-mode';
import { BusinessPartnerPortalGetPaymentModesService } from '@app/business-partner-portal/payment-mode/application/get/business-partner-portal-get-payment-modes.service';
import { LiteralObject } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalGetPaymentModesQuery)
export class BusinessPartnerPortalGetPaymentModesQueryHandler
  implements IQueryHandler<BusinessPartnerPortalGetPaymentModesQuery>
{
  private readonly mapper: BusinessPartnerPortalPaymentModeMapper =
    new BusinessPartnerPortalPaymentModeMapper();

  constructor(
    private readonly getPaymentModesService: BusinessPartnerPortalGetPaymentModesService,
  ) {}

  async execute(
    query: BusinessPartnerPortalGetPaymentModesQuery,
  ): Promise<BusinessPartnerPortalPaymentModeResponse[] | LiteralObject[]> {
    const models = await this.getPaymentModesService.main(
      query.queryStatement,
      query.constraint,
      query.cQMetadata,
    );

    if (query.cQMetadata?.excludeMapModelToAggregate) return models;

    return this.mapper.mapAggregatesToResponses(
      models as BusinessPartnerPortalPaymentMode[],
    );
  }
}
