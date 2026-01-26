/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartnerModel } from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalPurchaseInvoicePositionModel } from '@app/business-partner-portal/purchase-invoice-position';
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
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({
  modelName: 'BusinessPartnerPortalPurchaseInvoiceHeader',
  freezeTableName: true,
  timestamps: false,
  indexes: [
    {
      fields: ['rowId'],
      unique: true,
    },
    {
      fields: ['invoiceNumber'],
      unique: true,
      name: 'bpp_pur_inv_hdr_inv_number',
    },
    {
      fields: ['supplierInvoiceNumber'],
      unique: false,
      name: 'bpp_pur_inv_hdr_sup_inv_number',
    },
    {
      fields: ['externalId'],
      unique: false,
    },
    {
      fields: ['businessPartnerId'],
      unique: false,
      name: 'bpp_pur_inv_hdr_bp_id',
    },
    {
      fields: ['invoiceDate'],
      unique: false,
      name: 'bpp_pur_inv_hdr_inv_date',
    },
    {
      fields: ['dueDate'],
      unique: false,
      name: 'bpp_pur_inv_hdr_due_date',
    },
    {
      fields: ['status'],
      unique: false,
    },
    {
      fields: ['totalAmount'],
      unique: false,
      name: 'bpp_pur_inv_hdr_total_amount',
    },
  ],
})
export class BusinessPartnerPortalPurchaseInvoiceHeaderModel extends Model<BusinessPartnerPortalPurchaseInvoiceHeaderModel> {
  @AfterCreate
  static auditingCreate(
    instance: BusinessPartnerPortalPurchaseInvoiceHeaderModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.CREATED,
      '@app/business-partner-portal/purchase-invoice-header/infrastructure/sequelize/business-partner-portal-sequelize-purchase-invoice-header.model',
      'BusinessPartnerPortalPurchaseInvoiceHeaderModel',
    );
  }

  @AfterBulkCreate
  static auditingBulkCreate(
    instance: BusinessPartnerPortalPurchaseInvoiceHeaderModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.BULK_CREATED,
      '@app/business-partner-portal/purchase-invoice-header/infrastructure/sequelize/business-partner-portal-sequelize-purchase-invoice-header.model',
      'BusinessPartnerPortalPurchaseInvoiceHeaderModel',
    );
  }

  @AfterUpdate
  static auditingUpdate(
    instance: BusinessPartnerPortalPurchaseInvoiceHeaderModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.UPDATED,
      '@app/business-partner-portal/purchase-invoice-header/infrastructure/sequelize/business-partner-portal-sequelize-purchase-invoice-header.model',
      'BusinessPartnerPortalPurchaseInvoiceHeaderModel',
    );
  }

  @AfterBulkUpdate
  static auditingBulkUpdate(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_UPDATED,
      '@app/business-partner-portal/purchase-invoice-header/infrastructure/sequelize/business-partner-portal-sequelize-purchase-invoice-header.model',
      'BusinessPartnerPortalPurchaseInvoiceHeaderModel',
    );
  }

  @AfterDestroy
  static auditingDestroy(
    instance: BusinessPartnerPortalPurchaseInvoiceHeaderModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.DELETED,
      '@app/business-partner-portal/purchase-invoice-header/infrastructure/sequelize/business-partner-portal-sequelize-purchase-invoice-header.model',
      'BusinessPartnerPortalPurchaseInvoiceHeaderModel',
    );
  }

  @AfterBulkDestroy
  static auditingBulkDestroy(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_DELETED,
      '@app/business-partner-portal/purchase-invoice-header/infrastructure/sequelize/business-partner-portal-sequelize-purchase-invoice-header.model',
      'BusinessPartnerPortalPurchaseInvoiceHeaderModel',
    );
  }

  @AfterRestore
  static auditingRestore(
    instance: BusinessPartnerPortalPurchaseInvoiceHeaderModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.RESTORED,
      '@app/business-partner-portal/purchase-invoice-header/infrastructure/sequelize/business-partner-portal-sequelize-purchase-invoice-header.model',
      'BusinessPartnerPortalPurchaseInvoiceHeaderModel',
    );
  }

  @AfterBulkRestore
  static auditingBulkRestore(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_RESTORED,
      '@app/business-partner-portal/purchase-invoice-header/infrastructure/sequelize/business-partner-portal-sequelize-purchase-invoice-header.model',
      'BusinessPartnerPortalPurchaseInvoiceHeaderModel',
    );
  }

  @AfterUpsert
  static auditingUpsert(
    instance: BusinessPartnerPortalPurchaseInvoiceHeaderModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.UPSERTED,
      '@app/business-partner-portal/purchase-invoice-header/infrastructure/sequelize/business-partner-portal-sequelize-purchase-invoice-header.model',
      'BusinessPartnerPortalPurchaseInvoiceHeaderModel',
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

  @Column({
    field: 'invoiceNumber',
    allowNull: false,
    type: DataTypes.STRING(64),
  })
  invoiceNumber: string;

  @Column({
    field: 'supplierInvoiceNumber',
    allowNull: true,
    type: DataTypes.STRING(64),
  })
  supplierInvoiceNumber: string;

  @Column({
    field: 'externalId',
    allowNull: true,
    type: DataTypes.STRING(64),
  })
  externalId: string;

  @Column({
    field: 'externalSystemCode',
    allowNull: true,
    type: DataTypes.STRING(16),
  })
  externalSystemCode: string;

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
    field: 'invoiceDate',
    allowNull: false,
    type: DataTypes.DATE,
  })
  invoiceDate: string;

  @Column({
    field: 'receivedDate',
    allowNull: true,
    type: DataTypes.DATE,
  })
  receivedDate: string;

  @Column({
    field: 'dueDate',
    allowNull: true,
    type: DataTypes.DATE,
  })
  dueDate: string;

  @Column({
    field: 'status',
    allowNull: false,
    type: DataTypes.ENUM(
      'DRAFT',
      'RECEIVED',
      'APPROVED',
      'PAID',
      'PARTIALLY_PAID',
      'OVERDUE',
      'CANCELLED',
      'REFUNDED',
    ),
    defaultValue: 'DRAFT',
  })
  status: string;

  @Column({
    field: 'subtotal',
    allowNull: false,
    type: DataTypes.DECIMAL(12, 2),
    defaultValue: 0,
  })
  subtotal: number;

  @Column({
    field: 'taxAmount',
    allowNull: false,
    type: DataTypes.DECIMAL(12, 2),
    defaultValue: 0,
  })
  taxAmount: number;

  @Column({
    field: 'discountAmount',
    allowNull: false,
    type: DataTypes.DECIMAL(12, 2),
    defaultValue: 0,
  })
  discountAmount: number;

  @Column({
    field: 'totalAmount',
    allowNull: false,
    type: DataTypes.DECIMAL(12, 2),
    defaultValue: 0,
  })
  totalAmount: number;

  @Column({
    field: 'paidAmount',
    allowNull: false,
    type: DataTypes.DECIMAL(12, 2),
    defaultValue: 0,
  })
  paidAmount: number;

  @Column({
    field: 'currencyCode',
    allowNull: false,
    type: DataTypes.CHAR(3),
    defaultValue: 'USD',
  })
  currencyCode: string;

  @Column({
    field: 'paymentTermDays',
    allowNull: true,
    type: DataTypes.SMALLINT,
  })
  paymentTermDays: number;

  @Column({
    field: 'notes',
    allowNull: true,
    type: DataTypes.TEXT,
  })
  notes: string;

  @Column({
    field: 'approvalNotes',
    allowNull: true,
    type: DataTypes.TEXT,
  })
  approvalNotes: string;

  @HasMany(() => BusinessPartnerPortalPurchaseInvoicePositionModel, {
    foreignKey: 'purchaseInvoiceHeaderId',
  })
  positions: BusinessPartnerPortalPurchaseInvoicePositionModel[];

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
