/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartnerModel } from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalPurchaseInvoiceHeaderModel } from '@app/business-partner-portal/purchase-invoice-header';
import {
  AuditingSideEffectEvent,
  SequelizeAuditingAgent,
} from '@aurorajs.dev/core';
import { DataTypes } from 'sequelize';
import {
  AfterBulkCreate,
  AfterBulkDestroy,
  AfterBulkRestore,
  AfterBulkUpdate,
  AfterCreate,
  AfterDestroy,
  AfterRestore,
  AfterUpdate,
  AfterUpsert,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({
  modelName: 'BusinessPartnerPortalSupplierDocument',
  freezeTableName: true,
  timestamps: false,
  indexes: [
    {
      fields: ['rowId'],
      unique: true,
    },
    {
      fields: ['businessPartnerId'],
      unique: false,
      name: 'bpp_sup_doc_bp_id',
    },
    {
      fields: ['documentNumber'],
      unique: true,
      name: 'bpp_sup_doc_doc_number',
    },
    {
      fields: ['status'],
      unique: false,
    },
    {
      fields: ['fileHash'],
      unique: false,
    },
    {
      fields: ['supplierInvoiceNumber'],
      unique: false,
      name: 'bpp_sup_doc_sup_inv_number',
    },
    {
      fields: ['externalDocumentId'],
      unique: false,
      name: 'bpp_sup_doc_ext_doc_id',
    },
    {
      fields: ['purchaseInvoiceHeaderId'],
      unique: false,
      name: 'bpp_sup_doc_pur_inv_hdr_id',
    },
    {
      fields: ['errorCode'],
      unique: false,
    },
  ],
})
export class BusinessPartnerPortalSupplierDocumentModel extends Model<BusinessPartnerPortalSupplierDocumentModel> {
  @AfterCreate
  static auditingCreate(
    instance: BusinessPartnerPortalSupplierDocumentModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.CREATED,
      '@app/business-partner-portal/supplier-document/infrastructure/sequelize/business-partner-portal-sequelize-supplier-document.model',
      'BusinessPartnerPortalSupplierDocumentModel',
    );
  }

  @AfterBulkCreate
  static auditingBulkCreate(
    instance: BusinessPartnerPortalSupplierDocumentModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.BULK_CREATED,
      '@app/business-partner-portal/supplier-document/infrastructure/sequelize/business-partner-portal-sequelize-supplier-document.model',
      'BusinessPartnerPortalSupplierDocumentModel',
    );
  }

  @AfterUpdate
  static auditingUpdate(
    instance: BusinessPartnerPortalSupplierDocumentModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.UPDATED,
      '@app/business-partner-portal/supplier-document/infrastructure/sequelize/business-partner-portal-sequelize-supplier-document.model',
      'BusinessPartnerPortalSupplierDocumentModel',
    );
  }

  @AfterBulkUpdate
  static auditingBulkUpdate(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_UPDATED,
      '@app/business-partner-portal/supplier-document/infrastructure/sequelize/business-partner-portal-sequelize-supplier-document.model',
      'BusinessPartnerPortalSupplierDocumentModel',
    );
  }

  @AfterDestroy
  static auditingDestroy(
    instance: BusinessPartnerPortalSupplierDocumentModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.DELETED,
      '@app/business-partner-portal/supplier-document/infrastructure/sequelize/business-partner-portal-sequelize-supplier-document.model',
      'BusinessPartnerPortalSupplierDocumentModel',
    );
  }

  @AfterBulkDestroy
  static auditingBulkDestroy(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_DELETED,
      '@app/business-partner-portal/supplier-document/infrastructure/sequelize/business-partner-portal-sequelize-supplier-document.model',
      'BusinessPartnerPortalSupplierDocumentModel',
    );
  }

  @AfterRestore
  static auditingRestore(
    instance: BusinessPartnerPortalSupplierDocumentModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.RESTORED,
      '@app/business-partner-portal/supplier-document/infrastructure/sequelize/business-partner-portal-sequelize-supplier-document.model',
      'BusinessPartnerPortalSupplierDocumentModel',
    );
  }

  @AfterBulkRestore
  static auditingBulkRestore(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_RESTORED,
      '@app/business-partner-portal/supplier-document/infrastructure/sequelize/business-partner-portal-sequelize-supplier-document.model',
      'BusinessPartnerPortalSupplierDocumentModel',
    );
  }

  @AfterUpsert
  static auditingUpsert(
    instance: BusinessPartnerPortalSupplierDocumentModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.UPSERTED,
      '@app/business-partner-portal/supplier-document/infrastructure/sequelize/business-partner-portal-sequelize-supplier-document.model',
      'BusinessPartnerPortalSupplierDocumentModel',
    );
  }

  @Column({
    field: 'id',
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
  })
  id: string;

  @Column({
    field: 'rowId',
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.BIGINT,
  })
  rowId: number;

  @ForeignKey(() => BusinessPartnerPortalBusinessPartnerModel)
  @Column({
    field: 'businessPartnerId',
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'NO ACTION',
  })
  businessPartnerId: string;

  @BelongsTo(() => BusinessPartnerPortalBusinessPartnerModel, {
    foreignKey: 'businessPartnerId',
  })
  businessPartner: BusinessPartnerPortalBusinessPartnerModel;

  @Column({
    field: 'documentNumber',
    allowNull: true,
    type: DataTypes.STRING(64),
  })
  documentNumber: string;

  @Column({
    field: 'documentType',
    allowNull: true,
    type: DataTypes.ENUM(
      'INVOICE',
      'CREDIT_NOTE',
      'DEBIT_NOTE',
      'PROFORMA',
      'OTHER',
    ),
    defaultValue: 'INVOICE',
  })
  documentType: string;

  @Column({
    field: 'status',
    allowNull: false,
    type: DataTypes.ENUM(
      'PENDING_UPLOAD',
      'UPLOADED',
      'VALIDATING',
      'SENT_FOR_PROCESSING',
      'PROCESSING',
      'PROCESSED',
      'LINKED',
      'ERROR',
      'REJECTED',
    ),
    defaultValue: 'PENDING_UPLOAD',
  })
  status: string;

  @Column({
    field: 'file',
    allowNull: true,
    type: DataTypes.JSONB,
  })
  file: any;

  @Column({
    field: 'fileHash',
    allowNull: true,
    type: DataTypes.STRING(64),
  })
  fileHash: string;

  @Column({
    field: 'supplierInvoiceNumber',
    allowNull: true,
    type: DataTypes.STRING(64),
  })
  supplierInvoiceNumber: string;

  @Column({
    field: 'supplierInvoiceDate',
    allowNull: true,
    type: DataTypes.DATE,
  })
  supplierInvoiceDate: string;

  @Column({
    field: 'supplierInvoiceAmount',
    allowNull: true,
    type: DataTypes.DECIMAL(12, 2),
  })
  supplierInvoiceAmount: number;

  @Column({
    field: 'currencyCode',
    allowNull: true,
    type: DataTypes.CHAR(3),
  })
  currencyCode: string;

  @Column({
    field: 'externalDocumentId',
    allowNull: true,
    type: DataTypes.STRING(64),
  })
  externalDocumentId: string;

  @Column({
    field: 'externalCompanyCode',
    allowNull: true,
    type: DataTypes.STRING(16),
  })
  externalCompanyCode: string;

  @Column({
    field: 'externalProcessingStatus',
    allowNull: true,
    type: DataTypes.STRING(64),
  })
  externalProcessingStatus: string;

  @ForeignKey(() => BusinessPartnerPortalPurchaseInvoiceHeaderModel)
  @Column({
    field: 'purchaseInvoiceHeaderId',
    allowNull: true,
    type: DataTypes.UUID,
    references: {
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'NO ACTION',
  })
  purchaseInvoiceHeaderId: string;

  @BelongsTo(() => BusinessPartnerPortalPurchaseInvoiceHeaderModel, {
    foreignKey: 'purchaseInvoiceHeaderId',
  })
  purchaseInvoiceHeader: BusinessPartnerPortalPurchaseInvoiceHeaderModel;

  @Column({
    field: 'ocrConfidenceScore',
    allowNull: true,
    type: DataTypes.DECIMAL(5, 2),
  })
  ocrConfidenceScore: number;

  @Column({
    field: 'ocrData',
    allowNull: true,
    type: DataTypes.JSONB,
  })
  ocrData: any;

  @Column({
    field: 'sentForProcessingAt',
    allowNull: true,
    type: DataTypes.DATE,
  })
  sentForProcessingAt: string;

  @Column({
    field: 'processedAt',
    allowNull: true,
    type: DataTypes.DATE,
  })
  processedAt: string;

  @Column({
    field: 'linkedAt',
    allowNull: true,
    type: DataTypes.DATE,
  })
  linkedAt: string;

  @Column({
    field: 'errorCode',
    allowNull: true,
    type: DataTypes.STRING(64),
  })
  errorCode: string;

  @Column({
    field: 'errorMessage',
    allowNull: true,
    type: DataTypes.TEXT,
  })
  errorMessage: string;

  @Column({
    field: 'retryCount',
    allowNull: false,
    type: DataTypes.SMALLINT,
    defaultValue: 0,
  })
  retryCount: number;

  @Column({
    field: 'lastRetryAt',
    allowNull: true,
    type: DataTypes.DATE,
  })
  lastRetryAt: string;

  @Column({
    field: 'notes',
    allowNull: true,
    type: DataTypes.TEXT,
  })
  notes: string;

  @Column({
    field: 'supplierNotes',
    allowNull: true,
    type: DataTypes.TEXT,
  })
  supplierNotes: string;

  @Column({
    field: 'isArchived',
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  })
  isArchived: boolean;

  @Column({
    field: 'createdAt',
    allowNull: true,
    type: DataTypes.DATE,
  })
  createdAt: string;

  @Column({
    field: 'updatedAt',
    allowNull: true,
    type: DataTypes.DATE,
  })
  updatedAt: string;

  @Column({
    field: 'deletedAt',
    allowNull: true,
    type: DataTypes.DATE,
  })
  deletedAt: string;
}
