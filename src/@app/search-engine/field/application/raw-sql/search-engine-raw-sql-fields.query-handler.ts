import { SearchEngineFieldMapper, SearchEngineFieldResponse, SearchEngineRawSQLFieldsQuery } from '@app/search-engine/field';
import { SearchEngineRawSQLFieldsService } from '@app/search-engine/field/application/raw-sql/search-engine-raw-sql-fields.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

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
