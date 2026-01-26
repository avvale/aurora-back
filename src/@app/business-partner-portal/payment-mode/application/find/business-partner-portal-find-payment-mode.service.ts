/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalIPaymentModeRepository,
  BusinessPartnerPortalPaymentMode,
} from '@app/business-partner-portal/payment-mode';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindPaymentModeService {
  constructor(
    private readonly repository: BusinessPartnerPortalIPaymentModeRepository,
  ) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<BusinessPartnerPortalPaymentMode> {
    return await this.repository.find({
      queryStatement,
      constraint,
      cQMetadata,
    });
  }
}
