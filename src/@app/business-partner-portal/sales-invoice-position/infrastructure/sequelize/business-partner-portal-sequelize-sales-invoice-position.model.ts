/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalSalesInvoiceHeaderModel } from '@app/business-partner-portal/sales-invoice-header';
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
  modelName: 'BusinessPartnerPortalSalesInvoicePosition',
  freezeTableName: true,
  timestamps: false,
  indexes: [
    {
      fields: ['rowId'],
      unique: true,
    },
    {
      fields: ['salesInvoiceHeaderId'],
      unique: false,
      name: 'bpp_sales_inv_pos_hdr_id',
    },
    {
      fields: ['productCode'],
      unique: false,
      name: 'bpp_sales_inv_pos_prod_code',
    },
  ],
})
export class BusinessPartnerPortalSalesInvoicePositionModel extends Model<BusinessPartnerPortalSalesInvoicePositionModel> {
  @AfterCreate
  static auditingCreate(
    instance: BusinessPartnerPortalSalesInvoicePositionModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.CREATED,
      '@app/business-partner-portal/sales-invoice-position/infrastructure/sequelize/business-partner-portal-sequelize-sales-invoice-position.model',
      'BusinessPartnerPortalSalesInvoicePositionModel',
    );
  }

  @AfterBulkCreate
  static auditingBulkCreate(
    instance: BusinessPartnerPortalSalesInvoicePositionModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.BULK_CREATED,
      '@app/business-partner-portal/sales-invoice-position/infrastructure/sequelize/business-partner-portal-sequelize-sales-invoice-position.model',
      'BusinessPartnerPortalSalesInvoicePositionModel',
    );
  }

  @AfterUpdate
  static auditingUpdate(
    instance: BusinessPartnerPortalSalesInvoicePositionModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.UPDATED,
      '@app/business-partner-portal/sales-invoice-position/infrastructure/sequelize/business-partner-portal-sequelize-sales-invoice-position.model',
      'BusinessPartnerPortalSalesInvoicePositionModel',
    );
  }

  @AfterBulkUpdate
  static auditingBulkUpdate(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_UPDATED,
      '@app/business-partner-portal/sales-invoice-position/infrastructure/sequelize/business-partner-portal-sequelize-sales-invoice-position.model',
      'BusinessPartnerPortalSalesInvoicePositionModel',
    );
  }

  @AfterDestroy
  static auditingDestroy(
    instance: BusinessPartnerPortalSalesInvoicePositionModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.DELETED,
      '@app/business-partner-portal/sales-invoice-position/infrastructure/sequelize/business-partner-portal-sequelize-sales-invoice-position.model',
      'BusinessPartnerPortalSalesInvoicePositionModel',
    );
  }

  @AfterBulkDestroy
  static auditingBulkDestroy(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_DELETED,
      '@app/business-partner-portal/sales-invoice-position/infrastructure/sequelize/business-partner-portal-sequelize-sales-invoice-position.model',
      'BusinessPartnerPortalSalesInvoicePositionModel',
    );
  }

  @AfterRestore
  static auditingRestore(
    instance: BusinessPartnerPortalSalesInvoicePositionModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.RESTORED,
      '@app/business-partner-portal/sales-invoice-position/infrastructure/sequelize/business-partner-portal-sequelize-sales-invoice-position.model',
      'BusinessPartnerPortalSalesInvoicePositionModel',
    );
  }

  @AfterBulkRestore
  static auditingBulkRestore(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_RESTORED,
      '@app/business-partner-portal/sales-invoice-position/infrastructure/sequelize/business-partner-portal-sequelize-sales-invoice-position.model',
      'BusinessPartnerPortalSalesInvoicePositionModel',
    );
  }

  @AfterUpsert
  static auditingUpsert(
    instance: BusinessPartnerPortalSalesInvoicePositionModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.UPSERTED,
      '@app/business-partner-portal/sales-invoice-position/infrastructure/sequelize/business-partner-portal-sequelize-sales-invoice-position.model',
      'BusinessPartnerPortalSalesInvoicePositionModel',
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

  @ForeignKey(() => BusinessPartnerPortalSalesInvoiceHeaderModel)
  @Column({
    field: 'salesInvoiceHeaderId',
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'NO ACTION',
  })
  salesInvoiceHeaderId: string;

  @BelongsTo(() => BusinessPartnerPortalSalesInvoiceHeaderModel, {
    foreignKey: 'salesInvoiceHeaderId',
  })
  salesInvoiceHeader: BusinessPartnerPortalSalesInvoiceHeaderModel;

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
