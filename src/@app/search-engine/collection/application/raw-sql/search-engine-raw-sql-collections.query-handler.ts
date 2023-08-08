import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { SearchEngineCollectionResponse } from '../../domain/search-engine-collection.response';
import { SearchEngineCollectionMapper } from '../../domain/search-engine-collection.mapper';
import { SearchEngineRawSQLCollectionsQuery } from './search-engine-raw-sql-collections.query';
import { SearchEngineRawSQLCollectionsService } from './search-engine-raw-sql-collections.service';

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
