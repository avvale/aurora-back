import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { SearchEngineFieldResponse } from '../../domain/search-engine-field.response';
import { SearchEngineFieldMapper } from '../../domain/search-engine-field.mapper';
import { SearchEngineFindFieldQuery } from './search-engine-find-field.query';
import { SearchEngineFindFieldService } from './search-engine-find-field.service';

@QueryHandler(SearchEngineFindFieldQuery)
export class SearchEngineFindFieldQueryHandler implements IQueryHandler<SearchEngineFindFieldQuery>
{
    private readonly mapper: SearchEngineFieldMapper = new SearchEngineFieldMapper();

    constructor(
        private readonly findFieldService: SearchEngineFindFieldService,
    ) {}

    async execute(query: SearchEngineFindFieldQuery): Promise<SearchEngineFieldResponse>
    {
        const field = await this.findFieldService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(field);
    }
}
