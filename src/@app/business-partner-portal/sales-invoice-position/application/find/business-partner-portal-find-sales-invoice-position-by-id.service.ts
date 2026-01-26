/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalISalesInvoicePositionRepository,
  BusinessPartnerPortalSalesInvoicePosition,
} from '@app/business-partner-portal/sales-invoice-position';
import { BusinessPartnerPortalSalesInvoicePositionId } from '@app/business-partner-portal/sales-invoice-position/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindSalesInvoicePositionByIdService {
  constructor(
    private readonly repository: BusinessPartnerPortalISalesInvoicePositionRepository,
  ) {}

  async main(
    id: BusinessPartnerPortalSalesInvoicePositionId,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<BusinessPartnerPortalSalesInvoicePosition> {
    return await this.repository.findById(id, {
      constraint,
      cQMetadata,
    });
  }
}
