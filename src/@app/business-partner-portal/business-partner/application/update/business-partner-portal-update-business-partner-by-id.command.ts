/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';

export class BusinessPartnerPortalUpdateBusinessPartnerByIdCommand {
  constructor(
    public readonly payload: {
      id: string;
      externalId?: string;
      code?: string;
      type?: string[];
      name?: string;
      tin?: string;
      email?: string;
      website?: string;
      phone?: string;
      phoneCountryPrefix?: string;
      phoneSanitized?: string;
      isActive?: boolean;
      meta?: any;
    },
    public readonly constraint?: QueryStatement,
    public readonly cQMetadata?: CQMetadata,
  ) {}
}
