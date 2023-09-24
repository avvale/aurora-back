import { CommonAttachmentFamilyResource, CommonIAttachmentFamilyResourceRepository } from '@app/common/attachment-family-resource';
import { CommonAttachmentFamilyResourceAttachmentFamilyId, CommonAttachmentFamilyResourceResourceId } from '@app/common/attachment-family-resource/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonFindAttachmentFamilyResourceByIdService
{
    constructor(
        private readonly repository: CommonIAttachmentFamilyResourceRepository,
    ) {}

    async main(
        attachmentFamilyId: CommonAttachmentFamilyResourceAttachmentFamilyId,
        resourceId: CommonAttachmentFamilyResourceResourceId,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<CommonAttachmentFamilyResource>
    {
        return await this.repository.findById(
            undefined,
            {
                constraint,
                cQMetadata,
                findArguments: {
                    attachmentFamilyId: attachmentFamilyId.value,
                    resourceId: resourceId.value,
                },
            },
        );
    }
}
