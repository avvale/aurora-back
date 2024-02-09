/* eslint-disable indent */
/* eslint-disable key-spacing */
import { NotificationNotificationModel } from '@app/notification/notification';
import { AuditingSideEffectEvent, SequelizeAuditingAgent } from '@aurorajs.dev/core';
import { DataTypes } from 'sequelize';
import { AfterBulkCreate, AfterBulkDestroy, AfterBulkRestore, AfterBulkUpdate, AfterCreate, AfterDestroy, AfterRestore, AfterUpdate, AfterUpsert, BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';

@Table({
    modelName: 'NotificationInbox',
    freezeTableName: true,
    timestamps: false,
    indexes: [
		{
			fields: ['tenantIds'],
			unique: false,
		},
		{
			fields: ['accountId'],
			unique: false,
		},
		{
			fields: ['accountCode'],
			unique: false,
		},

    ],
})
export class NotificationInboxModel extends Model<NotificationInboxModel>
{
    @AfterCreate
    static auditingCreate(instance: NotificationInboxModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.CREATED,
            '@app/notification/inbox/infrastructure/sequelize/notification-sequelize-inbox.model',
            'NotificationInboxModel',
        );
    }

    @AfterBulkCreate
    static auditingBulkCreate(instance: NotificationInboxModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.BULK_CREATED,
            '@app/notification/inbox/infrastructure/sequelize/notification-sequelize-inbox.model',
            'NotificationInboxModel',
        );
    }

    @AfterUpdate
    static auditingUpdate(instance: NotificationInboxModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.UPDATED,
            '@app/notification/inbox/infrastructure/sequelize/notification-sequelize-inbox.model',
            'NotificationInboxModel',
        );
    }

    @AfterBulkUpdate
    static auditingBulkUpdate(options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            null,
            options,
            AuditingSideEffectEvent.BULK_UPDATED,
            '@app/notification/inbox/infrastructure/sequelize/notification-sequelize-inbox.model',
            'NotificationInboxModel',
        );
    }

    @AfterDestroy
    static auditingDestroy(instance: NotificationInboxModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.DELETED,
            '@app/notification/inbox/infrastructure/sequelize/notification-sequelize-inbox.model',
            'NotificationInboxModel',
        );
    }

    @AfterBulkDestroy
    static auditingBulkDestroy(options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            null,
            options,
            AuditingSideEffectEvent.BULK_DELETED,
            '@app/notification/inbox/infrastructure/sequelize/notification-sequelize-inbox.model',
            'NotificationInboxModel',
        );
    }

    @AfterRestore
    static auditingRestore(instance: NotificationInboxModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.RESTORED,
            '@app/notification/inbox/infrastructure/sequelize/notification-sequelize-inbox.model',
            'NotificationInboxModel',
        );
    }

    @AfterBulkRestore
    static auditingBulkRestore(options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            null,
            options,
            AuditingSideEffectEvent.BULK_RESTORED,
            '@app/notification/inbox/infrastructure/sequelize/notification-sequelize-inbox.model',
            'NotificationInboxModel',
        );
    }

    @AfterUpsert
    static auditingUpsert(instance: NotificationInboxModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.UPSERTED,
            '@app/notification/inbox/infrastructure/sequelize/notification-sequelize-inbox.model',
            'NotificationInboxModel',
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
        field: 'tenantIds',
        allowNull: true,
        type: DataTypes.ARRAY(DataTypes.UUID),
    })
    tenantIds: string[];

    @ForeignKey(() => NotificationNotificationModel)
    @Column({
        field: 'notificationId',
        allowNull: false,
        type: DataTypes.UUID,
    })
    notificationId: string;

    @BelongsTo(() => NotificationNotificationModel, {
        constraints: false,
        foreignKey: 'notificationId',
    })
    notification: NotificationNotificationModel;

    @Column({
        field: 'sort',
        allowNull: false,
        type: DataTypes.INTEGER,
    })
    sort: number;

    @Column({
        field: 'accountId',
        allowNull: false,
        type: DataTypes.UUID,
    })
    accountId: string;

    @Column({
        field: 'accountCode',
        allowNull: true,
        type: DataTypes.STRING(),
    })
    accountCode: string;

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
        field: 'isRead',
        allowNull: false,
        type: DataTypes.BOOLEAN,
    })
    isRead: boolean;

    @Column({
        field: 'isReadAtLeastOnce',
        allowNull: false,
        type: DataTypes.BOOLEAN,
    })
    isReadAtLeastOnce: boolean;

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
