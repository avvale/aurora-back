/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalCreatedPartnerContactEvent } from '@app/business-partner-portal/partner-contact';
import { CQMetadata } from '@aurorajs.dev/core';

export class BusinessPartnerPortalCreatedPartnerContactsEvent {
  constructor(
    public readonly event: {
      payload: BusinessPartnerPortalCreatedPartnerContactEvent[];
      cQMetadata?: CQMetadata;
    },
  ) {}
}
