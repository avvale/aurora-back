import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { SearchEngineCollectionResponse } from '../../domain/search-engine-collection.response';
import { SearchEngineCollectionMapper } from '../../domain/search-engine-collection.mapper';
import { SearchEngineGetCollectionsQuery } from './search-engine-get-collections.query';
import { SearchEngineGetCollectionsService } from './search-engine-get-collections.service';

@QueryHandler(SearchEngineGetCollectionsQuery)
export class SearchEngineGetCollectionsQueryHandler implements IQueryHandler<SearchEngineGetCollectionsQuery>
{
    private readonly mapper: SearchEngineCollectionMapper = new SearchEngineCollectionMapper();

    constructor(
        private readonly getCollectionsService: SearchEngineGetCollectionsService,
    ) {}

    async execute(query: SearchEngineGetCollectionsQuery): Promise<SearchEngineCollectionResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(await this.getCollectionsService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        ));
    }
}