/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalIPurchaseInvoicePositionRepository,
  BusinessPartnerPortalPurchaseInvoicePosition,
} from '@app/business-partner-portal/purchase-invoice-position';
import { BusinessPartnerPortalPurchaseInvoicePositionId } from '@app/business-partner-portal/purchase-invoice-position/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindPurchaseInvoicePositionByIdService {
  constructor(
    private readonly repository: BusinessPartnerPortalIPurchaseInvoicePositionRepository,
  ) {}

  async main(
    id: BusinessPartnerPortalPurchaseInvoicePositionId,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<BusinessPartnerPortalPurchaseInvoicePosition> {
    return await this.repository.findById(id, {
      constraint,
      cQMetadata,
    });
  }
}
