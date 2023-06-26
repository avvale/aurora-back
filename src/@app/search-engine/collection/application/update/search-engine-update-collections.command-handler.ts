/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SearchEngineUpdateCollectionsCommand } from './search-engine-update-collections.command';
import { SearchEngineUpdateCollectionsService } from './search-engine-update-collections.service';
import {
    SearchEngineCollectionId,
    SearchEngineCollectionName,
    SearchEngineCollectionAlias,
    SearchEngineCollectionDocumentsNumber,
    SearchEngineCollectionDefaultSortingField,
    SearchEngineCollectionNumMemoryShards,
    SearchEngineCollectionTimestampCreatedAt,
    SearchEngineCollectionIsEnableNestedFields,
    SearchEngineCollectionCreatedAt,
    SearchEngineCollectionUpdatedAt,
    SearchEngineCollectionDeletedAt,
} from '../../domain/value-objects';

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