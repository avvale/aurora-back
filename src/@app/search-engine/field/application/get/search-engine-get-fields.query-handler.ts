import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { SearchEngineFieldResponse } from '../../domain/search-engine-field.response';
import { SearchEngineFieldMapper } from '../../domain/search-engine-field.mapper';
import { SearchEngineGetFieldsQuery } from './search-engine-get-fields.query';
import { SearchEngineGetFieldsService } from './search-engine-get-fields.service';

@QueryHandler(SearchEngineGetFieldsQuery)
export class SearchEngineGetFieldsQueryHandler implements IQueryHandler<SearchEngineGetFieldsQuery>
{
    private readonly mapper: SearchEngineFieldMapper = new SearchEngineFieldMapper();

    constructor(
        private readonly getFieldsService: SearchEngineGetFieldsService,
    ) {}

    async execute(query: SearchEngineGetFieldsQuery): Promise<SearchEngineFieldResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(await this.getFieldsService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        ));
    }
}