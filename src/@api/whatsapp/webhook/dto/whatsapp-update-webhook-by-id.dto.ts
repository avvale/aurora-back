/* eslint-disable indent */
import { ApiProperty } from '@nestjs/swagger';

export class WhatsappUpdateWebhookByIdDto
{
    @ApiProperty({
        type       : String,
        description: 'id [input here api field description]',
    })
    id: string;

    @ApiProperty({
        type       : Object,
        description: 'payload [input here api field description]',
    })
    payload?: any;

}
