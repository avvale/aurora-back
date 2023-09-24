/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { CommonAttachmentFamilyResourceDto, CommonFindAttachmentFamilyResourceByIdHandler } from '@api/common/attachment-family-resource';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[common] attachment-family-resource')
@Controller('common/attachment-family-resource/find')
@Auth('common.attachmentFamilyResource.get')
export class CommonFindAttachmentFamilyResourceByIdController
{
    constructor(
        private readonly handler: CommonFindAttachmentFamilyResourceByIdHandler,
    ) {}

    @Post(':attachmentFamilyId/:resourceId')
    @HttpCode(200)
    @ApiOperation({ summary: 'Find attachment-family-resource by id' })
    @ApiOkResponse({ description: 'The record has been successfully requested.', type: CommonAttachmentFamilyResourceDto })
    async main(
        @Param('attachmentFamilyId') attachmentFamilyId: string,
        @Param('resourceId') resourceId: string,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            attachmentFamilyId,
            resourceId,
            constraint,
            timezone,
        );
    }
}
