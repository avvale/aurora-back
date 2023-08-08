import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { SearchEngineFieldResponse } from '../../domain/search-engine-field.response';
import { SearchEngineFieldMapper } from '../../domain/search-engine-field.mapper';
import { SearchEngineFieldId } from '../../domain/value-objects';
import { SearchEngineFindFieldByIdQuery } from './search-engine-find-field-by-id.query';
import { SearchEngineFindFieldByIdService } from './search-engine-find-field-by-id.service';

@QueryHandler(SearchEngineFindFieldByIdQuery)
export class SearchEngineFindFieldByIdQueryHandler implements IQueryHandler<SearchEngineFindFieldByIdQuery>
{
    private readonly mapper: SearchEngineFieldMapper = new SearchEngineFieldMapper();

    constructor(
        private readonly findFieldByIdService: SearchEngineFindFieldByIdService,
    ) {}

    async execute(query: SearchEngineFindFieldByIdQuery): Promise<SearchEngineFieldResponse>
    {
        const field = await this.findFieldByIdService.main(
            new SearchEngineFieldId(query.id),
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(field);
    }
}
