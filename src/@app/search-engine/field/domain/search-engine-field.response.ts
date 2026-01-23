import { SearchEngineCollectionResponse } from '@app/search-engine/collection';

export class SearchEngineFieldResponse {
  constructor(
    public readonly id: string,
    public readonly collectionId: string,
    public readonly name: string,
    public readonly type: string,
    public readonly isNullable: boolean,
    public readonly createdAt: string,
    public readonly updatedAt: string,
    public readonly deletedAt: string,
    public readonly collection: SearchEngineCollectionResponse,
  ) {}
}
