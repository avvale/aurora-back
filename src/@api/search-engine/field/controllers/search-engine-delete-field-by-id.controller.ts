/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  SearchEngineDeleteFieldByIdHandler,
  SearchEngineFieldDto,
} from '@api/search-engine/field';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Delete, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[search-engine] field')
@Controller('search-engine/field/delete')
@Auth('searchEngine.field.delete')
export class SearchEngineDeleteFieldByIdController {
  constructor(private readonly handler: SearchEngineDeleteFieldByIdHandler) {}

  @Delete(':id')
  @ApiOperation({ summary: 'Delete field by id' })
  @ApiOkResponse({
    description: 'The record has been deleted successfully.',
    type: SearchEngineFieldDto,
  })
  async main(
    @Param('id') id: string,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ) {
    return await this.handler.main(id, constraint, timezone);
  }
}
