/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { CommonAttachmentFamilyResourceDto, CommonUpdateAttachmentFamiliesResourcesDto, CommonUpdateAttachmentFamiliesResourcesHandler } from '@api/common/attachment-family-resource';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[common] attachment-family-resource')
@Controller('common/attachment-families-resources/update')
@Auth('common.attachmentFamilyResource.update')
export class CommonUpdateAttachmentFamiliesResourcesController
{
    constructor(
        private readonly handler: CommonUpdateAttachmentFamiliesResourcesHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update attachment-families-resources' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: CommonAttachmentFamilyResourceDto })
    async main(
        @Body() payload: CommonUpdateAttachmentFamiliesResourcesDto,
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    )
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
            auditing,
        );
    }
}
