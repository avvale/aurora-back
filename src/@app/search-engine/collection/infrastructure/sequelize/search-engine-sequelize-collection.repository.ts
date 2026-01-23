import {
  SearchEngineCollection,
  SearchEngineCollectionMapper,
  SearchEngineCollectionModel,
  SearchEngineICollectionRepository,
} from '@app/search-engine/collection';
import {
  AuditingRunner,
  ICriteria,
  SequelizeRepository,
} from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class SearchEngineSequelizeCollectionRepository
  extends SequelizeRepository<
    SearchEngineCollection,
    SearchEngineCollectionModel
  >
  implements SearchEngineICollectionRepository
{
  public readonly aggregateName: string = 'SearchEngineCollection';
  public readonly mapper: SearchEngineCollectionMapper =
    new SearchEngineCollectionMapper();

  constructor(
    @InjectModel(SearchEngineCollectionModel)
    public readonly repository: typeof SearchEngineCollectionModel,
    public readonly criteria: ICriteria,
    public readonly auditingRunner: AuditingRunner,
  ) {
    super();
  }
}
