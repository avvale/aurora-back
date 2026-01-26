/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartnerModel } from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalSalesInvoicePositionModel } from '@app/business-partner-portal/sales-invoice-position';
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
  modelName: 'BusinessPartnerPortalSalesInvoiceHeader',
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
      name: 'bpp_sales_inv_hdr_inv_number',
    },
    {
      fields: ['externalId'],
      unique: false,
    },
    {
      fields: ['businessPartnerId'],
      unique: false,
      name: 'bpp_sales_inv_hdr_bp_id',
    },
    {
      fields: ['invoiceDate'],
      unique: false,
      name: 'bpp_sales_inv_hdr_inv_date',
    },
    {
      fields: ['dueDate'],
      unique: false,
    },
    {
      fields: ['status'],
      unique: false,
    },
    {
      fields: ['totalAmount'],
      unique: false,
      name: 'bpp_sales_inv_hdr_total_amount',
    },
  ],
})
export class BusinessPartnerPortalSalesInvoiceHeaderModel extends Model<BusinessPartnerPortalSalesInvoiceHeaderModel> {
  @AfterCreate
  static auditingCreate(
    instance: BusinessPartnerPortalSalesInvoiceHeaderModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.CREATED,
      '@app/business-partner-portal/sales-invoice-header/infrastructure/sequelize/business-partner-portal-sequelize-sales-invoice-header.model',
      'BusinessPartnerPortalSalesInvoiceHeaderModel',
    );
  }

  @AfterBulkCreate
  static auditingBulkCreate(
    instance: BusinessPartnerPortalSalesInvoiceHeaderModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.BULK_CREATED,
      '@app/business-partner-portal/sales-invoice-header/infrastructure/sequelize/business-partner-portal-sequelize-sales-invoice-header.model',
      'BusinessPartnerPortalSalesInvoiceHeaderModel',
    );
  }

  @AfterUpdate
  static auditingUpdate(
    instance: BusinessPartnerPortalSalesInvoiceHeaderModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.UPDATED,
      '@app/business-partner-portal/sales-invoice-header/infrastructure/sequelize/business-partner-portal-sequelize-sales-invoice-header.model',
      'BusinessPartnerPortalSalesInvoiceHeaderModel',
    );
  }

  @AfterBulkUpdate
  static auditingBulkUpdate(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_UPDATED,
      '@app/business-partner-portal/sales-invoice-header/infrastructure/sequelize/business-partner-portal-sequelize-sales-invoice-header.model',
      'BusinessPartnerPortalSalesInvoiceHeaderModel',
    );
  }

  @AfterDestroy
  static auditingDestroy(
    instance: BusinessPartnerPortalSalesInvoiceHeaderModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.DELETED,
      '@app/business-partner-portal/sales-invoice-header/infrastructure/sequelize/business-partner-portal-sequelize-sales-invoice-header.model',
      'BusinessPartnerPortalSalesInvoiceHeaderModel',
    );
  }

  @AfterBulkDestroy
  static auditingBulkDestroy(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_DELETED,
      '@app/business-partner-portal/sales-invoice-header/infrastructure/sequelize/business-partner-portal-sequelize-sales-invoice-header.model',
      'BusinessPartnerPortalSalesInvoiceHeaderModel',
    );
  }

  @AfterRestore
  static auditingRestore(
    instance: BusinessPartnerPortalSalesInvoiceHeaderModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.RESTORED,
      '@app/business-partner-portal/sales-invoice-header/infrastructure/sequelize/business-partner-portal-sequelize-sales-invoice-header.model',
      'BusinessPartnerPortalSalesInvoiceHeaderModel',
    );
  }

  @AfterBulkRestore
  static auditingBulkRestore(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_RESTORED,
      '@app/business-partner-portal/sales-invoice-header/infrastructure/sequelize/business-partner-portal-sequelize-sales-invoice-header.model',
      'BusinessPartnerPortalSalesInvoiceHeaderModel',
    );
  }

  @AfterUpsert
  static auditingUpsert(
    instance: BusinessPartnerPortalSalesInvoiceHeaderModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.UPSERTED,
      '@app/business-partner-portal/sales-invoice-header/infrastructure/sequelize/business-partner-portal-sequelize-sales-invoice-header.model',
      'BusinessPartnerPortalSalesInvoiceHeaderModel',
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
      'SENT',
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
    field: 'customerNotes',
    allowNull: true,
    type: DataTypes.TEXT,
  })
  customerNotes: string;

  @HasMany(() => BusinessPartnerPortalSalesInvoicePositionModel, {
    foreignKey: 'salesInvoiceHeaderId',
  })
  positions: BusinessPartnerPortalSalesInvoicePositionModel[];

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
