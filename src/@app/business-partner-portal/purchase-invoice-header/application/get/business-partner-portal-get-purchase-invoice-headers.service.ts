/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
  BusinessPartnerPortalPurchaseInvoiceHeader,
} from '@app/business-partner-portal/purchase-invoice-header';
import { CQMetadata, LiteralObject, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalGetPurchaseInvoiceHeadersService {
  constructor(
    private readonly repository: BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
  ) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<BusinessPartnerPortalPurchaseInvoiceHeader[] | LiteralObject[]> {
    return await this.repository.get({
      queryStatement,
      constraint,
      cQMetadata,
    });
  }
}
