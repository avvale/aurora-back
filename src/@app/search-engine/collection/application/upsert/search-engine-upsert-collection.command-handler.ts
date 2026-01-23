/* eslint-disable key-spacing */
import { SearchEngineUpsertCollectionCommand } from '@app/search-engine/collection';
import { SearchEngineUpsertCollectionService } from '@app/search-engine/collection/application/upsert/search-engine-upsert-collection.service';
import {
  SearchEngineCollectionAlias,
  SearchEngineCollectionDefaultSortingField,
  SearchEngineCollectionDocumentsNumber,
  SearchEngineCollectionId,
  SearchEngineCollectionIsEnableNestedFields,
  SearchEngineCollectionName,
  SearchEngineCollectionNumMemoryShards,
  SearchEngineCollectionStatus,
  SearchEngineCollectionTimestampCreatedAt,
} from '@app/search-engine/collection/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(SearchEngineUpsertCollectionCommand)
export class SearchEngineUpsertCollectionCommandHandler
  implements ICommandHandler<SearchEngineUpsertCollectionCommand>
{
  constructor(
    private readonly upsertCollectionService: SearchEngineUpsertCollectionService,
  ) {}

  async execute(command: SearchEngineUpsertCollectionCommand): Promise<void> {
    // call to use case and implements ValueObjects
    await this.upsertCollectionService.main(
      {
        id: new SearchEngineCollectionId(command.payload.id),
        name: new SearchEngineCollectionName(command.payload.name),
        alias: new SearchEngineCollectionAlias(command.payload.alias),
        status: new SearchEngineCollectionStatus(command.payload.status),
        documentsNumber: new SearchEngineCollectionDocumentsNumber(
          command.payload.documentsNumber,
        ),
        defaultSortingField: new SearchEngineCollectionDefaultSortingField(
          command.payload.defaultSortingField,
        ),
        numMemoryShards: new SearchEngineCollectionNumMemoryShards(
          command.payload.numMemoryShards,
        ),
        timestampCreatedAt: new SearchEngineCollectionTimestampCreatedAt(
          command.payload.timestampCreatedAt,
        ),
        isEnableNestedFields: new SearchEngineCollectionIsEnableNestedFields(
          command.payload.isEnableNestedFields,
        ),
      },
      command.cQMetadata,
    );
  }
}
