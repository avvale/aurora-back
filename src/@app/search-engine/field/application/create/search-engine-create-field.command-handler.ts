/* eslint-disable key-spacing */
import { SearchEngineCreateFieldCommand } from '@app/search-engine/field';
import { SearchEngineCreateFieldService } from '@app/search-engine/field/application/create/search-engine-create-field.service';
import {
  SearchEngineFieldCollectionId,
  SearchEngineFieldId,
  SearchEngineFieldIsNullable,
  SearchEngineFieldName,
  SearchEngineFieldType,
} from '@app/search-engine/field/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(SearchEngineCreateFieldCommand)
export class SearchEngineCreateFieldCommandHandler
  implements ICommandHandler<SearchEngineCreateFieldCommand>
{
  constructor(
    private readonly createFieldService: SearchEngineCreateFieldService,
  ) {}

  async execute(command: SearchEngineCreateFieldCommand): Promise<void> {
    // call to use case and implements ValueObjects
    await this.createFieldService.main(
      {
        id: new SearchEngineFieldId(command.payload.id),
        collectionId: new SearchEngineFieldCollectionId(
          command.payload.collectionId,
        ),
        name: new SearchEngineFieldName(command.payload.name),
        type: new SearchEngineFieldType(command.payload.type),
        isNullable: new SearchEngineFieldIsNullable(command.payload.isNullable),
      },
      command.cQMetadata,
    );
  }
}
