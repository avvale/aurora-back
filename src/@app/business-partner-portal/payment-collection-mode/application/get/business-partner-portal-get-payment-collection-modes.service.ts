/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalIPaymentCollectionModeRepository,
  BusinessPartnerPortalPaymentCollectionMode,
} from '@app/business-partner-portal/payment-collection-mode';
import { CQMetadata, LiteralObject, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalGetPaymentCollectionModesService {
  constructor(
    private readonly repository: BusinessPartnerPortalIPaymentCollectionModeRepository,
  ) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<BusinessPartnerPortalPaymentCollectionMode[] | LiteralObject[]> {
    return await this.repository.get({
      queryStatement,
      constraint,
      cQMetadata,
    });
  }
}
