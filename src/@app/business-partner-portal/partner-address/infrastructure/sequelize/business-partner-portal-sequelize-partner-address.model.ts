/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartnerModel } from '@app/business-partner-portal/business-partner';
import { CommonAdministrativeAreaLevel1Model } from '@app/common/administrative-area-level-1';
import { CommonAdministrativeAreaLevel2Model } from '@app/common/administrative-area-level-2';
import { CommonAdministrativeAreaLevel3Model } from '@app/common/administrative-area-level-3';
import { CommonCountryModel } from '@app/common/country';
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
  modelName: 'BusinessPartnerPortalPartnerAddress',
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
      fields: ['countryId'],
      unique: false,
    },
    {
      fields: ['administrativeAreaLevel1Id'],
      unique: false,
    },
    {
      fields: ['administrativeAreaLevel2Id'],
      unique: false,
    },
    {
      fields: ['administrativeAreaLevel3Id'],
      unique: false,
    },
  ],
})
export class BusinessPartnerPortalPartnerAddressModel extends Model<BusinessPartnerPortalPartnerAddressModel> {
  @AfterCreate
  static auditingCreate(
    instance: BusinessPartnerPortalPartnerAddressModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.CREATED,
      '@app/business-partner-portal/partner-address/infrastructure/sequelize/business-partner-portal-sequelize-partner-address.model',
      'BusinessPartnerPortalPartnerAddressModel',
    );
  }

  @AfterBulkCreate
  static auditingBulkCreate(
    instance: BusinessPartnerPortalPartnerAddressModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.BULK_CREATED,
      '@app/business-partner-portal/partner-address/infrastructure/sequelize/business-partner-portal-sequelize-partner-address.model',
      'BusinessPartnerPortalPartnerAddressModel',
    );
  }

  @AfterUpdate
  static auditingUpdate(
    instance: BusinessPartnerPortalPartnerAddressModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.UPDATED,
      '@app/business-partner-portal/partner-address/infrastructure/sequelize/business-partner-portal-sequelize-partner-address.model',
      'BusinessPartnerPortalPartnerAddressModel',
    );
  }

  @AfterBulkUpdate
  static auditingBulkUpdate(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_UPDATED,
      '@app/business-partner-portal/partner-address/infrastructure/sequelize/business-partner-portal-sequelize-partner-address.model',
      'BusinessPartnerPortalPartnerAddressModel',
    );
  }

  @AfterDestroy
  static auditingDestroy(
    instance: BusinessPartnerPortalPartnerAddressModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.DELETED,
      '@app/business-partner-portal/partner-address/infrastructure/sequelize/business-partner-portal-sequelize-partner-address.model',
      'BusinessPartnerPortalPartnerAddressModel',
    );
  }

  @AfterBulkDestroy
  static auditingBulkDestroy(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_DELETED,
      '@app/business-partner-portal/partner-address/infrastructure/sequelize/business-partner-portal-sequelize-partner-address.model',
      'BusinessPartnerPortalPartnerAddressModel',
    );
  }

  @AfterRestore
  static auditingRestore(
    instance: BusinessPartnerPortalPartnerAddressModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.RESTORED,
      '@app/business-partner-portal/partner-address/infrastructure/sequelize/business-partner-portal-sequelize-partner-address.model',
      'BusinessPartnerPortalPartnerAddressModel',
    );
  }

  @AfterBulkRestore
  static auditingBulkRestore(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_RESTORED,
      '@app/business-partner-portal/partner-address/infrastructure/sequelize/business-partner-portal-sequelize-partner-address.model',
      'BusinessPartnerPortalPartnerAddressModel',
    );
  }

  @AfterUpsert
  static auditingUpsert(
    instance: BusinessPartnerPortalPartnerAddressModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.UPSERTED,
      '@app/business-partner-portal/partner-address/infrastructure/sequelize/business-partner-portal-sequelize-partner-address.model',
      'BusinessPartnerPortalPartnerAddressModel',
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
    field: 'type',
    allowNull: false,
    type: DataTypes.ENUM(
      'BILLING',
      'SHIPPING',
      'OFFICE',
      'WAREHOUSE',
      'HEADQUARTERS',
      'OTHER',
    ),
    defaultValue: 'OFFICE',
  })
  type: string;

  @Column({
    field: 'label',
    allowNull: true,
    type: DataTypes.STRING(128),
  })
  label: string;

  @Column({
    field: 'addressLine1',
    allowNull: false,
    type: DataTypes.STRING(255),
  })
  addressLine1: string;

  @Column({
    field: 'addressLine2',
    allowNull: true,
    type: DataTypes.STRING(255),
  })
  addressLine2: string;

  @Column({
    field: 'city',
    allowNull: false,
    type: DataTypes.STRING(128),
  })
  city: string;

  @Column({
    field: 'postalCode',
    allowNull: true,
    type: DataTypes.STRING(64),
  })
  postalCode: string;

  @ForeignKey(() => CommonCountryModel)
  @Column({
    field: 'countryId',
    allowNull: false,
    type: DataTypes.UUID,
  })
  countryId: string;

  @BelongsTo(() => CommonCountryModel, {
    constraints: false,
    foreignKey: 'countryId',
  })
  country: CommonCountryModel;

  @ForeignKey(() => CommonAdministrativeAreaLevel1Model)
  @Column({
    field: 'administrativeAreaLevel1Id',
    allowNull: true,
    type: DataTypes.UUID,
  })
  administrativeAreaLevel1Id: string;

  @BelongsTo(() => CommonAdministrativeAreaLevel1Model, {
    constraints: false,
    foreignKey: 'administrativeAreaLevel1Id',
  })
  administrativeAreaLevel1: CommonAdministrativeAreaLevel1Model;

  @ForeignKey(() => CommonAdministrativeAreaLevel2Model)
  @Column({
    field: 'administrativeAreaLevel2Id',
    allowNull: true,
    type: DataTypes.UUID,
  })
  administrativeAreaLevel2Id: string;

  @BelongsTo(() => CommonAdministrativeAreaLevel2Model, {
    constraints: false,
    foreignKey: 'administrativeAreaLevel2Id',
  })
  administrativeAreaLevel2: CommonAdministrativeAreaLevel2Model;

  @ForeignKey(() => CommonAdministrativeAreaLevel3Model)
  @Column({
    field: 'administrativeAreaLevel3Id',
    allowNull: true,
    type: DataTypes.UUID,
  })
  administrativeAreaLevel3Id: string;

  @BelongsTo(() => CommonAdministrativeAreaLevel3Model, {
    constraints: false,
    foreignKey: 'administrativeAreaLevel3Id',
  })
  administrativeAreaLevel3: CommonAdministrativeAreaLevel3Model;

  @Column({
    field: 'latitude',
    allowNull: true,
    type: DataTypes.DECIMAL(16, 14),
  })
  latitude: number;

  @Column({
    field: 'longitude',
    allowNull: true,
    type: DataTypes.DECIMAL(17, 14),
  })
  longitude: number;

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
