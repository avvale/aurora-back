/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SearchEngineUpdateFieldByIdCommand } from './search-engine-update-field-by-id.command';
import { SearchEngineUpdateFieldByIdService } from './search-engine-update-field-by-id.service';
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

@CommandHandler(SearchEngineUpdateFieldByIdCommand)
export class SearchEngineUpdateFieldByIdCommandHandler implements ICommandHandler<SearchEngineUpdateFieldByIdCommand>
{
    constructor(
        private readonly updateFieldByIdService: SearchEngineUpdateFieldByIdService,
    ) {}

    async execute(command: SearchEngineUpdateFieldByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateFieldByIdService.main(
            {
                id: new SearchEngineFieldId(command.payload.id),
                collectionId: new SearchEngineFieldCollectionId(command.payload.collectionId, { undefinable: true }),
                name: new SearchEngineFieldName(command.payload.name, { undefinable: true }),
                type: new SearchEngineFieldType(command.payload.type, { undefinable: true }),
                isNullable: new SearchEngineFieldIsNullable(command.payload.isNullable, { undefinable: true }),
            },
            command.constraint,
            command.cQMetadata,
        );
    }
}
