/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
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
  Column,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({
  modelName: 'BusinessPartnerPortalPaymentMode',
  freezeTableName: true,
  timestamps: false,
  indexes: [
    {
      fields: ['rowId'],
      unique: true,
    },
    {
      fields: ['externalId'],
      unique: false,
    },
    {
      fields: ['code'],
      unique: true,
    },
  ],
})
export class BusinessPartnerPortalPaymentModeModel extends Model<BusinessPartnerPortalPaymentModeModel> {
  @AfterCreate
  static auditingCreate(
    instance: BusinessPartnerPortalPaymentModeModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.CREATED,
      '@app/business-partner-portal/payment-mode/infrastructure/sequelize/business-partner-portal-sequelize-payment-mode.model',
      'BusinessPartnerPortalPaymentModeModel',
    );
  }

  @AfterBulkCreate
  static auditingBulkCreate(
    instance: BusinessPartnerPortalPaymentModeModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.BULK_CREATED,
      '@app/business-partner-portal/payment-mode/infrastructure/sequelize/business-partner-portal-sequelize-payment-mode.model',
      'BusinessPartnerPortalPaymentModeModel',
    );
  }

  @AfterUpdate
  static auditingUpdate(
    instance: BusinessPartnerPortalPaymentModeModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.UPDATED,
      '@app/business-partner-portal/payment-mode/infrastructure/sequelize/business-partner-portal-sequelize-payment-mode.model',
      'BusinessPartnerPortalPaymentModeModel',
    );
  }

  @AfterBulkUpdate
  static auditingBulkUpdate(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_UPDATED,
      '@app/business-partner-portal/payment-mode/infrastructure/sequelize/business-partner-portal-sequelize-payment-mode.model',
      'BusinessPartnerPortalPaymentModeModel',
    );
  }

  @AfterDestroy
  static auditingDestroy(
    instance: BusinessPartnerPortalPaymentModeModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.DELETED,
      '@app/business-partner-portal/payment-mode/infrastructure/sequelize/business-partner-portal-sequelize-payment-mode.model',
      'BusinessPartnerPortalPaymentModeModel',
    );
  }

  @AfterBulkDestroy
  static auditingBulkDestroy(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_DELETED,
      '@app/business-partner-portal/payment-mode/infrastructure/sequelize/business-partner-portal-sequelize-payment-mode.model',
      'BusinessPartnerPortalPaymentModeModel',
    );
  }

  @AfterRestore
  static auditingRestore(
    instance: BusinessPartnerPortalPaymentModeModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.RESTORED,
      '@app/business-partner-portal/payment-mode/infrastructure/sequelize/business-partner-portal-sequelize-payment-mode.model',
      'BusinessPartnerPortalPaymentModeModel',
    );
  }

  @AfterBulkRestore
  static auditingBulkRestore(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_RESTORED,
      '@app/business-partner-portal/payment-mode/infrastructure/sequelize/business-partner-portal-sequelize-payment-mode.model',
      'BusinessPartnerPortalPaymentModeModel',
    );
  }

  @AfterUpsert
  static auditingUpsert(
    instance: BusinessPartnerPortalPaymentModeModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.UPSERTED,
      '@app/business-partner-portal/payment-mode/infrastructure/sequelize/business-partner-portal-sequelize-payment-mode.model',
      'BusinessPartnerPortalPaymentModeModel',
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
    field: 'externalId',
    allowNull: true,
    type: DataTypes.STRING(64),
  })
  externalId: string;

  @Column({
    field: 'code',
    allowNull: true,
    type: DataTypes.STRING(64),
  })
  code: string;

  @Column({
    field: 'name',
    allowNull: false,
    type: DataTypes.STRING(128),
  })
  name: string;

  @Column({
    field: 'description',
    allowNull: true,
    type: DataTypes.TEXT,
  })
  description: string;

  @Column({
    field: 'type',
    allowNull: false,
    type: DataTypes.ENUM(
      'ELECTRONIC',
      'CASH',
      'CHECK',
      'CARD',
      'WIRE',
      'DIRECT_DEBIT',
      'DIGITAL_WALLET',
      'OTHER',
    ),
    defaultValue: 'ELECTRONIC',
  })
  type: string;

  @Column({
    field: 'isAccountNumberRequired',
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  })
  isAccountNumberRequired: boolean;

  @Column({
    field: 'isRoutingInfoRequired',
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  })
  isRoutingInfoRequired: boolean;

  @Column({
    field: 'isRecurringSupported',
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  })
  isRecurringSupported: boolean;

  @Column({
    field: 'sort',
    allowNull: true,
    type: DataTypes.SMALLINT,
  })
  sort: number;

  @Column({
    field: 'isActive',
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  })
  isActive: boolean;

  @Column({
    field: 'meta',
    allowNull: true,
    type: DataTypes.JSON,
  })
  meta: any;

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
