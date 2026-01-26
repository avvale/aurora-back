/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalISalesInvoicePositionRepository,
  BusinessPartnerPortalSalesInvoicePosition,
  BusinessPartnerPortalSalesInvoicePositionMapper,
  BusinessPartnerPortalSalesInvoicePositionModel,
} from '@app/business-partner-portal/sales-invoice-position';
import {
  AuditingRunner,
  ICriteria,
  SequelizeRepository,
} from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class BusinessPartnerPortalSequelizeSalesInvoicePositionRepository
  extends SequelizeRepository<
    BusinessPartnerPortalSalesInvoicePosition,
    BusinessPartnerPortalSalesInvoicePositionModel
  >
  implements BusinessPartnerPortalISalesInvoicePositionRepository
{
  public readonly aggregateName: string =
    'BusinessPartnerPortalSalesInvoicePosition';
  public readonly mapper: BusinessPartnerPortalSalesInvoicePositionMapper =
    new BusinessPartnerPortalSalesInvoicePositionMapper();

  constructor(
    @InjectModel(BusinessPartnerPortalSalesInvoicePositionModel)
    public readonly repository: typeof BusinessPartnerPortalSalesInvoicePositionModel,
    public readonly criteria: ICriteria,
    public readonly auditingRunner: AuditingRunner,
  ) {
    super();
  }
}
