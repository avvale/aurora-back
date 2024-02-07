/* eslint-disable indent */
import { NotificationNotificationStatus } from '@api/graphql';
import { ApiProperty } from '@nestjs/swagger';

export class NotificationNotificationDto
{
    @ApiProperty({
        type       : String,
        description: 'id [input here api field description]',
    })
    id: string;

    @ApiProperty({
        type       : String,
        description: 'tenantId [input here api field description]',
    })
    tenantId?: string;

    @ApiProperty({
        type       : NotificationNotificationStatus,
        enum       : ['DRAFT','PENDING','SENT'],
        description: 'status [input here api field description]',
    })
    status: NotificationNotificationStatus;

    @ApiProperty({
        type       : Array,
        description: 'accountIds [input here api field description]',
    })
    accountIds?: string[];

    @ApiProperty({
        type       : Array,
        description: 'tenantIds [input here api field description]',
    })
    tenantIds?: string[];

    @ApiProperty({
        type       : Array,
        description: 'scopes [input here api field description]',
    })
    scopes?: string[];

    @ApiProperty({
        type       : String,
        description: 'sendAt [input here api field description]',
    })
    sendAt?: string;

    @ApiProperty({
        type       : Boolean,
        description: 'isImportant [input here api field description]',
    })
    isImportant: boolean;

    @ApiProperty({
        type       : String,
        description: 'subject [input here api field description]',
    })
    subject: string;

    @ApiProperty({
        type       : String,
        description: 'body [input here api field description]',
    })
    body: string;

    @ApiProperty({
        type       : Object,
        description: 'attachments [input here api field description]',
    })
    attachments?: any;

    @ApiProperty({
        type       : Number,
        description: 'totalRecipients [input here api field description]',
    })
    totalRecipients: number;

    @ApiProperty({
        type       : Number,
        description: 'reads [input here api field description]',
    })
    reads: number;

    @ApiProperty({
        type       : Object,
        description: 'meta [input here api field description]',
    })
    meta?: any;

    @ApiProperty({
        type       : String,
        description: 'createdAt [input here api field description]',
    })
    createdAt?: string;

    @ApiProperty({
        type       : String,
        description: 'updatedAt [input here api field description]',
    })
    updatedAt?: string;

    @ApiProperty({
        type       : String,
        description: 'deletedAt [input here api field description]',
    })
    deletedAt?: string;

}
