import { CQMetadata } from '@aurorajs.dev/core';

export class SearchEngineCreateFieldCommand {
  constructor(
    public readonly payload: {
      id: string;
      collectionId: string;
      name: string;
      type: string;
      isNullable: boolean;
    },
    public readonly cQMetadata?: CQMetadata,
  ) {}
}
