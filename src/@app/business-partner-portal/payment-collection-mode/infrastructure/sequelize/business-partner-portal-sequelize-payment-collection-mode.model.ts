/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartnerModel } from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalPaymentModeModel } from '@app/business-partner-portal/payment-mode';
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
  modelName: 'BusinessPartnerPortalPaymentCollectionMode',
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
    },
    {
      fields: ['paymentModeId'],
      unique: false,
    },
  ],
})
export class BusinessPartnerPortalPaymentCollectionModeModel extends Model<BusinessPartnerPortalPaymentCollectionModeModel> {
  @AfterCreate
  static auditingCreate(
    instance: BusinessPartnerPortalPaymentCollectionModeModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.CREATED,
      '@app/business-partner-portal/payment-collection-mode/infrastructure/sequelize/business-partner-portal-sequelize-payment-collection-mode.model',
      'BusinessPartnerPortalPaymentCollectionModeModel',
    );
  }

  @AfterBulkCreate
  static auditingBulkCreate(
    instance: BusinessPartnerPortalPaymentCollectionModeModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.BULK_CREATED,
      '@app/business-partner-portal/payment-collection-mode/infrastructure/sequelize/business-partner-portal-sequelize-payment-collection-mode.model',
      'BusinessPartnerPortalPaymentCollectionModeModel',
    );
  }

  @AfterUpdate
  static auditingUpdate(
    instance: BusinessPartnerPortalPaymentCollectionModeModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.UPDATED,
      '@app/business-partner-portal/payment-collection-mode/infrastructure/sequelize/business-partner-portal-sequelize-payment-collection-mode.model',
      'BusinessPartnerPortalPaymentCollectionModeModel',
    );
  }

  @AfterBulkUpdate
  static auditingBulkUpdate(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_UPDATED,
      '@app/business-partner-portal/payment-collection-mode/infrastructure/sequelize/business-partner-portal-sequelize-payment-collection-mode.model',
      'BusinessPartnerPortalPaymentCollectionModeModel',
    );
  }

  @AfterDestroy
  static auditingDestroy(
    instance: BusinessPartnerPortalPaymentCollectionModeModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.DELETED,
      '@app/business-partner-portal/payment-collection-mode/infrastructure/sequelize/business-partner-portal-sequelize-payment-collection-mode.model',
      'BusinessPartnerPortalPaymentCollectionModeModel',
    );
  }

  @AfterBulkDestroy
  static auditingBulkDestroy(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_DELETED,
      '@app/business-partner-portal/payment-collection-mode/infrastructure/sequelize/business-partner-portal-sequelize-payment-collection-mode.model',
      'BusinessPartnerPortalPaymentCollectionModeModel',
    );
  }

  @AfterRestore
  static auditingRestore(
    instance: BusinessPartnerPortalPaymentCollectionModeModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.RESTORED,
      '@app/business-partner-portal/payment-collection-mode/infrastructure/sequelize/business-partner-portal-sequelize-payment-collection-mode.model',
      'BusinessPartnerPortalPaymentCollectionModeModel',
    );
  }

  @AfterBulkRestore
  static auditingBulkRestore(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_RESTORED,
      '@app/business-partner-portal/payment-collection-mode/infrastructure/sequelize/business-partner-portal-sequelize-payment-collection-mode.model',
      'BusinessPartnerPortalPaymentCollectionModeModel',
    );
  }

  @AfterUpsert
  static auditingUpsert(
    instance: BusinessPartnerPortalPaymentCollectionModeModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.UPSERTED,
      '@app/business-partner-portal/payment-collection-mode/infrastructure/sequelize/business-partner-portal-sequelize-payment-collection-mode.model',
      'BusinessPartnerPortalPaymentCollectionModeModel',
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

  @ForeignKey(() => BusinessPartnerPortalPaymentModeModel)
  @Column({
    field: 'paymentModeId',
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'NO ACTION',
  })
  paymentModeId: string;

  @BelongsTo(() => BusinessPartnerPortalPaymentModeModel, {
    foreignKey: 'paymentModeId',
  })
  paymentMode: BusinessPartnerPortalPaymentModeModel;

  @Column({
    field: 'label',
    allowNull: true,
    type: DataTypes.STRING(128),
  })
  label: string;

  @Column({
    field: 'accountNumber',
    allowNull: true,
    type: DataTypes.STRING(128),
  })
  accountNumber: string;

  @Column({
    field: 'accountHolderName',
    allowNull: true,
    type: DataTypes.STRING(128),
  })
  accountHolderName: string;

  @Column({
    field: 'bankName',
    allowNull: true,
    type: DataTypes.STRING(128),
  })
  bankName: string;

  @Column({
    field: 'routingNumber',
    allowNull: true,
    type: DataTypes.STRING(64),
  })
  routingNumber: string;

  @Column({
    field: 'iban',
    allowNull: true,
    type: DataTypes.STRING(34),
  })
  iban: string;

  @Column({
    field: 'swiftCode',
    allowNull: true,
    type: DataTypes.STRING(11),
  })
  swiftCode: string;

  @Column({
    field: 'currencyCode',
    allowNull: true,
    type: DataTypes.CHAR(3),
  })
  currencyCode: string;

  @Column({
    field: 'expirationDate',
    allowNull: true,
    type: DataTypes.DATE,
  })
  expirationDate: string;

  @Column({
    field: 'isPrimary',
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  })
  isPrimary: boolean;

  @Column({
    field: 'isActive',
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  })
  isActive: boolean;

  @Column({
    field: 'notes',
    allowNull: true,
    type: DataTypes.TEXT,
  })
  notes: string;

  @Column({
    field: 'lastUsedAt',
    allowNull: true,
    type: DataTypes.DATE,
  })
  lastUsedAt: string;

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
