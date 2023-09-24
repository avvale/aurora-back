/* eslint-disable key-spacing */
import { CommonAttachmentFamily } from '@app/common/attachment-family';
import { CommonCreatedAttachmentFamilyResourceEvent, CommonDeletedAttachmentFamilyResourceEvent, CommonUpdatedAttachmentFamilyResourceEvent } from '@app/common/attachment-family-resource';
import {
    CommonAttachmentFamilyResourceAttachmentFamilyId,
    CommonAttachmentFamilyResourceResourceId,
} from '@app/common/attachment-family-resource/domain/value-objects';
import { CommonResource } from '@app/common/resource';
import { LiteralObject, Utils } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class CommonAttachmentFamilyResource extends AggregateRoot
{
    attachmentFamilyId: CommonAttachmentFamilyResourceAttachmentFamilyId;
    resourceId: CommonAttachmentFamilyResourceResourceId;
    attachmentFamily: CommonAttachmentFamily;
    resource: CommonResource;

    constructor(
        attachmentFamilyId: CommonAttachmentFamilyResourceAttachmentFamilyId,
        resourceId: CommonAttachmentFamilyResourceResourceId,
        attachmentFamily?: CommonAttachmentFamily,
        resource?: CommonResource,
    )
    {
        super();
        this.attachmentFamilyId = attachmentFamilyId;
        this.resourceId = resourceId;
        this.attachmentFamily = attachmentFamily;
        this.resource = resource;
    }

    static register(
        attachmentFamilyId: CommonAttachmentFamilyResourceAttachmentFamilyId,
        resourceId: CommonAttachmentFamilyResourceResourceId,
        attachmentFamily?: CommonAttachmentFamily,
        resource?: CommonResource,
    ): CommonAttachmentFamilyResource
    {
        return new CommonAttachmentFamilyResource(
            attachmentFamilyId,
            resourceId,
            attachmentFamily,
            resource,
        );
    }

    created(attachmentFamilyResource: CommonAttachmentFamilyResource): void
    {
        this.apply(
            new CommonCreatedAttachmentFamilyResourceEvent(
                attachmentFamilyResource.attachmentFamilyId.value,
                attachmentFamilyResource.resourceId.value,
            ),
        );
    }

    updated(attachmentFamilyResource: CommonAttachmentFamilyResource): void
    {
        this.apply(
            new CommonUpdatedAttachmentFamilyResourceEvent(
                attachmentFamilyResource.attachmentFamilyId?.value,
                attachmentFamilyResource.resourceId?.value,
            ),
        );
    }

    deleted(attachmentFamilyResource: CommonAttachmentFamilyResource): void
    {
        this.apply(
            new CommonDeletedAttachmentFamilyResourceEvent(
                attachmentFamilyResource.attachmentFamilyId.value,
                attachmentFamilyResource.resourceId.value,
            ),
        );
    }

    toDTO(): LiteralObject
    {
        return {
            attachmentFamilyId: this.attachmentFamilyId.value,
            resourceId: this.resourceId.value,
            attachmentFamily: this.attachmentFamily?.toDTO(),
            resource: this.resource?.toDTO(),
        };
    }

    // function called to get data for repository side effect methods
    toRepository(): LiteralObject
    {
        return {
            attachmentFamilyId: this.attachmentFamilyId.value,
            resourceId: this.resourceId.value,
            attachmentFamily: this.attachmentFamily?.toDTO(),
            resource: this.resource?.toDTO(),
        };
    }
}
