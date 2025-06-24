/* eslint-disable key-spacing */
import { ToolsCreatedProcedureEvent, ToolsDeletedProcedureEvent, ToolsUpdatedProcedureEvent } from '@app/tools/procedure';
import {
    ToolsProcedureCheckedAt,
    ToolsProcedureCreatedAt,
    ToolsProcedureDeletedAt,
    ToolsProcedureDownScript,
    ToolsProcedureExecutedAt,
    ToolsProcedureId,
    ToolsProcedureIsActive,
    ToolsProcedureIsUpdated,
    ToolsProcedureName,
    ToolsProcedureType,
    ToolsProcedureUpdatedAt,
    ToolsProcedureUpScript,
    ToolsProcedureVersion,
} from '@app/tools/procedure/domain/value-objects';
import { CQMetadata, LiteralObject } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class ToolsProcedure extends AggregateRoot
{
    id: ToolsProcedureId;
    name: ToolsProcedureName;
    type: ToolsProcedureType;
    version: ToolsProcedureVersion;
    isActive: ToolsProcedureIsActive;
    isUpdated: ToolsProcedureIsUpdated;
    upScript: ToolsProcedureUpScript;
    downScript: ToolsProcedureDownScript;
    executedAt: ToolsProcedureExecutedAt;
    checkedAt: ToolsProcedureCheckedAt;
    createdAt: ToolsProcedureCreatedAt;
    updatedAt: ToolsProcedureUpdatedAt;
    deletedAt: ToolsProcedureDeletedAt;

    constructor(
        id: ToolsProcedureId,
        name: ToolsProcedureName,
        type: ToolsProcedureType,
        version: ToolsProcedureVersion,
        isActive: ToolsProcedureIsActive,
        isUpdated: ToolsProcedureIsUpdated,
        upScript: ToolsProcedureUpScript,
        downScript: ToolsProcedureDownScript,
        executedAt: ToolsProcedureExecutedAt,
        checkedAt: ToolsProcedureCheckedAt,
        createdAt: ToolsProcedureCreatedAt,
        updatedAt: ToolsProcedureUpdatedAt,
        deletedAt: ToolsProcedureDeletedAt,
    )
    {
        super();
        this.id = id;
        this.name = name;
        this.type = type;
        this.version = version;
        this.isActive = isActive;
        this.isUpdated = isUpdated;
        this.upScript = upScript;
        this.downScript = downScript;
        this.executedAt = executedAt;
        this.checkedAt = checkedAt;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

    static register(
        id: ToolsProcedureId,
        name: ToolsProcedureName,
        type: ToolsProcedureType,
        version: ToolsProcedureVersion,
        isActive: ToolsProcedureIsActive,
        isUpdated: ToolsProcedureIsUpdated,
        upScript: ToolsProcedureUpScript,
        downScript: ToolsProcedureDownScript,
        executedAt: ToolsProcedureExecutedAt,
        checkedAt: ToolsProcedureCheckedAt,
        createdAt: ToolsProcedureCreatedAt,
        updatedAt: ToolsProcedureUpdatedAt,
        deletedAt: ToolsProcedureDeletedAt,
    ): ToolsProcedure
    {
        return new ToolsProcedure(
            id,
            name,
            type,
            version,
            isActive,
            isUpdated,
            upScript,
            downScript,
            executedAt,
            checkedAt,
            createdAt,
            updatedAt,
            deletedAt,
        );
    }

    created(
        event: {
            payload: ToolsProcedure;
            cQMetadata?: CQMetadata;
        },
    ): void
    {
        this.apply(
            new ToolsCreatedProcedureEvent({
                payload: {
                    id: event.payload.id.value,
                    name: event.payload.name.value,
                    type: event.payload.type.value,
                    version: event.payload.version.value,
                    isActive: event.payload.isActive.value,
                    isUpdated: event.payload.isUpdated.value,
                    upScript: event.payload.upScript?.value,
                    downScript: event.payload.downScript?.value,
                    executedAt: event.payload.executedAt?.value,
                    checkedAt: event.payload.checkedAt?.value,
                    createdAt: event.payload.createdAt?.value,
                    updatedAt: event.payload.updatedAt?.value,
                    deletedAt: event.payload.deletedAt?.value,
                },
                cQMetadata: event.cQMetadata,
            }),
        );
    }

    updated(
        event: {
            payload: ToolsProcedure;
            cQMetadata?: CQMetadata;
        },
    ): void
    {
        this.apply(
            new ToolsUpdatedProcedureEvent({
                payload: {
                    id: event.payload.id?.value,
                    name: event.payload.name?.value,
                    type: event.payload.type?.value,
                    version: event.payload.version?.value,
                    isActive: event.payload.isActive?.value,
                    isUpdated: event.payload.isUpdated?.value,
                    upScript: event.payload.upScript?.value,
                    downScript: event.payload.downScript?.value,
                    executedAt: event.payload.executedAt?.value,
                    checkedAt: event.payload.checkedAt?.value,
                    createdAt: event.payload.createdAt?.value,
                    updatedAt: event.payload.updatedAt?.value,
                    deletedAt: event.payload.deletedAt?.value,
                },
                cQMetadata: event.cQMetadata,
            }),
        );
    }

    deleted(
        event: {
            payload: ToolsProcedure;
            cQMetadata?: CQMetadata;
        },
    ): void
    {
        this.apply(
            new ToolsDeletedProcedureEvent({
                payload: {
                    id: event.payload.id.value,
                    name: event.payload.name.value,
                    type: event.payload.type.value,
                    version: event.payload.version.value,
                    isActive: event.payload.isActive.value,
                    isUpdated: event.payload.isUpdated.value,
                    upScript: event.payload.upScript?.value,
                    downScript: event.payload.downScript?.value,
                    executedAt: event.payload.executedAt?.value,
                    checkedAt: event.payload.checkedAt?.value,
                    createdAt: event.payload.createdAt?.value,
                    updatedAt: event.payload.updatedAt?.value,
                    deletedAt: event.payload.deletedAt?.value,
                },
                cQMetadata: event.cQMetadata,
            }),
        );
    }

    toDTO(): LiteralObject
    {
        return {
            id: this.id.value,
            name: this.name.value,
            type: this.type.value,
            version: this.version.value,
            isActive: this.isActive.value,
            isUpdated: this.isUpdated.value,
            upScript: this.upScript?.value,
            downScript: this.downScript?.value,
            executedAt: this.executedAt?.value,
            checkedAt: this.checkedAt?.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
        };
    }

    // function called to get data for repository side effect methods
    toRepository(): LiteralObject
    {
        return {
            id: this.id.value,
            name: this.name.value,
            type: this.type.value,
            version: this.version.value,
            isActive: this.isActive.value,
            isUpdated: this.isUpdated.value,
            upScript: this.upScript?.value,
            downScript: this.downScript?.value,
            executedAt: this.executedAt?.value,
            checkedAt: this.checkedAt?.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
        };
    }
}
