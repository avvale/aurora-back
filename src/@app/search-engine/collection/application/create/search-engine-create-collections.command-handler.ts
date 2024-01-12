/* eslint-disable key-spacing */
import { SearchEngineCreateCollectionsCommand } from '@app/search-engine/collection';
import { SearchEngineCreateCollectionsService } from '@app/search-engine/collection/application/create/search-engine-create-collections.service';
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
