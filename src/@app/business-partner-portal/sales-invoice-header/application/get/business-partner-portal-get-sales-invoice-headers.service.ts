/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalISalesInvoiceHeaderRepository,
  BusinessPartnerPortalSalesInvoiceHeader,
} from '@app/business-partner-portal/sales-invoice-header';
import { CQMetadata, LiteralObject, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalGetSalesInvoiceHeadersService {
  constructor(
    private readonly repository: BusinessPartnerPortalISalesInvoiceHeaderRepository,
  ) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<BusinessPartnerPortalSalesInvoiceHeader[] | LiteralObject[]> {
    return await this.repository.get({
      queryStatement,
      constraint,
      cQMetadata,
    });
  }
}
