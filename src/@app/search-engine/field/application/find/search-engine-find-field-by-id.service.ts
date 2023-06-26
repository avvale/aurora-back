import { Injectable } from '@nestjs/common';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { SearchEngineIFieldRepository } from '../../domain/search-engine-field.repository';
import { SearchEngineField } from '../../domain/search-engine-field.aggregate';
import { SearchEngineFieldId } from '../../domain/value-objects';

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