/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SearchEngineUpdateFieldsCommand } from './search-engine-update-fields.command';
import { SearchEngineUpdateFieldsService } from './search-engine-update-fields.service';
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

@CommandHandler(SearchEngineUpdateFieldsCommand)
export class SearchEngineUpdateFieldsCommandHandler implements ICommandHandler<SearchEngineUpdateFieldsCommand>
{
    constructor(
        private readonly updateFieldsService: SearchEngineUpdateFieldsService,
    ) {}

    async execute(command: SearchEngineUpdateFieldsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateFieldsService.main(
            {
                id: new SearchEngineFieldId(command.payload.id, { undefinable: true }),
                collectionId: new SearchEngineFieldCollectionId(command.payload.collectionId, { undefinable: true }),
                name: new SearchEngineFieldName(command.payload.name, { undefinable: true }),
                type: new SearchEngineFieldType(command.payload.type, { undefinable: true }),
                isNullable: new SearchEngineFieldIsNullable(command.payload.isNullable, { undefinable: true }),
            },
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
