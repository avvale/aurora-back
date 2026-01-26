/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalISupplierDocumentRepository,
  BusinessPartnerPortalSupplierDocument,
  BusinessPartnerPortalSupplierDocumentMapper,
  BusinessPartnerPortalSupplierDocumentModel,
} from '@app/business-partner-portal/supplier-document';
import {
  AuditingRunner,
  ICriteria,
  SequelizeRepository,
} from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class BusinessPartnerPortalSequelizeSupplierDocumentRepository
  extends SequelizeRepository<
    BusinessPartnerPortalSupplierDocument,
    BusinessPartnerPortalSupplierDocumentModel
  >
  implements BusinessPartnerPortalISupplierDocumentRepository
{
  public readonly aggregateName: string =
    'BusinessPartnerPortalSupplierDocument';
  public readonly mapper: BusinessPartnerPortalSupplierDocumentMapper =
    new BusinessPartnerPortalSupplierDocumentMapper();

  constructor(
    @InjectModel(BusinessPartnerPortalSupplierDocumentModel)
    public readonly repository: typeof BusinessPartnerPortalSupplierDocumentModel,
    public readonly criteria: ICriteria,
    public readonly auditingRunner: AuditingRunner,
  ) {
    super();
  }
}
