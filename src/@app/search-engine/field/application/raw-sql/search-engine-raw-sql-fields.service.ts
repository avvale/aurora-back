import { SearchEngineField, SearchEngineIFieldRepository } from '@app/search-engine/field';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineRawSQLFieldsService
{
    constructor(
        private readonly repository: SearchEngineIFieldRepository,
    ) {}

    async main(
        rawSQL?: string,
        cQMetadata?: CQMetadata,
    ): Promise<SearchEngineField[]>
    {
        return await this.repository.rawSQL({
            rawSQL,
            cQMetadata,
        });
    }
}
