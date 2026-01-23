import { SearchEngineUpdatedFieldEvent } from './search-engine-updated-field.event';

export class SearchEngineUpdatedFieldsEvent {
  constructor(public readonly fields: SearchEngineUpdatedFieldEvent[]) {}
}
