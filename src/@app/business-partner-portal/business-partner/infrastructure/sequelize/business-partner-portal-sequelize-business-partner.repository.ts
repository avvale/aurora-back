/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalBusinessPartner,
  BusinessPartnerPortalBusinessPartnerMapper,
  BusinessPartnerPortalBusinessPartnerModel,
  BusinessPartnerPortalIBusinessPartnerRepository,
} from '@app/business-partner-portal/business-partner';
import {
  AuditingRunner,
  ICriteria,
  SequelizeRepository,
} from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class BusinessPartnerPortalSequelizeBusinessPartnerRepository
  extends SequelizeRepository<
    BusinessPartnerPortalBusinessPartner,
    BusinessPartnerPortalBusinessPartnerModel
  >
  implements BusinessPartnerPortalIBusinessPartnerRepository
{
  public readonly aggregateName: string =
    'BusinessPartnerPortalBusinessPartner';
  public readonly mapper: BusinessPartnerPortalBusinessPartnerMapper =
    new BusinessPartnerPortalBusinessPartnerMapper();

  constructor(
    @InjectModel(BusinessPartnerPortalBusinessPartnerModel)
    public readonly repository: typeof BusinessPartnerPortalBusinessPartnerModel,
    public readonly criteria: ICriteria,
    public readonly auditingRunner: AuditingRunner,
  ) {
    super();
  }
}
