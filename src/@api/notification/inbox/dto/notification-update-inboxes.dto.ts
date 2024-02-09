/* eslint-disable indent */
import { ApiProperty } from '@nestjs/swagger';

export class NotificationUpdateInboxesDto
{
    @ApiProperty({
        type       : String,
        description: 'id [input here api field description]',
    })
    id?: string;

    @ApiProperty({
        type       : Array,
        description: 'tenantIds [input here api field description]',
    })
    tenantIds?: string[];

    @ApiProperty({
        type       : String,
        description: 'notificationId [input here api field description]',
        example    : 'e6700e00-5a8b-5ecf-8f29-883b73353fb8',
    })
    notificationId?: string;

    @ApiProperty({
        type       : Number,
        description: 'sort [input here api field description]',
    })
    sort?: number;

    @ApiProperty({
        type       : String,
        description: 'accountId [input here api field description]',
    })
    accountId?: string;

    @ApiProperty({
        type       : String,
        description: 'accountCode [input here api field description]',
    })
    accountCode?: string;

    @ApiProperty({
        type       : Boolean,
        description: 'isImportant [input here api field description]',
    })
    isImportant?: boolean;

    @ApiProperty({
        type       : String,
        description: 'subject [input here api field description]',
    })
    subject?: string;

    @ApiProperty({
        type       : String,
        description: 'body [input here api field description]',
    })
    body?: string;

    @ApiProperty({
        type       : Object,
        description: 'attachments [input here api field description]',
    })
    attachments?: any;

    @ApiProperty({
        type       : Boolean,
        description: 'isRead [input here api field description]',
    })
    isRead?: boolean;

    @ApiProperty({
        type       : Boolean,
        description: 'isReadAtLeastOnce [input here api field description]',
    })
    isReadAtLeastOnce?: boolean;

    @ApiProperty({
        type       : Object,
        description: 'meta [input here api field description]',
    })
    meta?: any;

}
