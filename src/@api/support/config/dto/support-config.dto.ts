/* eslint-disable indent */
import { ApiProperty } from '@nestjs/swagger';

export class SupportConfigDto {
    @ApiProperty({
        type: String,
        description: 'id [input here api field description]',
    })
    id: string;

    @ApiProperty({
        type: Number,
        description: 'rowId [input here api field description]',
    })
    rowId: number;

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

    @ApiProperty({
        type: String,
        description: 'createdAt [input here api field description]',
    })
    createdAt?: string;

    @ApiProperty({
        type: String,
        description: 'updatedAt [input here api field description]',
    })
    updatedAt?: string;

    @ApiProperty({
        type: String,
        description: 'deletedAt [input here api field description]',
    })
    deletedAt?: string;
}
