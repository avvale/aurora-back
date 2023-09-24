/* eslint-disable indent */
import { CommonAttachmentFamilyDto } from '@api/common/attachment-family';
import { CommonResourceDto } from '@api/common/resource';
import { ApiProperty } from '@nestjs/swagger';

export class CommonAttachmentFamilyResourceDto
{
    @ApiProperty({
        type       : String,
        description: 'attachmentFamilyId [input here api field description]',
    })
    attachmentFamilyId: string;

    @ApiProperty({
        type       : () => CommonAttachmentFamilyDto,
        description: 'CommonAttachmentFamily [input here api field description]',
    })
    attachmentFamily?: CommonAttachmentFamilyDto;

    @ApiProperty({
        type       : String,
        description: 'resourceId [input here api field description]',
    })
    resourceId: string;

    @ApiProperty({
        type       : () => CommonResourceDto,
        description: 'CommonResource [input here api field description]',
    })
    resource?: CommonResourceDto;

}