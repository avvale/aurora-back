/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { CQMetadata } from '@aurorajs.dev/core';

export class BusinessPartnerPortalDeletedBusinessPartnerEvent {
  constructor(
    public readonly event: {
      payload: {
        id: string;
        rowId: number;
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
