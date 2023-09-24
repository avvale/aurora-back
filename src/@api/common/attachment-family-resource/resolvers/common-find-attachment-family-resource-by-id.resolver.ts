import { CommonFindAttachmentFamilyResourceByIdHandler } from '@api/common/attachment-family-resource';
import { CommonAttachmentFamilyResource } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('common.attachmentFamilyResource.get')
export class CommonFindAttachmentFamilyResourceByIdResolver
{
    constructor(
        private readonly handler: CommonFindAttachmentFamilyResourceByIdHandler,
    ) {}

    @Query('commonFindAttachmentFamilyResourceById')
    async main(
        @Args('attachmentFamilyId') attachmentFamilyId: string,
        @Args('resourceId') resourceId: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<CommonAttachmentFamilyResource>
    {
        return await this.handler.main(
            attachmentFamilyId,
            resourceId,
            constraint,
            timezone,
        );
    }
}
