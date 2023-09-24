/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { CommonAttachmentFamilyResourceDto, CommonCreateAttachmentFamiliesResourcesHandler, CommonCreateAttachmentFamilyResourceDto } from '@api/common/attachment-family-resource';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[common] attachment-family-resource')
@Controller('common/attachment-families-resources/create')
@Auth('common.attachmentFamilyResource.create')
export class CommonCreateAttachmentFamiliesResourcesController
{
    constructor(
        private readonly handler: CommonCreateAttachmentFamiliesResourcesHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create attachment-families-resources in batch' })
    @ApiCreatedResponse({ description: 'The records has been created successfully.' , type: [CommonAttachmentFamilyResourceDto]})
    @ApiBody({ type: [CommonCreateAttachmentFamilyResourceDto]})
    async main(
        @Body() payload: CommonCreateAttachmentFamilyResourceDto[],
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
            auditing,
        );
    }
}
