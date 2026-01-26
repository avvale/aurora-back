/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalISalesInvoiceHeaderRepository,
  BusinessPartnerPortalSalesInvoiceHeader,
} from '@app/business-partner-portal/sales-invoice-header';
import { BusinessPartnerPortalSalesInvoiceHeaderId } from '@app/business-partner-portal/sales-invoice-header/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindSalesInvoiceHeaderByIdService {
  constructor(
    private readonly repository: BusinessPartnerPortalISalesInvoiceHeaderRepository,
  ) {}

  async main(
    id: BusinessPartnerPortalSalesInvoiceHeaderId,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<BusinessPartnerPortalSalesInvoiceHeader> {
    return await this.repository.findById(id, {
      constraint,
      cQMetadata,
    });
  }
}
