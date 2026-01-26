/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalIPartnerContactRepository,
  BusinessPartnerPortalPartnerContact,
} from '@app/business-partner-portal/partner-contact';
import { BusinessPartnerPortalPartnerContactId } from '@app/business-partner-portal/partner-contact/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindPartnerContactByIdService {
  constructor(
    private readonly repository: BusinessPartnerPortalIPartnerContactRepository,
  ) {}

  async main(
    id: BusinessPartnerPortalPartnerContactId,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<BusinessPartnerPortalPartnerContact> {
    return await this.repository.findById(id, {
      constraint,
      cQMetadata,
    });
  }
}
