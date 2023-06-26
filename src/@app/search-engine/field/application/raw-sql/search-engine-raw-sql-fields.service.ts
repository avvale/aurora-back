import { Injectable } from '@nestjs/common';
import { CQMetadata } from '@aurorajs.dev/core';
import { SearchEngineIFieldRepository } from '../../domain/search-engine-field.repository';
import { SearchEngineField } from '../../domain/search-engine-field.aggregate';

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