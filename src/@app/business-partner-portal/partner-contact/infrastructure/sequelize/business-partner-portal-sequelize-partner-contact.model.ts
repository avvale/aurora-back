/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartnerModel } from '@app/business-partner-portal/business-partner';
import { IamUserModel } from '@app/iam/user';
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
  modelName: 'BusinessPartnerPortalPartnerContact',
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
      name: 'bpp_partner_contact_bp_id',
    },
    {
      fields: ['lastName'],
      unique: false,
    },
    {
      fields: ['email'],
      unique: false,
    },
    {
      fields: ['userId'],
      unique: true,
    },
  ],
})
export class BusinessPartnerPortalPartnerContactModel extends Model<BusinessPartnerPortalPartnerContactModel> {
  @AfterCreate
  static auditingCreate(
    instance: BusinessPartnerPortalPartnerContactModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.CREATED,
      '@app/business-partner-portal/partner-contact/infrastructure/sequelize/business-partner-portal-sequelize-partner-contact.model',
      'BusinessPartnerPortalPartnerContactModel',
    );
  }

  @AfterBulkCreate
  static auditingBulkCreate(
    instance: BusinessPartnerPortalPartnerContactModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.BULK_CREATED,
      '@app/business-partner-portal/partner-contact/infrastructure/sequelize/business-partner-portal-sequelize-partner-contact.model',
      'BusinessPartnerPortalPartnerContactModel',
    );
  }

  @AfterUpdate
  static auditingUpdate(
    instance: BusinessPartnerPortalPartnerContactModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.UPDATED,
      '@app/business-partner-portal/partner-contact/infrastructure/sequelize/business-partner-portal-sequelize-partner-contact.model',
      'BusinessPartnerPortalPartnerContactModel',
    );
  }

  @AfterBulkUpdate
  static auditingBulkUpdate(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_UPDATED,
      '@app/business-partner-portal/partner-contact/infrastructure/sequelize/business-partner-portal-sequelize-partner-contact.model',
      'BusinessPartnerPortalPartnerContactModel',
    );
  }

  @AfterDestroy
  static auditingDestroy(
    instance: BusinessPartnerPortalPartnerContactModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.DELETED,
      '@app/business-partner-portal/partner-contact/infrastructure/sequelize/business-partner-portal-sequelize-partner-contact.model',
      'BusinessPartnerPortalPartnerContactModel',
    );
  }

  @AfterBulkDestroy
  static auditingBulkDestroy(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_DELETED,
      '@app/business-partner-portal/partner-contact/infrastructure/sequelize/business-partner-portal-sequelize-partner-contact.model',
      'BusinessPartnerPortalPartnerContactModel',
    );
  }

  @AfterRestore
  static auditingRestore(
    instance: BusinessPartnerPortalPartnerContactModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.RESTORED,
      '@app/business-partner-portal/partner-contact/infrastructure/sequelize/business-partner-portal-sequelize-partner-contact.model',
      'BusinessPartnerPortalPartnerContactModel',
    );
  }

  @AfterBulkRestore
  static auditingBulkRestore(options): void {
    SequelizeAuditingAgent.registerSideEffect(
      null,
      options,
      AuditingSideEffectEvent.BULK_RESTORED,
      '@app/business-partner-portal/partner-contact/infrastructure/sequelize/business-partner-portal-sequelize-partner-contact.model',
      'BusinessPartnerPortalPartnerContactModel',
    );
  }

  @AfterUpsert
  static auditingUpsert(
    instance: BusinessPartnerPortalPartnerContactModel,
    options,
  ): void {
    SequelizeAuditingAgent.registerSideEffect(
      instance,
      options,
      AuditingSideEffectEvent.UPSERTED,
      '@app/business-partner-portal/partner-contact/infrastructure/sequelize/business-partner-portal-sequelize-partner-contact.model',
      'BusinessPartnerPortalPartnerContactModel',
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
    field: 'firstName',
    allowNull: false,
    type: DataTypes.STRING(128),
  })
  firstName: string;

  @Column({
    field: 'lastName',
    allowNull: false,
    type: DataTypes.STRING(128),
  })
  lastName: string;

  @Column({
    field: 'position',
    allowNull: true,
    type: DataTypes.STRING(128),
  })
  position: string;

  @Column({
    field: 'department',
    allowNull: true,
    type: DataTypes.STRING(128),
  })
  department: string;

  @Column({
    field: 'email',
    allowNull: false,
    type: DataTypes.STRING(128),
  })
  email: string;

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
    field: 'mobile',
    allowNull: true,
    type: DataTypes.STRING(64),
  })
  mobile: string;

  @Column({
    field: 'mobileCountryPrefix',
    allowNull: true,
    type: DataTypes.STRING(4),
  })
  mobileCountryPrefix: string;

  @Column({
    field: 'mobileSanitized',
    allowNull: true,
    type: DataTypes.STRING(64),
  })
  mobileSanitized: string;

  @Column({
    field: 'isPrincipal',
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  })
  isPrincipal: boolean;

  @Column({
    field: 'isActive',
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  })
  isActive: boolean;

  @Column({
    field: 'isUser',
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  })
  isUser: boolean;

  @ForeignKey(() => IamUserModel)
  @Column({
    field: 'userId',
    allowNull: true,
    type: DataTypes.UUID,
  })
  userId: string;

  @BelongsTo(() => IamUserModel, {
    constraints: false,
    foreignKey: 'userId',
  })
  user: IamUserModel;

  @Column({
    field: 'preferredLanguage',
    allowNull: true,
    type: DataTypes.CHAR(2),
  })
  preferredLanguage: string;

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
