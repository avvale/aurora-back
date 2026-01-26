/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalIPaymentModeRepository,
  BusinessPartnerPortalPaymentMode,
} from '@app/business-partner-portal/payment-mode';
import { BusinessPartnerPortalPaymentModeId } from '@app/business-partner-portal/payment-mode/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindPaymentModeByIdService {
  constructor(
    private readonly repository: BusinessPartnerPortalIPaymentModeRepository,
  ) {}

  async main(
    id: BusinessPartnerPortalPaymentModeId,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<BusinessPartnerPortalPaymentMode> {
    return await this.repository.findById(id, {
      constraint,
      cQMetadata,
    });
  }
}
