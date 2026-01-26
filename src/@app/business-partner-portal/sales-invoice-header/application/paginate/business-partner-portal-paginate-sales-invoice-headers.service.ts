/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalISalesInvoiceHeaderRepository,
  BusinessPartnerPortalSalesInvoiceHeader,
} from '@app/business-partner-portal/sales-invoice-header';
import { CQMetadata, Pagination, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalPaginateSalesInvoiceHeadersService {
  constructor(
    private readonly repository: BusinessPartnerPortalISalesInvoiceHeaderRepository,
  ) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<Pagination<BusinessPartnerPortalSalesInvoiceHeader>> {
    return await this.repository.paginate({
      queryStatement,
      constraint,
      cQMetadata,
    });
  }
}
