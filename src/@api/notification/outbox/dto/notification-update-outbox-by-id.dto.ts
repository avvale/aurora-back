/* eslint-disable indent */
import { ApiProperty } from '@nestjs/swagger';

export class NotificationUpdateOutboxByIdDto
{
    @ApiProperty({
        type       : String,
        description: 'id [input here api field description]',
    })
    id: string;

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
        type       : Object,
        description: 'meta [input here api field description]',
    })
    meta?: any;

}
