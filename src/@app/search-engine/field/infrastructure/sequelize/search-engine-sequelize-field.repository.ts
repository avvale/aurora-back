import { Injectable, LiteralObject } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AuditingRunner, ICriteria, SequelizeRepository } from '@aurorajs.dev/core';
import { SearchEngineIFieldRepository } from '../../domain/search-engine-field.repository';
import { SearchEngineField } from '../../domain/search-engine-field.aggregate';
import { SearchEngineFieldMapper } from '../../domain/search-engine-field.mapper';
import { SearchEngineFieldModel } from './search-engine-sequelize-field.model';

@Injectable()
export class SearchEngineSequelizeFieldRepository extends SequelizeRepository<SearchEngineField, SearchEngineFieldModel> implements SearchEngineIFieldRepository
{
    public readonly aggregateName: string = 'SearchEngineField';
    public readonly mapper: SearchEngineFieldMapper = new SearchEngineFieldMapper();

    constructor(
        @InjectModel(SearchEngineFieldModel)
        public readonly repository: typeof SearchEngineFieldModel,
        public readonly criteria: ICriteria,
        public readonly auditingRunner: AuditingRunner,
    )
    {
        super();
    }
}