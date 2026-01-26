/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalIPartnerAddressRepository,
  BusinessPartnerPortalPartnerAddress,
} from '@app/business-partner-portal/partner-address';
import { CQMetadata, Pagination, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalPaginatePartnerAddressesService {
  constructor(
    private readonly repository: BusinessPartnerPortalIPartnerAddressRepository,
  ) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<Pagination<BusinessPartnerPortalPartnerAddress>> {
    return await this.repository.paginate({
      queryStatement,
      constraint,
      cQMetadata,
    });
  }
}
