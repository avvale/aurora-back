/* eslint-disable key-spacing */
import { SearchEngineCreateFieldsCommand } from '@app/search-engine/field';
import { SearchEngineCreateFieldsService } from '@app/search-engine/field/application/create/search-engine-create-fields.service';
import {
  SearchEngineFieldCollectionId,
  SearchEngineFieldId,
  SearchEngineFieldIsNullable,
  SearchEngineFieldName,
  SearchEngineFieldType,
} from '@app/search-engine/field/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(SearchEngineCreateFieldsCommand)
export class SearchEngineCreateFieldsCommandHandler
  implements ICommandHandler<SearchEngineCreateFieldsCommand>
{
  constructor(
    private readonly createFieldsService: SearchEngineCreateFieldsService,
  ) {}

  async execute(command: SearchEngineCreateFieldsCommand): Promise<void> {
    // call to use case and implements ValueObjects
    await this.createFieldsService.main(
      command.payload.map((field) => {
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
