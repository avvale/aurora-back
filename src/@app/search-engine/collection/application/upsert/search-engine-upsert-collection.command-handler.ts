/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SearchEngineUpsertCollectionCommand } from './search-engine-upsert-collection.command';
import { SearchEngineUpsertCollectionService } from './search-engine-upsert-collection.service';
import {
    SearchEngineCollectionId,
    SearchEngineCollectionName,
    SearchEngineCollectionDocumentsNumber,
    SearchEngineCollectionDefaultSortingField,
    SearchEngineCollectionNumMemoryShards,
    SearchEngineCollectionTimestampCreatedAt,
    SearchEngineCollectionIsEnableNestedFields,
    SearchEngineCollectionCreatedAt,
    SearchEngineCollectionUpdatedAt,
    SearchEngineCollectionDeletedAt,
} from '../../domain/value-objects';

@CommandHandler(SearchEngineUpsertCollectionCommand)
export class SearchEngineUpsertCollectionCommandHandler implements ICommandHandler<SearchEngineUpsertCollectionCommand>
{
    constructor(
        private readonly upsertCollectionService: SearchEngineUpsertCollectionService,
    ) {}

    async execute(command: SearchEngineUpsertCollectionCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.upsertCollectionService.main(
            {
                id: new SearchEngineCollectionId(command.payload.id),
                name: new SearchEngineCollectionName(command.payload.name),
                documentsNumber: new SearchEngineCollectionDocumentsNumber(command.payload.documentsNumber),
                defaultSortingField: new SearchEngineCollectionDefaultSortingField(command.payload.defaultSortingField),
                numMemoryShards: new SearchEngineCollectionNumMemoryShards(command.payload.numMemoryShards),
                timestampCreatedAt: new SearchEngineCollectionTimestampCreatedAt(command.payload.timestampCreatedAt),
                isEnableNestedFields: new SearchEngineCollectionIsEnableNestedFields(command.payload.isEnableNestedFields),
            },
            command.cQMetadata,
        );
    }
}