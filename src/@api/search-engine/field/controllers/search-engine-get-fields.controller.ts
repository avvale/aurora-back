/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  SearchEngineFieldDto,
  SearchEngineGetFieldsHandler,
} from '@api/search-engine/field';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('[search-engine] field')
@Controller('search-engine/fields/get')
@Auth('searchEngine.field.get')
export class SearchEngineGetFieldsController {
  constructor(private readonly handler: SearchEngineGetFieldsHandler) {}

  @Post()
  @HttpCode(200)
  @ApiOperation({ summary: 'Get fields according to query' })
  @ApiOkResponse({
    description: 'The records has been found successfully.',
    type: [SearchEngineFieldDto],
  })
  @ApiBody({ type: QueryStatement })
  @ApiQuery({ name: 'query', type: QueryStatement })
  async main(
    @Body('query') queryStatement?: QueryStatement,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ) {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
