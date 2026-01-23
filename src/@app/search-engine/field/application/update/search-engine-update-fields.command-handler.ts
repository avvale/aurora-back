/* eslint-disable key-spacing */
import { SearchEngineUpdateFieldsCommand } from '@app/search-engine/field';
import { SearchEngineUpdateFieldsService } from '@app/search-engine/field/application/update/search-engine-update-fields.service';
import {
  SearchEngineFieldCollectionId,
  SearchEngineFieldId,
  SearchEngineFieldIsNullable,
  SearchEngineFieldName,
  SearchEngineFieldType,
} from '@app/search-engine/field/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(SearchEngineUpdateFieldsCommand)
export class SearchEngineUpdateFieldsCommandHandler
  implements ICommandHandler<SearchEngineUpdateFieldsCommand>
{
  constructor(
    private readonly updateFieldsService: SearchEngineUpdateFieldsService,
  ) {}

  async execute(command: SearchEngineUpdateFieldsCommand): Promise<void> {
    // call to use case and implements ValueObjects
    await this.updateFieldsService.main(
      {
        id: new SearchEngineFieldId(command.payload.id, { undefinable: true }),
        collectionId: new SearchEngineFieldCollectionId(
          command.payload.collectionId,
          { undefinable: true },
        ),
        name: new SearchEngineFieldName(command.payload.name, {
          undefinable: true,
        }),
        type: new SearchEngineFieldType(command.payload.type, {
          undefinable: true,
        }),
        isNullable: new SearchEngineFieldIsNullable(
          command.payload.isNullable,
          { undefinable: true },
        ),
      },
      command.queryStatement,
      command.constraint,
      command.cQMetadata,
    );
  }
}
