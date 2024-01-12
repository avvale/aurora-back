import { SearchEngineDeleteFieldsCommand } from '@app/search-engine/field';
import { SearchEngineDeleteFieldsService } from '@app/search-engine/field/application/delete/search-engine-delete-fields.service';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(SearchEngineDeleteFieldsCommand)
export class SearchEngineDeleteFieldsCommandHandler implements ICommandHandler<SearchEngineDeleteFieldsCommand>
{
    constructor(
        private readonly deleteFieldsService: SearchEngineDeleteFieldsService,
    ) {}

    async execute(command: SearchEngineDeleteFieldsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteFieldsService.main(
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
