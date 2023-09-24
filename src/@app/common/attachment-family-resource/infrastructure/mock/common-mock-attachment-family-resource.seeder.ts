import { CommonAttachmentFamilyResource, commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import {
    CommonAttachmentFamilyResourceAttachmentFamilyId,
    CommonAttachmentFamilyResourceResourceId,
} from '@app/common/attachment-family-resource/domain/value-objects';
import { MockSeeder } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class CommonMockAttachmentFamilyResourceSeeder extends MockSeeder<CommonAttachmentFamilyResource>
{
    public collectionSource: CommonAttachmentFamilyResource[];

    constructor()
    {
        super();
        this._createMock();
    }

    private _createMock(): void
    {
        this.collectionSource = [];

        for (const attachmentFamilyResource of _.orderBy(commonMockAttachmentFamilyResourceData, ['id']))
        {
            this.collectionSource.push(
                CommonAttachmentFamilyResource.register(
                    new CommonAttachmentFamilyResourceAttachmentFamilyId(attachmentFamilyResource.attachmentFamilyId),
                    new CommonAttachmentFamilyResourceResourceId(attachmentFamilyResource.resourceId),
                ),
            );
        }
    }
}
