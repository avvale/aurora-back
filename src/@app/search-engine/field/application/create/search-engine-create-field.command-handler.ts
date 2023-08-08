/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SearchEngineCreateFieldCommand } from './search-engine-create-field.command';
import { SearchEngineCreateFieldService } from './search-engine-create-field.service';
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

@CommandHandler(SearchEngineCreateFieldCommand)
export class SearchEngineCreateFieldCommandHandler implements ICommandHandler<SearchEngineCreateFieldCommand>
{
    constructor(
        private readonly createFieldService: SearchEngineCreateFieldService,
    ) {}

    async execute(command: SearchEngineCreateFieldCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createFieldService.main(
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
