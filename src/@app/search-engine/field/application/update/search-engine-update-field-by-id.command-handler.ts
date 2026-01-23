/* eslint-disable key-spacing */
import { SearchEngineUpdateFieldByIdCommand } from '@app/search-engine/field';
import { SearchEngineUpdateFieldByIdService } from '@app/search-engine/field/application/update/search-engine-update-field-by-id.service';
import {
  SearchEngineFieldCollectionId,
  SearchEngineFieldId,
  SearchEngineFieldIsNullable,
  SearchEngineFieldName,
  SearchEngineFieldType,
} from '@app/search-engine/field/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(SearchEngineUpdateFieldByIdCommand)
export class SearchEngineUpdateFieldByIdCommandHandler
  implements ICommandHandler<SearchEngineUpdateFieldByIdCommand>
{
  constructor(
    private readonly updateFieldByIdService: SearchEngineUpdateFieldByIdService,
  ) {}

  async execute(command: SearchEngineUpdateFieldByIdCommand): Promise<void> {
    // call to use case and implements ValueObjects
    await this.updateFieldByIdService.main(
      {
        id: new SearchEngineFieldId(command.payload.id),
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
      command.constraint,
      command.cQMetadata,
    );
  }
}
