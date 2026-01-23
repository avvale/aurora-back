import { CQMetadata } from '@aurorajs.dev/core';

export class SearchEngineRawSQLCollectionsQuery {
  constructor(
    public readonly rawSQL?: string,
    public readonly cQMetadata?: CQMetadata,
  ) {}
}
