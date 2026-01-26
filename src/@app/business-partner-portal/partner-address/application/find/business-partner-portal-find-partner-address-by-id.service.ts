/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalIPartnerAddressRepository,
  BusinessPartnerPortalPartnerAddress,
} from '@app/business-partner-portal/partner-address';
import { BusinessPartnerPortalPartnerAddressId } from '@app/business-partner-portal/partner-address/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindPartnerAddressByIdService {
  constructor(
    private readonly repository: BusinessPartnerPortalIPartnerAddressRepository,
  ) {}

  async main(
    id: BusinessPartnerPortalPartnerAddressId,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<BusinessPartnerPortalPartnerAddress> {
    return await this.repository.findById(id, {
      constraint,
      cQMetadata,
    });
  }
}
