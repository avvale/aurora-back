/* eslint-disable indent */
import { NotificationOutBoxNotificationAccountTenantOperator } from '@api/graphql';
import { ApiProperty } from '@nestjs/swagger';

export class NotificationOutBoxNotificationDto
{
    @ApiProperty({
        type       : String,
        description: 'id [input here api field description]',
    })
    id: string;

    @ApiProperty({
        type       : Number,
        description: 'sort [input here api field description]',
    })
    sort: number;

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
