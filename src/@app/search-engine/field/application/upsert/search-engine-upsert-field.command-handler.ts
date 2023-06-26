/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SearchEngineUpsertFieldCommand } from './search-engine-upsert-field.command';
import { SearchEngineUpsertFieldService } from './search-engine-upsert-field.service';
import {
    SearchEngineFieldId,
    SearchEngineFieldCollectionId,
    SearchEngineFieldName,
    SearchEngineFieldType,
    SearchEngineFieldIsNullable,
    SearchEngineFieldCreatedAt,
    SearchEngineFieldUpdatedAt,
    SearchEngineFieldDeletedAt,
} from '../../domain/value-objects';

@CommandHandler(SearchEngineUpsertFieldCommand)
export class SearchEngineUpsertFieldCommandHandler implements ICommandHandler<SearchEngineUpsertFieldCommand>
{
    constructor(
        private readonly upsertFieldService: SearchEngineUpsertFieldService,
    ) {}

    async execute(command: SearchEngineUpsertFieldCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.upsertFieldService.main(
            {
                id: new SearchEngineFieldId(command.payload.id),
                collectionId: new SearchEngineFieldCollectionId(command.payload.collectionId),
                name: new SearchEngineFieldName(command.payload.name),
                type: new SearchEngineFieldType(command.payload.type),
                isNullable: new SearchEngineFieldIsNullable(command.payload.isNullable),
            },
            command.cQMetadata,
        );
    }
}