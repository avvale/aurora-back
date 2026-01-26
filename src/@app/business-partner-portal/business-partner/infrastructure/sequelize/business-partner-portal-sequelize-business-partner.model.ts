/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { BusinessPartnerPortalPartnerAddressModel } from '@app/business-partner-portal/partner-address';
import { BusinessPartnerPortalPartnerContactModel } from '@app/business-partner-portal/partner-contact';
import { BusinessPartnerPortalPaymentCollectionModeModel } from '@app/business-partner-portal/payment-collection-mode';
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
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({
  modelName: 'BusinessPartnerPortalBusinessPartner',
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
    {
      fields: ['type'],
      unique: false,
      using: 'GIN',
    },
    {
      fields: ['tin'],
      unique: false,
    },
    {
      fields: ['email'],
      unique: false,
    },
  ],
})
export class BusinessPartnerPortalBusinessPartnerModel extends Model<BusinessPartnerPortalBusinessPartnerModel> {
  @AfterCreate
  static auditingCreate(
    instance: BusinessPartnerPortalBusinessPartnerModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.CREATED,
      '@app/business-partner-portal/business-partner/infrastructure/sequelize/business-partner-portal-sequelize-business-partner.model',
      'BusinessPartnerPortalBusinessPartnerModel',
    );
  }

  @AfterBulkCreate
  static auditingBulkCreate(
    instance: BusinessPartnerPortalBusinessPartnerModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.BULK_CREATED,
      '@app/business-partner-portal/business-partner/infrastructure/sequelize/business-partner-portal-sequelize-business-partner.model',
      'BusinessPartnerPortalBusinessPartnerModel',
    );
  }

  @AfterUpdate
  static auditingUpdate(
    instance: BusinessPartnerPortalBusinessPartnerModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.UPDATED,
      '@app/business-partner-portal/business-partner/infrastructure/sequelize/business-partner-portal-sequelize-business-partner.model',
      'BusinessPartnerPortalBusinessPartnerModel',
    );
  }

  @AfterBulkUpdate
  static auditingBulkUpdate(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_UPDATED,
      '@app/business-partner-portal/business-partner/infrastructure/sequelize/business-partner-portal-sequelize-business-partner.model',
      'BusinessPartnerPortalBusinessPartnerModel',
    );
  }

  @AfterDestroy
  static auditingDestroy(
    instance: BusinessPartnerPortalBusinessPartnerModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.DELETED,
      '@app/business-partner-portal/business-partner/infrastructure/sequelize/business-partner-portal-sequelize-business-partner.model',
      'BusinessPartnerPortalBusinessPartnerModel',
    );
  }

  @AfterBulkDestroy
  static auditingBulkDestroy(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_DELETED,
      '@app/business-partner-portal/business-partner/infrastructure/sequelize/business-partner-portal-sequelize-business-partner.model',
      'BusinessPartnerPortalBusinessPartnerModel',
    );
  }

  @AfterRestore
  static auditingRestore(
    instance: BusinessPartnerPortalBusinessPartnerModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.RESTORED,
      '@app/business-partner-portal/business-partner/infrastructure/sequelize/business-partner-portal-sequelize-business-partner.model',
      'BusinessPartnerPortalBusinessPartnerModel',
    );
  }

  @AfterBulkRestore
  static auditingBulkRestore(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_RESTORED,
      '@app/business-partner-portal/business-partner/infrastructure/sequelize/business-partner-portal-sequelize-business-partner.model',
      'BusinessPartnerPortalBusinessPartnerModel',
    );
  }

  @AfterUpsert
  static auditingUpsert(
    instance: BusinessPartnerPortalBusinessPartnerModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.UPSERTED,
      '@app/business-partner-portal/business-partner/infrastructure/sequelize/business-partner-portal-sequelize-business-partner.model',
      'BusinessPartnerPortalBusinessPartnerModel',
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
    field: 'type',
    allowNull: false,
    type: DataTypes.ARRAY(
      DataTypes.ENUM(
        'CUSTOMER',
        'SUPPLIER',
        'VENDOR',
        'AFFILIATE',
        'PARTNER',
        'OTHER',
      ),
    ),
    defaultValue: ['OTHER'],
  })
  type: string[];

  @Column({
    field: 'name',
    allowNull: false,
    type: DataTypes.STRING(128),
  })
  name: string;

  @Column({
    field: 'tin',
    allowNull: true,
    type: DataTypes.STRING(64),
  })
  tin: string;

  @Column({
    field: 'email',
    allowNull: true,
    type: DataTypes.STRING(128),
  })
  email: string;

  @Column({
    field: 'website',
    allowNull: true,
    type: DataTypes.STRING(1022),
  })
  website: string;

  @Column({
    field: 'phone',
    allowNull: true,
    type: DataTypes.STRING(64),
  })
  phone: string;

  @Column({
    field: 'phoneCountryPrefix',
    allowNull: true,
    type: DataTypes.STRING(4),
  })
  phoneCountryPrefix: string;

  @Column({
    field: 'phoneSanitized',
    allowNull: true,
    type: DataTypes.STRING(64),
  })
  phoneSanitized: string;

  @Column({
    field: 'isActive',
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  })
  isActive: boolean;

  @HasMany(() => BusinessPartnerPortalPartnerContactModel, {
    foreignKey: 'businessPartnerId',
  })
  contacts: BusinessPartnerPortalPartnerContactModel[];

  @HasMany(() => BusinessPartnerPortalPartnerAddressModel, {
    foreignKey: 'businessPartnerId',
  })
  addresses: BusinessPartnerPortalPartnerAddressModel[];

  @HasMany(() => BusinessPartnerPortalPaymentCollectionModeModel, {
    foreignKey: 'businessPartnerId',
  })
  paymentCollectionModes: BusinessPartnerPortalPaymentCollectionModeModel[];

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
