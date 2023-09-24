import { CommonAttachmentFamilyResponse } from '@app/common/attachment-family';
import { CommonResourceResponse } from '@app/common/resource';

export class CommonAttachmentFamilyResourceResponse
{
    constructor(
        public readonly attachmentFamilyId: string,
        public readonly resourceId: string,
        public readonly attachmentFamily: CommonAttachmentFamilyResponse,
        public readonly resource: CommonResourceResponse,
    ) {}
}
