import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { SearchEngineCollectionResponse } from '../../domain/search-engine-collection.response';
import { SearchEngineCollectionMapper } from '../../domain/search-engine-collection.mapper';
import { SearchEngineCollectionId } from '../../domain/value-objects';
import { SearchEngineFindCollectionByIdQuery } from './search-engine-find-collection-by-id.query';
import { SearchEngineFindCollectionByIdService } from './search-engine-find-collection-by-id.service';

@QueryHandler(SearchEngineFindCollectionByIdQuery)
export class SearchEngineFindCollectionByIdQueryHandler implements IQueryHandler<SearchEngineFindCollectionByIdQuery>
{
    private readonly mapper: SearchEngineCollectionMapper = new SearchEngineCollectionMapper();

    constructor(
        private readonly findCollectionByIdService: SearchEngineFindCollectionByIdService,
    ) {}

    async execute(query: SearchEngineFindCollectionByIdQuery): Promise<SearchEngineCollectionResponse>
    {
        const collection = await this.findCollectionByIdService.main(
            new SearchEngineCollectionId(query.id),
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(collection);
    }
}
