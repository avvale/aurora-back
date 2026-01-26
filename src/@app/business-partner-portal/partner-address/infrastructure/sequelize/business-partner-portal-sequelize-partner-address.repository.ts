/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalIPartnerAddressRepository,
  BusinessPartnerPortalPartnerAddress,
  BusinessPartnerPortalPartnerAddressMapper,
  BusinessPartnerPortalPartnerAddressModel,
} from '@app/business-partner-portal/partner-address';
import {
  AuditingRunner,
  ICriteria,
  SequelizeRepository,
} from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class BusinessPartnerPortalSequelizePartnerAddressRepository
  extends SequelizeRepository<
    BusinessPartnerPortalPartnerAddress,
    BusinessPartnerPortalPartnerAddressModel
  >
  implements BusinessPartnerPortalIPartnerAddressRepository
{
  public readonly aggregateName: string = 'BusinessPartnerPortalPartnerAddress';
  public readonly mapper: BusinessPartnerPortalPartnerAddressMapper =
    new BusinessPartnerPortalPartnerAddressMapper();

  constructor(
    @InjectModel(BusinessPartnerPortalPartnerAddressModel)
    public readonly repository: typeof BusinessPartnerPortalPartnerAddressModel,
    public readonly criteria: ICriteria,
    public readonly auditingRunner: AuditingRunner,
  ) {
    super();
  }
}
