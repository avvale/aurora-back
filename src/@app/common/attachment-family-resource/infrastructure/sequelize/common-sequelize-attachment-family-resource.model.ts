/* eslint-disable indent */
/* eslint-disable key-spacing */
import { CommonAttachmentFamilyModel } from '@app/common/attachment-family';
import { CommonResourceModel } from '@app/common/resource';
import { AuditingSideEffectEvent, SequelizeAuditingAgent } from '@aurorajs.dev/core';
import { DataTypes } from 'sequelize';
import { AfterBulkCreate, AfterBulkDestroy, AfterBulkRestore, AfterBulkUpdate, AfterCreate, AfterDestroy, AfterRestore, AfterUpdate, AfterUpsert, BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';

@Table({
    modelName: 'CommonAttachmentFamilyResource',
    freezeTableName: true,
    timestamps: false,
})
export class CommonAttachmentFamilyResourceModel extends Model<CommonAttachmentFamilyResourceModel>
{
    @AfterCreate
    static auditingCreate(instance: CommonAttachmentFamilyResourceModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.CREATED,
            '@app/common/attachment-family-resource/infrastructure/sequelize/common-sequelize-attachment-family-resource.model',
            'CommonAttachmentFamilyResourceModel',
        );
    }

    @AfterBulkCreate
    static auditingBulkCreate(instance: CommonAttachmentFamilyResourceModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.BULK_CREATED,
            '@app/common/attachment-family-resource/infrastructure/sequelize/common-sequelize-attachment-family-resource.model',
            'CommonAttachmentFamilyResourceModel',
        );
    }

    @AfterUpdate
    static auditingUpdate(instance: CommonAttachmentFamilyResourceModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.UPDATED,
            '@app/common/attachment-family-resource/infrastructure/sequelize/common-sequelize-attachment-family-resource.model',
            'CommonAttachmentFamilyResourceModel',
        );
    }

    @AfterBulkUpdate
    static auditingBulkUpdate(options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            null,
            options,
            AuditingSideEffectEvent.BULK_UPDATED,
            '@app/common/attachment-family-resource/infrastructure/sequelize/common-sequelize-attachment-family-resource.model',
            'CommonAttachmentFamilyResourceModel',
        );
    }

    @AfterDestroy
    static auditingDestroy(instance: CommonAttachmentFamilyResourceModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.DELETED,
            '@app/common/attachment-family-resource/infrastructure/sequelize/common-sequelize-attachment-family-resource.model',
            'CommonAttachmentFamilyResourceModel',
        );
    }

    @AfterBulkDestroy
    static auditingBulkDestroy(options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            null,
            options,
            AuditingSideEffectEvent.BULK_DELETED,
            '@app/common/attachment-family-resource/infrastructure/sequelize/common-sequelize-attachment-family-resource.model',
            'CommonAttachmentFamilyResourceModel',
        );
    }

    @AfterRestore
    static auditingRestore(instance: CommonAttachmentFamilyResourceModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.RESTORED,
            '@app/common/attachment-family-resource/infrastructure/sequelize/common-sequelize-attachment-family-resource.model',
            'CommonAttachmentFamilyResourceModel',
        );
    }

    @AfterBulkRestore
    static auditingBulkRestore(options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            null,
            options,
            AuditingSideEffectEvent.BULK_RESTORED,
            '@app/common/attachment-family-resource/infrastructure/sequelize/common-sequelize-attachment-family-resource.model',
            'CommonAttachmentFamilyResourceModel',
        );
    }

    @AfterUpsert
    static auditingUpsert(instance: CommonAttachmentFamilyResourceModel, options): void
    {
        SequelizeAuditingAgent.registerSideEffect(
            instance,
            options,
            AuditingSideEffectEvent.UPSERTED,
            '@app/common/attachment-family-resource/infrastructure/sequelize/common-sequelize-attachment-family-resource.model',
            'CommonAttachmentFamilyResourceModel',
        );
    }

    @ForeignKey(() => CommonAttachmentFamilyModel)
    @Column({
        field: 'attachmentFamilyId',
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
    })
    attachmentFamilyId: string;

    @BelongsTo(() => CommonAttachmentFamilyModel, {
        constraints: false,
        foreignKey: 'attachmentFamilyId',
    })
    attachmentFamily: CommonAttachmentFamilyModel;

    @ForeignKey(() => CommonResourceModel)
    @Column({
        field: 'resourceId',
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
    })
    resourceId: string;

    @BelongsTo(() => CommonResourceModel, {
        constraints: false,
        foreignKey: 'resourceId',
    })
    resource: CommonResourceModel;

}
