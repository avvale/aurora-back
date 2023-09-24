/* eslint-disable indent */
import { ApiProperty } from '@nestjs/swagger';

export class CommonUpdateAttachmentFamiliesResourcesDto
{
    @ApiProperty({
        type       : String,
        description: 'attachmentFamilyId [input here api field description]',
    })
    attachmentFamilyId?: string;

    @ApiProperty({
        type       : String,
        description: 'resourceId [input here api field description]',
    })
    resourceId?: string;

}
