/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalIPurchaseInvoicePositionRepository,
  BusinessPartnerPortalPurchaseInvoicePosition,
} from '@app/business-partner-portal/purchase-invoice-position';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindPurchaseInvoicePositionService {
  constructor(
    private readonly repository: BusinessPartnerPortalIPurchaseInvoicePositionRepository,
  ) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<BusinessPartnerPortalPurchaseInvoicePosition> {
    return await this.repository.find({
      queryStatement,
      constraint,
      cQMetadata,
    });
  }
}
