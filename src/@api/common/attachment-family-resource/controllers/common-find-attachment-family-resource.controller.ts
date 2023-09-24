/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { CommonAttachmentFamilyResourceDto, CommonFindAttachmentFamilyResourceHandler } from '@api/common/attachment-family-resource';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('[common] attachment-family-resource')
@Controller('common/attachment-family-resource/find')
@Auth('common.attachmentFamilyResource.get')
export class CommonFindAttachmentFamilyResourceController
{
    constructor(
        private readonly handler: CommonFindAttachmentFamilyResourceHandler,
    ) {}

    @Post()
    @HttpCode(200)
    @ApiOperation({ summary: 'Find attachment-family-resource according to query' })
    @ApiOkResponse({ description: 'The record has been successfully created.', type: CommonAttachmentFamilyResourceDto })
    @ApiBody({ type: QueryStatement })
    @ApiQuery({ name: 'query', type: QueryStatement })
    async main(
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
