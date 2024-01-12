import { SearchEngineCollection, SearchEngineICollectionRepository } from '@app/search-engine/collection';
import { SearchEngineCollectionId } from '@app/search-engine/collection/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineFindCollectionByIdService
{
    constructor(
        private readonly repository: SearchEngineICollectionRepository,
    ) {}

    async main(
        id: SearchEngineCollectionId,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<SearchEngineCollection>
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
