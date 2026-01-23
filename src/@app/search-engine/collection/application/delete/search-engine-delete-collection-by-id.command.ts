import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';

export class SearchEngineDeleteCollectionByIdCommand {
  constructor(
    public readonly id: string,
    public readonly constraint?: QueryStatement,
    public readonly cQMetadata?: CQMetadata,
  ) {}
}
