/* eslint-disable indent */
/* eslint-disable key-spacing */
import { AuditingSideEffectEvent, SequelizeAuditingAgent } from '@aurorajs.dev/core';
import { DataTypes } from 'sequelize';
import { AfterBulkCreate, AfterBulkDestroy, AfterBulkRestore, AfterBulkUpdate, AfterCreate, AfterDestroy, AfterRestore, AfterUpdate, AfterUpsert, Column, ForeignKey, Model, Table } from 'sequelize-typescript';

@Table({
    modelName: 'NotificationNotification',
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
export class NotificationNotificationModel extends Model<NotificationNotificationModel>
{
    @AfterCreate
    static auditingCreate(instance: NotificationNotificationModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.CREATED,
            '@app/notification/notification/infrastructure/sequelize/notification-sequelize-notification.model',
            'NotificationNotificationModel',
        );
    }

    @AfterBulkCreate
    static auditingBulkCreate(instance: NotificationNotificationModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.BULK_CREATED,
            '@app/notification/notification/infrastructure/sequelize/notification-sequelize-notification.model',
            'NotificationNotificationModel',
        );
    }

    @AfterUpdate
    static auditingUpdate(instance: NotificationNotificationModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.UPDATED,
            '@app/notification/notification/infrastructure/sequelize/notification-sequelize-notification.model',
            'NotificationNotificationModel',
        );
    }

    @AfterBulkUpdate
    static auditingBulkUpdate(options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            null,
            options,
            AuditingSideEffectEvent.BULK_UPDATED,
            '@app/notification/notification/infrastructure/sequelize/notification-sequelize-notification.model',
            'NotificationNotificationModel',
        );
    }

    @AfterDestroy
    static auditingDestroy(instance: NotificationNotificationModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.DELETED,
            '@app/notification/notification/infrastructure/sequelize/notification-sequelize-notification.model',
            'NotificationNotificationModel',
        );
    }

    @AfterBulkDestroy
    static auditingBulkDestroy(options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            null,
            options,
            AuditingSideEffectEvent.BULK_DELETED,
            '@app/notification/notification/infrastructure/sequelize/notification-sequelize-notification.model',
            'NotificationNotificationModel',
        );
    }

    @AfterRestore
    static auditingRestore(instance: NotificationNotificationModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.RESTORED,
            '@app/notification/notification/infrastructure/sequelize/notification-sequelize-notification.model',
            'NotificationNotificationModel',
        );
    }

    @AfterBulkRestore
    static auditingBulkRestore(options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            null,
            options,
            AuditingSideEffectEvent.BULK_RESTORED,
            '@app/notification/notification/infrastructure/sequelize/notification-sequelize-notification.model',
            'NotificationNotificationModel',
        );
    }

    @AfterUpsert
    static auditingUpsert(instance: NotificationNotificationModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.UPSERTED,
            '@app/notification/notification/infrastructure/sequelize/notification-sequelize-notification.model',
            'NotificationNotificationModel',
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
        field: 'tenantId',
        allowNull: true,
        type: DataTypes.UUID,
    })
    tenantId: string;

    @Column({
        field: 'status',
        allowNull: false,
        type: DataTypes.ENUM('DRAFT','PENDING','SENT'),
    })
    status: string;

    @Column({
        field: 'accountIds',
        allowNull: true,
        type: DataTypes.ARRAY(DataTypes.UUID),
    })
    accountIds: string[];

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
        field: 'sendAt',
        allowNull: true,
        type: DataTypes.DATE,
    })
    sendAt: string;

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
        field: 'totalRecipients',
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
    })
    totalRecipients: number;

    @Column({
        field: 'reads',
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
    })
    reads: number;

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
