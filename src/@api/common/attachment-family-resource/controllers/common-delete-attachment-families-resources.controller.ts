/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { CommonAttachmentFamilyResourceDto, CommonDeleteAttachmentFamiliesResourcesHandler } from '@api/common/attachment-family-resource';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Delete } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('[common] attachment-family-resource')
@Controller('common/attachment-families-resources/delete')
@Auth('common.attachmentFamilyResource.delete')
export class CommonDeleteAttachmentFamiliesResourcesController
{
    constructor(
        private readonly handler: CommonDeleteAttachmentFamiliesResourcesHandler,
    ) {}

    @Delete()
    @ApiOperation({ summary: 'Delete attachment-families-resources in batch according to query' })
    @ApiOkResponse({ description: 'The records has been deleted successfully.', type: [CommonAttachmentFamilyResourceDto]})
    @ApiBody({ type: QueryStatement })
    @ApiQuery({ name: 'query', type: QueryStatement })
    async main(
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    )
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
            auditing,
        );
    }
}
