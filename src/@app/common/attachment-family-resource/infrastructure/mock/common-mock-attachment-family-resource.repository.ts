import { CommonAttachmentFamilyResource, CommonIAttachmentFamilyResourceRepository, commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import {
    CommonAttachmentFamilyResourceAttachmentFamilyId,
    CommonAttachmentFamilyResourceResourceId,
} from '@app/common/attachment-family-resource/domain/value-objects';
import { MockRepository, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonMockAttachmentFamilyResourceRepository extends MockRepository<CommonAttachmentFamilyResource> implements CommonIAttachmentFamilyResourceRepository
{
    public readonly repository: any;
    public readonly aggregateName: string = 'CommonAttachmentFamilyResource';
    public collectionSource: CommonAttachmentFamilyResource[];

    constructor()
    {
        super();
        this.createSourceMockData();
    }

    public reset(): void
    {
        this.createSourceMockData();
    }

    private createSourceMockData(): void
    {
        this.collectionSource = [];
        const now = Utils.nowTimestamp();

        for (const itemCollection of <any[]>commonMockAttachmentFamilyResourceData)
        {
            itemCollection['createdAt'] = now;
            itemCollection['updatedAt'] = now;
            itemCollection['deletedAt'] = null;

            this.collectionSource.push(CommonAttachmentFamilyResource.register(
                new CommonAttachmentFamilyResourceAttachmentFamilyId(itemCollection.attachmentFamilyId),
                new CommonAttachmentFamilyResourceResourceId(itemCollection.resourceId),
            ));
        }
    }
}
