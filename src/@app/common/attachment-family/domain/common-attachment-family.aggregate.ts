/* eslint-disable key-spacing */
import { CommonCreatedAttachmentFamilyEvent, CommonDeletedAttachmentFamilyEvent, CommonUpdatedAttachmentFamilyEvent } from '@app/common/attachment-family';
import {
    CommonAttachmentFamilyCreatedAt,
    CommonAttachmentFamilyDeletedAt,
    CommonAttachmentFamilyFitType,
    CommonAttachmentFamilyFormat,
    CommonAttachmentFamilyHeight,
    CommonAttachmentFamilyId,
    CommonAttachmentFamilyName,
    CommonAttachmentFamilyQuality,
    CommonAttachmentFamilyResourceIds,
    CommonAttachmentFamilySizes,
    CommonAttachmentFamilyUpdatedAt,
    CommonAttachmentFamilyWidth,
} from '@app/common/attachment-family/domain/value-objects';
import { CommonResource } from '@app/common/resource';
import { LiteralObject, Utils } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class CommonAttachmentFamily extends AggregateRoot
{
    id: CommonAttachmentFamilyId;
    resourceIds: CommonAttachmentFamilyResourceIds;
    name: CommonAttachmentFamilyName;
    width: CommonAttachmentFamilyWidth;
    height: CommonAttachmentFamilyHeight;
    fitType: CommonAttachmentFamilyFitType;
    quality: CommonAttachmentFamilyQuality;
    sizes: CommonAttachmentFamilySizes;
    format: CommonAttachmentFamilyFormat;
    createdAt: CommonAttachmentFamilyCreatedAt;
    updatedAt: CommonAttachmentFamilyUpdatedAt;
    deletedAt: CommonAttachmentFamilyDeletedAt;
    resources: CommonResource[];

    constructor(
        id: CommonAttachmentFamilyId,
        resourceIds: CommonAttachmentFamilyResourceIds,
        name: CommonAttachmentFamilyName,
        width: CommonAttachmentFamilyWidth,
        height: CommonAttachmentFamilyHeight,
        fitType: CommonAttachmentFamilyFitType,
        quality: CommonAttachmentFamilyQuality,
        sizes: CommonAttachmentFamilySizes,
        format: CommonAttachmentFamilyFormat,
        createdAt: CommonAttachmentFamilyCreatedAt,
        updatedAt: CommonAttachmentFamilyUpdatedAt,
        deletedAt: CommonAttachmentFamilyDeletedAt,
        resources?: CommonResource[],
    )
    {
        super();
        this.id = id;
        this.resourceIds = resourceIds;
        this.name = name;
        this.width = width;
        this.height = height;
        this.fitType = fitType;
        this.quality = quality;
        this.sizes = sizes;
        this.format = format;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
        this.resources = resources;
    }

    static register(
        id: CommonAttachmentFamilyId,
        resourceIds: CommonAttachmentFamilyResourceIds,
        name: CommonAttachmentFamilyName,
        width: CommonAttachmentFamilyWidth,
        height: CommonAttachmentFamilyHeight,
        fitType: CommonAttachmentFamilyFitType,
        quality: CommonAttachmentFamilyQuality,
        sizes: CommonAttachmentFamilySizes,
        format: CommonAttachmentFamilyFormat,
        createdAt: CommonAttachmentFamilyCreatedAt,
        updatedAt: CommonAttachmentFamilyUpdatedAt,
        deletedAt: CommonAttachmentFamilyDeletedAt,
        resources?: CommonResource[],
    ): CommonAttachmentFamily
    {
        return new CommonAttachmentFamily(
            id,
            resourceIds,
            name,
            width,
            height,
            fitType,
            quality,
            sizes,
            format,
            createdAt,
            updatedAt,
            deletedAt,
            resources,
        );
    }

    created(attachmentFamily: CommonAttachmentFamily): void
    {
        this.apply(
            new CommonCreatedAttachmentFamilyEvent(
                attachmentFamily.id.value,
                attachmentFamily.resourceIds?.value,
                attachmentFamily.name.value,
                attachmentFamily.width?.value,
                attachmentFamily.height?.value,
                attachmentFamily.fitType?.value,
                attachmentFamily.quality?.value,
                attachmentFamily.sizes?.value,
                attachmentFamily.format?.value,
                attachmentFamily.createdAt?.value,
                attachmentFamily.updatedAt?.value,
                attachmentFamily.deletedAt?.value,
            ),
        );
    }

    updated(attachmentFamily: CommonAttachmentFamily): void
    {
        this.apply(
            new CommonUpdatedAttachmentFamilyEvent(
                attachmentFamily.id?.value,
                attachmentFamily.resourceIds?.value,
                attachmentFamily.name?.value,
                attachmentFamily.width?.value,
                attachmentFamily.height?.value,
                attachmentFamily.fitType?.value,
                attachmentFamily.quality?.value,
                attachmentFamily.sizes?.value,
                attachmentFamily.format?.value,
                attachmentFamily.createdAt?.value,
                attachmentFamily.updatedAt?.value,
                attachmentFamily.deletedAt?.value,
            ),
        );
    }

    deleted(attachmentFamily: CommonAttachmentFamily): void
    {
        this.apply(
            new CommonDeletedAttachmentFamilyEvent(
                attachmentFamily.id.value,
                attachmentFamily.resourceIds?.value,
                attachmentFamily.name.value,
                attachmentFamily.width?.value,
                attachmentFamily.height?.value,
                attachmentFamily.fitType?.value,
                attachmentFamily.quality?.value,
                attachmentFamily.sizes?.value,
                attachmentFamily.format?.value,
                attachmentFamily.createdAt?.value,
                attachmentFamily.updatedAt?.value,
                attachmentFamily.deletedAt?.value,
            ),
        );
    }

    toDTO(): LiteralObject
    {
        return {
            id: this.id.value,
            resourceIds: this.resourceIds?.value,
            name: this.name.value,
            width: this.width?.value,
            height: this.height?.value,
            fitType: this.fitType?.value,
            quality: this.quality?.value,
            sizes: this.sizes?.value,
            format: this.format?.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
            resources: this.resources?.map(item => item.toDTO()),
        };
    }

    // function called to get data for repository side effect methods
    toRepository(): LiteralObject
    {
        return {
            id: this.id.value,
            resourceIds: this.resourceIds?.value,
            name: this.name.value,
            width: this.width?.value,
            height: this.height?.value,
            fitType: this.fitType?.value,
            quality: this.quality?.value,
            sizes: this.sizes?.value,
            format: this.format?.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
            resources: this.resources?.map(item => item.toDTO()),
        };
    }
}
