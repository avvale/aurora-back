import {
  SearchEngineField,
  SearchEngineFieldMapper,
  SearchEngineFieldModel,
  SearchEngineIFieldRepository,
} from '@app/search-engine/field';
import {
  AuditingRunner,
  ICriteria,
  SequelizeRepository,
} from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class SearchEngineSequelizeFieldRepository
  extends SequelizeRepository<SearchEngineField, SearchEngineFieldModel>
  implements SearchEngineIFieldRepository
{
  public readonly aggregateName: string = 'SearchEngineField';
  public readonly mapper: SearchEngineFieldMapper =
    new SearchEngineFieldMapper();

  constructor(
    @InjectModel(SearchEngineFieldModel)
    public readonly repository: typeof SearchEngineFieldModel,
    public readonly criteria: ICriteria,
    public readonly auditingRunner: AuditingRunner,
  ) {
    super();
  }
}
