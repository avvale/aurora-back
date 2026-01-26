/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalIPurchaseInvoicePositionRepository,
  BusinessPartnerPortalPurchaseInvoicePosition,
} from '@app/business-partner-portal/purchase-invoice-position';
import { CQMetadata, LiteralObject, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalGetPurchaseInvoicePositionsService {
  constructor(
    private readonly repository: BusinessPartnerPortalIPurchaseInvoicePositionRepository,
  ) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<BusinessPartnerPortalPurchaseInvoicePosition[] | LiteralObject[]> {
    return await this.repository.get({
      queryStatement,
      constraint,
      cQMetadata,
    });
  }
}
