import { CommonAttachmentFamilyResourceDto } from '@api/common/attachment-family-resource';
import { CommonAttachmentFamilyResource } from '@api/graphql';
import { CommonFindAttachmentFamilyResourceByIdQuery } from '@app/common/attachment-family-resource';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonFindAttachmentFamilyResourceByIdHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        attachmentFamilyId: string,
        resourceId: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<CommonAttachmentFamilyResource | CommonAttachmentFamilyResourceDto>
    {
        return await this.queryBus.ask(new CommonFindAttachmentFamilyResourceByIdQuery(
            attachmentFamilyId,
            resourceId,
            constraint,
            {
                timezone,
            },
        ));
    }
}
