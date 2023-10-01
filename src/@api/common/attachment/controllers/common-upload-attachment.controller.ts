/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { CoreFileUploaded } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CommonUploadAttachmentHandler } from '../handlers/common-upload-attachment.handler';

@ApiTags('[common] attachment')
@Controller('common/attachment/upload')
@Auth('common.attachment.update')
export class CommonUploadAttachmentController
{
    constructor(
        private readonly handler: CommonUploadAttachmentHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Defines the operation of this controller' })
    @ApiCreatedResponse({ description: 'Defines the action performed', type: Boolean })
    async main(
        @Body('files') files: CoreFileUploaded[],
    )
    {
        return await this.handler.main(
            files,
        );
    }
}