import { CommonAttachmentFamilyResource, CommonCreatedAttachmentFamiliesResourcesEvent, CommonCreatedAttachmentFamilyResourceEvent, CommonDeletedAttachmentFamiliesResourcesEvent, CommonDeletedAttachmentFamilyResourceEvent, CommonUpdatedAttachmentFamiliesResourcesEvent, CommonUpdatedAttachmentFamilyResourceEvent } from '@app/common/attachment-family-resource';
import { AggregateRoot } from '@nestjs/cqrs';

export class CommonAddAttachmentFamiliesResourcesContextEvent extends AggregateRoot
{
    constructor(
        public readonly aggregateRoots: CommonAttachmentFamilyResource[] = [],
    )
    {
        super();
    }

    *[Symbol.iterator]()
    {
        for (const aggregateRoot of this.aggregateRoots) yield aggregateRoot;
    }

    created(): void
    {
        this.apply(
            new CommonCreatedAttachmentFamiliesResourcesEvent(
                this.aggregateRoots.map(attachmentFamilyResource =>
                    new CommonCreatedAttachmentFamilyResourceEvent(
                        attachmentFamilyResource.attachmentFamilyId.value,
                        attachmentFamilyResource.resourceId.value,
                    ),
                ),
            ),
        );
    }

    updated(): void
    {
        this.apply(
            new CommonUpdatedAttachmentFamiliesResourcesEvent(
                this.aggregateRoots.map(attachmentFamilyResource =>
                    new CommonUpdatedAttachmentFamilyResourceEvent(
                        attachmentFamilyResource.attachmentFamilyId.value,
                        attachmentFamilyResource.resourceId.value,
                    ),
                ),
            ),
        );
    }

    deleted(): void
    {
        this.apply(
            new CommonDeletedAttachmentFamiliesResourcesEvent(
                this.aggregateRoots.map(attachmentFamilyResource =>
                    new CommonDeletedAttachmentFamilyResourceEvent(
                        attachmentFamilyResource.attachmentFamilyId.value,
                        attachmentFamilyResource.resourceId.value,
                    ),
                ),
            ),
        );
    }
}
