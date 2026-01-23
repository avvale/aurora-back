import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';

export class SearchEngineUpdateCollectionByIdCommand {
  constructor(
    public readonly payload: {
      id: string;
      name?: string;
      alias?: string;
      status?: string;
      documentsNumber?: number;
      defaultSortingField?: string;
      numMemoryShards?: number;
      timestampCreatedAt?: number;
      isEnableNestedFields?: boolean;
    },
    public readonly constraint?: QueryStatement,
    public readonly cQMetadata?: CQMetadata,
  ) {}
}
