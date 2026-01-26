/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalBusinessPartner,
  BusinessPartnerPortalIBusinessPartnerRepository,
} from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalBusinessPartnerId } from '@app/business-partner-portal/business-partner/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindBusinessPartnerByIdService {
  constructor(
    private readonly repository: BusinessPartnerPortalIBusinessPartnerRepository,
  ) {}

  async main(
    id: BusinessPartnerPortalBusinessPartnerId,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<BusinessPartnerPortalBusinessPartner> {
    return await this.repository.findById(id, {
      constraint,
      cQMetadata,
    });
  }
}
