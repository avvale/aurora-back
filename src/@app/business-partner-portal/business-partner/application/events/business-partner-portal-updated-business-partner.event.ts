/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { CQMetadata } from '@aurorajs.dev/core';

export class BusinessPartnerPortalUpdatedBusinessPartnerEvent {
  constructor(
    public readonly event: {
      payload: {
        id: string;
        externalId: string;
        code: string;
        type: string[];
        name: string;
        tin: string;
        email: string;
        website: string;
        phone: string;
        phoneCountryPrefix: string;
        phoneSanitized: string;
        isActive: boolean;
        meta: any;
        createdAt: string;
        updatedAt: string;
        deletedAt: string;
      };
      cQMetadata?: CQMetadata;
    },
  ) {}
}
