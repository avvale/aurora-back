/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { CQMetadata } from '@aurorajs.dev/core';

export class BusinessPartnerPortalCreatePartnerContactCommand {
  constructor(
    public readonly payload: {
      id: string;
      businessPartnerId: string;
      firstName: string;
      lastName: string;
      position?: string;
      department?: string;
      email: string;
      phone?: string;
      phoneCountryPrefix?: string;
      phoneSanitized?: string;
      mobile?: string;
      mobileCountryPrefix?: string;
      mobileSanitized?: string;
      isPrincipal: boolean;
      isActive: boolean;
      isUser: boolean;
      userId?: string;
      preferredLanguage?: string;
      notes?: string;
    },
    public readonly cQMetadata?: CQMetadata,
  ) {}
}
