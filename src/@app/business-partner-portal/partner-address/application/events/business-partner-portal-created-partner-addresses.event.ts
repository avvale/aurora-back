/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { BusinessPartnerPortalCreatedPartnerAddressEvent } from '@app/business-partner-portal/partner-address';
import { CQMetadata } from '@aurorajs.dev/core';

export class BusinessPartnerPortalCreatedPartnerAddressesEvent {
  constructor(
    public readonly event: {
      payload: BusinessPartnerPortalCreatedPartnerAddressEvent[];
      cQMetadata?: CQMetadata;
    },
  ) {}
}
