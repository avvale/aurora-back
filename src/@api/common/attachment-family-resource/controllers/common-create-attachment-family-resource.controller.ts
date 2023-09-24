/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { CommonAttachmentFamilyResourceDto, CommonCreateAttachmentFamilyResourceDto, CommonCreateAttachmentFamilyResourceHandler } from '@api/common/attachment-family-resource';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[common] attachment-family-resource')
@Controller('common/attachment-family-resource/create')
@Auth('common.attachmentFamilyResource.create')
export class CommonCreateAttachmentFamilyResourceController
{
    constructor(
        private readonly handler: CommonCreateAttachmentFamilyResourceHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create attachment-family-resource' })
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: CommonAttachmentFamilyResourceDto })
    async main(
        @Body() payload: CommonCreateAttachmentFamilyResourceDto,
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
