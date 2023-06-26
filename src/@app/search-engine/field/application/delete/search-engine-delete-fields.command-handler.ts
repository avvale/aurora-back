import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SearchEngineDeleteFieldsCommand } from './search-engine-delete-fields.command';
import { SearchEngineDeleteFieldsService } from './search-engine-delete-fields.service';

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