/* eslint-disable indent */
import { SearchEngineCollectionStatus } from '@api/graphql';
import { ApiProperty } from '@nestjs/swagger';

export class SearchEngineCreateCollectionDto
{
    @ApiProperty({
        type       : String,
        description: 'id [input here api field description]',
    })
    id: string;

    @ApiProperty({
        type       : String,
        description: 'name [input here api field description]',
    })
    name: string;

    @ApiProperty({
        type       : String,
        description: 'alias [input here api field description]',
    })
    alias?: string;

    @ApiProperty({
        enum       : SearchEngineCollectionStatus,
        enumName   : 'SearchEngineCollectionStatus',
        description: 'status [input here api field description]',
        example    : SearchEngineCollectionStatus.CONSOLIDATED,
    })
    status: SearchEngineCollectionStatus;

    @ApiProperty({
        type       : Number,
        description: 'documentsNumber [input here api field description]',
    })
    documentsNumber?: number;

    @ApiProperty({
        type       : String,
        description: 'defaultSortingField [input here api field description]',
    })
    defaultSortingField?: string;

    @ApiProperty({
        type       : Number,
        description: 'numMemoryShards [input here api field description]',
    })
    numMemoryShards?: number;

    @ApiProperty({
        type       : Number,
        description: 'timestampCreatedAt [input here api field description]',
    })
    timestampCreatedAt?: number;

    @ApiProperty({
        type       : Boolean,
        description: 'isEnableNestedFields [input here api field description]',
        example    : true,
    })
    isEnableNestedFields: boolean;

}
