import { Injectable, LiteralObject } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AuditingRunner, ICriteria, SequelizeRepository } from '@aurorajs.dev/core';
import { SearchEngineICollectionRepository } from '../../domain/search-engine-collection.repository';
import { SearchEngineCollection } from '../../domain/search-engine-collection.aggregate';
import { SearchEngineCollectionMapper } from '../../domain/search-engine-collection.mapper';
import { SearchEngineCollectionModel } from './search-engine-sequelize-collection.model';

@Injectable()
export class SearchEngineSequelizeCollectionRepository extends SequelizeRepository<SearchEngineCollection, SearchEngineCollectionModel> implements SearchEngineICollectionRepository
{
    public readonly aggregateName: string = 'SearchEngineCollection';
    public readonly mapper: SearchEngineCollectionMapper = new SearchEngineCollectionMapper();

    constructor(
        @InjectModel(SearchEngineCollectionModel)
        public readonly repository: typeof SearchEngineCollectionModel,
        public readonly criteria: ICriteria,
        public readonly auditingRunner: AuditingRunner,
    )
    {
        super();
    }
}