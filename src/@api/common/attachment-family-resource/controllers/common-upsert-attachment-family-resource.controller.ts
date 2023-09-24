/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { CommonAttachmentFamilyResourceDto, CommonUpdateAttachmentFamilyResourceByIdDto, CommonUpsertAttachmentFamilyResourceHandler } from '@api/common/attachment-family-resource';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[common] attachment-family-resource')
@Controller('common/attachment-family-resource/upsert')
@Auth('common.attachmentFamilyResource.upsert')
export class CommonUpsertAttachmentFamilyResourceController
{
    constructor(
        private readonly handler: CommonUpsertAttachmentFamilyResourceHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Upsert attachment-family-resource' })
    @ApiCreatedResponse({ description: 'The record has been successfully upserted.', type: CommonAttachmentFamilyResourceDto })
    async main(
        @Body() payload: CommonUpdateAttachmentFamilyResourceByIdDto,
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
