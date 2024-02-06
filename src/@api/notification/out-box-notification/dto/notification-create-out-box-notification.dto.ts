/* eslint-disable indent */
import { NotificationOutBoxNotificationAccountTenantOperator } from '@api/graphql';
import { ApiProperty } from '@nestjs/swagger';

export class NotificationCreateOutBoxNotificationDto
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
        type       : Array,
        description: 'accountIds [input here api field description]',
    })
    accountIds?: string[];

    @ApiProperty({
        type       : NotificationOutBoxNotificationAccountTenantOperator,
        enum       : ['AND','OR'],
        description: 'accountTenantOperator [input here api field description]',
    })
    accountTenantOperator?: NotificationOutBoxNotificationAccountTenantOperator;

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
        type       : Object,
        description: 'meta [input here api field description]',
    })
    meta?: any;

}
