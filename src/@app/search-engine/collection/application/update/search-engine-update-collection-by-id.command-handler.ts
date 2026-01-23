/* eslint-disable key-spacing */
import { SearchEngineUpdateCollectionByIdCommand } from '@app/search-engine/collection';
import { SearchEngineUpdateCollectionByIdService } from '@app/search-engine/collection/application/update/search-engine-update-collection-by-id.service';
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

@CommandHandler(SearchEngineUpdateCollectionByIdCommand)
export class SearchEngineUpdateCollectionByIdCommandHandler
  implements ICommandHandler<SearchEngineUpdateCollectionByIdCommand>
{
  constructor(
    private readonly updateCollectionByIdService: SearchEngineUpdateCollectionByIdService,
  ) {}

  async execute(
    command: SearchEngineUpdateCollectionByIdCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.updateCollectionByIdService.main(
      {
        id: new SearchEngineCollectionId(command.payload.id),
        name: new SearchEngineCollectionName(command.payload.name, {
          undefinable: true,
        }),
        alias: new SearchEngineCollectionAlias(command.payload.alias),
        status: new SearchEngineCollectionStatus(command.payload.status, {
          undefinable: true,
        }),
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
          { undefinable: true },
        ),
      },
      command.constraint,
      command.cQMetadata,
    );
  }
}
