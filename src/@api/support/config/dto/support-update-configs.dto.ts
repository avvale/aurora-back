/* eslint-disable indent */
import { ApiProperty } from '@nestjs/swagger';

export class SupportUpdateConfigsDto {
    @ApiProperty({
        type: String,
        description: 'id [input here api field description]',
    })
    id?: string;

    @ApiProperty({
        type: String,
        description: 'apiKey [input here api field description]',
    })
    apiKey?: string;

    @ApiProperty({
        type: String,
        description: 'listId [input here api field description]',
    })
    listId?: string;
}
