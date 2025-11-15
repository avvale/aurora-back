/* eslint-disable indent */
/* eslint-disable key-spacing */
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
    modelName: 'SupportConfig',
    freezeTableName: true,
    timestamps: false,
    indexes: [
        {
            fields: ['rowId'],
            unique: true,
        },
    ],
})
export class SupportConfigModel extends Model<SupportConfigModel> {
    @AfterCreate
    static auditingCreate(instance: SupportConfigModel, options): void {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.CREATED,
            '@app/support/config/infrastructure/sequelize/support-sequelize-config.model',
            'SupportConfigModel',
        );
    }

    @AfterBulkCreate
    static auditingBulkCreate(instance: SupportConfigModel, options): void {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.BULK_CREATED,
            '@app/support/config/infrastructure/sequelize/support-sequelize-config.model',
            'SupportConfigModel',
        );
    }

    @AfterUpdate
    static auditingUpdate(instance: SupportConfigModel, options): void {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.UPDATED,
            '@app/support/config/infrastructure/sequelize/support-sequelize-config.model',
            'SupportConfigModel',
        );
    }

    @AfterBulkUpdate
    static auditingBulkUpdate(options): void {
        SequelizeAuditingAgent.registerSideEffect(
            null,
            options,
            AuditingSideEffectEvent.BULK_UPDATED,
            '@app/support/config/infrastructure/sequelize/support-sequelize-config.model',
            'SupportConfigModel',
        );
    }

    @AfterDestroy
    static auditingDestroy(instance: SupportConfigModel, options): void {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.DELETED,
            '@app/support/config/infrastructure/sequelize/support-sequelize-config.model',
            'SupportConfigModel',
        );
    }

    @AfterBulkDestroy
    static auditingBulkDestroy(options): void {
        SequelizeAuditingAgent.registerSideEffect(
            null,
            options,
            AuditingSideEffectEvent.BULK_DELETED,
            '@app/support/config/infrastructure/sequelize/support-sequelize-config.model',
            'SupportConfigModel',
        );
    }

    @AfterRestore
    static auditingRestore(instance: SupportConfigModel, options): void {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.RESTORED,
            '@app/support/config/infrastructure/sequelize/support-sequelize-config.model',
            'SupportConfigModel',
        );
    }

    @AfterBulkRestore
    static auditingBulkRestore(options): void {
        SequelizeAuditingAgent.registerSideEffect(
            null,
            options,
            AuditingSideEffectEvent.BULK_RESTORED,
            '@app/support/config/infrastructure/sequelize/support-sequelize-config.model',
            'SupportConfigModel',
        );
    }

    @AfterUpsert
    static auditingUpsert(instance: SupportConfigModel, options): void {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.UPSERTED,
            '@app/support/config/infrastructure/sequelize/support-sequelize-config.model',
            'SupportConfigModel',
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
        field: 'apiKey',
        allowNull: true,
        type: DataTypes.STRING(255),
    })
    apiKey: string;

    @Column({
        field: 'listId',
        allowNull: true,
        type: DataTypes.STRING(255),
    })
    listId: string;

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
