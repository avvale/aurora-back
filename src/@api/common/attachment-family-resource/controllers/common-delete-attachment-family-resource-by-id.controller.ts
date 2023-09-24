/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { CommonAttachmentFamilyResourceDto, CommonDeleteAttachmentFamilyResourceByIdHandler } from '@api/common/attachment-family-resource';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Delete, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[common] attachment-family-resource')
@Controller('common/attachment-family-resource/delete')
@Auth('common.attachmentFamilyResource.delete')
export class CommonDeleteAttachmentFamilyResourceByIdController
{
    constructor(
        private readonly handler: CommonDeleteAttachmentFamilyResourceByIdHandler,
    ) {}

    @Delete(':attachmentFamilyId/:resourceId')
    @ApiOperation({ summary: 'Delete attachment-family-resource by id' })
    @ApiOkResponse({ description: 'The record has been deleted successfully.', type: CommonAttachmentFamilyResourceDto })
    async main(
        @Param('attachmentFamilyId') attachmentFamilyId: string,
        @Param('resourceId') resourceId: string,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    )
    {
        return await this.handler.main(
            attachmentFamilyId,
            resourceId,
            constraint,
            timezone,
            auditing,
        );
    }
}
