/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPaymentCollectionModesQuery,
  BusinessPartnerPortalPaymentCollectionMode,
  BusinessPartnerPortalPaymentCollectionModeMapper,
  BusinessPartnerPortalPaymentCollectionModeResponse,
} from '@app/business-partner-portal/payment-collection-mode';
import { BusinessPartnerPortalGetPaymentCollectionModesService } from '@app/business-partner-portal/payment-collection-mode/application/get/business-partner-portal-get-payment-collection-modes.service';
import { LiteralObject } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(BusinessPartnerPortalGetPaymentCollectionModesQuery)
export class BusinessPartnerPortalGetPaymentCollectionModesQueryHandler
  implements IQueryHandler<BusinessPartnerPortalGetPaymentCollectionModesQuery>
{
  private readonly mapper: BusinessPartnerPortalPaymentCollectionModeMapper =
    new BusinessPartnerPortalPaymentCollectionModeMapper();

  constructor(
    private readonly getPaymentCollectionModesService: BusinessPartnerPortalGetPaymentCollectionModesService,
  ) {}

  async execute(
    query: BusinessPartnerPortalGetPaymentCollectionModesQuery,
  ): Promise<
    BusinessPartnerPortalPaymentCollectionModeResponse[] | LiteralObject[]
  > {
    const models = await this.getPaymentCollectionModesService.main(
      query.queryStatement,
      query.constraint,
      query.cQMetadata,
    );

    if (query.cQMetadata?.excludeMapModelToAggregate) return models;

    return this.mapper.mapAggregatesToResponses(
      models as BusinessPartnerPortalPaymentCollectionMode[],
    );
  }
}
