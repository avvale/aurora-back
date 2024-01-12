/* eslint-disable key-spacing */
import { SearchEngineCreateCollectionCommand } from '@app/search-engine/collection';
import { SearchEngineCreateCollectionService } from '@app/search-engine/collection/application/create/search-engine-create-collection.service';
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

@CommandHandler(SearchEngineCreateCollectionCommand)
export class SearchEngineCreateCollectionCommandHandler implements ICommandHandler<SearchEngineCreateCollectionCommand>
{
    constructor(
        private readonly createCollectionService: SearchEngineCreateCollectionService,
    ) {}

    async execute(command: SearchEngineCreateCollectionCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createCollectionService.main(
            {
                id: new SearchEngineCollectionId(command.payload.id),
                name: new SearchEngineCollectionName(command.payload.name),
                alias: new SearchEngineCollectionAlias(command.payload.alias),
                status: new SearchEngineCollectionStatus(command.payload.status),
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
