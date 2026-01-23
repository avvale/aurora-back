/* eslint-disable indent */
import { SearchEngineCollectionDto } from '@api/search-engine/collection';
import { ApiProperty } from '@nestjs/swagger';

export class SearchEngineFieldDto {
  @ApiProperty({
    type: String,
    description: 'id [input here api field description]',
  })
  id: string;

  @ApiProperty({
    type: String,
    description: 'collectionId [input here api field description]',
    example: 'aa44aac2-1fd1-502a-aefa-9d330044a045',
  })
  collectionId: string;

  @ApiProperty({
    type: () => SearchEngineCollectionDto,
    description: 'SearchEngineCollection [input here api field description]',
  })
  collection?: SearchEngineCollectionDto;

  @ApiProperty({
    type: String,
    description: 'name [input here api field description]',
  })
  name: string;

  @ApiProperty({
    type: String,
    description: 'type [input here api field description]',
  })
  type: string;

  @ApiProperty({
    type: Boolean,
    description: 'isNullable [input here api field description]',
    example: true,
  })
  isNullable: boolean;

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
