/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SearchEngineUpdateCollectionByIdCommand } from './search-engine-update-collection-by-id.command';
import { SearchEngineUpdateCollectionByIdService } from './search-engine-update-collection-by-id.service';
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

@CommandHandler(SearchEngineUpdateCollectionByIdCommand)
export class SearchEngineUpdateCollectionByIdCommandHandler implements ICommandHandler<SearchEngineUpdateCollectionByIdCommand>
{
    constructor(
        private readonly updateCollectionByIdService: SearchEngineUpdateCollectionByIdService,
    ) {}

    async execute(command: SearchEngineUpdateCollectionByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateCollectionByIdService.main(
            {
                id: new SearchEngineCollectionId(command.payload.id),
                name: new SearchEngineCollectionName(command.payload.name, { undefinable: true }),
                alias: new SearchEngineCollectionAlias(command.payload.alias),
                documentsNumber: new SearchEngineCollectionDocumentsNumber(command.payload.documentsNumber),
                defaultSortingField: new SearchEngineCollectionDefaultSortingField(command.payload.defaultSortingField),
                numMemoryShards: new SearchEngineCollectionNumMemoryShards(command.payload.numMemoryShards),
                timestampCreatedAt: new SearchEngineCollectionTimestampCreatedAt(command.payload.timestampCreatedAt),
                isEnableNestedFields: new SearchEngineCollectionIsEnableNestedFields(command.payload.isEnableNestedFields, { undefinable: true }),
            },
            command.constraint,
            command.cQMetadata,
        );
    }
}