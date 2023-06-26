/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SearchEngineCreateFieldsCommand } from './search-engine-create-fields.command';
import { SearchEngineCreateFieldsService } from './search-engine-create-fields.service';
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

@CommandHandler(SearchEngineCreateFieldsCommand)
export class SearchEngineCreateFieldsCommandHandler implements ICommandHandler<SearchEngineCreateFieldsCommand>
{
    constructor(
        private readonly createFieldsService: SearchEngineCreateFieldsService,
    ) {}

    async execute(command: SearchEngineCreateFieldsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createFieldsService.main(
            command.payload
                .map(field =>
                {
                    return {
                        id: new SearchEngineFieldId(field.id),
                        collectionId: new SearchEngineFieldCollectionId(field.collectionId),
                        name: new SearchEngineFieldName(field.name),
                        type: new SearchEngineFieldType(field.type),
                        isNullable: new SearchEngineFieldIsNullable(field.isNullable),
                    };
                }),
            command.cQMetadata,
        );
    }
}