import { SearchEngineField, SearchEngineIFieldRepository } from '@app/search-engine/field';
import { SearchEngineFieldId } from '@app/search-engine/field/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineFindFieldByIdService
{
    constructor(
        private readonly repository: SearchEngineIFieldRepository,
    ) {}

    async main(
        id: SearchEngineFieldId,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<SearchEngineField>
    {
        return await this.repository.findById(
            id,
            {
                constraint,
                cQMetadata,
            },
        );
    }
}
