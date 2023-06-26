import { Injectable } from '@nestjs/common';
import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';
import { SearchEngineIFieldRepository } from '../../domain/search-engine-field.repository';
import { SearchEngineField } from '../../domain/search-engine-field.aggregate';

@Injectable()
export class SearchEngineGetFieldsService
{
    constructor(
        private readonly repository: SearchEngineIFieldRepository,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<SearchEngineField[]>
    {
        return await this.repository.get({
            queryStatement,
            constraint,
            cQMetadata,
        });
    }
}