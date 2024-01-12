import { SearchEngineCollectionMapper, SearchEngineCollectionResponse, SearchEngineRawSQLCollectionsQuery } from '@app/search-engine/collection';
import { SearchEngineRawSQLCollectionsService } from '@app/search-engine/collection/application/raw-sql/search-engine-raw-sql-collections.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(SearchEngineRawSQLCollectionsQuery)
export class SearchEngineRawSQLCollectionsQueryHandler implements IQueryHandler<SearchEngineRawSQLCollectionsQuery>
{
    private readonly mapper: SearchEngineCollectionMapper = new SearchEngineCollectionMapper();

    constructor(
        private readonly rawSQLCollectionsService: SearchEngineRawSQLCollectionsService,
    ) {}

    async execute(query: SearchEngineRawSQLCollectionsQuery): Promise<SearchEngineCollectionResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(await this.rawSQLCollectionsService.main(
            query.rawSQL,
            query.cQMetadata,
        ));
    }
}
