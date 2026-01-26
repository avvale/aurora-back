/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalIPaymentCollectionModeRepository,
  BusinessPartnerPortalPaymentCollectionMode,
} from '@app/business-partner-portal/payment-collection-mode';
import { BusinessPartnerPortalPaymentCollectionModeId } from '@app/business-partner-portal/payment-collection-mode/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindPaymentCollectionModeByIdService {
  constructor(
    private readonly repository: BusinessPartnerPortalIPaymentCollectionModeRepository,
  ) {}

  async main(
    id: BusinessPartnerPortalPaymentCollectionModeId,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<BusinessPartnerPortalPaymentCollectionMode> {
    return await this.repository.findById(id, {
      constraint,
      cQMetadata,
    });
  }
}
