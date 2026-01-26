/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
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
  modelName: 'BusinessPartnerPortalPurchaseInvoicePosition',
  freezeTableName: true,
  timestamps: false,
  indexes: [
    {
      fields: ['rowId'],
      unique: true,
    },
    {
      fields: ['purchaseInvoiceHeaderId'],
      unique: false,
      name: 'bpp_pur_inv_pos_hdr_id',
    },
    {
      fields: ['productCode'],
      unique: false,
      name: 'bpp_pur_inv_pos_prod_code',
    },
    {
      fields: ['expenseCategory'],
      unique: false,
      name: 'bpp_pur_inv_pos_exp_cat',
    },
  ],
})
export class BusinessPartnerPortalPurchaseInvoicePositionModel extends Model<BusinessPartnerPortalPurchaseInvoicePositionModel> {
  @AfterCreate
  static auditingCreate(
    instance: BusinessPartnerPortalPurchaseInvoicePositionModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.CREATED,
      '@app/business-partner-portal/purchase-invoice-position/infrastructure/sequelize/business-partner-portal-sequelize-purchase-invoice-position.model',
      'BusinessPartnerPortalPurchaseInvoicePositionModel',
    );
  }

  @AfterBulkCreate
  static auditingBulkCreate(
    instance: BusinessPartnerPortalPurchaseInvoicePositionModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.BULK_CREATED,
      '@app/business-partner-portal/purchase-invoice-position/infrastructure/sequelize/business-partner-portal-sequelize-purchase-invoice-position.model',
      'BusinessPartnerPortalPurchaseInvoicePositionModel',
    );
  }

  @AfterUpdate
  static auditingUpdate(
    instance: BusinessPartnerPortalPurchaseInvoicePositionModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.UPDATED,
      '@app/business-partner-portal/purchase-invoice-position/infrastructure/sequelize/business-partner-portal-sequelize-purchase-invoice-position.model',
      'BusinessPartnerPortalPurchaseInvoicePositionModel',
    );
  }

  @AfterBulkUpdate
  static auditingBulkUpdate(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_UPDATED,
      '@app/business-partner-portal/purchase-invoice-position/infrastructure/sequelize/business-partner-portal-sequelize-purchase-invoice-position.model',
      'BusinessPartnerPortalPurchaseInvoicePositionModel',
    );
  }

  @AfterDestroy
  static auditingDestroy(
    instance: BusinessPartnerPortalPurchaseInvoicePositionModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.DELETED,
      '@app/business-partner-portal/purchase-invoice-position/infrastructure/sequelize/business-partner-portal-sequelize-purchase-invoice-position.model',
      'BusinessPartnerPortalPurchaseInvoicePositionModel',
    );
  }

  @AfterBulkDestroy
  static auditingBulkDestroy(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_DELETED,
      '@app/business-partner-portal/purchase-invoice-position/infrastructure/sequelize/business-partner-portal-sequelize-purchase-invoice-position.model',
      'BusinessPartnerPortalPurchaseInvoicePositionModel',
    );
  }

  @AfterRestore
  static auditingRestore(
    instance: BusinessPartnerPortalPurchaseInvoicePositionModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.RESTORED,
      '@app/business-partner-portal/purchase-invoice-position/infrastructure/sequelize/business-partner-portal-sequelize-purchase-invoice-position.model',
      'BusinessPartnerPortalPurchaseInvoicePositionModel',
    );
  }

  @AfterBulkRestore
  static auditingBulkRestore(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_RESTORED,
      '@app/business-partner-portal/purchase-invoice-position/infrastructure/sequelize/business-partner-portal-sequelize-purchase-invoice-position.model',
      'BusinessPartnerPortalPurchaseInvoicePositionModel',
    );
  }

  @AfterUpsert
  static auditingUpsert(
    instance: BusinessPartnerPortalPurchaseInvoicePositionModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.UPSERTED,
      '@app/business-partner-portal/purchase-invoice-position/infrastructure/sequelize/business-partner-portal-sequelize-purchase-invoice-position.model',
      'BusinessPartnerPortalPurchaseInvoicePositionModel',
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

  @ForeignKey(() => BusinessPartnerPortalPurchaseInvoiceHeaderModel)
  @Column({
    field: 'purchaseInvoiceHeaderId',
    allowNull: false,
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
    field: 'positionNumber',
    allowNull: false,
    type: DataTypes.SMALLINT,
  })
  positionNumber: number;

  @Column({
    field: 'description',
    allowNull: false,
    type: DataTypes.STRING(510),
  })
  description: string;

  @Column({
    field: 'productCode',
    allowNull: true,
    type: DataTypes.STRING(64),
  })
  productCode: string;

  @Column({
    field: 'quantity',
    allowNull: false,
    type: DataTypes.DECIMAL(10, 4),
    defaultValue: 1,
  })
  quantity: number;

  @Column({
    field: 'unitPrice',
    allowNull: false,
    type: DataTypes.DECIMAL(12, 2),
    defaultValue: 0,
  })
  unitPrice: number;

  @Column({
    field: 'discountPercent',
    allowNull: false,
    type: DataTypes.DECIMAL(5, 2),
    defaultValue: 0,
  })
  discountPercent: number;

  @Column({
    field: 'discountAmount',
    allowNull: false,
    type: DataTypes.DECIMAL(12, 2),
    defaultValue: 0,
  })
  discountAmount: number;

  @Column({
    field: 'taxPercent',
    allowNull: false,
    type: DataTypes.DECIMAL(5, 2),
    defaultValue: 0,
  })
  taxPercent: number;

  @Column({
    field: 'taxAmount',
    allowNull: false,
    type: DataTypes.DECIMAL(12, 2),
    defaultValue: 0,
  })
  taxAmount: number;

  @Column({
    field: 'subtotal',
    allowNull: false,
    type: DataTypes.DECIMAL(12, 2),
    defaultValue: 0,
  })
  subtotal: number;

  @Column({
    field: 'positionTotal',
    allowNull: false,
    type: DataTypes.DECIMAL(12, 2),
    defaultValue: 0,
  })
  positionTotal: number;

  @Column({
    field: 'expenseCategory',
    allowNull: true,
    type: DataTypes.STRING(128),
  })
  expenseCategory: string;

  @Column({
    field: 'notes',
    allowNull: true,
    type: DataTypes.TEXT,
  })
  notes: string;

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
