/* eslint-disable indent */
/* eslint-disable key-spacing */
import { AuditingSideEffectEvent, SequelizeAuditingAgent } from '@aurorajs.dev/core';
import { DataTypes } from 'sequelize';
import { AfterBulkCreate, AfterBulkDestroy, AfterBulkRestore, AfterBulkUpdate, AfterCreate, AfterDestroy, AfterRestore, AfterUpdate, AfterUpsert, Column, ForeignKey, Model, Table } from 'sequelize-typescript';

@Table({
    modelName: 'NotificationOutBoxNotification',
    freezeTableName: true,
    timestamps: false,
    indexes: [
		{
			fields: ['tenantId'],
			unique: false,
		},
		{
			fields: ['accountIds'],
			unique: false,
		},
		{
			fields: ['tenantIds'],
			unique: false,
		},
		{
			fields: ['scopes'],
			unique: false,
		},

    ],
})
export class NotificationOutBoxNotificationModel extends Model<NotificationOutBoxNotificationModel>
{
    @AfterCreate
    static auditingCreate(instance: NotificationOutBoxNotificationModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.CREATED,
            '@app/notification/out-box-notification/infrastructure/sequelize/notification-sequelize-out-box-notification.model',
            'NotificationOutBoxNotificationModel',
        );
    }

    @AfterBulkCreate
    static auditingBulkCreate(instance: NotificationOutBoxNotificationModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.BULK_CREATED,
            '@app/notification/out-box-notification/infrastructure/sequelize/notification-sequelize-out-box-notification.model',
            'NotificationOutBoxNotificationModel',
        );
    }

    @AfterUpdate
    static auditingUpdate(instance: NotificationOutBoxNotificationModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.UPDATED,
            '@app/notification/out-box-notification/infrastructure/sequelize/notification-sequelize-out-box-notification.model',
            'NotificationOutBoxNotificationModel',
        );
    }

    @AfterBulkUpdate
    static auditingBulkUpdate(options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            null,
            options,
            AuditingSideEffectEvent.BULK_UPDATED,
            '@app/notification/out-box-notification/infrastructure/sequelize/notification-sequelize-out-box-notification.model',
            'NotificationOutBoxNotificationModel',
        );
    }

    @AfterDestroy
    static auditingDestroy(instance: NotificationOutBoxNotificationModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.DELETED,
            '@app/notification/out-box-notification/infrastructure/sequelize/notification-sequelize-out-box-notification.model',
            'NotificationOutBoxNotificationModel',
        );
    }

    @AfterBulkDestroy
    static auditingBulkDestroy(options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            null,
            options,
            AuditingSideEffectEvent.BULK_DELETED,
            '@app/notification/out-box-notification/infrastructure/sequelize/notification-sequelize-out-box-notification.model',
            'NotificationOutBoxNotificationModel',
        );
    }

    @AfterRestore
    static auditingRestore(instance: NotificationOutBoxNotificationModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.RESTORED,
            '@app/notification/out-box-notification/infrastructure/sequelize/notification-sequelize-out-box-notification.model',
            'NotificationOutBoxNotificationModel',
        );
    }

    @AfterBulkRestore
    static auditingBulkRestore(options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            null,
            options,
            AuditingSideEffectEvent.BULK_RESTORED,
            '@app/notification/out-box-notification/infrastructure/sequelize/notification-sequelize-out-box-notification.model',
            'NotificationOutBoxNotificationModel',
        );
    }

    @AfterUpsert
    static auditingUpsert(instance: NotificationOutBoxNotificationModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.UPSERTED,
            '@app/notification/out-box-notification/infrastructure/sequelize/notification-sequelize-out-box-notification.model',
            'NotificationOutBoxNotificationModel',
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
        field: 'sort',
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    })
    sort: number;

    @Column({
        field: 'tenantId',
        allowNull: true,
        type: DataTypes.UUID,
    })
    tenantId: string;

    @Column({
        field: 'accountIds',
        allowNull: true,
        type: DataTypes.ARRAY(DataTypes.UUID),
    })
    accountIds: string[];

    @Column({
        field: 'accountTenantOperator',
        allowNull: true,
        type: DataTypes.ENUM('AND','OR'),
    })
    accountTenantOperator: string;

    @Column({
        field: 'tenantIds',
        allowNull: true,
        type: DataTypes.ARRAY(DataTypes.UUID),
    })
    tenantIds: string[];

    @Column({
        field: 'scopes',
        allowNull: true,
        type: DataTypes.ARRAY(DataTypes.STRING()),
    })
    scopes: string[];

    @Column({
        field: 'isImportant',
        allowNull: false,
        type: DataTypes.BOOLEAN,
    })
    isImportant: boolean;

    @Column({
        field: 'subject',
        allowNull: false,
        type: DataTypes.STRING(255),
    })
    subject: string;

    @Column({
        field: 'body',
        allowNull: false,
        type: DataTypes.TEXT,
    })
    body: string;

    @Column({
        field: 'attachments',
        allowNull: true,
        type: DataTypes.JSON,
    })
    attachments: any;

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
