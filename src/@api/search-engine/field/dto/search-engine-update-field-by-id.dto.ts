/* eslint-disable indent */
import { ApiProperty } from '@nestjs/swagger';

export class SearchEngineUpdateFieldByIdDto {
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
  collectionId?: string;

  @ApiProperty({
    type: String,
    description: 'name [input here api field description]',
  })
  name?: string;

  @ApiProperty({
    type: String,
    description: 'type [input here api field description]',
  })
  type?: string;

  @ApiProperty({
    type: Boolean,
    description: 'isNullable [input here api field description]',
    example: true,
  })
  isNullable?: boolean;
}
