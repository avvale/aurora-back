/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SearchEngineCreateCollectionCommand } from './search-engine-create-collection.command';
import { SearchEngineCreateCollectionService } from './search-engine-create-collection.service';
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