/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalIPaymentModeRepository,
  BusinessPartnerPortalPaymentMode,
  BusinessPartnerPortalPaymentModeMapper,
  BusinessPartnerPortalPaymentModeModel,
} from '@app/business-partner-portal/payment-mode';
import {
  AuditingRunner,
  ICriteria,
  SequelizeRepository,
} from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class BusinessPartnerPortalSequelizePaymentModeRepository
  extends SequelizeRepository<
    BusinessPartnerPortalPaymentMode,
    BusinessPartnerPortalPaymentModeModel
  >
  implements BusinessPartnerPortalIPaymentModeRepository
{
  public readonly aggregateName: string = 'BusinessPartnerPortalPaymentMode';
  public readonly mapper: BusinessPartnerPortalPaymentModeMapper =
    new BusinessPartnerPortalPaymentModeMapper();

  constructor(
    @InjectModel(BusinessPartnerPortalPaymentModeModel)
    public readonly repository: typeof BusinessPartnerPortalPaymentModeModel,
    public readonly criteria: ICriteria,
    public readonly auditingRunner: AuditingRunner,
  ) {
    super();
  }
}
