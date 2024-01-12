import { SearchEngineFieldMapper, SearchEngineFieldResponse, SearchEngineFindFieldQuery } from '@app/search-engine/field';
import { SearchEngineFindFieldService } from '@app/search-engine/field/application/find/search-engine-find-field.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

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
