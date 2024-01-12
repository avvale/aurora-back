/* eslint-disable key-spacing */
import { SearchEngineUpsertFieldCommand } from '@app/search-engine/field';
import { SearchEngineUpsertFieldService } from '@app/search-engine/field/application/upsert/search-engine-upsert-field.service';
import {
    SearchEngineFieldCollectionId,
    SearchEngineFieldId,
    SearchEngineFieldIsNullable,
    SearchEngineFieldName,
    SearchEngineFieldType,
} from '@app/search-engine/field/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

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
