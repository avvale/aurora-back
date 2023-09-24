import { CommonAttachmentFamilyResource, CommonIAttachmentFamilyResourceRepository } from '@app/common/attachment-family-resource';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonGetAttachmentFamiliesResourcesService
{
    constructor(
        private readonly repository: CommonIAttachmentFamilyResourceRepository,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<CommonAttachmentFamilyResource[]>
    {
        return await this.repository.get({
            queryStatement,
            constraint,
            cQMetadata,
        });
    }
}
