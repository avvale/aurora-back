/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalIPaymentCollectionModeRepository,
  BusinessPartnerPortalPaymentCollectionMode,
} from '@app/business-partner-portal/payment-collection-mode';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindPaymentCollectionModeService {
  constructor(
    private readonly repository: BusinessPartnerPortalIPaymentCollectionModeRepository,
  ) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<BusinessPartnerPortalPaymentCollectionMode> {
    return await this.repository.find({
      queryStatement,
      constraint,
      cQMetadata,
    });
  }
}
