/* eslint-disable indent */
/* eslint-disable key-spacing */
import { AuditingSideEffectEvent, SequelizeAuditingAgent } from '@aurorajs.dev/core';
import { DataTypes } from 'sequelize';
import { AfterBulkCreate, AfterBulkDestroy, AfterBulkRestore, AfterBulkUpdate, AfterCreate, AfterDestroy, AfterRestore, AfterUpdate, AfterUpsert, Column, ForeignKey, Model, Table } from 'sequelize-typescript';

@Table({
    modelName: 'NotificationInboxSetting',
    freezeTableName: true,
    timestamps: false,
    indexes: [
		{
			fields: ['accountId'],
			unique: true,
		},

    ],
})
export class NotificationInboxSettingModel extends Model<NotificationInboxSettingModel>
{
    @AfterCreate
    static auditingCreate(instance: NotificationInboxSettingModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.CREATED,
            '@app/notification/inbox-setting/infrastructure/sequelize/notification-sequelize-inbox-setting.model',
            'NotificationInboxSettingModel',
        );
    }

    @AfterBulkCreate
    static auditingBulkCreate(instance: NotificationInboxSettingModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.BULK_CREATED,
            '@app/notification/inbox-setting/infrastructure/sequelize/notification-sequelize-inbox-setting.model',
            'NotificationInboxSettingModel',
        );
    }

    @AfterUpdate
    static auditingUpdate(instance: NotificationInboxSettingModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.UPDATED,
            '@app/notification/inbox-setting/infrastructure/sequelize/notification-sequelize-inbox-setting.model',
            'NotificationInboxSettingModel',
        );
    }

    @AfterBulkUpdate
    static auditingBulkUpdate(options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            null,
            options,
            AuditingSideEffectEvent.BULK_UPDATED,
            '@app/notification/inbox-setting/infrastructure/sequelize/notification-sequelize-inbox-setting.model',
            'NotificationInboxSettingModel',
        );
    }

    @AfterDestroy
    static auditingDestroy(instance: NotificationInboxSettingModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.DELETED,
            '@app/notification/inbox-setting/infrastructure/sequelize/notification-sequelize-inbox-setting.model',
            'NotificationInboxSettingModel',
        );
    }

    @AfterBulkDestroy
    static auditingBulkDestroy(options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            null,
            options,
            AuditingSideEffectEvent.BULK_DELETED,
            '@app/notification/inbox-setting/infrastructure/sequelize/notification-sequelize-inbox-setting.model',
            'NotificationInboxSettingModel',
        );
    }

    @AfterRestore
    static auditingRestore(instance: NotificationInboxSettingModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.RESTORED,
            '@app/notification/inbox-setting/infrastructure/sequelize/notification-sequelize-inbox-setting.model',
            'NotificationInboxSettingModel',
        );
    }

    @AfterBulkRestore
    static auditingBulkRestore(options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            null,
            options,
            AuditingSideEffectEvent.BULK_RESTORED,
            '@app/notification/inbox-setting/infrastructure/sequelize/notification-sequelize-inbox-setting.model',
            'NotificationInboxSettingModel',
        );
    }

    @AfterUpsert
    static auditingUpsert(instance: NotificationInboxSettingModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.UPSERTED,
            '@app/notification/inbox-setting/infrastructure/sequelize/notification-sequelize-inbox-setting.model',
            'NotificationInboxSettingModel',
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
        field: 'accountId',
        allowNull: false,
        type: DataTypes.UUID,
    })
    accountId: string;

    @Column({
        field: 'sort',
        allowNull: false,
        type: DataTypes.INTEGER,
    })
    sort: number;

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
