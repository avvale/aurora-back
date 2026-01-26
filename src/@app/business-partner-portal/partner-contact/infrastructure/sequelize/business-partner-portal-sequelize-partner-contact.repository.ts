/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalIPartnerContactRepository,
  BusinessPartnerPortalPartnerContact,
  BusinessPartnerPortalPartnerContactMapper,
  BusinessPartnerPortalPartnerContactModel,
} from '@app/business-partner-portal/partner-contact';
import {
  AuditingRunner,
  ICriteria,
  SequelizeRepository,
} from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class BusinessPartnerPortalSequelizePartnerContactRepository
  extends SequelizeRepository<
    BusinessPartnerPortalPartnerContact,
    BusinessPartnerPortalPartnerContactModel
  >
  implements BusinessPartnerPortalIPartnerContactRepository
{
  public readonly aggregateName: string = 'BusinessPartnerPortalPartnerContact';
  public readonly mapper: BusinessPartnerPortalPartnerContactMapper =
    new BusinessPartnerPortalPartnerContactMapper();

  constructor(
    @InjectModel(BusinessPartnerPortalPartnerContactModel)
    public readonly repository: typeof BusinessPartnerPortalPartnerContactModel,
    public readonly criteria: ICriteria,
    public readonly auditingRunner: AuditingRunner,
  ) {
    super();
  }
}
