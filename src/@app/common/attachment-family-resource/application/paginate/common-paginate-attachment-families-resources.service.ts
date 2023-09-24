import { CommonAttachmentFamilyResource, CommonIAttachmentFamilyResourceRepository } from '@app/common/attachment-family-resource';
import { CQMetadata, Pagination, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonPaginateAttachmentFamiliesResourcesService
{
    constructor(
        private readonly repository: CommonIAttachmentFamilyResourceRepository,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<Pagination<CommonAttachmentFamilyResource>>
    {
        return await this.repository.paginate({
            queryStatement,
            constraint,
            cQMetadata,
        });
    }
}
