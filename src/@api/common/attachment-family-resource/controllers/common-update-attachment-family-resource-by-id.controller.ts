/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { CommonAttachmentFamilyResourceDto, CommonUpdateAttachmentFamilyResourceByIdDto, CommonUpdateAttachmentFamilyResourceByIdHandler } from '@api/common/attachment-family-resource';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[common] attachment-family-resource')
@Controller('common/attachment-family-resource/update')
@Auth('common.attachmentFamilyResource.update')
export class CommonUpdateAttachmentFamilyResourceByIdController
{
    constructor(
        private readonly handler: CommonUpdateAttachmentFamilyResourceByIdHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update attachment-family-resource by id' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: CommonAttachmentFamilyResourceDto })
    async main(
        @Body() payload: CommonUpdateAttachmentFamilyResourceByIdDto,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    )
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
            auditing,
        );
    }
}
