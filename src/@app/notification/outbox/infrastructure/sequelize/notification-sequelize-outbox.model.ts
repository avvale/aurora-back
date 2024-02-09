/* eslint-disable indent */
/* eslint-disable key-spacing */
import { NotificationNotificationModel } from '@app/notification/notification';
import { AuditingSideEffectEvent, SequelizeAuditingAgent } from '@aurorajs.dev/core';
import { DataTypes } from 'sequelize';
import { AfterBulkCreate, AfterBulkDestroy, AfterBulkRestore, AfterBulkUpdate, AfterCreate, AfterDestroy, AfterRestore, AfterUpdate, AfterUpsert, BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';

@Table({
    modelName: 'NotificationOutbox',
    freezeTableName: true,
    timestamps: false,
    indexes: [
		{
			fields: ['accountRecipientIds'],
			unique: false,
		},
		{
			fields: ['tenantRecipientIds'],
			unique: false,
		},
		{
			fields: ['scopeRecipients'],
			unique: false,
		},

    ],
})
export class NotificationOutboxModel extends Model<NotificationOutboxModel>
{
    @AfterCreate
    static auditingCreate(instance: NotificationOutboxModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.CREATED,
            '@app/notification/outbox/infrastructure/sequelize/notification-sequelize-outbox.model',
            'NotificationOutboxModel',
        );
    }

    @AfterBulkCreate
    static auditingBulkCreate(instance: NotificationOutboxModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.BULK_CREATED,
            '@app/notification/outbox/infrastructure/sequelize/notification-sequelize-outbox.model',
            'NotificationOutboxModel',
        );
    }

    @AfterUpdate
    static auditingUpdate(instance: NotificationOutboxModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.UPDATED,
            '@app/notification/outbox/infrastructure/sequelize/notification-sequelize-outbox.model',
            'NotificationOutboxModel',
        );
    }

    @AfterBulkUpdate
    static auditingBulkUpdate(options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            null,
            options,
            AuditingSideEffectEvent.BULK_UPDATED,
            '@app/notification/outbox/infrastructure/sequelize/notification-sequelize-outbox.model',
            'NotificationOutboxModel',
        );
    }

    @AfterDestroy
    static auditingDestroy(instance: NotificationOutboxModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.DELETED,
            '@app/notification/outbox/infrastructure/sequelize/notification-sequelize-outbox.model',
            'NotificationOutboxModel',
        );
    }

    @AfterBulkDestroy
    static auditingBulkDestroy(options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            null,
            options,
            AuditingSideEffectEvent.BULK_DELETED,
            '@app/notification/outbox/infrastructure/sequelize/notification-sequelize-outbox.model',
            'NotificationOutboxModel',
        );
    }

    @AfterRestore
    static auditingRestore(instance: NotificationOutboxModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.RESTORED,
            '@app/notification/outbox/infrastructure/sequelize/notification-sequelize-outbox.model',
            'NotificationOutboxModel',
        );
    }

    @AfterBulkRestore
    static auditingBulkRestore(options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            null,
            options,
            AuditingSideEffectEvent.BULK_RESTORED,
            '@app/notification/outbox/infrastructure/sequelize/notification-sequelize-outbox.model',
            'NotificationOutboxModel',
        );
    }

    @AfterUpsert
    static auditingUpsert(instance: NotificationOutboxModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.UPSERTED,
            '@app/notification/outbox/infrastructure/sequelize/notification-sequelize-outbox.model',
            'NotificationOutboxModel',
        );
    }

    @Column({
        field: 'id',
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
    })
    id: string;

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
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    })
    sort: number;

    @Column({
        field: 'accountRecipientIds',
        allowNull: true,
        type: DataTypes.ARRAY(DataTypes.UUID),
    })
    accountRecipientIds: string[];

    @Column({
        field: 'tenantRecipientIds',
        allowNull: true,
        type: DataTypes.ARRAY(DataTypes.UUID),
    })
    tenantRecipientIds: string[];

    @Column({
        field: 'scopeRecipients',
        allowNull: true,
        type: DataTypes.ARRAY(DataTypes.STRING()),
    })
    scopeRecipients: string[];

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
