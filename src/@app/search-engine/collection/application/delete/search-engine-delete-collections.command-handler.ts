import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SearchEngineDeleteCollectionsCommand } from './search-engine-delete-collections.command';
import { SearchEngineDeleteCollectionsService } from './search-engine-delete-collections.service';

@CommandHandler(SearchEngineDeleteCollectionsCommand)
export class SearchEngineDeleteCollectionsCommandHandler implements ICommandHandler<SearchEngineDeleteCollectionsCommand>
{
    constructor(
        private readonly deleteCollectionsService: SearchEngineDeleteCollectionsService,
    ) {}

    async execute(command: SearchEngineDeleteCollectionsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteCollectionsService.main(
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}