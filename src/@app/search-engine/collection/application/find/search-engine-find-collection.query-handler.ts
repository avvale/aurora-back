import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { SearchEngineCollectionResponse } from '../../domain/search-engine-collection.response';
import { SearchEngineCollectionMapper } from '../../domain/search-engine-collection.mapper';
import { SearchEngineFindCollectionQuery } from './search-engine-find-collection.query';
import { SearchEngineFindCollectionService } from './search-engine-find-collection.service';

@QueryHandler(SearchEngineFindCollectionQuery)
export class SearchEngineFindCollectionQueryHandler implements IQueryHandler<SearchEngineFindCollectionQuery>
{
    private readonly mapper: SearchEngineCollectionMapper = new SearchEngineCollectionMapper();

    constructor(
        private readonly findCollectionService: SearchEngineFindCollectionService,
    ) {}

    async execute(query: SearchEngineFindCollectionQuery): Promise<SearchEngineCollectionResponse>
    {
        const collection = await this.findCollectionService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(collection);
    }
}