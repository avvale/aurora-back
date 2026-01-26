/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { BusinessPartnerPortalCreatedBusinessPartnerEvent } from '@app/business-partner-portal/business-partner';
import { CQMetadata } from '@aurorajs.dev/core';

export class BusinessPartnerPortalCreatedBusinessPartnersEvent {
  constructor(
    public readonly event: {
      payload: BusinessPartnerPortalCreatedBusinessPartnerEvent[];
      cQMetadata?: CQMetadata;
    },
  ) {}
}
