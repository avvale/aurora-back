import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { SearchEngineFieldResponse } from '../../domain/search-engine-field.response';
import { SearchEngineFieldMapper } from '../../domain/search-engine-field.mapper';
import { SearchEngineRawSQLFieldsQuery } from './search-engine-raw-sql-fields.query';
import { SearchEngineRawSQLFieldsService } from './search-engine-raw-sql-fields.service';

@QueryHandler(SearchEngineRawSQLFieldsQuery)
export class SearchEngineRawSQLFieldsQueryHandler implements IQueryHandler<SearchEngineRawSQLFieldsQuery>
{
    private readonly mapper: SearchEngineFieldMapper = new SearchEngineFieldMapper();

    constructor(
        private readonly rawSQLFieldsService: SearchEngineRawSQLFieldsService,
    ) {}

    async execute(query: SearchEngineRawSQLFieldsQuery): Promise<SearchEngineFieldResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(await this.rawSQLFieldsService.main(
            query.rawSQL,
            query.cQMetadata,
        ));
    }
}
