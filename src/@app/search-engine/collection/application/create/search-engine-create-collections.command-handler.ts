/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SearchEngineCreateCollectionsCommand } from './search-engine-create-collections.command';
import { SearchEngineCreateCollectionsService } from './search-engine-create-collections.service';
import {
    SearchEngineCollectionId,
    SearchEngineCollectionName,
    SearchEngineCollectionAlias,
    SearchEngineCollectionStatus,
    SearchEngineCollectionDocumentsNumber,
    SearchEngineCollectionDefaultSortingField,
    SearchEngineCollectionNumMemoryShards,
    SearchEngineCollectionTimestampCreatedAt,
    SearchEngineCollectionIsEnableNestedFields,
    SearchEngineCollectionCreatedAt,
    SearchEngineCollectionUpdatedAt,
    SearchEngineCollectionDeletedAt,
} from '../../domain/value-objects';

@CommandHandler(SearchEngineCreateCollectionsCommand)
export class SearchEngineCreateCollectionsCommandHandler implements ICommandHandler<SearchEngineCreateCollectionsCommand>
{
    constructor(
        private readonly createCollectionsService: SearchEngineCreateCollectionsService,
    ) {}

    async execute(command: SearchEngineCreateCollectionsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createCollectionsService.main(
            command.payload
                .map(collection =>
                {
                    return {
                        id: new SearchEngineCollectionId(collection.id),
                        name: new SearchEngineCollectionName(collection.name),
                        alias: new SearchEngineCollectionAlias(collection.alias),
                        status: new SearchEngineCollectionStatus(collection.status),
                        documentsNumber: new SearchEngineCollectionDocumentsNumber(collection.documentsNumber),
                        defaultSortingField: new SearchEngineCollectionDefaultSortingField(collection.defaultSortingField),
                        numMemoryShards: new SearchEngineCollectionNumMemoryShards(collection.numMemoryShards),
                        timestampCreatedAt: new SearchEngineCollectionTimestampCreatedAt(collection.timestampCreatedAt),
                        isEnableNestedFields: new SearchEngineCollectionIsEnableNestedFields(collection.isEnableNestedFields),
                    };
                }),
            command.cQMetadata,
        );
    }
}