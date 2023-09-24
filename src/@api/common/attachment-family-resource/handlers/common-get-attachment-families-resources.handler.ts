import { CommonAttachmentFamilyResourceDto } from '@api/common/attachment-family-resource';
import { CommonAttachmentFamilyResource } from '@api/graphql';
import { CommonGetAttachmentFamiliesResourcesQuery } from '@app/common/attachment-family-resource';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonGetAttachmentFamiliesResourcesHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<CommonAttachmentFamilyResource[] | CommonAttachmentFamilyResourceDto[]>
    {
        return await this.queryBus.ask(new CommonGetAttachmentFamiliesResourcesQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
