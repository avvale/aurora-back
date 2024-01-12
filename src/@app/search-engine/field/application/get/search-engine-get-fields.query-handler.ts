import { SearchEngineFieldMapper, SearchEngineFieldResponse, SearchEngineGetFieldsQuery } from '@app/search-engine/field';
import { SearchEngineGetFieldsService } from '@app/search-engine/field/application/get/search-engine-get-fields.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(SearchEngineGetFieldsQuery)
export class SearchEngineGetFieldsQueryHandler implements IQueryHandler<SearchEngineGetFieldsQuery>
{
    private readonly mapper: SearchEngineFieldMapper = new SearchEngineFieldMapper();

    constructor(
        private readonly getFieldsService: SearchEngineGetFieldsService,
    ) {}

    async execute(query: SearchEngineGetFieldsQuery): Promise<SearchEngineFieldResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(
            await this.getFieldsService.main(
                query.queryStatement,
                query.constraint,
                query.cQMetadata,
            ),
        );
    }
}
