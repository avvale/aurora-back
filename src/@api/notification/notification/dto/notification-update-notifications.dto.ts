/* eslint-disable indent */
import { NotificationNotificationStatus } from '@api/graphql';
import { ApiProperty } from '@nestjs/swagger';

export class NotificationUpdateNotificationsDto
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
        type       : NotificationNotificationStatus,
        enum       : ['DRAFT','PENDING','SENT'],
        description: 'status [input here api field description]',
    })
    status?: NotificationNotificationStatus;

    @ApiProperty({
        type       : Array,
        description: 'accountRecipientIds [input here api field description]',
    })
    accountRecipientIds?: string[];

    @ApiProperty({
        type       : Array,
        description: 'tenantRecipientIds [input here api field description]',
    })
    tenantRecipientIds?: string[];

    @ApiProperty({
        type       : Array,
        description: 'scopeRecipients [input here api field description]',
    })
    scopeRecipients?: string[];

    @ApiProperty({
        type       : String,
        description: 'sendAt [input here api field description]',
    })
    sendAt?: string;

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
        type       : Number,
        description: 'totalRecipients [input here api field description]',
    })
    totalRecipients?: number;

    @ApiProperty({
        type       : Number,
        description: 'reads [input here api field description]',
    })
    reads?: number;

    @ApiProperty({
        type       : Object,
        description: 'meta [input here api field description]',
    })
    meta?: any;

}
