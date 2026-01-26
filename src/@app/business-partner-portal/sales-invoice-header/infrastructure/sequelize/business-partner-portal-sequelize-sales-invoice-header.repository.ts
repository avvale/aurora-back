/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalISalesInvoiceHeaderRepository,
  BusinessPartnerPortalSalesInvoiceHeader,
  BusinessPartnerPortalSalesInvoiceHeaderMapper,
  BusinessPartnerPortalSalesInvoiceHeaderModel,
} from '@app/business-partner-portal/sales-invoice-header';
import {
  AuditingRunner,
  ICriteria,
  SequelizeRepository,
} from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class BusinessPartnerPortalSequelizeSalesInvoiceHeaderRepository
  extends SequelizeRepository<
    BusinessPartnerPortalSalesInvoiceHeader,
    BusinessPartnerPortalSalesInvoiceHeaderModel
  >
  implements BusinessPartnerPortalISalesInvoiceHeaderRepository
{
  public readonly aggregateName: string =
    'BusinessPartnerPortalSalesInvoiceHeader';
  public readonly mapper: BusinessPartnerPortalSalesInvoiceHeaderMapper =
    new BusinessPartnerPortalSalesInvoiceHeaderMapper();

  constructor(
    @InjectModel(BusinessPartnerPortalSalesInvoiceHeaderModel)
    public readonly repository: typeof BusinessPartnerPortalSalesInvoiceHeaderModel,
    public readonly criteria: ICriteria,
    public readonly auditingRunner: AuditingRunner,
  ) {
    super();
  }
}
