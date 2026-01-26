/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
  BusinessPartnerPortalPurchaseInvoiceHeader,
  BusinessPartnerPortalPurchaseInvoiceHeaderMapper,
  BusinessPartnerPortalPurchaseInvoiceHeaderModel,
} from '@app/business-partner-portal/purchase-invoice-header';
import {
  AuditingRunner,
  ICriteria,
  SequelizeRepository,
} from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class BusinessPartnerPortalSequelizePurchaseInvoiceHeaderRepository
  extends SequelizeRepository<
    BusinessPartnerPortalPurchaseInvoiceHeader,
    BusinessPartnerPortalPurchaseInvoiceHeaderModel
  >
  implements BusinessPartnerPortalIPurchaseInvoiceHeaderRepository
{
  public readonly aggregateName: string =
    'BusinessPartnerPortalPurchaseInvoiceHeader';
  public readonly mapper: BusinessPartnerPortalPurchaseInvoiceHeaderMapper =
    new BusinessPartnerPortalPurchaseInvoiceHeaderMapper();

  constructor(
    @InjectModel(BusinessPartnerPortalPurchaseInvoiceHeaderModel)
    public readonly repository: typeof BusinessPartnerPortalPurchaseInvoiceHeaderModel,
    public readonly criteria: ICriteria,
    public readonly auditingRunner: AuditingRunner,
  ) {
    super();
  }
}
