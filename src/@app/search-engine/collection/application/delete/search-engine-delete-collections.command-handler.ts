import { SearchEngineDeleteCollectionsCommand } from '@app/search-engine/collection';
import { SearchEngineDeleteCollectionsService } from '@app/search-engine/collection/application/delete/search-engine-delete-collections.service';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

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
