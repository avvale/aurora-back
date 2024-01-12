/* eslint-disable key-spacing */
import { SearchEngineUpdateCollectionsCommand } from '@app/search-engine/collection';
import { SearchEngineUpdateCollectionsService } from '@app/search-engine/collection/application/update/search-engine-update-collections.service';
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

@CommandHandler(SearchEngineUpdateCollectionsCommand)
export class SearchEngineUpdateCollectionsCommandHandler implements ICommandHandler<SearchEngineUpdateCollectionsCommand>
{
    constructor(
        private readonly updateCollectionsService: SearchEngineUpdateCollectionsService,
    ) {}

    async execute(command: SearchEngineUpdateCollectionsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateCollectionsService.main(
            {
                id: new SearchEngineCollectionId(command.payload.id, { undefinable: true }),
                name: new SearchEngineCollectionName(command.payload.name, { undefinable: true }),
                alias: new SearchEngineCollectionAlias(command.payload.alias),
                status: new SearchEngineCollectionStatus(command.payload.status, { undefinable: true }),
                documentsNumber: new SearchEngineCollectionDocumentsNumber(command.payload.documentsNumber),
                defaultSortingField: new SearchEngineCollectionDefaultSortingField(command.payload.defaultSortingField),
                numMemoryShards: new SearchEngineCollectionNumMemoryShards(command.payload.numMemoryShards),
                timestampCreatedAt: new SearchEngineCollectionTimestampCreatedAt(command.payload.timestampCreatedAt),
                isEnableNestedFields: new SearchEngineCollectionIsEnableNestedFields(command.payload.isEnableNestedFields, { undefinable: true }),
            },
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
