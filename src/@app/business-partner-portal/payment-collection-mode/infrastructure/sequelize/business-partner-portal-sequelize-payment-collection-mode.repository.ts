/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalIPaymentCollectionModeRepository,
  BusinessPartnerPortalPaymentCollectionMode,
  BusinessPartnerPortalPaymentCollectionModeMapper,
  BusinessPartnerPortalPaymentCollectionModeModel,
} from '@app/business-partner-portal/payment-collection-mode';
import {
  AuditingRunner,
  ICriteria,
  SequelizeRepository,
} from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class BusinessPartnerPortalSequelizePaymentCollectionModeRepository
  extends SequelizeRepository<
    BusinessPartnerPortalPaymentCollectionMode,
    BusinessPartnerPortalPaymentCollectionModeModel
  >
  implements BusinessPartnerPortalIPaymentCollectionModeRepository
{
  public readonly aggregateName: string =
    'BusinessPartnerPortalPaymentCollectionMode';
  public readonly mapper: BusinessPartnerPortalPaymentCollectionModeMapper =
    new BusinessPartnerPortalPaymentCollectionModeMapper();

  constructor(
    @InjectModel(BusinessPartnerPortalPaymentCollectionModeModel)
    public readonly repository: typeof BusinessPartnerPortalPaymentCollectionModeModel,
    public readonly criteria: ICriteria,
    public readonly auditingRunner: AuditingRunner,
  ) {
    super();
  }
}
