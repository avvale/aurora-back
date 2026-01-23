import {
  SearchEngineField,
  searchEngineMockFieldData,
} from '@app/search-engine/field';
import {
  SearchEngineFieldCollectionId,
  SearchEngineFieldCreatedAt,
  SearchEngineFieldDeletedAt,
  SearchEngineFieldId,
  SearchEngineFieldIsNullable,
  SearchEngineFieldName,
  SearchEngineFieldType,
  SearchEngineFieldUpdatedAt,
} from '@app/search-engine/field/domain/value-objects';
import { MockSeeder } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class SearchEngineMockFieldSeeder extends MockSeeder<SearchEngineField> {
  public collectionSource: SearchEngineField[];

  constructor() {
    super();
    this._createMock();
  }

  private _createMock(): void {
    this.collectionSource = [];

    for (const field of _.orderBy(searchEngineMockFieldData, ['id'])) {
      this.collectionSource.push(
        SearchEngineField.register(
          new SearchEngineFieldId(field.id),
          new SearchEngineFieldCollectionId(field.collectionId),
          new SearchEngineFieldName(field.name),
          new SearchEngineFieldType(field.type),
          new SearchEngineFieldIsNullable(field.isNullable),
          new SearchEngineFieldCreatedAt({ currentTimestamp: true }),
          new SearchEngineFieldUpdatedAt({ currentTimestamp: true }),
          new SearchEngineFieldDeletedAt(null),
        ),
      );
    }
  }
}
