/* eslint-disable key-spacing */
import { CommonCreatedAttachmentFamilyEvent, CommonDeletedAttachmentFamilyEvent, CommonUpdatedAttachmentFamilyEvent } from '@app/common/attachment-family';
import {
    CommonAttachmentFamilyCode,
    CommonAttachmentFamilyCreatedAt,
    CommonAttachmentFamilyDeletedAt,
    CommonAttachmentFamilyFitType,
    CommonAttachmentFamilyFormat,
    CommonAttachmentFamilyHeight,
    CommonAttachmentFamilyId,
    CommonAttachmentFamilyName,
    CommonAttachmentFamilyQuality,
    CommonAttachmentFamilySizes,
    CommonAttachmentFamilyUpdatedAt,
    CommonAttachmentFamilyWidth,
} from '@app/common/attachment-family/domain/value-objects';
import { LiteralObject, Utils } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class CommonAttachmentFamily extends AggregateRoot
{
    id: CommonAttachmentFamilyId;
    name: CommonAttachmentFamilyName;
    code: CommonAttachmentFamilyCode;
    width: CommonAttachmentFamilyWidth;
    height: CommonAttachmentFamilyHeight;
    fitType: CommonAttachmentFamilyFitType;
    quality: CommonAttachmentFamilyQuality;
    sizes: CommonAttachmentFamilySizes;
    format: CommonAttachmentFamilyFormat;
    createdAt: CommonAttachmentFamilyCreatedAt;
    updatedAt: CommonAttachmentFamilyUpdatedAt;
    deletedAt: CommonAttachmentFamilyDeletedAt;

    constructor(
        id: CommonAttachmentFamilyId,
        name: CommonAttachmentFamilyName,
        code: CommonAttachmentFamilyCode,
        width: CommonAttachmentFamilyWidth,
        height: CommonAttachmentFamilyHeight,
        fitType: CommonAttachmentFamilyFitType,
        quality: CommonAttachmentFamilyQuality,
        sizes: CommonAttachmentFamilySizes,
        format: CommonAttachmentFamilyFormat,
        createdAt: CommonAttachmentFamilyCreatedAt,
        updatedAt: CommonAttachmentFamilyUpdatedAt,
        deletedAt: CommonAttachmentFamilyDeletedAt,
    )
    {
        super();
        this.id = id;
        this.name = name;
        this.code = code;
        this.width = width;
        this.height = height;
        this.fitType = fitType;
        this.quality = quality;
        this.sizes = sizes;
        this.format = format;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

    static register(
        id: CommonAttachmentFamilyId,
        name: CommonAttachmentFamilyName,
        code: CommonAttachmentFamilyCode,
        width: CommonAttachmentFamilyWidth,
        height: CommonAttachmentFamilyHeight,
        fitType: CommonAttachmentFamilyFitType,
        quality: CommonAttachmentFamilyQuality,
        sizes: CommonAttachmentFamilySizes,
        format: CommonAttachmentFamilyFormat,
        createdAt: CommonAttachmentFamilyCreatedAt,
        updatedAt: CommonAttachmentFamilyUpdatedAt,
        deletedAt: CommonAttachmentFamilyDeletedAt,
    ): CommonAttachmentFamily
    {
        return new CommonAttachmentFamily(
            id,
            name,
            code,
            width,
            height,
            fitType,
            quality,
            sizes,
            format,
            createdAt,
            updatedAt,
            deletedAt,
        );
    }

    created(attachmentFamily: CommonAttachmentFamily): void
    {
        this.apply(
            new CommonCreatedAttachmentFamilyEvent(
                attachmentFamily.id.value,
                attachmentFamily.name.value,
                attachmentFamily.code.value,
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
                attachmentFamily.name?.value,
                attachmentFamily.code?.value,
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
                attachmentFamily.name.value,
                attachmentFamily.code.value,
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
            name: this.name.value,
            code: this.code.value,
            width: this.width?.value,
            height: this.height?.value,
            fitType: this.fitType?.value,
            quality: this.quality?.value,
            sizes: this.sizes?.value,
            format: this.format?.value,
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
            code: this.code.value,
            width: this.width?.value,
            height: this.height?.value,
            fitType: this.fitType?.value,
            quality: this.quality?.value,
            sizes: this.sizes?.value,
            format: this.format?.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
        };
    }
}
