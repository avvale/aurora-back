/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalIPurchaseInvoicePositionRepository,
  BusinessPartnerPortalPurchaseInvoicePosition,
  BusinessPartnerPortalPurchaseInvoicePositionMapper,
  BusinessPartnerPortalPurchaseInvoicePositionModel,
} from '@app/business-partner-portal/purchase-invoice-position';
import {
  AuditingRunner,
  ICriteria,
  SequelizeRepository,
} from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class BusinessPartnerPortalSequelizePurchaseInvoicePositionRepository
  extends SequelizeRepository<
    BusinessPartnerPortalPurchaseInvoicePosition,
    BusinessPartnerPortalPurchaseInvoicePositionModel
  >
  implements BusinessPartnerPortalIPurchaseInvoicePositionRepository
{
  public readonly aggregateName: string =
    'BusinessPartnerPortalPurchaseInvoicePosition';
  public readonly mapper: BusinessPartnerPortalPurchaseInvoicePositionMapper =
    new BusinessPartnerPortalPurchaseInvoicePositionMapper();

  constructor(
    @InjectModel(BusinessPartnerPortalPurchaseInvoicePositionModel)
    public readonly repository: typeof BusinessPartnerPortalPurchaseInvoicePositionModel,
    public readonly criteria: ICriteria,
    public readonly auditingRunner: AuditingRunner,
  ) {
    super();
  }
}
